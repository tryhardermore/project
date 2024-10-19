import { useState } from "react";
import "./App.scss";

import "./wrapper-style.scss";
import Wrapper from "./wrapper";

function App() {
  const [count, setCount] = useState(0);

  return <Wrapper />;
}

export default App;
