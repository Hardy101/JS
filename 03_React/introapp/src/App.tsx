import { MouseEvent } from "react";

function App() {
  const items = [
    "Fish Mooney",
    "Carmine Falcone",
    "Carlile Maroni",
    "Oswald Cobblepot",
    "Jim Gordon",
  ];

  // Event Handler
  const HandleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Lists</h1>
      <ul>
        {items.map((item) => (
          <li key={item} onClick={HandleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
