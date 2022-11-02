import "./Prizes.css";

const Prizes = () => {
  return (
    <div id="prizes" className="prizes container">
      <div className="prize-div">
        <div className="left-patt">
          <img src="/left.png" alt="" />
        </div>
        <div className="right-patt">
          <img src="/right.png" alt="" />
        </div>
        <h2 className="karantina">Prize Pool</h2>
        <div className="prizes-pool">
          <div className="prize">
            <img src="/gift.png" alt="" />
            <p>
              435 <span>Gift</span>
            </p>
          </div>
          <div className="prize">
            <img src="/ps5.png" alt="" />
            <p>
              3 <span>Play Station 5</span>
            </p>
          </div>
          <div className="prize">
            <img src="/money.png" alt="" />
            <p>
              $50.000 <span className="block">Total Value</span>
            </p>
          </div>
          <div className="prize">
            <img src="/nft.png" alt="" />
            <p>
              72 <span>NFT</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
