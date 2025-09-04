import { ProfileCard } from "@/components/analysis/profile-card"
import { CredibilityScore } from "@/components/analysis/credibility-score"
import { EngagementMetrics } from "@/components/analysis/engagement-metrics"
import { ContentAnalysis } from "@/components/analysis/content-analysis"
import { PostFrequency } from "@/components/analysis/post-frequency"
import { SentimentAnalysis } from "@/components/analysis/sentiment-analysis"
import { WordsCluster } from "@/components/analysis/words-cluster"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SocialAnalyticsDashboard() {

  return (
    <div className="min-h-screen bg-[#f0f2fa] p-6">
      <div className="w-full p-2 mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#3086f3] rounded flex items-center justify-center">
              <span className="text-white text-xs">👥</span>
            </div>
            <h1 className="text-lg font-medium text-[#364153]">User Results</h1>
          </div>
        </div>

        {/* Profile & Credibility */}
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/3">
            <ProfileCard />
          </div>
          <div className="flex-1">
            <CredibilityScore />
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="key-insights" className="w-full">
          <TabsList className="inline-flex h-9 items-center justify-start rounded-lg bg-muted p-1 text-muted-foreground">
            <TabsTrigger value="key-insights">Key Insights</TabsTrigger>
            <TabsTrigger value="audience-analysis">Audience Analysis</TabsTrigger>
          </TabsList>
          <TabsContent value="key-insights" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
          <TabsContent value="audience-analysis" className="mt-6">
            <div className="text-center text-gray-500">
              Audience Analysis content will be implemented here.
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
