import { ApifyClient } from "apify-client";
import OpenAI from "openai";
import { aggregatePosts } from "./analyzeHelper";

const apifyClient = new ApifyClient({ token: process.env.NEXT_PUBLIC_APIFY_API_TOKEN! });
const aiClient = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY! });



async function analyzeSentiment(posts: any[]) {
  const text = JSON.stringify(posts);

  const res = await aiClient.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [
      { role: "system", content: "You are a social media analyst." },
      { role: "user", content: `
      Analyze sentiment for these account data:
      ${text}

Return the result strictly as a JSON object in this structure:

{
  "credibilityScore": {score:0.75,analysis:"This account shows patterns of potentially manipulative or misleading activity. Their content may not be fully reliable. Proceed with caution before engaging or sharing."},
  "sentimentSummary": {
    "positive": {
      score:0.75,
      totalPosts:100
      },
    "neutral": {
      score:0.25,
      totalPosts:100
    },
    "negative": {
      score:0.00,
      totalPosts:0
      },
    "overallScore": 0.55,
    "interpretation": "generally positive audience reception"
    "warning": "(if any) This account shows patterns of potentially manipulative or misleading activity. Their content may not be fully reliable. Proceed with caution before engaging or sharing."
  },
  "engagementMetrics": {
    "likes": { "thisWeek": 10000, "lastWeek": 5000, "percentageChange": "20%","trend": "up" },
    "shares": { "thisWeek": 20000, "lastWeek": 10000, "percentageChange": "33.33%","trend": "up"  },
    "comments": { "thisWeek": 150, "lastWeek": 100, "percentageChange": "50%" ,"trend": "up" },
    "totalComparison": { "thisWeek": 2000, "lastWeek": 1500, "percentageChange": "25%","trend": "up" },
        "interpretation": "generally positive audience reception"
    "warning": "(if any) This account shows patterns of potentially manipulative or misleading activity. Their content may not be fully reliable. Proceed with caution before engaging or sharing."
    stats: [
  { metric: "Likes", user: 2500, normal: 1800 },
  { metric: "Shares", user: 1000, normal: 600 },
  { metric: "Comments", user: 200, normal: 150 },
  { metric: "Reach", user: 4200, normal: 2800 },
  { metric: "Saves", user: 800, normal: 400 },
]
  },
  "contentAnalysis": {
    "topPosts": [
      {
        "title": "title of post 1",
        "likes": 450,
        "shares": 200,
        "views": 1000,
        "comments": 75,
        "sentiment": "the sentiment conclusion of post 1",
        "url": "url to post 1 (take from the data)",
        time: "time of post 1 (take from the data)"
      },
    

    ],
    "categories": [{
        name: "Product",
        percentage: "30%",
        postCount: 10
    },
    {
        name: "Customer Support",
        percentage: "20%",
        postCount: 5
    },
    {
        name: "Sales",
        percentage: "15%",
        postCount: 3
    },
    {
        name: "Marketing",
        percentage: "10%",
        postCount: 2
    },
    {
        name: "Other",
        percentage: "35%",
        postCount: 8
    
    ],
    "interpretation": "generally positive audience reception"
    "warning": "(if any) This account shows patterns of potentially manipulative or misleading activity. Their content may not be fully reliable. Proceed with caution before engaging or sharing."

  },
  "wordCluster": {
    "positiveWords": ["Excellent", "Happy", "Love", "Teamwork"],
    "negativeWords": ["Concern", "Wait", "Disappointed"],
    "interpretation": "Sentiment words are more frequently associated with positive feedback."
  },
  "postFrequency": {
      last24Hours: {
        totalPosts: 100,
        averageNormalPosts: 50,
      },
      last7Days: {
        totalPosts: 100,
        averageNormalPosts: 50,
      },
      monthly: {
        totalPosts: 100,
        averageNormalPosts: 50,
      },
       "interpretation": "generally positive audience reception"
    "warning": "(if any) This account shows patterns of potentially manipulative or misleading activity. Their content may not be fully reliable. Proceed with caution before engaging or sharing."

  },
  "finalThoughts": "The data indicates an overall positive sentiment in the discussions..."
}

Take a few notes below:
  1. the sum of total post should be the same as the total datas that retrieved from apify
  2. categories block should cover all of posts that retrieved from APIfy. So get the top categories and then put the rest in the other category.
  3. take data only within a 1 month period

` },
    ],
  });
  
  return res.choices[0].message?.content || "No sentiment analysis.";
}

export async function scrapeAndAnalyze({
  actorId,
  input,
}: {
  actorId: string;
  input: Record<string, any>;
}) {
  const run = await apifyClient.actor(actorId).call(input);
  const { items } = await apifyClient.dataset(run.defaultDatasetId).listItems();

  // const agg = aggregatePosts(items);
  const sentiment = await analyzeSentiment(items);
  const jsonData = JSON.parse(sentiment);


  return {
    sentiment,
    items,
    jsonData,
    sample: items.slice(0, 3),
  };
}
