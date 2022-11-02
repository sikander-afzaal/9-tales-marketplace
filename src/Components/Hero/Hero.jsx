import { useState } from "react";
import BuyModal from "../BuyModal/BuyModal";
import OpenChestModal from "../OpenChestModal/OpenChestModal";
import "./Hero.css";

const Hero = () => {
  const [openChestModal, setOpenChestModal] = useState(false);
  const [buyModal, setBuyModal] = useState(false);
  return (
    <div className="container">
      <div className="hero">
        {openChestModal && <OpenChestModal closeModal={setOpenChestModal} />}
        {buyModal && <BuyModal closeModal={setBuyModal} />}
        <img src="/bg1.png" className="hero-bg" alt="" />
        <img
          onClick={() => setOpenChestModal(true)}
          src="/key.png"
          alt=""
          className="key"
        />
        <a href="#prizes" className="scroll-bottom"></a>
        <img
          onClick={() => setBuyModal(true)}
          src="/chest.png"
          alt=""
          className="chest"
        />
        <div className="btn-div">
          <img src="/gold-frame.png" alt="" className="frame" />
          <div className="btn">
            <img src="/btn-frame.png" alt="" />
            <h2>BOXES</h2>
          </div>
          <div className="btn">
            <img src="/btn-frame.png" alt="" />
            <h2>Token</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
