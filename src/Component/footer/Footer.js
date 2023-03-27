import React, { useEffect } from "react";
import kickrlogo from "../../Assests/KickrWhiteLogo.png";
import Gallery1 from "../../Assests/Gallery1.jpg";
import card from '../../Assests/payment Card.png'
import "./footer.css";
import AOS from "aos";
const Services = [{
  id:1,
  link:"/",
 icon:<i className="fa-brands fa-internet-explorer footerIcon"></i>,
 name:"Web designing"

},
{
  id:2,
  link:"/",
  icon:<i className="fa-brands fa-android footerIcon"></i>,
 name:"App Development"
},
{
  id:3,
  link:"/",                
  icon:<i className="fa-solid fa-gamepad footerIcon"></i>,
 name:"Game development"
},
{
  id:4,
  link:"/",
  icon:<i className="fa-brands fa-microsoft footerIcon"></i>,
 name:"Software development"
},
{
  id:5,
  link:"/",
  icon:<i className="fa-regular fa-handshake footerIcon"></i>,
 name:"ERP CRM development"
},

{
  id:6,
  link:"/",
  icon:<i className="fa-brands fa-discord footerIcon"></i>,
 name:"Chatbot Development"
},
{
  id:7,
  link:"/",
  icon:<i className="fa-solid fa-bezier-curve footerIcon"></i>,
 name:"UI/UX Design"
},
{
  id:8,
  link:"/",
  icon:<i className="fa-brands fa-digital-ocean footerIcon"></i>,
 name:"Marketing & Solution"
},
]

const SocialMedia = [
  {
    id: 1,
    socialLink:
      "https://twitter.com/KickrTechnology?_ga=2.42713317.1327925885.1677558333-2060521685.1671599962",
    socialIcon: (
      <i className="fa-brands fa-twitter" style={{ color: "#4ccef9" }}></i>
    ),
  },
  {
    id: 2,
    socialLink: "https://www.facebook.com/kickr.tech/",
    socialIcon: (
      <i className="fa-brands fa-facebook-f" style={{ color: "#2255ee" }}></i>
    ),
  },
  {
    id: 3,
    socialLink: "https://www.linkedin.com/company/75605042/admin/",
    socialIcon: <i className="fa-brands fa-linkedin-in"></i>,
  },
  {
    id: 4,
    socialLink: "https://www.instagram.com/kickr_technology/",
    socialIcon: (
      <i className="fa-brands fa-instagram" style={{ color: "#FF0F47" }}></i>
    ),
  },
  {
    id: 5,
    socialLink: "https://www.youtube.com/channel/UCDjGp87NCMN4XzCMWrFxiog",
    socialIcon: (
      <i className="fa-brands fa-youtube" style={{ color: "red" }}></i>
    ),
  },
];

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

              {Services.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
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
            <hr className="imageDevider" />
            <div className="socialIcons">
              {SocialMedia.map((media)=>(
                <div className="iconList" key={media.id}>
                <a
                  href={media.socialLink}
                  target="_blank"
                  rel="noreferrer"
                >
                {media.socialIcon}
                </a>
              </div>
              ))}
                   
            </div>
          </div>
        </div>
        <div className="footerSections col-md-2">
          <div
            className="cardSec"
            data-aos="rotate-ac"
            data-aos-duration="500"
            data-aos-easing="ease-in-quad"
          >
            <h1 className="DownloadLink">
              <a
                href="https://play.google.com/store/apps/details?id=com.kickrtechnology&amp;hl=en-GB"
                target="_blank"
                rel="noreferrer"
              >
                Download Kickr Android App
              </a>
            </h1>
          </div>
          <hr className="imageDevider" style={{ marginBottom: "10%" }} />
          <h5 className="footerHeading">Payment Cards</h5>
          <img src={card} alt="" className="footerLogo" />
        </div>
      </div>
      {/* Footer Bottom section */}
      <section>
        <hr className="bottomDivider" />
        <div className="bottomDesc">
          <p className="copyRight">
            Copyright © 2020 Kickr Technology | All Rights Reserved
          </p>
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
