import { useState, useEffect } from "react";

const acceptModes = ["light", "dark"];
const defaultMode = acceptModes[1];

export const useDarkMode = (initialValue = defaultMode) => {
  // return window.localStorage.getItem("mode") ||
  const [mode, setMode] = useState(
    () =>  initialValue
  );

  const toggleMode = () => {
    const nextMode = mode === "light" ? acceptModes[1] : acceptModes[0];
    setMode(nextMode);
  };

  // useEffect(() => {
  //   // window.localStorage.setItem("mode", mode);
  // }, [mode]);

  return [mode, toggleMode];
};
