import "./Header.css";

const Header = () => {
  return (
    <div className="header-cont">
      <header>
        <div className="left-header">
          <img src="/logo.png" alt="" />
          <button className="play">
            <p className="karantina">Play Dawn</p>
          </button>
          <nav>
            <a href="#" className="karantina">
              Giftshop
            </a>
            <a href="#" className="karantina">
              Mystery Boxes
            </a>
            <a href="#" className="karantina">
              Dashboard
            </a>
          </nav>
        </div>
        <img src="/wallet.png" alt="" />
      </header>
    </div>
  );
};

export default Header;
