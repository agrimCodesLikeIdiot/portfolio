import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import m from "../public/m.jpg";
import aqi from "../public/aqi.png";

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

      <div id="main-content" className="">
        <div className="lg:pt-[10%] pt-[100px] lg:pl-0 pl-[10px] lg:absolute lg:left-[50%] lg:translate-x-[-50%]">
          <div className="flex lg:flex-row flex-col lg:space-x-5 lg:space-y-0 space-y-6">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl lg:text-5xl font-bold">I like,</h1>
              <h1
                className="text-4xl lg:text-7xl font-thin pl-[30px] o"
                id="demo"
              >
                A Straight way - DEVELOPMENT.
              </h1>
              <br />
              <p className="pl-[30px] text-[10px] lg:text-lg text-gray-500 font-semibold">
                Welcome to my world, I am Agrim Singh. I am a frontend developer{" "}
                <br />
                hailing from India. Currently I work with Next.js and <br />
                tailwindcss.
              </p>
              <br />
              <br />
              <div className="p-2.5 w-[340px] lg:w-[540px] bg-black text-white text-2xl hidden md:flex lg:flex items-center justify-center -rotate-[5deg] lg:-rotate-[10deg]">
                <h1 className="a">
                  First, Solve the problem. <br className="lg:hidden block" />{" "}
                  Then, write the code
                </h1>
              </div>
            </div>
            <div className="lg:hidden block">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
            <img
              className="w-[360px] lg:w-[500px] h-[400px] rounded-lg"
              src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            />
          </div>
        </div>
      </div>
      <div
        id=""
        className="relative bottom-0 left-0 right-0 w-[100vw]"
      >
        <br />
        <hr />
        <br />
        <h1 className="l font-light text-center">Made with ❤️ using Next.js and Tailwind CSS | © 2022 Agrim Singh</h1>
        <br />
      </div>
    </div>
  );
}
