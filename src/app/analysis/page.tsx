"use client";
import { Suspense, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

import { ContentAnalysis } from "@/components/analysis/content-analysis";
import { CredibilityScore } from "@/components/analysis/credibility-score";
import { EngagementMetrics } from "@/components/analysis/engagement-metrics";
import { PostFrequency } from "@/components/analysis/post-frequency";
import { ProfileCard } from "@/components/analysis/profile-card";
import { SentimentAnalysis } from "@/components/analysis/sentiment-analysis";
import { WordsCluster } from "@/components/analysis/words-cluster";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchParamsHandler from "./components/SearchParamsHandler";

interface SocialAnalyticsData {
  jsonData: {
    credibilityScore: any;
    engagementMetrics: any;
    contentAnalysis: any;
    postFrequency: any;
    sentimentSummary: any;
    wordCluster: any;
  };
}

export default function SocialAnalyticsDashboard() {
  const [data, setData] = useState<SocialAnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [platform, setPlatform] = useState("");
  const router = useRouter();

  const handleDataFetched = useCallback(
    (fetchedData: SocialAnalyticsData, platform: string, userName: string) => {
      setData(fetchedData);
      setPlatform(platform);
    },
    []
  );

  const handleLoading = useCallback((isLoading: boolean) => {
    setLoading(isLoading);
  }, []);

  const handleError = useCallback((error: string | null) => {
    setError(error);
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f2fa] p-6">
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center bg-[#f0f2fa]">
            <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-[#3086f3]"></div>
          </div>
        }
      >
        <SearchParamsHandler
          onDataFetched={handleDataFetched}
          onLoading={handleLoading}
          onError={handleError}
        />
      </Suspense>

      {loading && (
        <div className="min-h-screen flex items-center justify-center bg-[#f0f2fa]">
          <div className="animate-spin h-12 w-12 rounded-full border-b-2 border-[#3086f3]"></div>
        </div>
      )}

      {error && (
        <div className="min-h-screen flex items-center justify-center bg-[#f0f2fa]">
          <p className="text-red-500">
            ❌ Something went wrong or the user doesn't exist. We'll redirect
            you to the home page.
          </p>
        </div>
      )}

      {data && !loading && !error && (
        <div className="mx-auto w-full space-y-6 p-2">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-[#3086f3]">
                <span className="text-white text-xs">👥</span>
              </div>
              <h1 className="font-medium text-[#364153] text-lg">
                User Results
              </h1>
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
      )}
    </div>
  );
}
