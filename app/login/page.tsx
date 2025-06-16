import { PageTitle } from "@/components/Custom/page-title";
import { PageContainer } from "@/components/Custom/PageContainer";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

export default function page() {
  return (
    <div>
      <PageContainer>
        <div className="p-10">
          <PageTitle title="Login or Register" />
          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <Button>
              <Github className="mr-3"/>
              Signing with github
            </Button>
            <Button>
              <Mail className="mr-3"/>
              Signing with Google
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
