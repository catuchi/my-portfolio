import React from "react";
import image from "../portfolio_bg.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="portfolio_bg"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Aloha. I'm Chibu.
        </h1>
      </section>
    </main>
  );
};

export default Home;
