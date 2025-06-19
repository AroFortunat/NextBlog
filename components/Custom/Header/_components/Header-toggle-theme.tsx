"use client"
import { Moon, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"

export const HeaderToggleTheme = () => {
  const { theme, setTheme } = useTheme();
    return (
        <>
            {theme === 'dark' ? <Moon className="h-6 w-6 " /> : <Sun className="h-6 w-6 " />}
            <Switch
                onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            />
        </>
    )


}

