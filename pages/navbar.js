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
    <div className={styles.container} id="s">
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com/"></script>
      </Head>
      <nav className="shadow-sm flex pl-3 pt-4 pb-4 backdrop-blur-md border-b-2">
        <div
          className="text-2xl font-bold bg-black text-white p-[1px] hidden lg:flex justify-center select-none"
          onClick={() => window.open("https://fagrim.netlify.app")}
        >
          https://fagrim.netlify.app
        </div>
        <div className="lg:absolute lg:left-[50%] lg:translate-x-[-50%] text-gray-700 font-bold">
          <div className="hidden lg:flex text-left lg:mt-0 lg:mr-0 mr-[30px] mt-[30px] space-x-4 text-[14px] lg:items-center pt-[8px]">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/site">Get a site</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div
          id="m-menu"
          className="z-index-[999] lg:absolute lg:left-[50%] lg:translate-x-[-50%] text-gray-400 font-bold "
        >
          <div className="lg:hidden md:hidden flex text-left space-x-3 text-[14px] lg:items-center pt-[8px]">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/site">Pricing</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="absolute left-[98%] translate-x-[-98%] ">
          <div>
            <input
              type="search"
              className="lg:block hidden w-[190px] lg:w-[230px] h-[30px] rounded-full pl-2.5 border-[1px] focus:outline-none"
              placeholder="Search this site"
              value={term}
              onChange={function (e) {
                setterm(e.target.value);
              }}
              onKeyDown={function (e) {
                if (e.key === "Enter") {
                  if (
                    term === "about" ||
                    term === "about me" ||
                    term === "about page"
                  ) {
                    router.push("/about");
                  } else if (
                    term === "blogs" ||
                    term === "your blogs" ||
                    term === "blogs page" ||
                    term === "blog"
                  ) {
                    router.push("/blogs");
                  } else if (
                    term === "get a site" ||
                    term === "build me a site" ||
                    term === "I want a site"
                  ) {
                    router.push("/site");
                  } else if (term === "contact" || term === "contact page") {
                    router.push("/contact");
                  } else {
                    router.push("/home");
                  }
                }
              }}
            />
            <button
              onClick={function () {
                if (
                  term === "about" ||
                  term === "about me" ||
                  term === "about page"
                ) {
                  router.push("/about");
                } else if (
                  term === "blogs" ||
                  term === "your blogs" ||
                  term === "blogs page" ||
                  term === "blog"
                ) {
                  router.push("/blogs");
                } else if (
                  term === "get a site" ||
                  term === "build me a site" ||
                  term === "I want a site"
                ) {
                  router.push("/site");
                } else if (term === "contact" || term === "contact page") {
                  router.push("/contact");
                } else {
                  router.push("/home");
                }
              }}
              className="absolute right-0 top-0 flex w-[40px] h-[30px] font-bold rounded-full justify-center items-center"
            >
              <img src="https://img.icons8.com/ios-glyphs/24/null/search--v1.png"/>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
