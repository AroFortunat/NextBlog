"use client"
import { PageTitle } from "@/components/Custom/page-title";
import { PageContainer } from "@/components/Custom/PageContainer";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import { signIn } from "next-auth/react";

export default function page() {
  
  const onLogin = (provider:string)=>{
      signIn(provider)
  }

  return (
    <div>
      <PageContainer>
        <div className="p-10">
          <PageTitle title="Login or Register" />
          <div className="flex flex-col gap-4 max-w-sm mx-auto">
            <Button onClick={()=>onLogin("github")}>
              <Github className="mr-3"/>
              Signing with github
            </Button>
            <Button onClick={()=>onLogin("google")}>
              <Mail className="mr-3"/>
              Signing with Google
            </Button>
          </div>
        </div>
      </PageContainer>
    </div>
  )
}
