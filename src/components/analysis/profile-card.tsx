import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileCard() {
  return (
    <Card className="bg-white border-0 shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/woman-in-yellow-shirt-smiling.jpg" />
            <AvatarFallback>LJ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm text-[#ff6467]">📷 INSTAGRAM</span>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold text-[#101828]">@ladyjessica</h2>
              <div className="w-4 h-4 bg-[#3086f3] rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
            <p className="text-sm text-[#6a7282]">17.1k followers | 100 following</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}