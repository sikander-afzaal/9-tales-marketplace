import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Hero from "./Components/Hero/Hero";
import Prizes from "./Components/Prizes/Prizes";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <div id="prizes" className="bg-2 container">
        <Prizes />
        <Dashboard />
        <Footer />
      </div>
    </div>
  );
};

export default App;
