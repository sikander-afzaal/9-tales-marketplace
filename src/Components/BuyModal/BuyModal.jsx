import { useState } from "react";
import "./BuyModal.css";

const BuyModal = ({ closeModal }) => {
  const [buy, setBuy] = useState(false);
  return (
    <>
      <div className="note">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <img src="/note-frame.png" alt="" />
      </div>
      <div onClick={() => closeModal(false)} className="overlay"></div>
      <div className="buy-modal">
        <img src="/buy-bg.png" className="buy-bg" alt="" />
        <h2 className="katibeh">KEY OPENED</h2>
        <img src="/chest-buy.png" alt="" className="chest-buy" />
        <div className="bottom-modal">
          <img className="bg-bottom" src="/buy-bottom.png" alt="" />
          <img src="/plus.png" alt="" className="plus" />
          <img src="/minus.png" alt="" className="minus" />
          <h3 className="first-h3 katibeh">XX Boxes</h3>
          <h3 className="second-h3 katibeh">Cost Per Box</h3>
          <h3 className="third-h3 katibeh">Total Amount</h3>
          {buy ? (
            <img src="/loader.gif" alt="" className="loader-buy" />
          ) : (
            <h4
              onClick={() => {
                setBuy(true);
                setTimeout(() => {
                  setBuy(false);
                }, 3000);
              }}
              className="buy-text katibeh"
            >
              Buy
            </h4>
          )}
        </div>
      </div>
    </>
  );
};

export default BuyModal;
