import { Button } from "@/components/ui/button"
import Link from "next/link"

export const HeaderProfileButton = () => {
    // user is connected -> avatar + menu
    // user is not connected -> button login
  return (
    <Link href='/login'>
      <Button>
        Login
      </Button>
    </Link>
  )
}

