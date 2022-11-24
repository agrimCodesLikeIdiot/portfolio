import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";
import mypic from "../public/typer1.png";

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
        className="flex lg:space-x-5 lg:pt-[15%] pt-[100px] lg:absolute lg:left-[50%] lg:translate-x-[-50%]"
      >
        <div>
          <div className="flex space-x-10 justify-center">
            <h1 className="flex space-x-2 text-3xl font-semibold tracking-widest text-center justify-center l">
              NEXT<span className="text-[14px] font-mono pt-2">.js</span>
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#000000"
                d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
              ></path>
            </svg>
          </div>
          <br />
          <h1 className="lg:text-7xl text-5xl o font-bold text-center">
            Dynamic without limits
          </h1>
          <br />
          <p className="text-center lg:text-lg text-[14px] text-gray-500 font-bold text-center">
            Hello. I'm Agrim, A frontend developer from India
          </p>
          <br />
          <div className="flex space-x-2 justify-center">
            <button
              onClick={() => router.push("/site")}
              className="lg:w-[200px] transition ease-in-out delay-150 hover:scale-105 w-[160px] h-[40px] bg-black rounded-full font-bold text-white flex justify-center items-center font-mono space-x-2"
            >
              <img
                src="https://img.icons8.com/windows/32/FFFFFF/launch-browser.png"
                className="lg:block hidden"
              />
              <span className="lg:pt-1.5">Start a Site</span>{" "}
            </button>
            <button
              onClick={() => router.push("/about")}
              className="lg:w-[200px] transition ease-in-out delay-150 hover:scale-105 w-[160px] h-[40px] rounded-full font-bold border-black border-[1px] flex justify-center items-center font-mono space-x-2"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/32/null/info--v1.png"
                className="lg:block hidden"
              />
              <span className="lg:pt-1.5">About me</span>{" "}
            </button>
            <button
              onClick={() =>
                window.open("https://github.com/agrimCodesLikeIdiot/portfolio/")
              }
              className="transition ease-in-out delay-150 hover:scale-105"
            >
              <img src="https://img.icons8.com/ios-glyphs/40/null/github.png" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[590px]">
        <hr />
        <br />
        <div>
          <h1 className="text-5xl font-bold o text-center">
            Building Sites - By your prefrences
          </h1>
        </div>
        <br />
        <div className="mt-[30px]">
          <h1 className="text-3xl font-bold o text-center">
            What you will get?
          </h1>
          <br />
          <div className="flex justify-center space-x-5">
            <ul className="flex flex-col">
              <li className="flex space-x-2 items-center font-bold">
                <span className="text-green-500 text-2xl">✔</span>
                <span>Fast & Refurbishable sites</span>
              </li>
              <li className="flex space-x-2 items-center font-bold">
                <span className="text-green-500 text-2xl">✔</span>
                <span>Temparory Hosting</span>
              </li>
              <li className="flex space-x-2 items-center font-bold">
                <span className="text-green-500 text-2xl">✔</span>
                <span>Open Source</span>
              </li>
            </ul>
            <img
              alt="Refurbish"
              className="w-[100px] h-[100px] object-cover"
              src="https://img.icons8.com/external-filled-outline-geotatah/100/000000/external-refurbish-reverse-logistics-filled-outline-filled-outline-geotatah.png"
            />
          </div>
        </div>
        <br />
        <hr />
        <br />
        <div className="mt-[30px]">
          <h1 className="text-3xl font-bold o text-center">Featured project</h1>
          <br />
          <div className="flex lg:flex-row flex-col justify-center space-x-2">
            <ul className="flex flex-col">
              <li className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold o lg:text-left text-center">
                  Typer +
                </h1>
                <p className="lg:text-lg text-[12px] font-bold text-gray-500 lg:text-left text-center">
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
              <li className="mt-[30px] flex lg:justify-center justify-center">
                <Link href="">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://github.com/agrimCodesLikeIdiot/Typer-Plus"
                      );
                    }}
                    className="w-[320px] h-[40px] flex justify-center items-center rounded-full bg-blue-500 text-white text-2xl font-bold space-x-2"
                  >
                    <img src="https://img.icons8.com/color/36/000000/linux--v1.png" />{" "}
                    <span>Download for linux</span>{" "}
                  </button>
                </Link>
              </li>
            </ul>
            <br />
            <Image
              alt="Refurbish"
              className="ml-[10px] w-[100px] h-[100px] lg:block hidden"
              src={mypic}
              width="600px"
              height="400px"
              id="hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
