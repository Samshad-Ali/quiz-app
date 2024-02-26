
import { useEffect, useState } from "react";
import jsonData from "../utils/data.json";
import { toast } from "react-hot-toast";
const useQuiz = () => {
    const [data, setData] = useState([]);
    const [isscoreBoard, setisScoreBoard] = useState(false);
  const [isSidebar, setIsSidebar] = useState(false);
  const [icon,setIcon] = useState(false);
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
          setIcon(true)
          setScore(score + 1);
          setNextQuestion(nextQuestion + 1);
          setQueNo(queNo + 1);
          toast.success("Great 🎉  ! answer is correct");
        } else {
          setIcon(false)
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
          setIcon(true)
          setNextQuestion(nextQuestion + 1);
          setQueNo(queNo + 1);
          toast.success("Great 🎉  ! answer is correct");
        } else {
          setQueNo(queNo + 1);
          setIcon(false)
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
    isscoreBoard,score,inputValue,setInputValue,data,nextQuestion,setNextQuestion,queNo,submitHandler,isSidebar,setIsSidebar,setQueNo,setIcon,icon
  }
}

export default useQuiz