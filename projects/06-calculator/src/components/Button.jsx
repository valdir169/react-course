import React from "react";

function Button({ onClick, value }) {
  return <button className="p-4 bg-slate-800 rounded-sm border-[1px] border-slate-100" onClick={onClick}>{value}</button>;
}

export default Button;
