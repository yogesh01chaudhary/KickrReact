import React, { useEffect } from "react";
import kickrlogo from "../../Assests/KickrWhiteLogo.png";
import Gallery1 from "../../Assests/Gallery1.jpg";
import card from '../../Assests/payment Card.png'
import "./Footer.css";
import AOS from "aos";
const Footer = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container-fluid footerMainBox">
      <div className="row footerbox">
        <div className="footerSections col-md-2">
          <div className="footerAboutSec">
            <img src={kickrlogo} alt="" className="footerLogo" />
            <p className="kickrdesc">
              Kickr technology is an India-based mobile app development and
              Software development company. Whether you are looking for large
              scale marketing solutions or a simple mobile app, our team will
              manage them in the best way.
            </p>
          </div>
        </div>
        <div className="footerSections col-md-3">
          <div className="addressSec">
            <h5 className="footerHeading">Address</h5>
            <p className="kickrdesc">
              <strong>Operational Address:</strong> A block, Sector 62, Noida,
              Uttar-Pradesh – 201301.
            </p>
            <p className="kickrdesc">
              <strong>Reg Office:</strong> Ground Floor, B-30, Punjabi Basti
              Nangloi, Delhi – 110041.
            </p>
            <p className="kickrdesc">
              <strong>Email: </strong> Kickr.technology@gmail.com
              support@kickrtechnology.com
            </p>
            <p className="kickrdesc">
              <strong>Contacts: </strong> +91-9012791021, +91-9716358844
            </p>
          </div>
        </div>
        <div className="footerSections col-md-3">
          <div className="serviceSec">
            <h5 className="footerHeading">Services</h5>
            <ul className="serviceList">
              <li>
                <a href="/">
                  <i className="fa-brands fa-internet-explorer footerIcon"></i>
                  <span>Web designing</span>
                </a>
              </li>
              <li>
                <a href="/">
                <i className="fa-brands fa-android footerIcon"></i>
                  <span>App Development</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-solid fa-gamepad footerIcon"></i>
                  <span>Game development</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-microsoft footerIcon"></i>
                  <span>Software development</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-regular fa-handshake footerIcon"></i>
                  <span>ERP CRM development</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-discord footerIcon"></i>
                  <span> Chatbot Development</span>
                </a>
              </li>
              <li>
                <a href="/">
                <i className="fa-solid fa-bezier-curve footerIcon"></i>
                  <span> UI/UX Design</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa-brands fa-digital-ocean footerIcon"></i>
                  <span>Marketing & Solution</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerSections col-md-2">
          <div className="imageGalary">
            <h5 className="footerHeading">Gallery</h5>
            <div className="imageGalleryBox">
              <div className="imageBox">
                <img src={Gallery1} alt="galleryImages" />
              </div>
              <div className="imageBox">
                <img src={Gallery1} alt="galleryImages" />
              </div>
              <div className="imageBox">
                <img src={Gallery1} alt="galleryImages" />
              </div>
              <div className="imageBox">
                <img src={Gallery1} alt="galleryImages" />
              </div>
              <div className="imageBox">
                <img src={Gallery1} alt="galleryImages" />
              </div>
              <div className="imageBox">
                <img src={Gallery1} alt="galleryImages" />
              </div>
              <div className="imageBox">
                <img src={Gallery1} alt="galleryImages" />
              </div>
              <div className="imageBox">
                <img src={Gallery1} alt="galleryImages" />
              </div>
              <div className="imageBox">
                <img src={Gallery1} alt="galleryImages" />
              </div>
            </div>
            <hr className="imageDevider"/>
            <div className="socialIcons">
                <div className="iconList">
                <a href="https://twitter.com/KickrTechnology?_ga=2.42713317.1327925885.1677558333-2060521685.1671599962" target='_blank'  rel="noreferrer">
                <i className="fa-brands fa-twitter"
                style={{color: "#4ccef9"}}></i></a>
                </div>
                <div className="iconList">
                 <a href="https://www.facebook.com/kickr.tech/" target="_blank"  rel="noreferrer">
                <i className="fa-brands fa-facebook-f" style={{color: "#2255ee"}}></i></a>
                </div>
                <div className="iconList">
                  <a href="https://www.linkedin.com/company/75605042/admin/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin-in"></i></a>
                </div>
                <div className="iconList">
                  <a href="https://www.instagram.com/kickr_technology/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram" style={{color:'#FF0F47'}}></i></a>
                </div>
                <div className="iconList">
                  <a href="https://www.youtube.com/channel/UCDjGp87NCMN4XzCMWrFxiog" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-youtube" style={{color:'red'}}></i></a>
                </div>
            </div>
          </div>
        </div>
        <div className="footerSections col-md-2">
         <div className="cardSec" data-aos="rotate-ac" data-aos-duration="500" data-aos-easing="ease-in-quad">
            <h1 className="DownloadLink"><a href="https://play.google.com/store/apps/details?id=com.kickrtechnology&amp;hl=en-GB" target="_blank"  rel="noreferrer">Download Kickr Android App </a></h1>
         </div>
            <hr className="imageDevider" style={{marginBottom:'10%'}}/>
            <h5 className="footerHeading" >Payment Cards</h5>
            <img src={card} alt="" className="footerLogo" />
 
        </div>


      </div>
      {/* Footer Bottom section */}
  <section>
    <hr className="bottomDivider"/>
    <div className="bottomDesc">
      <p className="copyRight">Copyright © 2020 Kickr Technology | All Rights Reserved</p>
      <div className="menuBottom">
        <ul className="menuItems">
          <li className="menuList">Home</li>
          <li className="menuList">Career</li>
          <li className="menuList">Privacy policy</li>
          <li className="menuList">Contact</li>

        </ul>
      </div>
    </div>
    </section>
    </div>
  );
};

export default Footer;
