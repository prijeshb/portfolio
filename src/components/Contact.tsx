import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { SiGooglegemini } from "react-icons/si";
import antigravityIcon from "../assets/antigravity-icon__full-color.png";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:prijeshbhingradiya627@gmail.com" data-cursor="disable">
                prijeshbhingradiya627@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>M.S. in Computer Science</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/prijeshb"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/prijesh-bhingradiya-5ba46472/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Developed using <br /> 
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", justifyContent: "center", marginTop: "10px" }}>
                <img src={antigravityIcon} alt="Antigravity" width="20" height="20" style={{ objectFit: "contain" }} /> Antigravity & <SiGooglegemini style={{ color: "#8ab4f8", fontSize: "1.2em" }} /> Gemini
              </span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
