import React from "react";
import DetailsButton from "../DetailsButton";
import ViewButton from "../ViewButton";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className="relative hero flex w-screen h-screen items-center justify-center-z-1">
      {/* ... Background image and gradients */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="https://images.ctfassets.net/usf1vwtuqyxm/3SnGCWuRyMyyoS0eEUqGUy/afecda1d43c12fec8f52fc193c9ba7ed/HPHE_main_news_image.jpg?fm=jpg&q=70&w=2560"
        alt=""
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute top-0 inset-x-0 h-1/5 bg-gradient-to-t from-transparent to-base-300 z-10" />
      <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-b from-transparent to-base-100 z-10" />
      <div className="hero-content z-20 md:grid md:grid-cols-3 my-16 mx-16 max-w-full ">
        <div className="col-span-2 flex flex-col justify-center text-primary-content sm:justify-start sm:items-start w-full">
          <h1
            className={`${styles.title} text-6xl md:text-7xl lg:text-8xl font-bold overflow-wrap text-wrap break-words max-w-full`}
          >
            Harry Potter
          </h1>
          <div className={`${styles.rating} flex py-7`}>
            <i className="fa fa-star text-accent"></i>
            <i className="fa fa-star text-accent"></i>
            <i className="fa fa-star text-accent"></i>
            <i className="fa fa-star text-accent"></i>
            <i className="fa fa-star-half text-accent"></i>
            <label>4</label>
            <label>IMDB</label>
            <span>GP</span>
            <label>2.4hrs</label>
          </div>
          <p className="hidden sm:block max-w-full">
            During World War I, two British soldiers -- Lance Cpl. Schofield and
            Lance Cpl. Blake -- receive seemingly impossible orders. In a race
            against time, they must cross over into enemy territory to deliver a
            message that could potentially save 1,600 of their fellow comrades
            -- including Blake's own brother.
          </p>
          <span className="py-7 flex gap-10">
            <ViewButton />
            <DetailsButton />
          </span>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://i.pinimg.com/736x/4c/6e/56/4c6e562c449ab4931d49a20a5cf7425f.jpg"
            className="hidden md:block md:h-[40rem] md:w-[60rem] lg:w-3/4 rounded-lg shadow-2xl object-cover"
            alt="Box Office"
          />
        </div>
        <div className="flex pb-4 gap-7 absolute right-10 bottom-2 md:left-14">
          <label className="radio-label">
            <input
              type="radio"
              name="radio-group"
              id="1"
              className="radio"
              defaultChecked
            />
          </label>
          <label className="radio-label">
            <input type="radio" name="radio-group" id="2" className="radio" />
          </label>
          <label className="radio-label">
            <input type="radio" name="radio-group" id="3" className="radio" />
          </label>
          {/* Add more labels for additional options */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
