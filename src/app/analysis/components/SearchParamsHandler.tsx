"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

interface SearchParamsHandlerProps {
  onDataFetched: (data: any, platform: string, userName: string) => void;
  onLoading: (loading: boolean) => void;
  onError: (error: string | null) => void;
}

export default function SearchParamsHandler({
  onDataFetched,
  onLoading,
  onError
}: SearchParamsHandlerProps) {
  const searchParams = useSearchParams();
  const [userName, setUserName] = useState("");
  const [platform, setPlatform] = useState("");
  const [error, setError] = useState<string | null>(null);
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
        onLoading(true);
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
        onDataFetched(json, platform, userName);
      } catch (err: any) {
        setError(err.message);
        onError(err.message);
      } finally {
        onLoading(false);
      }
    }
    
    if (userName) {
      fetchData(userName, platform);
    }
  }, [userName, platform, onDataFetched, onLoading, onError]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        onError(null);
        router.push("/");
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [error, onError, router]);

  return null;
}