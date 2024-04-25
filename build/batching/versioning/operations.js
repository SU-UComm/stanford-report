import fs from "fs";
import path from "path";
import fetch from "node-fetch";


export async function fetchData(url, requestProps = null) {
  const response = await fetch(url, requestProps);
  const data = await response.json();
  return data;
};



export async function updateManifestFiles(manifestDir, latestData) {
  fs.readdir(manifestDir, (err, components) => {
      if (err) {
          console.error('Error reading directory:', err);
          return;
      }
      components.forEach(component => {
          const componentDir = path.join(manifestDir, component);
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
                          const match = latestData.find(entry => entry.component.split("/")[1] === manifest.name);
                          // If a match is found, update the version
                          if (match) {
                              manifest.version = match.latest;
                              // Write updated manifest back to file
                              fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8', err => {
                                  if (err) {
                                      console.error('Error writing manifest file:', err);
                                  } else {
                                      console.log('Manifest file updated:', manifestPath);
                                  }
                              });
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