import renderComponent from "../../packages/utils/render-component";
import Component from "./Component";

export default async (args) => {
  return renderComponent({
    Component,
    componentName: "single-text-block",
    args,
  });
};
