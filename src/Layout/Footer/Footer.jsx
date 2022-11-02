import "./Footer.css";

const Footer = () => {
  return (
    <div className="container footer-cont">
      <footer>
        <img src="/logo.png" alt="" />
        <div className="foot-nav">
          <a href="#" className="karantina">
            Learn more
          </a>
          <a href="#" className="karantina">
            Game tutorials
          </a>
          <a href="#" className="karantina">
            Docs
          </a>
          <a href="#" className="karantina">
            Blog
          </a>
          <a href="#" className="karantina">
            Terms & Privacy
          </a>
        </div>
        <div className="social-div">
          <a href="#">
            <img src="/twitter.png" alt="" />
          </a>
          <a href="#">
            <img src="/discord.png" alt="" />
          </a>
          <a href="#">
            <img src="/insta.png" alt="" />
          </a>
          <a href="#">
            <img src="/medium.png" alt="" />
          </a>
          <a href="#">
            <img src="/opensea.png" alt="" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
