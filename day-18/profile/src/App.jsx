import { useState } from "react";
import Header from "./components/Header";

function App() {

  const [title] = useState("profile for dashboard")
  return ( 
    <>
    <Header dashtitle={title} />
    </>
   );
}

export default App;