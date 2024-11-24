function App() {
  const items = [
    "Fish Mooney",
    "Carmine Falcone",
    "Carlile Maroni",
    "Oswald Cobblepot",
    "Jim Gordon",
  ];
  return (
    <>
      <h1>Lists</h1>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
