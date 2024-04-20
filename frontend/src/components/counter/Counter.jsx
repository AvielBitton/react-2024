import { useState } from "react";
import styles from "./Counter.module.css"; // Import the CSS Module

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <div className={styles.buttonGroup}>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
