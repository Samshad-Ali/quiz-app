
import { useEffect, useState } from "react";
import jsonData from "../utils/data.json";
import { toast } from "react-hot-toast";
const useCard = () => {
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
  return {
    isscoreBoard,score,inputValue,setInputValue,data,nextQuestion,queNo,submitHandler
  }
}

export default useCard