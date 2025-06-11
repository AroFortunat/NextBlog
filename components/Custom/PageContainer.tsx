import { ReactNode } from "react"

export const PageContainer = ({children}:{children:ReactNode}) => {
  return (
    <div className="mx-auto w-full max-w-7xl">
        {children}
    </div>    
  )
}

