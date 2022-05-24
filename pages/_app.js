import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    // <>
    //   <Head>

    //     <link href="../assets/San Francisco Pro Text/SF-Pro-Display-Black.otf" rel="stylesheet" />

    //   </Head>
    <Component {...pageProps} />
  );
}

export default MyApp;
