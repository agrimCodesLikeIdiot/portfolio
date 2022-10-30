import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import m from "../public/m.jpg";

export default function Home() {
  var $ = (e) => {
    return document.querySelector(e);
  };

  const [term, setterm] = useState(null);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com/"></script>
      </Head>

      <div id="main-content">
        <div className="lg:pt-[10%] pt-[100px] lg:pl-0 pl-[10px] lg:absolute lg:left-[50%] lg:translate-x-[-50%]">
          <div className="flex space-x-5">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl lg:text-5xl font-bold">Think...</h1>
              <h1
                className="text-5xl lg:text-7xl font-thin pl-[60px] o"
                id="demo"
              >
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Creative")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Positive")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Deep")
                      .pauseFor(2500)
                      .deleteAll()
                      .typeString("Minimal")
                      .pauseFor(2500)
                      .start();
                  }}
                />
              </h1>
              <br />
              <p className="text-[14px] lg:text-lg text-gray-500 font-semibold">
                Hello there my friend! Welcome to this site. I am Agrim, the
                developer of this site... I can also make one for you. I am a
                frontend developer I really love building websites and to make
                the web better, currently I work with React, Next, TailwindCSS, Electron, Python and many more. I can also build a site for you :)
              </p>
            </div>
            <img className="w-[500px] h-[400px] lg:block hidden rounded-lg" src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
          </div>
        </div>
      </div>
      <footer className="lg:block hidden fixed top-[50%] translate-y-[-50%] mr-[10px] right-0">
        <div className="flex flex-col space-y-2 justify-center">
          <img src="https://img.icons8.com/office/50/000000/react.png" />
          <img src="https://img.icons8.com/color/50/000000/javascript--v1.png" />
          <img src="https://img.icons8.com/color/50/000000/html-5--v1.png" />
          <img src="https://img.icons8.com/color/50/000000/css3.png" />
          <img src="https://img.icons8.com/color/50/000000/tailwindcss.png" />
          <img src="https://img.icons8.com/color/50/000000/nextjs.png" />
          <img src="https://img.icons8.com/ios-glyphs/50/000000/github.png" />
          <img src="https://img.icons8.com/color/50/000000/python.png" />
          <img src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/50/000000/external-apps-technology-prettycons-lineal-color-prettycons.png" />
        </div>
      </footer>
    </div>
  );
}
