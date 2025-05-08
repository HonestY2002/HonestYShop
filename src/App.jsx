import "./App.css";
import Navigate from "./components/Navigate/Navigate";
import ProductCards from "./components/ProductCards/ProductCards";
import { product } from "./components/ProductCards/ProductData";
import Filters from "./components/Filters/Filters";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState("all"); // Состояние для фильтра
  const [open, setOpen] = useState(false);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter); // Обновляем фильтр
  };

  const filteredProducts = product.filter((prod) => {
    if (filter === "all") return true; // Показываем все продукты
    return prod.category === filter; // Фильтруем по категории
  });

  return (
    <div>
      <main>
        <Navigate />
        <Filters onFilterChange={handleFilterChange} />
        <div className="product-catalog">
          {filteredProducts.map((prod) => (
            <ProductCards key={prod.id} product={prod} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
