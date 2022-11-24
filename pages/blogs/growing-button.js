import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  var $ = (e) => {
    return document.querySelector(e);
  };

  const [term, setterm] = useState(null);
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com/"></script>
      </Head>

      <nav className="flex p-3"></nav>
      <div
        id="main-content"
        className="lg:pt-[10%] pt-[100px] lg:pl-0 pl-[10px] lg:absolute lg:left-[50%] lg:translate-x-[-50%]"
      >
        <h1 className="text-5xl font-bold o">Making a Growing button</h1>
        <br />
        <p className="text-[14px] text-base lg:text-lg text-gray-500 tracking-tightest break-words">
          Welcome back, uploaded this blogpost after a long time. In this blog{" "}
          <br />
          post we'll be making a button which grows on hover in Tailwindcss.
        </p>
        <br />
        <h1 className="text-3xl font-semibold o">What is Tailwind CSS?</h1>
        <br />
        <p className="text-[14px] text-base lg:text-lg text-gray-500  tracking-tightest break-words">
          Tailwind CSS is an open source CSS framework. The main feature of this{" "}
          <br />
          library is that, unlike other CSS frameworks like Bootstrap, it does{" "}
          <br />
          not provide a series of predefined classes for elements such as <br />
          buttons or tables.
        </p>
        <br />
        <h1 className="text-3xl font-semibold o">How does it look?</h1>
        <br />
        <button
          onClick={() => router.push("/site")}
          className="lg:w-[200px] transition ease-in-out delay-150 hover:scale-105 w-[160px] h-[40px] bg-black rounded-lg font-bold text-white flex justify-center items-center font-mono space-x-2"
        >
          <span className="lg:pt-1.5">Lorem Ipsum</span>{" "}
        </button>
        <br />
        <h1 className="text-3xl font-semibold o">Code</h1>
        <br />
        <div className="p-4 bg-gray-600 rounded-3xl font-mono text-white">
          <pre>
            &lt;
            <span className="text-green-500">
              button{" "}
              <span className="text-purple-500">
                class=
                <span className="text-blue-500">
                  "lg:w-[200px] transition ease-in-out delay-150 hover:scale-105{" "}
                  <br />
                  w-[160px] h-[40px] bg-black rounded-lg font-bold text-white
                  flex <br />
                  justify-center items-center font-mono space-x-2"
                </span>
              </span>
            </span>
            &gt;
            <br/>
                <span className="lg:pt-1.5">Lorem Ipsum</span>{" "}
                <br/>
            &lt;<span className="text-green-500">/button</span>&gt;
          </pre>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
