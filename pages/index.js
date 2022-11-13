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
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com/"></script>
      </Head>
      <nav className="flex pl-3 pt-3"></nav>
      <div className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]">
        <h1 className="text-2xl font-bold flex space-x-2 justify-center">@frontendagrim</h1>
        <h1 className="font-mono lg:tracking-[30px] tracking-widest text-5xl l">
          Welcome
        </h1>
        <span className="text-gray-500 font-bold text-[20px] flex justify-center">
          <pre className="flex font-sans">
            /*{" "}
            <Typewriter
              onInit={(e) => {
                e.typeString("Made on Next.js, Tailwind CSS")
                  .start();
              }}
            />{" "}
            */
          </pre>
        </span>
        <div className="flex mt-2.5 justify-center">
          <Link href="/home">
            <button className="w-[160px] h-[40px] rounded-full border-[1px] text-lg font-bold border-black">
              Take me Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
