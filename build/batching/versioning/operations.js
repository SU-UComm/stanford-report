import fs from "fs";
import path from "path";
import fetch from "node-fetch";


export async function fetchData(url, requestProps = null) {
  const response = await fetch(url, requestProps);
  const data = await response.json();
  return data;
};

function incrementSemver(semver) {
    const parts = semver.split('.').map(Number);
    // Increment the patch version
    parts[2]++;
    // If the patch version is 10, reset it to 0 and increment the minor version
    if (parts[2] === 10) {
        parts[1]++;
        parts[2] = 0;
    }
    // If the minor version is 10, reset it to 0 and increment the major version
    if (parts[1] === 10) {
        parts[0]++;
        parts[1] = 0;
    }
    return parts.join('.');
}


export async function updateManifestFiles({ 
  componentsDirectory = "components", 
  latestData = [],
  reporting = true,
  forcedVersioning = false,
  forcedVersion = "0.0.1",
  applyPrefix = true,
  prefix = "development-",
  runUpdate = false,
}) {
  fs.readdir(componentsDirectory, (err, components) => {
      if (err) {
          console.error('Error reading directory:', err);
          return;
      }
      components.forEach(component => {
          const componentDir = path.join(componentsDirectory, component);
          // Check if the component is a directory
          fs.stat(componentDir, (err, stats) => {
              if (err) {
                  console.error('Error checking component directory stats:', err);
                  return;
              }
              if (stats.isDirectory()) {
                  const manifestPath = path.join(componentDir, 'manifest.json');
                  // Read the manifest file
                  fs.readFile(manifestPath, 'utf8', (err, data) => {
                      if (err) {
                          console.error('Error reading manifest file:', err);
                          return;
                      }
                      try {
                          // Parse JSON data
                          const manifest = JSON.parse(data);
                          // Find matching entry in latest data
                          let match = latestData.find(entry => entry.component.split("/")[1] === manifest.name);
                          
                          if(!match){
                            match = latestData.find(entry => prefix + entry.component.split("/")[1] === manifest.name);
                          }

                          // If a match is found, update the version
                          if (match) {

                              // when we need to force a certain version
                              if(forcedVersioning){
                                manifest.version = forcedVersion;
                              } else {
                                // increment the version
                                manifest.version =  incrementSemver(match.latest)
                              }

                              // if we need to apply a prefix and it is not already applied
                              if(applyPrefix && manifest.name.indexOf(prefix) != 0) {
                                manifest.name = prefix + manifest.name;
                              }

                              // if we do not want a prefix, and it is applied, remove it
                              if(!applyPrefix && manifest.name.indexOf(prefix) == 0) {
                                manifest.name = manifest.name.replace(prefix, "");
                              }

                              // if reporting is enabled
                              if(reporting){
                                console.log(manifest.version + " >> " + manifest.name);
                              }

                              // if reporting is enabled, only report...
                              if(runUpdate){
                                // Write updated manifest back to file
                                fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8', err => {
                                    if (err) {
                                        console.error('Error writing manifest file:', err);
                                    } else {
                                        console.log('Manifest file updated:', manifestPath);
                                    }
                                });
                              } 
                          }
                      } catch (error) {
                          console.error('Error parsing JSON:', error);
                      }
                  });
              }
          });
      });
  });
}