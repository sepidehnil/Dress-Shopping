import Card from "./Components/Card";
import TotalProduct from "./Components/TotalProduct";

function App() {
  return (
    <div>
      <header className="header">
        <div>React Shopping Cart</div>
      </header>

      <section className="main-filters">
        <div>6 Products</div>

        <div className="order">
          <label>Order</label>
          <select>
            <option>Lowest</option>
            <option>Highest</option>
          </select>
        </div>

        <div className="filter">
          <label>Filter</label>
          <select>
            <option>All</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
            <option>XXL</option>
          </select>
        </div>
      </section>
      <div className="border"></div>
      <Card />
      <TotalProduct />
      <footer>All right is reserved</footer>
    </div>
  );
}

export default App;
