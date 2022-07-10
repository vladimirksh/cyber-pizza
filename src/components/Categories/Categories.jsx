import React, { useState } from "react";

function Categories({ categoryId, onClickCategory }) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categorie, i) => (
          <li
            onClick={() => {
              onClickCategory(i);
            }}
            key={i}
            className={categoryId === i ? "active" : ""}
          >
            {categorie}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
