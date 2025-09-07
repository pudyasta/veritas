"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { formatNumber } from "@/lib/analyzeHelper";
import { ProfileData } from "@/lib/types/ProfileData";
import { useEffect } from "react";

export function ProfileCard({
  data,
  platform,
}: {
  data: any;
  platform: string;
}) {
  let image,
    username = "";
  let followers,
    following = 0;
  if (platform === "Instagram") {
    image = data.sample[0]?.profilePicUrl;
    username = data.sample[0]?.username;
    followers = data.sample[0]?.followersCount;
    following = data.sample[0]?.followsCount;
  } else if (platform === "X") {
    image = data.sample[0]?.author?.profilePicture;
    username = data.sample[0].author?.userName;
    followers = data.sample[0]?.author.followers;
    following = data.sample[0]?.author.following;
  } else if (platform === "TikTok") {
    image = data.sample[0]?.authorMeta?.avatar;
    username = data.sample[0].authorMeta?.name;
    followers = data.sample[0]?.authorMeta?.fans;
    following = data.sample[0]?.authorMeta?.following;
  }

  return (
    <Card className="border-0 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={image} />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-[#ff6467] text-sm">📷 {platform}</span>
            </div>
            <div className="flex items-center gap-2">
              <h2 className="font-semibold text-[#101828] text-xl">
                @{username}
              </h2>
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#3086f3]">
                <span className="text-white text-xs">✓</span>
              </div>
            </div>
            <p className="text-[#6a7282] text-sm">
              {followers} followers {"  "}
              {following} following
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
