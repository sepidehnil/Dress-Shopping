import "../assets/styles/Items.css";
function Items() {
  const count = 1;
  return (
    <div className="items-description">
      <img
        src="../img/dress2.jpg"
        alt="long-dress"
        width="100px"
        height="130px"
      ></img>

      <div>
        <div>Midi sundress with shirring detail</div>
        <div className="total-prices">
          <div>
            $29.9 x <span>{count}</span>
          </div>
          <button className="manage-items">Remove</button>
        </div>
      </div>
    </div>
  );
}
export default Items;
