import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Step 2: Create a state variable for selectedCategory
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 3: Define a function to handle the change event on the <select> element
  const handleCategoryChange = (event) => {
    // Update the selectedCategory state when the value changes
    setSelectedCategory(event.target.value);
  };

  // Step 4: Use the selectedCategory to filter the items
  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Step 3: Add an event handler to the <select> element */}
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* Step 4: Map over the filteredItems array */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

