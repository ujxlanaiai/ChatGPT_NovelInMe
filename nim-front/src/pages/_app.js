import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-gradient-to-b from-violet-400 justify-between p-24">
        <Head></Head>
        <Component {...pageProps} />
      </div>
    </>
  );
}
