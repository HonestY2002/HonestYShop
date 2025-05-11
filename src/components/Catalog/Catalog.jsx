import ProductCards from "../ProductCards/ProductCards";
import { product } from "../ProductCards/ProductData";
import { useState } from "react";
import Filters from "../Filters/Filters";

function Catalog() {
  const [filter, setFilter] = useState("all"); // Состояние для фильтра

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter); // Обновляем фильтр
  };

  const filteredProducts = product.filter((prod) => {
    if (filter === "all") return true; // Показываем все продукты
    return prod.category === filter; // Фильтруем по категории
  });

  return (
    <div>
      <Filters onFilterChange={handleFilterChange} />
      <div className="product-catalog">
        {filteredProducts.map((prod) => (
          <ProductCards key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
