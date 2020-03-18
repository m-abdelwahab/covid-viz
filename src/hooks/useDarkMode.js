import { useState, useEffect } from "react";

const acceptModes = ["light", "dark"];
const defaultMode = acceptModes[0];

export const useDarkMode = (initialValue = defaultMode) => {
  const [mode, setMode] = useState(
    () =>  initialValue
  );

  const toggleMode = () => {
    const nextMode = mode === "light" ? acceptModes[1] : acceptModes[0];
    setMode(nextMode);
  };

  useEffect(() => {
    
  }, [mode]);

  return [mode, toggleMode];
};
