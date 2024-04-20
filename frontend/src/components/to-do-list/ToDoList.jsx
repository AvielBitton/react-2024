import { useState } from "react";
import styles from "./ToDoList.module.css"; // Import the CSS Module

function ToDoList({ label }) {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className={styles.todoList}>
      <h2>{label}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a new item"
        className={styles.inputField}
      />
      <button onClick={handleAddItem} className={styles.addButton}>
        Add Item
      </button>
      <ul className={styles.itemList}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
