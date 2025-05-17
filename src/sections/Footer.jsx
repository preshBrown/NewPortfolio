import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
        <em><a href="#">Visit my blog</a></em>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            // <div key={index} className="icon">
            //   <img src={socialImg.imgPath} alt="social icon" />
            // </div>
            <a  key={index} className="icon" target="_blank" download={socialImg.download} href={socialImg.url}>
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
          <em> © {new Date().getFullYear()} Dev Presh</em>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
