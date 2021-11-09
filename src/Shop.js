import React, { useState, useEffect } from "react";


function Shop() {
  {/* it may be better to track state of cart and cart items with context API */}
  const [ itemsInCart, setItemsInCart ] = useState([]);

  return (
    <div>
      <h1>Time to shop!</h1>
    </div>
  );
}

export default Shop;