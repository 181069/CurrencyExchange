import Exchange from "../exchange/exchange.component";
import Title from "../title/title.component";
import classes from './main.module.css';

const Main =(props) => {
    return (
      <div className={classes.wrapper}>
          <Title />
          <Exchange submitEmail={props.submitEmail}/>
      </div>
    );
}
export default Main;
