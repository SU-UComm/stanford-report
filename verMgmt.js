/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
/* eslint-disable security/detect-non-literal-fs-filename */
/* eslint-disable no-console */
import inquirer from "inquirer";
import fs from "fs";
import { glob } from "glob";
import { readFileSync, writeFileSync } from "node:fs";
import { exec } from "child_process";
import path from "path";

/**
 * Get data about components from manifest.json
 * @returns {array} array of objects containing data about the component
 * @example {
    displayName: 'Story Lead',
    version: '0.0.13',
    manifestPath: 'components/story-lead/manifest.json',
    lastModified: '4/9/2024, 5:44:12 PM'
  }
 */
const getDataObject = () => {
  return glob
    .sync("components/*/manifest.json")
    .map((manifestPath) => {
      const sortingTs = fs.statSync(manifestPath).mtime.getTime();
      const lastModified = new Date(sortingTs).toLocaleString();
      const manifestData = JSON.parse(readFileSync(manifestPath, {}));
      return {
        name: manifestData.displayName ?? "",
        version: manifestData.version ?? "",
        manifestPath,
        componentPath: path.dirname(manifestPath),
        sortingTs,
        lastModified,
      };
    })
    .sort((a, b) => {
      if (a.sortingTs < b.sortingTs) {
        return -1;
      }
      if (a.sortingTs > b.sortingTs) {
        return 1;
      }
      return 0;
    })
    .map((item, i) => {
      delete item.sortingTs;
      item.value = i;
      return item;
    });
};

/**
 * Display a comparison of old vs new version
 * @param {array} data current data array
 * @param {array} newData new data array
 */
const displayChangeSummary = (data, newData) => {
  const compareTable = [];
  data.forEach((item, i) => {
    compareTable.push({
      component: item.name,
      oldVersion: item.version,
      newVersion: newData[parseInt(i, 10)].version,
    });
  });
  console.table(compareTable);
};

/**
 * Build new version string
 * @param {number} incDec 0 - inc || 1 - dec
 * @param {number} changeType 0 - patch || 1 - minor || 2 - major
 * @param {string} oldValue current version string before change
 * @returns {string} new version string
 */
const getNewVersion = (incDec, changeType, oldValue) => {
  const newValue = oldValue.split(".").map((item) => parseInt(item, 10));
  switch (changeType) {
    case 0:
      return `${newValue[0]}.${newValue[1]}.${
        incDec === 0
          ? newValue[2] + 1
          : newValue[2] - 1 > 0
          ? newValue[2] - 1
          : 1
      }`;
    case 1:
      return `${newValue[0]}.${
        incDec === 0
          ? newValue[1] + 1
          : newValue[1] - 1 > 0
          ? newValue[1] - 1
          : 0
      }.${newValue[2]}`;
    case 2:
      return `${
        incDec === 0
          ? newValue[0] + 1
          : newValue[0] - 1 > 0
          ? newValue[0] - 1
          : 0
      }.${newValue[1]}.${newValue[2]}`;
    default:
      throw new Error(
        `Not supported item in getNewVersion(). Data: ${JSON.stringify(
          changeType
        )}`
      );
  }
};

/**
 * Modify version on manifest file
 * @param {array} newData array of objects to action
 */
const updateVersionInManifest = (newData) => {
  newData.forEach((item) => {
    console.log(`|- Reading file: ${item.manifestPath}`);
    try {
      // Read JSON data
      const manifestData = JSON.parse(
        readFileSync(item.manifestPath, { encoding: "utf8" })
      );

      // Display update info
      console.log(
        `|- Version change: ${manifestData.version} => ${item.version}`
      );

      // Change version
      manifestData.version = item.version;

      // Write data back
      writeFileSync(item.manifestPath, JSON.stringify(manifestData, null, 2), {
        encoding: "utf8",
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
};

/**
 * Screen to pick between going back to main screen or exit
 */
const resetQuit = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "resetQuit",
        message: "Please choose an option:",
        choices: [
          { name: "Back to main screen", value: 1 },
          { name: "Quit", value: 0 },
        ],
      },
    ])
    .then((answers) => {
      if (answers.resetQuit) {
        mainScreen();
      } else {
        process.exit(0);
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

/**
 * Screen for "Run custom command"
 * @param {array} data component data array
 */
const execCommand = (data) => {
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "selectComponents",
        message: "Select components from the list:",
        choices: data,
      },
    ])
    .then((components) => {
      // Keep only items that are to be modified
      // FIXME: duplicate code - move to function
      data = data
        .map((item, i) => {
          return components.selectComponents.indexOf(i) !== -1 ? item : null;
        })
        .filter((e) => e);

      // Prompt for command
      promptAndExecuteCommand(data);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

/**
 * Modify component version
 * @param {string} type type of action inc || dec
 * @param {array} data array of components data
 */
const modifyVersion = (type, data) => {
  // FIXME: Callback Hell ...
  // Select components to action
  inquirer
    .prompt([
      {
        type: "checkbox",
        name: "selectComponents",
        message: "Select components from the list:",
        choices: data,
      },
    ])
    .then((components) => {
      // Select action type
      inquirer
        .prompt([
          {
            type: "list",
            name: "selectPatchMinorMajor",
            message: `What should be ${
              type === 0 ? "incremented" : "decrementd"
            }:`,
            choices: [
              { name: "Patch [0.0.X]", value: 0 },
              { name: "Minor [0.X.0]", value: 1 },
              { name: "Major [X.0.0]", value: 2 },
            ],
          },
        ])
        .then((changeType) => {
          // Keep only items that are to be modified
          data = data
            .map((item, i) => {
              return components.selectComponents.indexOf(i) !== -1
                ? item
                : null;
            })
            .filter((e) => e);

          // Clone data object and modify the version accordingly
          const newData = structuredClone(data).map((item) => {
            item.version = getNewVersion(
              type,
              changeType.selectPatchMinorMajor,
              item.version
            );
            return item;
          });

          // Display summary table
          displayChangeSummary(data, newData);

          // Approve changes
          inquirer
            .prompt([
              {
                type: "list",
                name: "approveChanges",
                message: "Apply changes ?",
                choices: [
                  { name: "No", value: 0 },
                  { name: "Yes", value: 1 },
                ],
              },
            ])
            .then((status) => {
              if (status.approveChanges) {
                // Perform change
                updateVersionInManifest(newData);
                resetQuit();
              } else {
                mainScreen();
              }
            })
            .catch((error) => {
              console.error("An error occurred:", error);
            });
        })
        .catch((error) => {
          console.error("An error occurred:", error);
        });
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

/**
 * Run a command in a given folder
 * @param {string} command command to execute
 * @param {string} folder folder to run it in
 * @returns {void}
 */
const executeCommandInFolder = (command, folder) => {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line security/detect-child-process
    exec(command, { cwd: folder }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error in ${folder}:`, error);
        return reject(error);
      }
      if (stderr) {
        console.error(`Error output from ${folder}:`, stderr);
      }
      console.log(`Output from ${folder}:\n`, stdout);
      resolve(stdout);
    });
  });
};

/**
 * Prompt for command to run
 * @param {array} components data array to pass through
 */
const promptAndExecuteCommand = async (components) => {
  try {
    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "command",
        message: "Enter the command to execute (e.g., ls):",
      },
    ]);

    const { command } = answers;

    // eslint-disable-next-line no-restricted-syntax
    for await (const component of components) {
      console.log(
        `Executing "${command}" in folder: ${component.componentPath}`
      );
      await executeCommandInFolder(command, component.componentPath);
    }

    // Back to main screen or quit
    resetQuit();
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

/**
 * Main screen
 */
const mainScreen = () => {
  // Get and print current data
  const componentData = getDataObject();
  console.table(
    structuredClone(componentData).map((item) => {
      delete item.value;
      delete item.componentPath;
      return item;
    })
  );

  // Print main screen options
  inquirer
    .prompt([
      {
        type: "list",
        name: "mainOption",
        message: "Please choose an option:",
        choices: [
          { name: "Incremental version", value: 0 },
          { name: "Decrement version", value: 1 },
          { name: "Run custom command", value: 2 },
          { name: "Quit", value: 3 },
        ],
      },
    ])
    .then((answers) => {
      switch (answers.mainOption) {
        case 0:
          modifyVersion(0, componentData);
          break;
        case 1:
          modifyVersion(1, componentData);
          break;
        case 2:
          execCommand(componentData);
          break;
        case 3:
          process.exit(0);
        // eslint-disable-next-line no-fallthrough
        default:
          throw new Error(
            `Not supported. You must pick an option. Data: ${JSON.stringify(
              answers
            )}`
          );
      }
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
};

// Init
mainScreen();
