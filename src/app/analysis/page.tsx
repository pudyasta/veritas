"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { ContentAnalysis } from "@/components/analysis/content-analysis";
import { CredibilityScore } from "@/components/analysis/credibility-score";
import { EngagementMetrics } from "@/components/analysis/engagement-metrics";
import { PostFrequency } from "@/components/analysis/post-frequency";
import { ProfileCard } from "@/components/analysis/profile-card";
import { SentimentAnalysis } from "@/components/analysis/sentiment-analysis";
import { WordsCluster } from "@/components/analysis/words-cluster";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { platform } from "os";
import { dummyData, dummyIg, dummyTiktok } from "@/lib/dummy";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { set } from "react-hook-form";

export default function SocialAnalyticsDashboard(req: Request) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const [userName, setUserName] = useState("");
  const [platform, setPlatform] = useState("");
  const router = useRouter();

  useEffect(() => {
    const urlParam = searchParams.get("url");
    if (urlParam) {
      setUserName(urlParam);
    }
    const plt = searchParams.get("platform");
    if (plt) {
      setPlatform(plt);
    }
  }, [searchParams]);

  useEffect(() => {
    async function fetchData(userName: string, platform: string) {
      try {
        setLoading(true);
        let res;
        if (platform === "TikTok") {
          res = await fetch(
            `/api/tiktok?platform=${platform}&username=${userName}`
          );
        } else if (platform === "Instagram") {
          res = await fetch(
            `/api/instagram?platform=${platform}&username=${userName}`
          );
        } else {
          res = await fetch(
            `/api/twitter?platform=${platform}&username=${userName}`
          );
        }
        if (!res.ok) throw new Error(`API error: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    if (userName) {
      fetchData(userName, platform);
    }
  }, [userName, platform]);
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
        router.push("/");
      }, 5000);
    }
  }, [error, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f0f2fa]">
        <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-[#3086f3]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center bg-[#f0f2fa]">
          <p className="text-red-500">
            ❌ Something went wrong or the user doesn't exist. We'll redirect
            you to the home page.
          </p>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f2fa] p-6">
      <div className="mx-auto w-full space-y-6 p-2">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-[#3086f3]">
              <span className="text-white text-xs">👥</span>
            </div>
            <h1 className="font-medium text-[#364153] text-lg">User Results</h1>
          </div>
        </div>

        {/* Profile & Credibility */}
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="lg:w-1/3">
            <ProfileCard data={data} platform={platform} />
          </div>
          <div className="flex-1">
            <CredibilityScore data={data.jsonData.credibilityScore} />
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs className="w-full" defaultValue="key-insights">
          <TabsList className="inline-flex h-9 items-center justify-start rounded-lg bg-muted p-1 text-muted-foreground">
            <TabsTrigger value="key-insights">Key Insights</TabsTrigger>
            <TabsTrigger value="audience-analysis">
              Audience Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent className="mt-6" value="key-insights">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-6">
                <EngagementMetrics data={data.jsonData.engagementMetrics} />
              </div>
              <div className="space-y-6">
                <ContentAnalysis data={data.jsonData.contentAnalysis} />
              </div>
              <div className="space-y-6">
                <PostFrequency data={data.jsonData.postFrequency} />
                <SentimentAnalysis data={data.jsonData.sentimentSummary} />
                <WordsCluster data={data.jsonData.wordCluster} />
              </div>
            </div>
          </TabsContent>

          <TabsContent className="mt-6" value="audience-analysis">
            <div className="text-center text-gray-500">
              Audience Analysis content will be implemented here.
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
