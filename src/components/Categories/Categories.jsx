import React, { useState } from "react";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categorie, i) => (
          <li
            onClick={() => {
              onClickCategory(i);
            }}
            key={i}
            className={activeIndex === i ? "active" : ""}
          >
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
