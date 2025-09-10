// Root type
export interface ProfileData {
  engagement: Engagement;
  categories: Record<string, number>;
  totalPosts: number;
  sentiment: string;
  sample: Tweet[];
}

export interface Engagement {
  likes: number;
  shares: number;
  comments: number;
}

export interface Tweet {
  type: "tweet";
  id: string;
  url: string;
  twitterUrl: string;
  text: string;
  source: string;
  retweetCount: number;
  replyCount: number;
  likeCount: number;
  quoteCount: number;
  viewCount: number;
  createdAt: string;
  lang: string;
  bookmarkCount: number;
  isReply: boolean;
  inReplyToId: string | null;
  conversationId: string;
  inReplyToUserId: string | null;
  inReplyToUsername: string | null;
  isPinned: boolean;
  author: Author;
  extendedEntities: Record<string, any>;
  card: any;
  place: Record<string, any>;
  entities: Record<string, any>;
  reply_to_user_results: any;
  quoted_tweet_results: any;
  quoted_tweet: Tweet | null;
  retweeted_tweet: Tweet | null;
  isConversationControlled: boolean;
  isQuote?: boolean;
}

export interface Author {
  type: "user";
  userName: string;
  url: string;
  twitterUrl: string;
  id: string;
  name: string;
  isVerified: boolean;
  isBlueVerified: boolean;
  profilePicture: string;
  coverPicture: string;
  description: string;
  location: string;
  followers: number;
  following: number;
  status: string;
  canDm: boolean;
  canMediaTag: boolean;
  createdAt: string;
  entities: {
    description: { urls: any[] };
    url: Record<string, any>;
  };
  fastFollowersCount: number;
  favouritesCount: number;
  hasCustomTimelines: boolean;
  isTranslator: boolean;
  mediaCount: number;
  statusesCount: number;
  withheldInCountries: string[];
  affiliatesHighlightedLabel: Record<string, any>;
  possiblySensitive: boolean;
  pinnedTweetIds: string[];
  profile_bio: {
    description: string;
    entities: Record<string, any>;
  };
  isAutomated: boolean;
  automatedBy: string | null;
}
