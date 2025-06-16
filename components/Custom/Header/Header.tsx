import Link from "next/link"
import { PageContainer } from "../PageContainer"
import { HeaderNavigation } from "./_components/Header-navigation"
import { HeaderProfileButton } from "./_components/Header-profile-button"
import { HeaderResponsiveMenu } from "./_components/Header-responsive-menu"
import { HeaderToggleTheme } from "./_components/Header-toggle-theme"

export const Header = () => {
  return (
    <header className="p-4 border-b">
      <PageContainer>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <HeaderResponsiveMenu />
            <h1
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to to-blue-600"
            >
              <Link href={'/'}> NextBLog </Link>
            </h1>
          </div>
          {/* Navigation */}
          <HeaderNavigation />
          {/* Button */}
          <div className="flex items-center gap-2">
            {/* Toggle */}
            <HeaderToggleTheme />
            {/* Profile  button */}
            <HeaderProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  )
}

