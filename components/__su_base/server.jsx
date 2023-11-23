import { renderComponent } from '@squiz/xaccel-component-server-helpers'
import Component from './Component'

export default async (args, info) => {
  return renderComponent({ Component, componentName: 'base-component', args });
}