import fs from "fs";

const scope = "./components/";
const imports = "./global/build/imports.css";
const dir = fs.readdirSync(scope);

let allImports = "";

dir.forEach((folder) => {
  const component = `${scope}${folder}`;
  const css = `${scope}${folder}/main.css`;
  const importer = `@import "../.${css}";`;

  if (fs.lstatSync(component).isDirectory() && fs.existsSync(css)) {
    allImports += `${importer}\n`;
  }
});

if (!fs.existsSync(imports)) {
  fs.writeFileSync(imports, "");
}

fs.writeFileSync(imports, allImports);
