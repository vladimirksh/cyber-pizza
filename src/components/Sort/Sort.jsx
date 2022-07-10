import React, { useState } from "react";
import up from "../../assets/img/arrow.svg";
import down from "../../assets/img/arrow-down.svg";

function Sort({ sortType, onClickSort }) {
  const [open, setOpen] = useState(false);
  const list = [
    { name: "популярности (убыванию)", sort: "rating", desc: true },
    { name: "популярности (возрастанию)", sort: "rating", desc: false },
    { name: "цене (убыванию)", sort: "price", desc: true },
    { name: "цене (возрастанию)", sort: "price", desc: false },
  ];

  return (
    <div className="sort">
      <div onClick={() => setOpen(!open)} className="sort__label">
        <img src={open ? down : up} alt="Стрелка" />
        <b>Сортировать по:</b>
        <span>{sortType.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => {
                  onClickSort(obj);
                  setOpen(!open);
                }}
                className={sortType.name === obj.name ? "active" : ""}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
