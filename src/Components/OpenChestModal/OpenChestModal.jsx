import { useEffect, useState } from "react";
import "./OpenChestModal.css";

const OpenChestModal = ({ closeModal }) => {
  const [loader, setLoader] = useState(false);
  const [chestOpened, setChestOpened] = useState(false);
  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
        setChestOpened(true);
      }, 3000);
    }
  }, [loader]);

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
      <div className="overlay" onClick={() => closeModal(false)}></div>
      <div className="open-modal">
        <img src="/modal-bg.png" className="modal-bg" alt="" />
        {chestOpened ? (
          <div className="opened-chest">
            <img src="/chest-open.png" className="chest-open" alt="" />
            <img src="/ps5.png" className="gift" alt="" />
          </div>
        ) : (
          <img src="/chest-modal.png" className="modal-chest" alt="" />
        )}
        <div
          onClick={() => {
            if (chestOpened) {
              closeModal(false);
            } else {
              setLoader(true);
            }
          }}
          className="open-chest"
        >
          <img src="/open-btn.png" alt="" />
          {loader ? (
            <img className="loader" src="/loader.gif" />
          ) : (
            <h2 className="katibeh">{chestOpened ? "Close" : "Open"}</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default OpenChestModal;
