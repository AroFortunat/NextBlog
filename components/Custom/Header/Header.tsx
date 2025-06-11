import { PageContainer } from "../PageContainer"
import { HeaderNavigation } from "./Header-navigation"
import { HeaderProfileButton } from "./Header-profile-button"

export const Header = () => {
  return (
    <header className="p-4 border-b">
      <PageContainer>
        <div className="flex justify-between">
          <div>

            <h1
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to to-blue-600"
            >NextBLog</h1>
          </div>
          {/* Navigation */}
          <HeaderNavigation />
          {/* Button */}
          <div className="flex items-center">
            {/* Toggle */}
            {/* Profile  button */}
            <HeaderProfileButton />
          </div>
        </div>
      </PageContainer>
    </header>
  )
}

