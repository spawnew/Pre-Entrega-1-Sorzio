import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);
  
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };


  return (
    <div className="d-flex flex-row-reverse p-4">
      <div>
        <div>
          <button className="btn btn-danger mx-3" onClick={decrement}>
            -
          </button>
          <strong>{count}</strong>
          <button className="btn btn-success mx-3" onClick={increment}>
            +
          </button>
        </div>
        <button className="btn btn-primary mt-4" onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
};