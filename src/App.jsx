import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Hero from "./Components/Hero/Hero";
import Prizes from "./Components/Prizes/Prizes";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

const App = () => {
  const [poolInfo, setPoolInfo] = useState(false);

  useEffect(() => {
    //getting pool info
    axios
      .post("https://mb-api-test.colonelbihi.com/mysteryBox/getPoolInfo", {
        pool: 0,
      })
      .then((res) => {
        // console.log(res.data);
        setPoolInfo(res.data.pool);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <div className="bg-2 container">
        <Prizes />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
};

export default App;
