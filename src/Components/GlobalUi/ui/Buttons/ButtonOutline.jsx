import React from "react";

function ButtonOutline({ text, link }) {
  return (
    <button
      className="bg-transparent py-2 px-8 rounded-xl border-2 border-black text-black"
    >
      {text}
    </button>
  );
}

export default ButtonOutline;
