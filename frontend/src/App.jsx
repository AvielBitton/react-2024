import { useEffect, useState } from "react";
import axios from "axios";
import UserTable from "./components/user-table/UserTable";
import Counter from "./components/counter/Counter";
import ToDoList from "./components/to-do-list/ToDoList";

function App() {
  const [users, setUsers] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const getUsersData = async () => {
      const fetchedUsers = await axios.get("http://127.0.0.1:8090/api/users");
      setUsers(fetchedUsers.data.users);
    };

    getUsersData();
  }, []);

  const handleButton = () => {
    setShowData(!showData);
  };

  return (
    <div>
      <ToDoList label={"To Do"} />
      <ToDoList label={"Not To Do"} />
      <Counter />
      <button onClick={handleButton}>Show Data</button>
      {showData && <UserTable users={users} />}
    </div>
  );
}

export default App;
