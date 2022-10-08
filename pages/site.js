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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com/"></script>
      </Head>

      <nav className="flex p-3">
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
        className="lg:pt-[10%] pt-[100px] lg:pl-0 pl-[10px] lg:absolute lg:left-[50%] lg:translate-x-[-50%]"
      >
        <h1 className="text-5xl font-bold text-center o">
          Get yourself a site
        </h1>
        <br />
        <h1 className="text-3xl font-semibold text-center">
          <Typewriter
            onInit={function (typewriter) {
              typewriter.typeString("But why?").start();
            }}
          />
        </h1>
        <br />
        <br />
        <div className="flex lg:space-y-0 space-y-2 lg:flex-row flex-col lg:space-x-2 lg:inherit absolute left-[50%] translate-x-[-50%]">
          <div className="w-[330px] p-2.5 lg:w-[400px] rounded-lg border-[1px] border-gray-500">
            <h1 className="o text-3xl font-bold">Free</h1>
            <br />
            <p className="lg:text-2xl text-lg text-gray-500">
              This is a free pack for small projects like a web app.
            </p>
            <br />
            <hr />
            <br />
            <br />
            <h1 className="text-2xl o">What do I get for free?</h1>
            <br />
            <ul>
              <li className="text-gray-500 font-bold text-lg">HTML, CSS, JS</li>
              <li className="text-gray-500 font-bold text-lg">Responsive</li>
              <li className="text-gray-500 font-bold text-lg">One page</li>
              <li className="text-gray-500 font-bold text-lg line-through">
                Temparory Hosting
              </li>
              <li className="text-gray-500 font-bold text-lg line-through">
                Tailwind CSS
              </li>
              <li className="text-gray-500 font-bold text-lg line-through">
                MPA (HTML, CSS, JS)
              </li>
              <li className="text-gray-500 font-bold text-lg line-through">
                SPA (React, Next)
              </li>
            </ul>
          </div>
          <div className="w-[330px] p-2.5 lg:w-[400px] rounded-lg border-[1px] border-gray-500">
            <h1 className="o text-3xl font-bold">MPA</h1>
            <br />
            <p className="lg:text-2xl text-lg text-gray-500">
              This is a $2 pack for medium sized projects. Example - Portfolio
            </p>
            <br />
            <hr />
            <br />
            <br />
            <h1 className="text-2xl o">What do I get for $2?</h1>
            <br />
            <ul>
              <li className="text-gray-500 font-bold text-lg">HTML, CSS, JS</li>
              <li className="text-gray-500 font-bold text-lg">Responsive</li>
              <li className="text-gray-500 font-bold text-lg">
                MPA | No. of pages `&gt;` `or` = 1{" "}
              </li>
              <li className="text-gray-500 font-bold text-lg">Tailwind CSS</li>
              <li className="text-gray-500 font-bold text-lg">
                Temparory Hosting
              </li>
              <li className="text-gray-500 font-bold text-lg line-through">
                One page
              </li>
              <li className="text-gray-500 font-bold text-lg line-through">
                SPA (React, Next)
              </li>
            </ul>
          </div>
          <div className="w-[330px] p-2.5 lg:w-[400px] rounded-lg border-[1px] border-gray-500">
            <h1 className="o text-3xl font-bold">SPA</h1>
            <br />
            <p className="lg:text-2xl text-lg text-gray-500">
              This is a $5 pack for large scale projects. Example - Messanger app
            </p>
            <br />
            <hr />
            <br />
            <br />
            <h1 className="text-2xl o">What do I get for $5?</h1>
            <br />
            <ul>
              <li className="text-gray-500 font-bold text-lg">HTML, CSS, JS</li>
              <li className="text-gray-500 font-bold text-lg">Responsive</li>
              <li className="text-gray-500 font-bold text-lg">Tailwind CSS</li>
              <li className="text-gray-500 font-bold text-lg">
                Temparory Hosting
              </li>
              <li className="text-gray-500 font-bold text-lg">
                SPA (React, Next)
              </li>
              <li className="text-gray-500 font-bold text-lg line-through">
                One page
              </li>
              <li className="text-gray-500 font-bold text-lg line-through">
                MPA | No. of pages `&gt;` `or` = 1{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <footer></footer>
      <br />
    </div>
  );
}
