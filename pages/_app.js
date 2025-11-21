
import '@/styles/globals.css'
import Head from 'next/head';
// pages/_app.js
import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';
import { ThemeProvider } from '@emotion/react'
import { Inter } from '@next/font/google'
import { useState } from 'react';
import theme from "../lib/theme.json";
import Sidebar from '@/components/layout/sidebar';


// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;


  return (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <Head>
      <title>Manufacturing Dashboard</title>
      <link rel="icon" href="/fastracker-icon-2.png" />
    </Head>
    
    <main className={inter.className}>
      <Sidebar />
      <div>
          <Component {...pageProps} />
      </div>
    </main>
    
    </ThemeProvider>
  </Provider> );
}
