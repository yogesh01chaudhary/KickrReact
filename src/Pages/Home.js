import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import BannerImage from "../Assests/BannerImage1.png"
import './Home.css'

export default function Home() {
  return (
    <>
    
    <div className='BannerBG'>
    <Navbar/>
        <div className='container homeBannerContainer'>
            <div className='row'>
                <div className='col-lg-6 homeBannerContent'>
                    <div className='BannerHead'>Best React Native App Development Company</div>
                    <p className='BannerSubHead'>We deliver top quality mobile apps that are futuristic and flexible.</p>


                    <div className='bannerGetBtn'>
                        <div className="overlay">
                        </div>
                        <span>Get In Touch </span><i className="fa-solid fa-arrow-right getArrow"></i>
                        
                    </div>



                    <div className='BannerIcons'>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div className='col-lg-6 homeBannerImage'>
                    <img src={BannerImage} alt="BannerImage" className='BannerImage'></img>
                </div>
            </div>
        </div>
    </div>

    <Footer/>        
    </>
  )
}
