import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // Step 2: Create a state variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 3: Define an event handler for the dark mode button
  const toggleDarkMode = () => {
    // Step 4: Update the state variable when the button is clicked
    setIsDarkMode(!isDarkMode);
  };

  // Step 5: Use the state variable to conditionally set the className
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/* Step 3: Add an event handler to the dark mode button */}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

