import { useState } from "react";

function NonPrimitive() {
  const [items, setItems] = useState([]); // array
  const [user, setUser] = useState({ name: "" }); // object

  function addItem() {
    setItems([...items, "Item " + (items.length + 1)]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }

  return (
    <>
      <h2>Non-Primitive Data Types</h2>

      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="User name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit User</button>
      </form>

      <p>User Name: {user.name}</p>
    </>
  );
}

export default NonPrimitive;
