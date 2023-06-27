import Items from "./Items";
import "../assets/styles/TotalProduct.css";
function TotalProduct() {
  return (
    <div className="total-continer">
      <div>
        You have <span>2</span> in the Cart
      </div>
      <div className="total-border"></div>
      <Items />
      <Items />
      <div className="total-price">
        <div>Total:$15.96</div>
        <button>Proceed</button>
      </div>

      <form className="form-cont">
        <input type="text" placeholder="Email"></input>
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Address"></input>
        <input type="submit" value="Check Out" id="submit"></input>
      </form>
    </div>
  );
}
export default TotalProduct;
