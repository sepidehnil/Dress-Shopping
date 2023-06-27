function Order(props) {
  console.log(props);
  return (
    <div className="card">
      <img
        src={props.productObj.img}
        alt="long-dress"
        width="400px"
        height="500px"
      />
      <div className="dress-description">{props.productObj.title}</div>
      <div className="add-to-card">
        <div>
          <span>$</span>
          <span>{props.productObj.price}</span>
        </div>
        <button className="add-btn">Add To Card</button>
      </div>
    </div>
  );
}
export default Order;
