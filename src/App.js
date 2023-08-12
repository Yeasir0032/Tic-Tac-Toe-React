import "./App.css";
import Home from "./Components/Home";

function App() {
  const planets = [
    { name: "Mercury", isGas: false },
    { name: "Earth", isGas: false },
    { name: "Neptune", isGas: true },
    { name: "Uranus", isGas: true },
  ];
  return (
    <div className="App">
      {planets.map((planet, key) => {
        if (planet.isGas) return <h1>{planet.name}</h1>;
      })}
    </div>
  );
}

export default App;
