import "../assets/styles/Card.css";
import Order from "./Order";
const list = [
  {
    id: 1,
    title: "Frill mini dress in yellow polka dot",
    img: "../img/dress1 (1).jpg",
    price: 10.9,
  },
  {
    id: 2,
    title: "Midi dress in pink ditsy floral",
    img: "../img/dress2.jpg",
    price: 14.9,
  },
  {
    id: 3,
    title: "Midi sundress with ruched front",
    img: "../img/dress3.jpg",
    price: 18.9,
  },
  {
    id: 4,
    title: "cami maxi dress in polka dot",
    img: "../img/dress4.jpg",
    price: 49.9,
  },
  {
    id: 5,
    title: "Midi sundress with shirring detail",
    img: "../img/dress5.jpg",
    price: 79.9,
  },
  {
    id: 6,
    title: "Midi sundress with shirring detail",
    img: "../img/dress6.jpg",
    price: 29.9,
  },
];
function Card() {
  return (
    <div className="card-container">
      {list.map((items) => (
        <Order productObj={items} />
      ))}
    </div>
  );
}
export default Card;
