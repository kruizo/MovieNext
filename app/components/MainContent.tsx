import React from "react";
import Card from "./Card";

const MainContent = () => {
  const cards = [];

  for (let index = 0; index < 10; index++) {
    cards.push(<Card key={index} />);
  }

  return (
    <div className="block px-14 relative mt-[100vh]">
      <span className="flex py-7">
        <svg width="20" height="30">
          <rect width="7" height="30" className="fill-accent" />
        </svg>
        <span>
          <h1 className="text-2xl font-bold text-primary-content">
            Recently added
          </h1>
        </span>
      </span>
      <div className="flex">
        <div className="w-full grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {cards.map((card, index) => (
            <div key={index} className="aspect-w-1 aspect-h-1">
              {card}
            </div>
          ))}
        </div>
        <section>
          <div className="w-96 hidden xl:block p-3">
            <h1 className="text-2xl font-bold text-primary-content">
              Trending Now
            </h1>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainContent;
