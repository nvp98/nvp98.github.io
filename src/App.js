import "./App.css";
import avatar from "./assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobeAmericas,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
  FaGithub,
  FaRegUser,
  FaBriefcase,
  FaGraduationCap,
  FaUserCog,
  FaCloudDownloadAlt,
  FaPaperPlane,
} from "react-icons/fa";
import info from "./data.json";

function App() {
  return (
    <div className="container-fluid overcover">
      <div className="container profile-box">
        <div className="row">
          <div className="col-md-4 left-co">
            <div className="left-side">
              <div className="profile-info">
                <img src={avatar} alt="" />
                <h3>{info.name}</h3>
                <span>{info.position}</span>
              </div>
              <h4 className="ltitle">Contact</h4>
              <div className="contact-box pb0">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="detail">
                  {/* +123 8767 5465 <br />
                  +122 2345 3763 */}
                  {info.phone}
                </div>
              </div>
              <div className="contact-box pb0">
                <div className="icon">
                  <FontAwesomeIcon icon={faGlobeAmericas} />
                </div>
                <div className="detail">
                  {/* info@smarteyeapps.com <br />
                  www.smarteyeapps.com */}
                  {info.website}
                </div>
              </div>
              <div className="contact-box">
                <div className="icon">
                  <FontAwesomeIcon icon={faMapMarkedAlt} />
                </div>
                <div className="detail">{info.location}</div>
              </div>
              <h4 className="ltitle">Contact</h4>
              <ul className="row social-link no-margin">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaGooglePlusG />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <FaGithub />
                </li>
              </ul>
              <h4 className="ltitle">Referencess</h4>
              <div className="refer-cov">
                <b>{info.name}</b>
                <p>CEO Casinocarol</p>
                <span>p +00 890 1232 8767</span>
              </div>
              <div className="refer-cov">
                <b>Jonney Smith</b>
                <p>System Administrator</p>
                <span>p +00 890 1232 8767</span>
              </div>
              <h4 className="ltitle">Hobbies</h4>
              <ul className="hoby row no-margin">
                <li>
                  <i className="fas fa-pencil-alt" /> <br /> Writing
                </li>
                <li>
                  <i className="fas fa-bicycle" /> <br /> Cycling
                </li>
                <li>
                  <i className="fas fa-futbol" /> <br /> Football
                </li>
                <li>
                  <i className="fas fa-film" />
                  <br /> Movies
                </li>
                <li>
                  <i className="fas fa-plane-departure" /> <br />
                  Travel
                </li>
                <li>
                  <i className="fas fa-gamepad" /> <br /> Games
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 rt-div">
            <div className="rit-cover">
              <div className="hotkey">
                <h1 className>{info.name} </h1>
                <small>{info.position}</small>
              </div>
              <h2 className="rit-titl">
                <FaRegUser /> Profile
              </h2>
              <div className="about">
                <p>{info.about}</p>
                <div className="btn-ro row no-margin">
                  <ul className="btn-link">
                    <li>
                      <a href>
                        <FaPaperPlane /> Hire Me
                      </a>
                    </li>
                    <li>
                      <a href>
                        <FaCloudDownloadAlt /> Download Resume
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <h2 className="rit-titl">
                <FaBriefcase /> Work Experiance
              </h2>
              {info.exp.map((item, index) => {
                return (
                  <div className="work-exp">
                    <h6>
                      {item.position}{" "}
                      <span>
                        {item.start}-{item.end}
                      </span>
                    </h6>
                    <i>{item.company}</i>
                    <ul>
                      <li>
                        <i className="far fa-hand-point-right" /> Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit.{" "}
                      </li>
                      <li>
                        <i className="far fa-hand-point-right" /> Sorem dolor
                        sit amet, consectetur.{" "}
                      </li>
                      <li>
                        <i className="far fa-hand-point-right" /> Porem ipsum
                        sit amet, consectetur adipiscing{" "}
                      </li>
                    </ul>
                  </div>
                );
              })}

              <h2 className="rit-titl">
                <FaGraduationCap /> Education
              </h2>
              <div className="education">
                <ul className="row no-margin">
                  {info.education.map((item, index) => {
                    <li className="col-md-6">
                      <span>
                        {item.start}-{item.end}
                      </span>{" "}
                      <br />
                      {item.school}
                    </li>;
                  })}
                </ul>
              </div>
              <h2 className="rit-titl">
                <FaUserCog /> Skills
              </h2>
              <div className="profess-cover row no-margin">
                <div className="col-md-6">
                  <div className=" prog-row row">
                    <div className="col-sm-6">Photoshop</div>
                    <div className="col-sm-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "65%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row prog-row">
                    <div className="col-sm-6">PHP</div>
                    <div className="col-sm-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row prog-row">
                    <div className="col-sm-6">Web Design</div>
                    <div className="col-sm-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row prog-row">
                    <div className="col-sm-6">Web Development</div>
                    <div className="col-sm-6">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={25}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
