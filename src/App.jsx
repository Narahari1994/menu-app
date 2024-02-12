import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Category from "./Category";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuData, setMenuData] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuData(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenuData(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Category categories={categories} filterItems={filterItems} />
        <Menu menuData={menuData} />
      </section>
    </main>
  );
};
export default App;
