


export function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

function getEngagementMetrics(data: any) {
  const likes = data.sample.reduce((acc: number, p: any) => acc + p.likes, 0);
  const comments = data.sample.reduce((acc: number, p: any) => acc + p.comments, 0);
  const shares = data.sample.reduce((acc: number, p: any) => acc + p.shares, 0);
  const reach = data.sample.reduce((acc: number, p: any) => acc + (p.reach || 0), 0);

  const changePercent = ((data.thisWeekEngagement - data.lastWeekEngagement) / data.lastWeekEngagement) * 100;

  return {
    change: changePercent.toFixed(1) + "%",
    metrics: [
      { metric: "Likes", value: likes },
      { metric: "Shares", value: shares },
      { metric: "Comments", value: comments },
      { metric: "Reach", value: reach },
    ],
  };
}

export function aggregatePosts(posts: any[]) {
  const totalPosts = posts.length;
  const engagement = posts.reduce(
    (acc, p) => ({
      likes: acc.likes + (p.likeCount || 0),
      shares: acc.shares + (p.quoteCount || p.quoted_tweet||p.quoted_tweet_results || 0),
      comments: acc.comments + (p.replyCount  || 0),
    }),
    { likes: 0, shares: 0, comments: 0 }
  );

  const categories: Record<string, number> = {};
  posts.forEach(p => {
    const cat = p.category || "Other";
    categories[cat] = (categories[cat] || 0) + 1;
  });

  return { engagement, categories, totalPosts };
}