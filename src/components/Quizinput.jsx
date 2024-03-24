import React, { useContext, useDebugValue, useState } from "react";
import { context } from "../utils/ContextWrapper";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "./Input";
const shcema = yup.object({
  question: yup.string().required(),
  option1: yup.string().required(),
  option2: yup.string().required(),
  option3: yup.string().required(),
  option4: yup.string().required(),
  isCorrect1: yup.boolean(),
  isCorrect2: yup.boolean(),
  isCorrect3: yup.boolean(),
  isCorrect4: yup.boolean(),
});
const Quizinput = () => {
  const { datas, setDatas } = useContext(context);
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(shcema),
  });

  const onsubmit = (data) => {
  
      const {
        isCorrect1,
        isCorrect2,
        isCorrect3,
        isCorrect4,
        option1,
        option2,
        option3,
        option4,
        question,
      } = data;
      const obj = {
        question: question,
        options: [
          { option: option1, isCorrect: isCorrect1 },
          { option: option2, isCorrect: isCorrect2 },
          { option: option3, isCorrect: isCorrect3 },
          { option: option4, isCorrect: isCorrect4 },
        ],
      };
      setDatas([...datas,obj])
      reset();

  };
  return (
    <div className="flex justify-center items-center flex-col">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="bg-white p-2 w-[500px] rounded-md flex flex-col gap-4"
      >
        <Input
          type={"text"}
          register={register}
          name={"question"}
          placeholder={"Question"}
        />
        <div className="flex flex-col gap-2 w-full">
          <div className="flex w-full gap-2">
            <div className="flex gap-2">
              <Input
                type={"text"}
                placeholder={"Option 1"}
                register={register}
                name={"option1"}
              />
              <Input
                type={"checkbox"}
                register={register}
                name={"isCorrect1"}
              />
            </div>{" "}
            <div className="flex gap-2">
              <Input
                type={"text"}
                placeholder={"Option 2"}
                register={register}
                name={"option2"}
              />
              <Input
                type={"checkbox"}
                register={register}
                name={"isCorrect2"}
              />
            </div>{" "}
          </div>
          <div className="flex w-full gap-2">
            <div className="flex gap-2">
              <Input
                type={"text"}
                placeholder={"Option 3"}
                register={register}
                name={"option3"}
              />
              <Input
                type={"checkbox"}
                register={register}
                name={"isCorrect3"}
              />
            </div>{" "}
            <div className="flex gap-2">
              <Input
                type={"text"}
                placeholder={"Option 4"}
                register={register}
                name={"option4"}
              />
              <Input
                type={"checkbox"}
                register={register}
                name={"isCorrect4"}
              />
            </div>
          </div>
        </div>
        {
          errors && <span>{errors.message}</span>
        }
        <button
          onClick={handleSubmit(onsubmit)}
          className="bg-green-500 text-black w-fit self-center px-6 p-1 rounded-md hover:bg-green-600"
        >
          Submit
        </button>
      </form>
      <p className="text-center text-red-500 mt-5">
        Add aleast 2 Question to Play the game.
      </p>
      {datas.length >= 2 && (
        <Link className="bg-yellow-500 rounded-md px-4 p-2 my-4" to="/quiz">
          Click here to play
        </Link>
       )} 
    </div>
  );
};

export default Quizinput;
