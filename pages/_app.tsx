import NextApp from 'next/app';
import { CacheProvider } from '@emotion/core';
import { RecoilRoot } from 'recoil';

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion';

import { globalStyles } from '../src/styles/global';
import SurfaceRoot from '@/components/surface-root/surface-root';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <CacheProvider value={cache}>
        {globalStyles}
        <RecoilRoot>
          <Component {...pageProps} />
          <SurfaceRoot />
        </RecoilRoot>
      </CacheProvider>
    );
  }
}
