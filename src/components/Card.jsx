import React from "react";
import Scorecard from "./Scorecard";
import useCard from "../hooks/useCard";
const Card = () => {
    const {isscoreBoard,score,inputValue,setInputValue,data,nextQuestion,queNo,submitHandler  } = useCard();
  return (
    <>
      {isscoreBoard && <Scorecard score={score} />}
      <div className="bg-white min-w-[300px] max-w-[600px] p-4 shadow-sm flex flex-col gap-2 rounded-md shadow-gray-300">
        <p className="text-center font-bold text-blue-950">Quiz App</p>
        <p className="text-lg font-semibold">Question {queNo}</p>
        <p className="text-sm"> {data[nextQuestion]?.question} </p>
        <div>
          <p className="text-sm font-semibold">Answer</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-3">
            <input
              className="outline-none border p-1 pl-2 rounded-md"
              type="text"
              required={true}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <button
              className={` ${
                nextQuestion >= 10 ? "cursor-not-allowed" : "cursor-pointer"
              } font-semibold bg-[#022295] p-1 text-white px-8  rounded-md`}
              disabled={nextQuestion >= 10}
              onClick={submitHandler}
            >
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
