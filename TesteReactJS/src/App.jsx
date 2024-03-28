import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./App.css";

import Paginas from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Paginas />
    </div>
  );
}

export default App;
