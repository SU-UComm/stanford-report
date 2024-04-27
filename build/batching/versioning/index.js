import { updateManifestFiles,fetchData } from "./operations.js";
import versionData from "./versionData.js";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  const config = {
    "componentsDirectory": "components",
    "latestData": versionData.data,
    "reporting": true,
    "forcedVersioning": true,
    "forcedVersion": "1.0.0",
    "applyPrefix": false,
    "prefix": "development-",
    "runUpdate": false,
  }

  const VERSION_API = "https://sug-web.matrix.squiz.cloud/_designs/component-service/reporting/prod-sets";
  //  https://sug-web.matrix.squiz.cloud/_designs/component-service/reporting/squiz-release-set/_nocache
  // https://sug-web.matrix.squiz.cloud/_designs/component-service/reporting/prod-sets/_nocache

  const REQUEST_PROPS = {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${process.env.MANAGEMENT_API_KEY}`,
      'Content-Type': 'application/json'
    }
  }
  // fetch the latest version data
  // const externalVersionData = await fetchData(VERSION_API, REQUEST_PROPS);
  // console.log(externalVersionData);


  const updatedManifests = await updateManifestFiles(config);

})();
