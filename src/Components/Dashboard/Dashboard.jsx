import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
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
const NFTBox = ({ imageUrl }) => {
  return (
    <div className="nft-card">
      <img src={imageUrl} alt="" />
    </div>
  );
};

const Dashboard = () => {
  const NFT__DATA = [
    {
      img: "/gift.png",
    },
    {
      img: false,
    },
    {
      img: "/gift.png",
    },
    {
      img: false,
    },
    {
      img: false,
    },
    {
      img: false,
    },
    {
      img: false,
    },
    {
      img: "/gift.png",
    },
    {
      img: "/gift.png",
    },
    {
      img: "/gift.png",
    },
    {
      img: false,
    },
    {
      img: false,
    },
    {
      img: false,
    },
    {
      img: false,
    },
    {
      img: false,
    },
  ];
  const LIVE__FEED = [
    {
      address: "0f129...b6 won",
      time: "Few seconds ago",
      item: "Discord Nitro",
    },
    {
      address: "0f129...b6 won",
      time: "Few seconds ago",
      item: "Discord Nitro",
    },
    {
      address: "0f129...b6 won",
      time: "Few seconds ago",
      item: "Discord Nitro",
    },
    {
      address: "0f129...b6 won",
      time: "Few seconds ago",
      item: "Discord Nitro",
    },
    {
      address: "0f129...b6 won",
      time: "Few seconds ago",
      item: "Discord Nitro",
    },
    {
      address: "0f129...b6 won",
      time: "Few seconds ago",
      item: "Discord Nitro",
    },
    {
      address: "0f129...b6 won",
      time: "Few seconds ago",
      item: "Discord Nitro",
    },
    {
      address: "0f129...b6 won",
      time: "Few seconds ago",
      item: "Discord Nitro",
    },
  ];
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [userData, setUserData] = useState({
    "num-of-opened-boxes": "",
    "last-opened-box": "",
    "num-of-won-items": "",
    "recent-won-items": [
      {
        index: "",
        title: "",
        category: "",
        "image-url": "",
      },
    ],
  });
  const [poolItemInfo, setPoolItemInfo] = useState({
    Reference: "",
    pool: "",
    title: "",
    onChainType: "",
    category: "",
    "opensea-link": "",
    "reward-amount": "",
    "expiration-time": "",
    expired: "",
    supply: "",
    "recent-winners": "",
  });
  const [poolItems, setPoolItems] = useState([]);
  const [sig, setSig] = useState(false);
  useEffect(() => {
    //getting user data
    // axios
    //   .get("/getUserMBdata")
    //   .then((res) => {
    //     setUserData(res.data);
    //   })
    //   .catch((err) => console.log(err));

    //getting pool items
    axios
      .post("https://mb-api-test.colonelbihi.com/mysteryBox/getPoolItems", {
        pool: 0,
        includeExpired: false,
      })
      .then((res) => {
        const items = res.data.items.map((elem) => {
          const id = elem.ref;
          delete elem.ref;
          return { ...elem, id: id };
        });
        setPoolItems(items);
      })
      .catch((err) => console.log(err));

    // getting pool items info
    axios
      .post("https://mb-api-test.colonelbihi.com/mysteryBox/getItemInfo", {
        ref: 100,
      })
      .then((res) => {
        setPoolItemInfo(res.data.item);
      })
      .catch((err) => console.log(err));

    //getting box signature
    // axios
    //   .get("/getBoxSig")
    //   .then((res) => {
    //     setSig(res.data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container height">
      <div className="dashboard">
        <div className="sidebar">
          <h2>Live Feed</h2>
          {LIVE__FEED.map((elem, idx) => {
            return <LiveBox {...elem} key={"live" + idx} />;
          })}
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
                  <input
                    readOnly
                    checked={checkbox1}
                    type="checkbox"
                    id="newest"
                  />
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
                  <input
                    readOnly
                    checked={checkbox2}
                    type="checkbox"
                    id="available"
                  />
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
                  <input
                    readOnly
                    checked={checkbox3}
                    type="checkbox"
                    id="expired"
                  />
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
            {poolItems &&
              poolItems?.map((elem, idx) => {
                return <NFTBox {...elem} key={"box" + idx} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
