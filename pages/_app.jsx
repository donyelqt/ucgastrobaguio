import Layout from "../components/common/Layout"
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>UC GastroBaguio</title>
        <link rel="icon" href="uclogo.jpg" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
