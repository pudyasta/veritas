import { ContentAnalysis } from "@/components/analysis/content-analysis";
import { CredibilityScore } from "@/components/analysis/credibility-score";
import { EngagementMetrics } from "@/components/analysis/engagement-metrics";
import { PostFrequency } from "@/components/analysis/post-frequency";
import { ProfileCard } from "@/components/analysis/profile-card";
import { SentimentAnalysis } from "@/components/analysis/sentiment-analysis";
import { WordsCluster } from "@/components/analysis/words-cluster";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SocialAnalyticsDashboard() {
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
            <ProfileCard />
          </div>
          <div className="flex-1">
            <CredibilityScore />
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
              {/* Left Column - Key Insights */}
              <div className="space-y-6">
                <EngagementMetrics />
              </div>

              {/* Middle Column - Content Analysis */}
              <div className="space-y-6">
                <ContentAnalysis />
              </div>

              {/* Right Column - Post Frequency & Sentiment */}
              <div className="space-y-6">
                <PostFrequency />
                <SentimentAnalysis />
                <WordsCluster />
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
