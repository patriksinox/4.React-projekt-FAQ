import React from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function Otazka({ title, info }) {
  const [rozbalenie, setRozbalenie] = useState(false);
  return (
    <>
      <article>
        <div className="title">
          <h5>{title}</h5>
          <button onClick={() => setRozbalenie(!rozbalenie)}>
            {rozbalenie ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </div>
        {rozbalenie ? <p>{info}</p> : ""}
      </article>
    </>
  );
}

export default Otazka;
