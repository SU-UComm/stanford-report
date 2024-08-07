/* eslint-disable no-undef */
import { useEffect } from "react";

// Borrowed from https://github.com/SU-SWS/saa_alumni/blob/dev/src/hooks/useOnClickOutside.js

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    document.addEventListener("keyup", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
      document.addEventListener("keyup", listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
