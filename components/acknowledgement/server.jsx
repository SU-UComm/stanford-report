import { renderComponent } from "@squiz/xaccel-component-server-helpers";
import Component from "./Component";

export default async (args) => {
  return renderComponent({ Component, componentName: "acknowledgement", args });
};
