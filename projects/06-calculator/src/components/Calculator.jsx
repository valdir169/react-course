import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("")
    }
  };

  return (
    <>
      <Display result={result} />

      <div className="grid grid-cols-4 w-full gap-4 pt-4">
        <button
          onClick={clear}
          className="col-span-2 p-4 rounded-md text-2xl bg-blue-700 font-bold hover:bg-blue-600 duration-75"
        >
          Clear
        </button>

        <button
          onClick={backspace}
          className="p-4 text-2xl rounded-md  hover:bg-slate-950  text-blue-400 font-bold shadow-sky-300 shadow-sm duration-75"
        >
          C
        </button>
        <button
          name="/"
          onClick={handleClick}
          className="p-4 text-2xl rounded-md  hover:bg-slate-950  text-blue-400 font-bold shadow-sky-300 shadow-sm duration-75"
          
        >
          &divide;
        </button>
        <button
          name="7"
          onClick={handleClick}
          className="p-4 text-2xl bg-slate-800 rounded-md hover:opacity-70"
        >
          7
        </button>
        <button
          name="8"
          onClick={handleClick}
          className="p-4 text-2xl bg-slate-800 rounded-md hover:opacity-70"
        >
          8
        </button>
        <button
          name="9"
          onClick={handleClick}
          className="p-4 text-2xl bg-slate-800 rounded-md hover:opacity-70"
        >
          9
        </button>
        <button
          name="*"
          onClick={handleClick}
          className="p-4 text-2xl rounded-md  hover:bg-slate-950  text-blue-400 font-bold shadow-sky-300 shadow-sm duration-75"
        >
          &times;
        </button>
        <button
          name="4"
          onClick={handleClick}
          className="p-4 text-2xl bg-slate-800 rounded-md hover:opacity-70"
        >
          4
        </button>
        <button
          name="5"
          onClick={handleClick}
          className="p-4 text-2xl bg-slate-800 rounded-md hover:opacity-70"
        >
          5
        </button>
        <button
          name="6"
          onClick={handleClick}
          className="p-4 text-2xl bg-slate-800 rounded-md hover:opacity-70"
        >
          6
        </button>
        <button
          name="-"
          onClick={handleClick}
          className="p-4 text-2xl rounded-md  hover:bg-slate-950  text-blue-400 font-bold shadow-sky-300 shadow-sm duration-75"
        >
          &ndash;
        </button>
        <button
          name="1"
          onClick={handleClick}
          className="p-4 text-2xl bg-slate-800 rounded-md hover:opacity-70"
        >
          1
        </button>
        <button
          name="2"
          onClick={handleClick}
          className="p-4 text-2xl bg-slate-800 rounded-md hover:opacity-70"
        >
          2
        </button>
        <button
          name="3"
          onClick={handleClick}
          className="p-4 text-2xl bg-slate-800 rounded-md hover:opacity-70"
        >
          3
        </button>
        <button
          name="+"
          onClick={handleClick}
          className="p-4 text-2xl rounded-md  hover:bg-slate-950  text-blue-400 font-bold shadow-sky-300 shadow-sm duration-75"
        >
          +
        </button>
        <button
          name="0"
          onClick={handleClick}
          className="p-4 text-2xl bg-slate-800 rounded-md hover:opacity-80"
        >
          0
        </button>
        <button
          name="."
          onClick={handleClick}
          className="p-4 text-2xl bg-slate-800 rounded-md hover:opacity-70"
        >
          .
        </button>
        <button
          onClick={calculate}
          className="col-span-2 p-4 rounded-md text-2xl bg-blue-700 font-bold hover:bg-blue-600 duration-75"
        >
          =
        </button>
      </div>
    </>
  );
}

export default Calculator;
