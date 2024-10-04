import { useState, useEffect } from "react";
import "./App.css";

export default function () {
  const [items, setItems] = useState([]);
  const [foxes, setFoxes] = useState([]);
  //Example from workshop
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  //Testing using foxes API
  useEffect(() => {
    async function fetchData2() {
      const response = await fetch("https://randomfox.ca/floof/");

      const data = await response.json();
      setFoxes(data);
    }
    fetchData2();
  }, []);

  return (
    <div>
      <h2>Fox</h2>
      <img width={400} height={300} src={foxes.image}></img>
      <h1>Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
