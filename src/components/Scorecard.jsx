import React from "react";
import { IoClose } from "react-icons/io5";
import trophy from "../assets/trophy.gif";
const Scorecard = ({ score }) => {
  return (
    <div className="w-72 absolute  sm:top-[30%] z-10 items-center bg-blue-950 text-white rounded-md shadow-md shadow-gray-200 flex flex-col gap-2 p-2">
      <p className="text-sm font-semibold text-center">Scorecard</p>

      <h2 className="text-lg font-bold mt-2">Congratulation !</h2>
      <img className="w-36 rounded-full" src={trophy} />
      <p className="text-sm font-semibold">You scored</p>
      <p className="text-xl font-bold">{`${score} / 10`}</p>
      <button
        className="bg-white px-4 p-1 text-blue-950 rounded-sm mt-1 uppercase text-sm font-semibold"
        onClick={() => {
          window.location.reload();
        }}
      >
        Play Again
      </button>
    </div>
  );
};

export default Scorecard;
