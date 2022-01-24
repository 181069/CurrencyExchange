import classes from './App.module.css';
import Main from './components/firstPart/main/main.component';
import Home from './home/home.component';

function App() {
  return (
    <div className={classes.wrapper}>
      <Home />
      <Main />
    </div>
  );
}

export default App;
