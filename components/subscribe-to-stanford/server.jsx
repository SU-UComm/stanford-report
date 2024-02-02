import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";

export default async (args) => {
  console.log(JSON.stringify(args.contentConfiguration.actionLink));

  return renderComponent({
    Component,
    componentName: "subscribe-to-stanford-report",
    args,
  });
};
