import { useContext, useState } from "react";
import Quizinput from "./Quizinput";
import { dummydata } from "../assets/data";
import Gameover from "./Gameover";
import { context } from "../utils/ContextWrapper";

const QuizBox = () => {
  const { datas } = useContext(context);
  const [queNo, setQueNo] = useState(0);
  const [ans, setAns] = useState({});
  const [score, setScore] = useState(0);
  const handleAnswer = () => {
    if (ans.isCorrect) {
      setScore(score + 1);
      setQueNo(queNo + 1);
    } else {
      setQueNo(queNo + 1);
    }
  };

  return (
    <div className="h-[89vh] w-full flex flex-col gap-4 justify-center items-center">
      {datas.length === queNo ? (
        <Gameover score={score} setScore={setScore} setQueNo={setQueNo} />
      ) : datas.length > 0 ? (
        <div className="bg-white p-2 rounded-md flex flex-col gap-3">
          <div className="flex gap-2">
            <span className="font-semibold">
              {queNo + 1}/ {datas.length}
            </span>
            <p className="font-semibold">{datas[queNo].question}</p>
          </div>
          <div className="flex flex-wrap gap-4 p-2 border rounded-md">
            {datas[queNo]?.options?.map((item) => {
              return (
                <p
                  key={item.option}
                  onClick={() => {
                    setAns(item);
                  }}
                  className=" cursor-pointer hover:bg-gray-200 font-semibold rounded-md border p-2 px-4"
                >
                  {item.option}
                </p>
              );
            })}
          </div>
          <button
            className="bg-yellow-500 text-black px-4 p-1 rounded-md"
            onClick={handleAnswer}
          >
            Submit
          </button>
        </div>
      ) : (
        <p>no data available, add some data </p>
      )}
    </div>
  );
};

export default QuizBox;
