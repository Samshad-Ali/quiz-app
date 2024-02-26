import React from "react";
import { RxCross2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";

const Sidebar = ({ nextQuestion, setQueNo, data, setNextQuestion,inputValue,icon }) => {
    const handleQuestion=(i)=>{
        console.log(nextQuestion)
        setQueNo(i+1)
        setNextQuestion(i)
    }
console.log(icon)
  return (
    <div className="bg-white p-2 w-[250px] flex flex-col gap-4 rounded-md">
      <p className="font-semibold">Assignment Title here</p>
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <span>Questions:</span>
        <span>10 questions</span>
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        {data?.map((item, i) => (
          <p className="border px-4  rounded-md flex items-center gap-2 flex-row-reverse cursor-pointer"
          onClick={()=>{handleQuestion(i)}}
          >
            {i + 1} { icon ?<TiTick color="green" />: <RxCross2 color="red" />}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
