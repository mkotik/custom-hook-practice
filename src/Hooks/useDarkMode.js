import { useEffect } from "react";

const useDarkMode = () => {
  const preferDarkMode = useMediaQuery(
    ["(prefers-color-scheme): dark"],
    [true],
    false
  );

  const [enabled, setEnabled] = useLocalStorage("dark-mode");

  useEffect(() => {
    if (enabled) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [enabled]);

  return [enabled, setEnabled];
};
