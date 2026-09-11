import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Profile from "./components/Profile";

function App() {
  const [toggle, setToggle] = useState(false);
  const [items, setItems] = useState(["Apple", "Banana"]);
  const [counts, setCounts] = useState(0);
  // useEffect(() => {
  //   console.log("Effect C");
  // });
  const addItem = () => {
    setItems((items) => [...items, "Oragnge"]);
  };

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/api/users");
  //     const data = await response.json();

  //     setUsers(data);
  //   }
  //   fetchData()
  // },[]);

  // useEffect(()=>{
  //   const controller = new AbortController()
  //   fetch(url, {
  //     signal:controller.signal,
  //   }).then(response => response.json())
  //   .then(data => setData(data))
  //   .catch((error)=>{
  //     if(error.name !== "AbortError")
  //       console.log(error)
  //   })

  //   return () => controller.abort()
  // },[url])

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Inside an effect with [], we want to
  // Set loading to true.
  // Fetch "/api/users".
  // Store the successful response in users.
  // Store an error message if the request fails.
  // Set loading back to false whether it succeeds or fails.

  // useEffect(() => {
  //   async function fetchUsers() {
  //     try {
  //       setLoading(true);
  //       setError("");
  //       const response = await fetch("/api/users");
  //       if (!response.ok) throw new Error(`Response failed ${response.status}`);
  //       const data = await response.json();
  //       setUsers(data);
  //     } catch (err) {
  //       console.log(err);
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   fetchUsers();
  // }, []);
  return (
    <>
      {/* <button
        onClick={() => setToggle((toggle) => !toggle)}
        style={{ width: "150px" }}
      >
        Show Counter
      </button>
      {toggle && <Counter />} */}
      <Profile />
    </>
  );
}

export default App;
