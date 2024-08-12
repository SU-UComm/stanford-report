import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * We currently include the PRO solid and regular sets of FontAwesome icons.
 * We can expand this to include more sets in the future as needed.
 * https://fontawesome.com/search?o=r&s=solid%2Cregular
 */

/**
 * A wrapper component for FontAwesome icons that allow you to use any icon from the free solid and regular styles
 * https://fontawesome.com/search?o=r&s=solid%2Cregular
 *
 * @param {string} icon
 * The name of the icon
 *
 * @param {string} set
 * The FontAwesome icon set - solid | regular
 *
 * @param {object} props
 * Any other props you want to pass to the FontAwesomeIcon component
 * https://docs.fontawesome.com/web/use-with/react/style
 *
 * @return {JSX.element}
 */

const iconSets = {
  regular: "far",
  solid: "fas",
};

export function FAIcon({ icon, set, ...props }) {
  // Add all the FA icons in the regular and solid sets to the library so you can use any of them
  library.add(far, fas);

  // eslint-disable-next-line security/detect-object-injection
  return <FontAwesomeIcon icon={[iconSets[set], icon]} {...props} />;
}
