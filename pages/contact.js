import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";

export default function Home() {
  var $ = (e) => {
    return document.querySelector(e);
  };

  const [term, setterm] = useState(null);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com/"></script>
      </Head>

      <div
        id="main-content"
        className="lg:pt-[10%] pt-[100px] lg:pl-0 pl-[10px] lg:absolute lg:left-[50%] lg:translate-x-[-50%]"
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-5xl font-bold o">Contact</h1>
          <h1 className="pl-[160px] text-3xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Me...").start();
              }}
            />
          </h1>
        </div>
        <br />
        <div className="flex flex-col space-y-3">
          <div className="flex space-x-2">
            <img src="https://img.icons8.com/ios-filled/50/000000/apple-mail.png" />
            <span className="text-gray-500 font-semibold flex items-center">
              frontendagrim@gmail.com
            </span>
          </div>
          <div className="flex space-x-2">
            <img src="https://img.icons8.com/ios-glyphs/50/000000/discord-logo.png" />
            <span className="text-gray-500 font-semibold flex items-center">
              derp108_🍁#2654
            </span>
          </div>
        </div>
      </div>
      <div
        id="arrow"
        className="fixed top-[50%] translate-x-[-50%] left-0 lg:block hidden text-gray-500 font-bold ml-5 rotate-90"
      >
        frontendagrim@gmail.com
      </div>

      <footer></footer>
    </div>
  );
}
