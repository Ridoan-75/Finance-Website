import React from "react";
import debitcard from "../assets/perfect-card.svg";

function PerfectCard() {
  return (
    <section className="flex flex-col sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center">
      <img className="sm:w-1/2 mb-6 sm:mb-0" src={debitcard} alt="" />

      <div className="w-full sm:w-1/2">
        <h2 className="font-bold leading-tight text-2xl lg:text-3xl mb-3">
          Find the Perfect Card for You
        </h2>
        <p className="text-[#ADB2B1] text-sm lg:text-base text-md max-w-[420px] mb-4">
          Unlocking the Power of Crypto, Both Virtually and Physically. Manage
          your crypto effortlessly and spend it seamlessly with Wern. Our
          virtual card allows for instant and secure online transactions, while
          the physical Wern Card empowers you to convert and spend your crypto
          at millions of merchants worldwide. Experience the flexibility and
          convenience of both options, all within the secure and user-friendly
          Wern ecosystem.
        </p>
        <div>
          <button className="w-fit flex flex-shrink-0 items-center gap-2 px-6 py-2 rounded-full bg-purple-700 text-white font-medium hover:bg-purple-800 transition-all cursor-pointer whitespace-nowrap">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default PerfectCard;