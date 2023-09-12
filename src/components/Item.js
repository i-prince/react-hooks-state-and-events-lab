import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Create a state variable to track whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Step 2: Define a function to handle the click event on the "Add to Cart" button
  const handleToggleCart = () => {
    // Step 3: Update the state variable when the button is clicked
    setIsInCart(!isInCart);
  };

  // Step 4: Determine the class and button text based on the state
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Step 2: Add an event handler to the button */}
      <button className="add" onClick={handleToggleCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
