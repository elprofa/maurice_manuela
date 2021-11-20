import React from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import Header from '../../components/shared/Header'
import { theme } from "../../theme";
import { GlobalCSS } from "../../public/styles/style";
import Footer from "../../components/molecules/Footer";
import { Form, Container, Row, Col } from "reactstrap";

const Layout = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Dubani agency: Agence de communication digitale à casablanca (MAROC) </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/pgv8psy.css" />
        <link rel="shortcut icon" href="/img/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Dancing+Script|Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalCSS />
      <Header /> 
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
