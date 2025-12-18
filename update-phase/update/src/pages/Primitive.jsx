import { useState } from "react";

function Primitive() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isActive,setIsActive] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    setIsActive(true);
  }

  return (
    <>
      <h1>Primitive</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>add</button>
        <p>count: {count}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{name}</p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <button type="submit">Activate</button>
        </form>
        <p>
          Status: {isActive ? "active" : "inactive"}
        </p>
      </div>
    </>
  );
}

export default Primitive;
