import React from "react";
import "./App.css";
import { Table } from "reactstrap";
import ListOfUsers from "./User/ListOfUsers";

function App() {
  // const [users, setUser] = useState([]);

  return (

    <div>
      <h1>Crud React Axios</h1>
      <ListOfUsers />
    </div>

  );
}

export default App;
