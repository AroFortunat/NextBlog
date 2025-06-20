"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode } from "react"

const queryclient = new QueryClient()

export const QueryProviders = ({children}:{children:ReactNode}) => {
  return (
    <QueryClientProvider client={queryclient}>
      {children}
    </QueryClientProvider>
  )
}

