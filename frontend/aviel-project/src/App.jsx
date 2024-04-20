import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [formData, setFormData] = useState({});

  const fetchApi = async () => {
    const response = await axios.get("http://127.0.0.1:8090/api/users");
    console.log(response.data.users);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://127.0.0.1:5000/post-form", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   console.log(await response.json());
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
