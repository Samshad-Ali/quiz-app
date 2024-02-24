import React, { useEffect, useState } from "react";
import jsonData from "../utils/data.json";
import { toast } from "react-hot-toast";
import Scorecard from "./Scorecard";
const Card = () => {
  const [data, setData] = useState([]);
  const [isscoreBoard, setisScoreBoard] = useState(false);
  const [queNo, setQueNo] = useState(1);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const submitHandler = () => {
    if (inputValue.trim().length <= 0)
    return toast.error("Enter some value...!");
    if (nextQuestion>=9 ) {
      setisScoreBoard(true);
      if (
        data[nextQuestion]?.answers.includes(
          inputValue.toLocaleLowerCase().trim()
        )
      ) {
        setScore(score + 1);
        setNextQuestion(nextQuestion + 1);
        setQueNo(queNo + 1);
        toast.success("Great 🎉  ! answer is correct");
      } else {
        setQueNo(queNo + 1);
        setNextQuestion(nextQuestion + 1);
        toast.error("Oops ❌ ! answer is incorrect");
      }
    } else {
      if (
        data[nextQuestion]?.answers.includes(
          inputValue.toLocaleLowerCase().trim()
        )
      ) {
        setScore(score + 1);
        setNextQuestion(nextQuestion + 1);
        setQueNo(queNo + 1);
        toast.success("Great 🎉  ! answer is correct");
      } else {
        setQueNo(queNo + 1);
        setNextQuestion(nextQuestion + 1);
        toast.error("Oops ❌ ! answer is incorrect");
      }
    }
    setInputValue("");
  };
  useEffect(() => {
    setData(jsonData);
  }, []);
  return (
    <>
      {isscoreBoard && <Scorecard setisScoreBoard={setisScoreBoard} score={score} />}
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
