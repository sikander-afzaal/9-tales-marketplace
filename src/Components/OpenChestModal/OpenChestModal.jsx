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
      <div className="overlay" onClick={() => closeModal(false)}></div>
      <div className="open-modal">
        <img src="/modal-bg.png" className="modal-bg" alt="" />
        {chestOpened ? (
          <div className="opened-chest">
            <img src="/chest-open" className="opened-chest" alt="" />
            <img src="/ps5.png" className="gift" alt="" />
          </div>
        ) : (
          <img src="/chest-modal.png" className="modal-chest" alt="" />
        )}
        <div onClick={() => setLoader(true)} className="open-chest">
          <img src="/open-btn.png" alt="" />
          {loader ? (
            <img className="loader" src="/loader.gif" />
          ) : (
            <h2>Open</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default OpenChestModal;
