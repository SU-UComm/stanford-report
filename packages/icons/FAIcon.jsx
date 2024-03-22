import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * We currently include the free solid and regular styles of FontAwesome icons
 * https://fontawesome.com/search?q=imae&o=r&m=free&s=regular%2Csolid
 */

export function FAIcon({ icon, family, ...props }) {
  // Add all the FA icons in the solid and regular families to the library so you can use any of them
  library.add(fas, far);

  return <FontAwesomeIcon icon={[faStyle, faIcon]} {...props} />;
}
