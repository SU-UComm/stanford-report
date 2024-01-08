import { useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const ESCAPE_KEY = "Escape";

function useEscapeKey(handleClose) {
  const handleEscKey = useCallback(
    (e) => {
      if (e.key === ESCAPE_KEY) {
        handleClose();
      }
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleEscKey, false);
    return () => {
      document.removeEventListener("keyup", handleEscKey, false);
    };
  }, [handleEscKey]);
}

useEscapeKey.proptypes = {
  handleClose: PropTypes.func.isRequired,
};
export default useEscapeKey;
