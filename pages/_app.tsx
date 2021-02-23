import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { RecoilRoot } from 'recoil';
import { appWithTranslation } from '../i18n';

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion';
import { globalStyles } from '../src/styles/global';
import SurfaceRoot from '@/components/surface-root/surface-root';

const App = ({ Component, pageProps }) => {
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

App.getInitialProps = async (appContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return { ...appProps };
};

export default appWithTranslation(App);
