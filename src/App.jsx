import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./components/Data";

function App() {
  const dataCards = Data.map((item) => {
    return <Card id={item.key} item={item} />;
  });

  return (
    <div className="App">
      <Navbar />
      {dataCards}
    </div>
  );
}

export default App;
