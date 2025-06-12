import { useTheme } from "next-themes"

export function useToggleTheme() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = (): void => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return toggleTheme;
}
