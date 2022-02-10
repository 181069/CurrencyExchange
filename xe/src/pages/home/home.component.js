import Header from "../../components/firstPart/header/header.component";
import Main from "../../components/firstPart/main/main.component";
import LiveExchange from "../../components/secondPart/live-exchange/liveExchange.component";

const Home = () => {
  return (
    <div>
      <Header />
      <Main />

      <LiveExchange />
    </div>
  );
};

export default Home;
