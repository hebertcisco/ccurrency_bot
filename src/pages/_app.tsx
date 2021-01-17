import "../styles/globals.css";

import App from "next/app";
import Head from "next/head";
import React from "react";

type AppProps = {
  Component: React.ReactNode;
  pageProps: any;
};

export default class CustomApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>CambioCurrency API</title>

          <link rel="canonical" href="https://cambiocurrency.now.sh/" />
          <meta property="og:image" content="static/img/logo.png" />
          <meta content="static/img/logo.png" property="og:image" />
          <link rel="icon" type="image/svg+xml" href="static/img/logo.png" />

          <meta property="og:locale" content="en-US" />
          <meta property="og:title" content="CambioCurrency API" />
          <meta
            property="og:description"
            content="CambioCurrency API shows the current price of the main currencies"
          />
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="manifest" href="manifest.json" />
          <link rel="icon" href="favicon.ico" />

          <meta name="theme-color" content="#FB542B" />
          <meta
            name="description"
            content="CambioCurrency API shows the current price of the main currencies"
          />

          <meta
            name="keywords"
            content="CambioCurrency API, github, nodejs, reactjs"
          />

          <meta property="og:url" content="https://cambiocurrency.now.sh/" />
          <base href="/" />
          <link
            href="https://plus.google.com/+hebertsoftware"
            rel="publisher"
          />
          <meta content="index, follow" name="robots" />
          <meta content="1 days" name="revisit-after" />
          <meta content="global" name="distribution" />
          <meta content="general" name="rating" />
          <meta content="website" property="og:type" />
          <meta content="CambioCurrency API" property="og:site_name" />
          <meta content="en-US" property="og:locale" />
          <meta content="pt_PT" property="og:locale:alternate" />
          <meta content="pt" property="og:locale:alternate" />
          <meta content="en_US" property="og:locale:alternate" />
          <meta content="id_ID" property="og:locale:alternate" />
          <meta content="CambioCurrency API" property="og:title" />
          <meta content="https://cambiocurrency.now.sh//" property="og:url" />
          <meta
            content="CambioCurrency API shows the current price of the main currencies"
            property="og:description"
          />
          <meta content="@hebertbarros" name="twitter:site" />
          <meta content="@hebertsoftware" name="twitter:creator" />
          <meta content="hebertbarros.now.sh" name="twitter:domain" />

          <meta content="static/img/logo.png" property="og:image" />
          <meta content="512" property="og:image:width" />
          <meta content="512" property="og:image:height" />
          <meta content="id" name="geo.country" />
          <meta content="Brazil" name="geo.placename" />

          <link rel="icon" type="image/svg+xml" href="static/img/logo.png" />

          <link
            href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}
