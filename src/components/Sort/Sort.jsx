import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortType } from "../../redux/slices/filterSlice";
import up from "../../assets/img/arrow.svg";
import down from "../../assets/img/arrow-down.svg";

function Sort() {
  const sortRef = useRef();
  const [open, setOpen] = useState(false);
  const list = [
    { name: "популярности (убыванию)", sort: "rating", desc: true },
    { name: "популярности (возрастанию)", sort: "rating", desc: false },
    { name: "цене (убыванию)", sort: "price", desc: true },
    { name: "цене (возрастанию)", sort: "price", desc: false },
  ];

  const dispatch = useDispatch();
  const sortType = useSelector((state) => state.filter.sortType);

  const onChangeSort = (obj) => {
    dispatch(setSortType(obj));
    setOpen(!open);
  };

  useEffect(() => {
    const handelClickOutside = (e) => {
      if (!e.path.includes(sortRef.current)) {
        setOpen(false);
      }
    };

    document.body.addEventListener("click", handelClickOutside);

    return () => {
      document.body.removeEventListener("click", handelClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div onClick={() => setOpen(!open)} className="sort__label">
        <img src={open ? down : up} alt="Стрелка" />
        <b>Сортировка:</b>
        <span>{sortType.name}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, i) => (
              <li
                key={i}
                onClick={() => {
                  onChangeSort(obj);
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
