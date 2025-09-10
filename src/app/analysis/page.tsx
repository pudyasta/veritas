"use client";
import { Suspense, useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

import { ContentAnalysis } from "@/components/analysis/content-analysis";
import { CredibilityScore } from "@/components/analysis/credibility-score";
import { EngagementMetrics } from "@/components/analysis/engagement-metrics";
import { PostFrequency } from "@/components/analysis/post-frequency";
import { ProfileCard } from "@/components/analysis/profile-card";
import { SentimentAnalysis } from "@/components/analysis/sentiment-analysis";
import { WordsCluster } from "@/components/analysis/words-cluster";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";
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
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("Initializing...");
  const router = useRouter();

  // Simulate progress updates
  useEffect(() => {
    if (!loading) return;

    const progressSteps = [
      { progress: 10, text: "Fetching user data..." },
      { progress: 30, text: "Analyzing profile..." },
      { progress: 50, text: "Processing credibility score..." },
      { progress: 70, text: "Analyzing engagement metrics..." },
      { progress: 85, text: "Processing content analysis..." },
      { progress: 95, text: "Finalizing results..." },
    ];

    let currentStep = 0;
    const timer = setInterval(() => {
      if (currentStep < progressSteps.length && loading) {
        setProgress(progressSteps[currentStep].progress);
        setProgressText(progressSteps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [loading]);

  const handleDataFetched = useCallback(
    (fetchedData: SocialAnalyticsData, platform: string, userName: string) => {
      setData(fetchedData);
      setPlatform(platform);
      setProgress(100);
      setProgressText("Complete!");
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
        <div className="min-h-screen bg-[#f0f2fa] p-6">
          <div className="mx-auto w-full space-y-6 p-2">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#364153]">{progressText}</span>
                <span className="text-[#364153]">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Profile & Credibility Skeleton */}
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-16 w-16 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <Skeleton className="h-16 rounded" />
                    <Skeleton className="h-16 rounded" />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                  <Skeleton className="h-4 w-40" />
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-5/6" />
                    </div>
                    <div className="space-y-2">
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-4/5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Skeleton */}
            <div className="w-full">
              <div className="inline-flex h-9 items-center justify-start rounded-lg bg-muted p-1 text-muted-foreground w-full">
                <Skeleton className="h-7 w-32 rounded" />
                <Skeleton className="h-7 w-40 rounded ml-2" />
              </div>
              <div className="mt-6">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                      <Skeleton className="h-4 w-32" />
                      <div className="space-y-3">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="space-y-2">
                            <Skeleton className="h-3 w-24" />
                            <Skeleton className="h-8 w-full rounded" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                      <Skeleton className="h-4 w-32" />
                      <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="space-y-2">
                            <Skeleton className="h-3 w-24" />
                            <Skeleton className="h-8 w-full rounded" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                      <Skeleton className="h-4 w-32" />
                      <div className="space-y-3">
                        <Skeleton className="h-32 w-full rounded" />
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                      <Skeleton className="h-4 w-32" />
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <Skeleton className="h-3 w-16" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                        <Skeleton className="h-8 w-full rounded" />
                      </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                      <Skeleton className="h-4 w-32" />
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Skeleton key={i} className="h-6 w-20 rounded-full" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
