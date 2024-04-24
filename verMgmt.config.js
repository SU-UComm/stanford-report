export default {
  manifestGlob: "components/*/manifest.json",
  customCommands: [
    {
      name: "Deploy (command: dxp-next cmp deploy .)",
      value: "dxp-next cmp deploy .",
    },
    {
      name: "List root files (command: ls -l)",
      value: "ls -l",
    },
  ],
};
