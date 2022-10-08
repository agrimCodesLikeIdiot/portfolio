import "../styles/globals.css";
import NextNProgressbar from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <NextNProgressbar color="black" /> <Component {...pageProps} />{" "}
    </>
  );
}

export default MyApp;
