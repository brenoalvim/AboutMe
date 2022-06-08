import Meta from "../components/Head/Meta";

import Link from "../components/Head/Link";

import Title from "../components/Head/Title";

import Header from "../components/Header/index";

import Homepage from "../components/Home/index";

import Social from "../components/Social/index";

export default function Home() {
  return (
    <>
      <Meta />
      <Link />
      <Title name="About Me" />
      <Header name="</>" />
      <Homepage name="Home" path_img="img/login.png" />
      <Social name="Breno" />
      <style jsx global>
        {`
          body {
            margin: 0;
            padding: 0;
          }
          *:root {
            --brand-color: #152d73;
            --dark-color: #0f172a;
            --mid-color: #cbd5e1;
            --light-color: #f8fafc;
          }
        `}
      </style>
    </>
  );
}
