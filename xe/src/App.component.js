import classes from "./App.module.css";
import Home from "./pages/home/home.component";

function App() {
  return (
    <div className={classes.wrapper}>
      <Home />
    </div>
  );
}

export default App;
