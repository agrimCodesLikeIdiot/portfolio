import "../styles/globals.css";
import NextNProgressbar from "nextjs-progressbar";
import Navbar from "../pages/navbar"

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Navbar/> <NextNProgressbar color="black" /> <Component {...pageProps} />{" "} 
    </>
  );
}

export default MyApp;
