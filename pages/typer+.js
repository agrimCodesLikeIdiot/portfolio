import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import mypic from "../public/typer1.png";
import tpos from "../public/typerPlusOpenSource.png";
import sc from "../public/spellCheck.png";

export default function Home() {
  var $ = (e) => {
    return document.querySelector(e);
  };

  const [term, setterm] = useState(null);
  const router = useRouter();

  useEffect(() => {
    window.onload = () => {
      const getCenter = (element) => {
        const { left, top, width, height } = element.getBoundingClientRect();
        return { x: left + width / 2, y: top + height / 2 };
      };

      const arrow = document.querySelector("#arrow");
      const arrowCenter = getCenter(arrow);
      arrow.addEventListener("mousemove", ({ clientX, clientY }) => {
        const angle = Math.atan2(
          clientY - arrowCenter.y,
          clientX - arrowCenter.x
        );
        arrow.style.transform = `rotate(${angle}rad)`;
      });
    };
  }, [typeof window != "undefined"]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="The portfolio of frontendagrim" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com/"></script>
      </Head>
      <nav className="flex pl-3 pt-3"></nav>
      <div
        id="main-content"
        className="flex lg:space-x-5 lg:pt-[15%] pt-[100px] absolute left-[50%] translate-x-[-50%]"
      >
        <div className="mt-[30px]">
          <h1 className="text-3xl font-bold o text-center">Typer+</h1>
          <br />
          <div className="flex lg:flex-row flex-col space-x-4">
            <ul className="flex flex-col">
              <li className="flex flex-col space-y-2">
                <p className="lg:text-lg text-[12px] font-bold text-gray-500 text-center">
                  Typer + is a minimal text editor for markdown files. The
                  <br />
                  editor is a Free and Open Source software (or FOSS) so you can
                  <br />
                  download the editor for free or get the source for free as
                  <br />
                  well. Typer + is written on JavaScript with Electron.js and
                  <br />
                  Next.js.
                  <br />
                </p>
              </li>
              <li className="lg:pl-0 pl-2.5 mt-[30px] flex space-x-2 items-center font-bold">
                <span className="text-green-500 text-2xl">✔</span>
                <span>Free & Open source</span>
              </li>
              <li className="lg:pl-0 pl-2.5 flex space-x-2 items-center font-bold">
                <span className="text-green-500 text-2xl">✔</span>
                <span>Saves the data of user on LocalStorage</span>
              </li>
              <li className="lg:pl-0 pl-2.5 flex space-x-2 items-center font-bold">
                <span className="text-green-500 text-2xl">✔</span>
                <span>Minimal</span>
              </li>
              <li className="mt-[30px]">
                <Link href="">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://github.com/agrimCodesLikeIdiot/Typer-Plus"
                      );
                    }}
                    className="w-[220px] h-[40px] flex justify-center items-center rounded-full bg-blue-500 text-white text-2xl font-bold space-x-2"
                  >
                    <img src="https://img.icons8.com/color/36/000000/linux--v1.png" />{" "}
                    <span>Download</span>{" "}
                  </button>
                </Link>
              </li>
            </ul>
            <br />
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="flex justify-center mt-[740px]">
        <Image
          alt="Refurbish"
          className="ml-[90px] w-[100px] h-[100px] lg:block hidden"
          src={mypic}
          width="1300px"
          height="900px"
          id="hidden"
        />
      </div>
      <br />
      <br />
      <h1 className="text-3xl font-bold o text-center lg:block hidden ">
        For what to use it?
      </h1>
      <br />
      <div className="lg:block hidden absolute left-[50%] translate-x-[-50%] bg-slate-100 rounded-lg w-[650px] h-[90px]">
        <div className="ml-[15px]">
          <div className="flex space-x-2 justify-center">
            <div className="flex space-x-2 pt-5 items-center">
              <img src="https://img.icons8.com/ios-glyphs/50/null/markdown.png" />
              <h1 className="text-2xl l">Markdown</h1>
              <h1 className="text-5xl font-thin o">|</h1>
              <img src="https://img.icons8.com/ios-glyphs/48/null/edit--v1.png" />
              <h1 className="text-2xl l">Editing .txt</h1>
              <h1 className="text-5xl font-thin o">|</h1>
              <img src="https://img.icons8.com/material-outlined/48/null/saving-book.png" />
              <h1 className="text-2xl l">Make study material</h1>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="mt-[80px]">
        <div className="flex lg:flex-row flex-col justify-center space-x-2">
          <ul className="flex flex-col">
            <li className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold o lg:text-left text-center">
                Open Source
              </h1>
              <p className="lg:text-lg text-[12px] font-bold text-gray-500 lg:text-left text-center">
                Infact being free, Typer+ is open soure which means that you can{" "}
                <br />
                download the code written by me to make this application and use{" "}
                <br />
                it if you like or you can take an idea weather how does Typer+
                <br />
                works.
              </p>
            </li>
            <li className="mt-[30px]">
              <Link href="">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://github.com/agrimCodesLikeIdiot/Typer-Plus/tree/main/Typer%2B%20Source%20Code"
                    );
                  }}
                  className="text-2xl font-semibold l"
                >
                  <span>Source Code &gt;</span>
                </button>
              </Link>
            </li>
          </ul>
          <br />
          <Image
            alt="Refurbish"
            className="ml-[10px] w-[100px] h-[100px] lg:block hidden object-cover"
            src={tpos}
            width="600px"
            height="400px"
            id="hidden"
          />
        </div>
      </div>
      <div className="mt-[80px]">
        <div className="flex lg:flex-row flex-col justify-center space-x-2">
          <Image
            alt="Refurbish"
            className="ml-[10px] w-[100px] h-[100px] lg:block hidden object-cover"
            src={sc}
            width="600px"
            height="400px"
            id="hidden"
          />
          <br />
          <ul className="flex flex-col lg:mt-0 mt-[30px]">
            <li className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold o lg:text-left text-center">
                Auto Spell Check, Just turn it on!
              </h1>
              <p className="lg:text-lg text-[12px] font-bold text-gray-500 lg:text-left text-center">
                The editor also supports spelling check, which means it will{" "}
                <br />
                flag incorrect words. If you don't want this feature then <br />
                you can turn it off. An beautiful example is given on the <br />
                picture on the right. Note: This feature flags the words which{" "}
                <br />
                is not in the english dictionary, so it won't work for other{" "}
                <br />
                languages except English and might flag out the correct word in{" "}
                <br />
                the following language if it is not english.
              </p>
            </li>
          </ul>
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
