import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../../redux/slices/filterSlice";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

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

export default Categories;
