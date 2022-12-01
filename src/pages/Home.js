import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((data) => setUsers(data))
      .catch(console.log);
  }, []);

  return (
    <div className="App">
      <Link data-testid="link" to={"/about"}>
        /About
      </Link>
      <h1 data-testid="title"> My App</h1>
      <hr />
      <h2>Counter</h2>
      <p data-testid="counter-elem">Counter: {counter}</p>
      <button data-testid="counter-btn" onClick={handleCounter}>
        {" "}
        Inc
      </button>
      <hr />
      <h2>Form</h2>
      <form>
        <input
          data-testid="input-name"
          type={"text"}
          value={name}
          onChange={handleNameChange}
        />
      </form>
      <hr />
      <h2>User Data</h2>
      <ul data-testid="user-container">
        {users.map((user) => {
          return (
            <li data-testid="user-item" key={user.id}>
              {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
