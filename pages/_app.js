import React from "react";
import App from "next/app";
import Head from "next/head";
import SiteLayout from "../components/shared/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import GlobalStyle from "../styles/globalstyles";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <SiteLayout>
          <Component {...pageProps}></Component>
        </SiteLayout>
      </ThemeProvider>
    );
  }
}

export default MyApp;
