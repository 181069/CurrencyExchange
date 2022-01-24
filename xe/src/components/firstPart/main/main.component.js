import Exchange from "../exchange/exchange.component";
import Title from "../title/title.component";
import classes from './main.module.css';

const Main =() => {
    return (
      <div className={classes.wrapper}>
          <Title />
          <Exchange />
      </div>
    );
}
export default Main;
