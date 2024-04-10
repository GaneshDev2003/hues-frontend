'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import PostsPage from './home/page';
import LoginPage from './login/page';
import '@/utils/api';

type tokensType = {
  accessToken: string | undefined;
  refreshToken: string | undefined;
};

export default function Home() {
  const [tokens, setTokens] = useState<tokensType | null>();

  useEffect(() => {
    Notification.requestPermission();
    const accessToken = Cookies.get('huesAccessToken');
    const refreshToken = Cookies.get('huesRefreshToken');
    setTokens({
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  }, []);

  if (tokens && tokens.accessToken && tokens.refreshToken)
    return <PostsPage></PostsPage>;
  else return <LoginPage></LoginPage>;
}
