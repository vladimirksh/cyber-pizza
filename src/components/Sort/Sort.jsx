import React, { useState } from "react";
import up from "../../assets/img/arrow.svg";
import down from "../../assets/img/arrow-down.svg";

function Sort() {
  const [open, setOpen] = useState(false);
  const list = ["популярности", "цене", "алфавиту"];
  const [selected, setSelected] = useState(0);

  return (
    <div className="sort">
      <div onClick={() => setOpen(!open)} className="sort__label">
        <img src={open ? down : up} alt="Стрелка" />
        <b>Сортировка по:</b>
        <span>{list[selected]}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((name, i) => (
              <li
                key={i}
                onClick={() => {
                  setSelected(i);
                  setOpen(!open);
                }}
                className={selected === i ? "active" : ""}
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
