import fs from "fs";
import process from "node:process";

const scope = "./components/";
const manifest = "/manifest.json";
const args = process.argv.slice(2).join(",");
const dir = fs.readdirSync(scope);

// add development prefixes
if (args.match(/--(?:development|dev)/)) {
  setDevPrefix(true);
} else {
  setDevPrefix();
}

function setDevPrefix (setPrefix) {
  dir.forEach((folder) => {
    if (!folder.match(/^_/)) {
      const manifestLocation =  `${scope}${folder}${manifest}`;
      const component = `${scope}${folder}`;
    
      if (!component) return;
    
      if (!fs.existsSync(manifestLocation)) return;

      fs.readFile(manifestLocation, (err, data) => {
        if (err) throw new Error(`Failed to read ${folder}`);

        const cmpData = JSON.parse(data);

        if (!setPrefix) {
          cmpData.name = cmpData.name.replace(/development-/g, "");
        } else {
          cmpData.name = `development-${cmpData.name}`;
        }

        fs.writeFileSync(manifestLocation, JSON.stringify(cmpData, null, 2));
      });
    }
  });
}