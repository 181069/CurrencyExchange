import classes from './title.module.css';
const Title = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.t1}>The World's Trusted Currency Authority </div>
      <div className={classes.t2}>
        Check exchange rates, send money internationally, and free currency
        tools
      </div>
    </div>
  );
};
export default Title;
