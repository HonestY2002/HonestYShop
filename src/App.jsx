import "./App.css";
import Navigate from "./components/Navigate/Navigate";
import ProductCards from "./components/ProductCards/ProductCards";
import { product } from "./components/ProductCards/ProductData";

function App() {
  return (
    <div>
      <main>
        <Navigate />
        <div className="product-catalog">
          {product.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
