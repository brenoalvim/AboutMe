import Meta from "../components/Head/Meta";

import Link from "../components/Head/Link";

import Title from "../components/Head/Title";

import Header from "../components/Header/index";

import Homepage from "../components/Home/index";

import Social from "../components/Social/index";

import About from "../components/About/index";

export default function Home() {
  return (
    <>
      <Meta />
      <Link />
      <Title name="About Me" />
      <Header />
      <Homepage name="Home" path_img="img/login.png" />
      <Social name="Breno" />
      <About name="Breno" />
      <style jsx global>
        {`
          * {
            scroll-behavior: smooth;
          }
          body {
            margin: 0;
            padding: 0;
          }
          :root {
            --brand-color: #0f172a;
            --dark-color: #152d73;
            --mid-color: #cbd5e1;
            --light-color: #f8fafc;
          }
        `}
      </style>
    </>
  );
}
