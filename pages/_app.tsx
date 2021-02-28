import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { CacheProvider } from '@emotion/core';
import { RecoilRoot } from 'recoil';

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion';

import { globalStyles } from '../src/styles/global';
import SurfaceRoot from '@/components/surface-root/surface-root';
import { useEffect } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      (window as any).gtag(
        'config',
        process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID,
        {
          page_path: url
        }
      );
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    // 로컬 스토리지의 already-visited 값 불러오기
    const itemValue = localStorage.getItem('already-visited');

    // 이미 방문한 적 있는데, welcome페이지에 접근헀으면 메인으로 이동
    if (router.pathname === '/welcome' && itemValue === 'true') {
      router.replace({
        pathname: '/'
      });
      return;
    }

    // 이미 방문한 적 있으면 아무것도 안함
    if (itemValue === 'true') {
      return;
    }

    // 한번도 방문한 적 없고 welcome 페이지에 왔을 떄, 아무것도 안함
    if (router.pathname === '/welcome') {
      return;
    }

    // 한번도 방문한 적 없으면 welcome 페이지로 이동
    router.replace({
      pathname: '/welcome',
      query: {
        redirect: router.asPath
      }
    });
  }, []);

  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <RecoilRoot>
        <Component {...pageProps} />
        <SurfaceRoot />
      </RecoilRoot>
    </CacheProvider>
  );
};

export default App;
