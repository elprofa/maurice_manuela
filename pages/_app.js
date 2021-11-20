import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../containers/Layout";


import NProgress from 'nprogress';
import Router from "next/router";
//la barre de chargement
Router.events.on('routeChangeStart',()=>NProgress.start());
Router.events.on('routeChangeComplete',()=>NProgress.done());
Router.events.on('routeChangeError',()=>NProgress.done());

//TODO:Swap with our own
import 'nprogress/nprogress.css';
import '../public/styles/nprogress.css';

 function App({ Component, pageProps}) {
 
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
