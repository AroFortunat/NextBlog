"use client"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useToggleTheme } from "../hook/useToggleTheme"

export const HeaderToggleTheme = () => {
    const toggleTheme = useToggleTheme()
    return (
        <Button
            variant={'ghost'}
            size={"icon"}
            onClick={() => toggleTheme()}
            className="flex justify-center"
        >
            <Moon className="h-6 w-6 scale-100 dark:scale-0" />
            <Sun className="h-6 w-6 scale-0 dark:scale-100" />
        </Button>
    )

    
}
 
