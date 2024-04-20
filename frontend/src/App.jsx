import { useState } from "react";
import Counter from "./components/counter/Counter";
import ToDoList from "./components/to-do-list/ToDoList";

function App() {
  const [showToDoList, setShowToDoList] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowToDoList(!showToDoList);
        }}
      >
        {showToDoList ? "not show" : " show"} to do list
      </button>
      {showToDoList && (
        <>
          <ToDoList label={"To Do"} />

          <ToDoList label={"Not To Do"} />
        </>
      )}

      <Counter />
    </div>
  );
}

export default App;
