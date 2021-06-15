import Head from "next/head";
import PageTemplate from "../templates/page.template";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Nextwind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <p className="mt-14 text-2xl md:text-4xl text-center w-2/3">
          Nextwind is a complete Next Js boilerplate designed with Tailwind css,
          allowing you to quickly start a Next js project, it currently has a an
          authentication layout and few pages.
        </p>
      </div>
    </div>
  );
};

export default Home;

Home.Template = PageTemplate;
