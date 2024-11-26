import ListGroup from "./components/ListGroup";
import { useState } from "react";

function App() {
  const names = [
    "Fish Mooney",
    "Carmine Falcone",
    "Sal Maroni",
    "Oswald Cobblepot",
    "Jim Gordon",
  ];
  const handleSelectItem = (item: String) => {
    console.log(item);
  };
  return (
    <>
      <ListGroup
        items={names}
        heading="Gotham Favourites"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
