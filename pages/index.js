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

      <nav className="flex pl-3 pt-3">
        <h1 className="text-2xl font-bold">@agrimf</h1>
        <div className="absolute left-[50%] translate-x-[-50%] text-gray-400 font-bold">
          <div className="hidden lg:flex space-x-4 text-[14px] items-center pt-[8px]">
            <Link href="/about">About</Link>
            <Link href="/site">Get a site</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="absolute left-[98%] translate-x-[-98%]">
          <input
            type="search"
            className="w-[190px] lg:w-[230px] h-[30px] rounded-full pl-2.5 border-[1px] focus:outline-none"
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
                  router.push("/");
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
              }
            }}
            className="absolute right-0 top-0 lg:hidden flex w-[40px] h-[30px] bg-green-300 text-white font-bold rounded-full justify-center items-center"
          >
            GO
          </button>
        </div>
      </nav>
      <div
        id="main-content"
        className="flex space-x-5 lg:pt-[15%] pt-[100px] lg:pl-0 pl-[10px] fixed lg:left-[35%] lg:translate-x-[-35%]"
      >
        <img src="https://i.pinimg.com/564x/ef/45/38/ef45387351176cfb696d4aa990fad126.jpg" className="lg:flex hidden w-[300px] h-[340px] rounded-lg object-cover" />
        <div>
          <h1 className="lg:text-6xl font-extrabold text-5xl select-none o lg:text-left text-center">

            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Developing...")
                  .start();
              }}
            />
          </h1>
          <br />
          <p className="text-[14px] lg:text-lg font-semibold text-gray-500 lg:text-left text-center">
            Hi, I am Agrim, a frontend developer and also the developer and owner{" "}
            <br />
            of this website. Welcome to my portfolio.
          </p>
          <br />
          <div className="flex space-x-2">
            <span className="text-[16px] lg:text-2xl text-center">
              P.S. The code of this site is on
            </span>
            <a
              className="font-extrabold text-[16px] lg:text-2xl"
              href="https://github.com/agrimCodesLikeIdiot/portfolio"
              target="_blank"
            >
              GitHub
            </a>
          </div>
          <div className="flex mt-2.5">
            <Link href="/about">
              <button className="w-[140px] h-[40px] rounded-full border-[1px] text-lg font-bold border-black">
                About
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
