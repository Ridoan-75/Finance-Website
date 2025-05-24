import React from "react";
import debitcard from "../assets/debit-card.svg";

function DebitCard() {
  return (
    <section className="flex flex-col-reverse sm:flex-row gap-10 lg:gap-2.5 xl:gap-8 justify-between items-center">
      <div className="w-full sm:w-1/2">
  <h2 className="font-bold leading-tight text-2xl lg:text-3xl mb-3">Wern Debit Card</h2>
  <p className="text-[#ADB2B1] text-sm lg:text-base max-w-[420px] mb-4">
    More than just a card, it's a bridge to a new financial experience.
    Embrace the simplicity and security of spending your Cardano with the
    Wern Card.
  </p>
  <div>
    <button className="w-fit flex flex-shrink-0 items-center gap-2 px-6 py-2 rounded-full bg-purple-700 text-white font-medium hover:bg-purple-800 transition-all cursor-pointer whitespace-nowrap">
      Create New Card
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
    <p className="text-[#772AB3] font-semibold py-2 px-4">Will be available soon</p>
  </div>
</div>
      <img className="sm:w-1/2" src={debitcard} alt=""/>
    </section>
  );
}

export default DebitCard;