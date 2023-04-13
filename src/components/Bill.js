import React, { useState } from 'react';

function Bill() {
  const [customerName, setCustomerName] = useState('');
  const [billItems, setBillItems] = useState([{ product: '', quantity: 1 }]);

  const handleAddItem = () => {
    setBillItems([...billItems, { product: '', quantity: 1 }]);
  };

  const handleProductChange = (index, event) => {
    const newItems = [...billItems];
    newItems[index].product = event.target.value;
    setBillItems(newItems);
  };

  const handleQuantityChange = (index, event) => {
    const newItems = [...billItems];
    newItems[index].quantity = event.target.value;
    setBillItems(newItems);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { customerName, billItems };
    console.log(data);
    // You can now use 'data' to save the bill data to your state or send it to your server.
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Customer Name:
        <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
      </label>
      {billItems.map((item, index) => (
        <div key={index}>
          <label>
            Product:
            <input type="text" value={item.product} onChange={(e) => handleProductChange(index, e)} />
          </label>
          <label>
            Quantity:
            <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(index, e)} />
          </label>
        </div>
      ))}
      <button type="button" onClick={handleAddItem}>Add More Item</button>
      <button type="submit">Create Bill</button>
    </form>
  );
}

export default Bill;