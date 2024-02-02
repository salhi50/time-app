import * as React from "react"
import fscreen from "fscreen"

type FscreenStatus = "unavailable" | "enabled" | "disabled"

const useFullscreen = (
  elRef?: React.MutableRefObject<HTMLDivElement | null>
) => {
  const [fscreenStatus, setFscreenStatus] = React.useState<FscreenStatus>("disabled");

  React.useEffect(() => {
    function handleChange() {
      if(fscreen.fullscreenElement instanceof Element) {
        setFscreenStatus("enabled");
      }
      else if(fscreen.fullscreenElement === null) {
        setFscreenStatus("disabled");
      }
      else {
        setFscreenStatus("unavailable");
      }
    }
    function handleErr() {
      setFscreenStatus("unavailable");
    }
    handleChange();
    fscreen.addEventListener("fullscreenchange", handleChange);
    fscreen.addEventListener("fullscreenerror", handleErr);

    return () => {
      fscreen.removeEventListener("fullscreenchange", handleChange);
      fscreen.removeEventListener("fullscreenerror", handleErr);
    }
  }, []);

  const requestFscreen = React.useCallback(() => {
    if(elRef && elRef.current) {
      fscreen.requestFullscreen(elRef.current);
    }
    else {
      fscreen.requestFullscreen(document.body);
    }
  }, [elRef]);

  const existFscreen = React.useCallback(() => {
    fscreen.exitFullscreen()
  }, []);

  return {
    fscreenStatus,
    requestFscreen,
    existFscreen
  };
}

export default useFullscreen;