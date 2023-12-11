import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
  return (
    <div className="flex items-center w-full pb-6 px-6 bg-background z-50 dark:bg-[#1F1F1F]">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
          <Button variant="ghost" size="sm">
            I didn&apos;t fully understand Notion, so I coded one to figure it out 🤠
          </Button>
        </div>
    </div>
  )
}
