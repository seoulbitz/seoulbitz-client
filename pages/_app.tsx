import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { CacheProvider } from '@emotion/core';
import { RecoilRoot } from 'recoil';
import { appWithTranslation } from '../i18n';

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

// App.getInitialProps = async (appContext) => {
//   const appProps = await NextApp.getInitialProps(appContext);
//   return { ...appProps };
// };

export default appWithTranslation(App);
