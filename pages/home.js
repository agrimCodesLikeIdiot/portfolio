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
      }

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
        className="flex lg:space-x-5 lg:pt-[15%] pt-[100px] lg:absolute lg:left-[35%] lg:translate-x-[-35%]"
      >
        <img
          src="https://i.pinimg.com/564x/ef/45/38/ef45387351176cfb696d4aa990fad126.jpg"
          className="lg:flex hidden w-[300px] h-[340px] rounded-lg object-cover"
        />
        <div>
          <h1 className="text-center lg:text-6xl font-extrabold text-5xl select-none o lg:text-left text-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(`I'm Agrim,`)
                  .start();
              }}
            />
          </h1>
          <br />
          <p className="text-[12px] lg:text-lg font-semibold text-gray-500 lg:text-left text-center">
            A frontend developer and also the developer and
            <br /> owner of this website. Welcome to my portfolio.
          </p>
          <br />
          <div className="flex space-x-2 justify-center lg:justify-start">
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
          <div className="flex mt-2.5 justify-center lg:justify-start">
            <Link href="/about">
              <button className="w-[140px] h-[40px] rounded-full border-[1px] text-lg font-bold border-black">
                About
              </button>
            </Link>
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
                <a href="">
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
                </a>
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
        <div id="arrow" className="fixed top-[50%] translate-x-[-50%] left-0 lg:block hidden text-gray-500 font-bold ml-5 rotate-90">frontendagrim@gmail.com</div>
      </div>
    </div>
  );
}
