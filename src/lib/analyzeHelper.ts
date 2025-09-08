


export function formatNumber(num: number): string {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
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