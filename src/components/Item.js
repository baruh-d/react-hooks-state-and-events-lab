import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setCart] = useState(false)
  const buttonText = addToCart ? "Add to Cart" : "Remove From Cart"
  function toggleCart(){
    setCart((buttonText)=>!buttonText);
  }
  const listItemClassName = addToCart ? "in-cart" : ""
  return (
    <li className={listItemClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{buttonText}</button>
    </li>
  );
}

export default Item;
