'use client'
import { ThemeProvider, ThemeProviderProps } from 'next-themes'
import { ReactNode } from 'react'
export const CustomThemeProvider = ({ children, ...props }: { children: ReactNode } & ThemeProviderProps) => {
    return (
        <ThemeProvider
            {...props}
        >
            {children}
        </ThemeProvider>
    )
}

