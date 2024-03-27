import React, { useState, useEffect } from "react";
import TopBar from "./Components/TopBar";
import BottomBar from "./Components/BottomBar";
import getCookie from "../../packages/utils/cookieGet";
/**
 * Footer component
 *
 * @param {string} data The full HTML element to be printed
 * @returns {JSX.Element}
 * @constructor
 */

export default function Footer({ site, navigation }) {
  const [audience, setAudience] = useState(null);
  const [isClient, setClient] = useState(false);
  const audienceCookie = getCookie("preferences_personalisation");

  useEffect(() => {
    setClient(true);
    if (audienceCookie) {
      setAudience(audienceCookie);
    }
    document.addEventListener(
      "personaChange",
      () => {
        // set audience state
        setAudience(getCookie("preferences_personalisation"));
      },
      false
    );
  }, []);

  return (
    <footer className="su-shadow-[0px_-3px_6px_0px_rgba(0,0,0,0.1)] su-pt-70 lg:su-pt-[17.5rem]">
      {isClient && audience && (
        <TopBar audience={audience} site={site} navigation={navigation} />
      )}

      <BottomBar site={site} navigation={navigation} />
    </footer>
  );
}
