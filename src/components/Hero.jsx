import React from "react";

function Hero() {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center mt-10 lg:mt-20 xl:mt-[128px]">
      <div className="space-y-6 sm:w-1/2 ">
        <h1 className="font-bold leading-tight text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Spend your Cardano anywhere, anytime.
        </h1>
        <p className="text-[#ADB2B1] w-4/5 text-xs lg:text-sm xl-text-base">
          Our user-friendly platform enables businesses and individuals to
          seamlessly convert and spend their crypto for everyday purchases.
        </p>
        <button class="flex cursor-pointer items-center gap-2 px-6 py-2 rounded-full bg-purple-700 text-white font-medium hover:bg-purple-800 transition-all">
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>

        <img
          className="xl:-mr-[130px] w-10/12 sm:w-1/2"
          src="hero-card.png"
          alt=""
        />
    </section>
  );
}

export default Hero;
