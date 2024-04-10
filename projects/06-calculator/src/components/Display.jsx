import React from "react";

function Display({result}) {

  return (
    <form className="w-full">
      <input type="text" value={result} className="bg-slate-950 text-blue-400 text-right p-2 h-24 rounded-md text-xl w-full space-x-1" readOnly />
    </form>
  );
}

export default Display;
