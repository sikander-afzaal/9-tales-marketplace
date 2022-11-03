import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Dashboard.css";

const LiveBox = ({ address, time, item }) => {
  return (
    <div className="purchase-box">
      <div>
        <h4>{address}</h4>
        <p>{time}</p>
      </div>
      <h3>{item}</h3>
    </div>
  );
};
const NFTCard = ({ img }) => {
  return <div className="nft-card">{img && <img src={img} alt="" />}</div>;
};

const Dashboard = () => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  return (
    <div className="container">
      <div className="dashboard">
        <div className="sidebar">
          <h2>Live Feed</h2>
          <LiveBox
            address={"0f129...b6 won"}
            time={"Few seconds ago"}
            item={"Discord Nitro"}
          />
          <LiveBox
            address={"0f129...b6 won"}
            time={"Few seconds ago"}
            item={"Discord Nitro"}
          />
          <LiveBox
            address={"0f129...b6 won"}
            time={"Few seconds ago"}
            item={"Discord Nitro"}
          />
          <LiveBox
            address={"0f129...b6 won"}
            time={"Few seconds ago"}
            item={"Discord Nitro"}
          />
          <LiveBox
            address={"0f129...b6 won"}
            time={"Few seconds ago"}
            item={"Discord Nitro"}
          />
          <LiveBox
            address={"0f129...b6 won"}
            time={"Few seconds ago"}
            item={"Discord Nitro"}
          />
        </div>
        <div className="main-dash">
          <div className="top-bar">
            <div className="left-bar">
              <div className="input-div">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" placeholder="Search..." />
              </div>
              <select>
                <option value="All">All</option>
                <option value="All">All</option>
                <option value="All">All</option>
              </select>
              <div className="check-box">
                <div
                  onClick={() => setCheckbox1((prev) => !prev)}
                  className="check check1"
                >
                  <input checked={checkbox1} type="checkbox" id="newest" />
                  <img src="/tick.png" className="img1" alt="" />
                </div>
                <label htmlFor="newest">Newest First</label>
              </div>
              <div className="check-box">
                <div
                  onClick={() => setCheckbox2((prev) => !prev)}
                  className="check check2"
                >
                  {" "}
                  <input checked={checkbox2} type="checkbox" id="available" />
                  <img className="img2" src="/tick.png" alt="" />
                </div>
                <label htmlFor="available">Available</label>
              </div>
              <div className="check-box">
                <div
                  onClick={() => setCheckbox3((prev) => !prev)}
                  className="check check3"
                >
                  {" "}
                  <input checked={checkbox3} type="checkbox" id="expired" />
                  <img className="img3" src="/tick.png" alt="" />
                </div>
                <label htmlFor="expired">Expired</label>
              </div>
            </div>
            <div className="per-page">
              <select id="page">
                <option value="20">20</option>
                <option value="20">21</option>
                <option value="20">22</option>
                <option value="20">23</option>
              </select>
              <label htmlFor="page">items per page</label>
            </div>
          </div>
          <div className="nft-cards">
            <NFTCard />
            <NFTCard img={"/gift.png"} />
            <NFTCard />
            <NFTCard img={"/gift.png"} />
            <NFTCard img={"/gift.png"} />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
            <NFTCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
