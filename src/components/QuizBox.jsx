import React from "react";
import Card from "./Card";
import Sidebar from "./Sidebar";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import useQuiz from "../hooks/useQuiz";

const QuizBox = () => {
  const {
    setIsSidebar,
    isSidebar,
    setNextQuestion,
    score,
    inputValue,
    setInputValue,
    data,
    nextQuestion,
    queNo,
    submitHandler,
    isscoreBoard,
    setQueNo,icon
  } = useQuiz();
  return (
    <div className="h-[89vh] w-full flex overflow-hidden">
      <div
        className={`${
          isSidebar ? "translate-x-0 block " : "-translate-x-[150%] hidden"
        } transition-all h-full bg-blue-100 p-2`}
      >
        <Sidebar
          nextQuestion={nextQuestion}
          setNextQuestion={setNextQuestion}
          data={data}
          setQueNo={setQueNo}
          inputValue={inputValue}
          icon={icon}
        />
      </div>
      <div className="flex-1  h-full flex justify-center items-center relative">
        <span
          className="p-3 shadow-md rounded-full bg-white absolute top-5 left-5"
          onClick={() => {
            setIsSidebar(!isSidebar);
          }}
        >
          {isSidebar ? <FaAngleLeft /> : <FaAngleRight />}
        </span>

        <Card
          isscoreBoard={isscoreBoard}
          score={score}
          inputValue={inputValue}
          setInputValue={setInputValue}
          data={data}
          nextQuestion={nextQuestion}
          queNo={queNo}
          submitHandler={submitHandler}
        />
      </div>
    </div>
  );
};

export default QuizBox;
