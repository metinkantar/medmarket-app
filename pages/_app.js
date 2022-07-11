import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
//import AppLayout from "../components/layouts/AppLayout";
import Head from "next/head";
import Script from 'next/script'
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment;
  return (
    <>
      <Provider store={store}>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="ShopApp Açıklama İçeriği" />
          <link rel="icon" href="/favicon.ico" />
          <title>MeKaShop App</title>
          {/* <link href="/bootstrap/css/bootstrap.css" rel="stylesheet"></link>
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> */}
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>


        {/* <Script src="/bootstrap/js/bootstrap.bundle.min.js"></Script> */}
        <Script src="/js/script.js"></Script>
      </Provider>
    </>
  );
}

export default MyApp;