import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type CategoriesProps = {
  onChangeCategory: (id: number) => void;
};

const Categories: React.FC<CategoriesProps> = React.memo(
  ({ onChangeCategory }) => {
    const categories = [
      "Все",
      "Мясные",
      "Вегетарианская",
      "Гриль",
      "Острые",
      "Закрытые",
    ];

    const categoryId = useSelector(
      (state: RootState) => state.filter.categoryId
    );

    return (
      <div className="categories">
        <ul>
          {categories.map((categorie, i) => (
            <li
              onClick={() => {
                onChangeCategory(i);
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
);

export default Categories;
