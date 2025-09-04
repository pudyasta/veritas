import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export function ProfileCard() {
  return (
    <Card className="border-0 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/woman-in-yellow-shirt-smiling.jpg" />
            <AvatarFallback>LJ</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-[#ff6467] text-sm">📷 INSTAGRAM</span>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-[#101828] text-xl">
                @ladyjessica
              </h2>
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#3086f3]">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
            <p className="text-[#6a7282] text-sm">
              17.1k followers | 100 following
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
