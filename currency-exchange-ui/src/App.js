import "./App.css";
import LiveExchangeRates from "./components/LiveExchangeRates.component";
import NavBar from "./components/NavBar.component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LiveExchangeRates currency={["dummy payload"]}/>
    </div>
  );
}

export default App;
