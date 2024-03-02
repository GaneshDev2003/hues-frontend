"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PostsPage from "./posts/page";
import LoginPage from "./login/page";
type tokensType = {
  accessToken: string | null;
  refreshToken: string | null;
};
export default function Home() {
  const router = useRouter();
  const [tokens, setTokens] = useState<tokensType | null>();
  useEffect(() => {
    setTokens({
      accessToken: localStorage.getItem("accessToken"),
      refreshToken: localStorage.getItem("refreshToken"),
    });
  }, []);
  if (tokens && tokens.accessToken && tokens.refreshToken)
    return <PostsPage></PostsPage>;
  else return <LoginPage></LoginPage>;
}
