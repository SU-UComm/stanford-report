import { renderComponent } from "@squiz/xaccel-component-server-helpers";
import Component from "../../packages/card/Title";

export default async (args, info) => {
  return renderComponent({
    Component,
    componentName: "featured-content",
    args,
  });
};
