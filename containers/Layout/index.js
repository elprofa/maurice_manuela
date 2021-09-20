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
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://use.typekit.net/pgv8psy.css" />
      </Head>
      <GlobalCSS />
      <Header /> 
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
