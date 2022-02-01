import logo from './logo.png';
import classes from './header.module.css'

const Header =() => {
    return (
      <div className={classes.wrapper}>
        
          <div className={classes.image}>
            <img src={logo} alt="an error" className={classes.img} />
          </div>
          <div>
            <button className={classes.converter}>Converter</button>
            <button className={classes.send}>Send money</button>
            <button className={classes.bus}>Business & API</button>
            <button className={classes.tools}>Tools</button>
            <button className={classes.res}>Resources</button>
          </div>
          <div className={classes.btns}>
            <button className={classes.sign}>Sign in</button>
            <button className={classes.get}>Get the App</button>
          </div>
        
      </div>
    );
}
export default Header;
