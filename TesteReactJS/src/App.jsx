import { useState } from "react";

import "./App.css";
import UserList from "./components/Userlist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserList></UserList>
    </>
  );
}

export default App;
