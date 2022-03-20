import "./App.css";
import Device from "./Component/Device/Device";
import Watch from "./Component/Watch/Watch";

function App() {
  return (
    <div className="App">
      <Device name="Laptop" price="78000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
