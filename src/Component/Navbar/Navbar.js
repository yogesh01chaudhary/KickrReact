import React, { useState } from 'react'
import "./Navbar.css"

import Logo from "../../Assests/KickrWhiteLogo.png"
import SearchModal from './SearchModal'
import SideNav from './SideNav'


export default function Navbar() {

    const NavMenu=[
    {name:"Services",
    coll:"one",
    SubName:[
        {name:"Web Designing"},
        {name:"App Development"},
        {name:"Game Development"},
        {name:"Software Development"},
        {name:"ERP CRM Development"},
        {name:"Chatbot Development"},
        {name:"Marketing & Solution"},
        {name:"UI/UX Design"}
    ]},
    {name:"Company",
    coll:"two",
    SubName:[
        {name:"About"},
        {name:"Our Team"},
        {name:"Career"},
        {name:"Contact Us"}
    ]},
    {name:"3D Products",
    coll:"three",
    SubName:[
        {name:"Game Assests"},
        {name:"Interior Design"},
        {name:"Product Modelling"},
        {name:"Alpha / Texture"}
    ]},
    {name:"Our Apps",
    coll:"four",
    SubName:[
        {name:"Android Apps"},
        {name:"iOS Apps"},
        {name:"Gaming Apps"},
        {name:"Mobile Apps"}
    ]},
    {name:"Policy",
    coll:"five",
    SubName:[
        {name:"Privacy Policy"},
        {name:"Refund/Return Policy"},
        {name:"Terms & Conditions"}
    ]}
    ]

    const [modalIsOpen, setIsOpen] = useState(false);
    const [sideNav, setSideNav] = useState(false);
    const handleSearch=()=>{
        setIsOpen(true);
    }
    const handleClose=()=>{
        setIsOpen(false);
    }
    const handleSideNav=()=>{
        setSideNav(true);
    }

  return (
    <>
        <div className='navbarBg'>
            <div className='navbarBox'>
                <div style={{width:"20%"}}>
                    <img src={Logo} alt="LogoImage" className='NavLogo'/>
                </div>

                <div className='NavMenuList'style={{width:"80%"}}>

                    <div className='NavMenu1'>
                        <span>
                            Home
                        </span>
                        <div className='navMenuLine'></div>
                        <div className='navSubMenuBox'></div>
                    </div>

                    {NavMenu.map((item)=>{
                        return(
                            <div className='NavMenu' key={item.name}>
                                <span>
                                    {item.name} 
                                    <i className="fa-solid fa-angle-down"></i>
                                </span>
                                <div className='navMenuLine'></div>
                                <div className='navSubMenuBox'>
                                    <div className='subMenuList'>
                                        <ul>
                                            {(item?.SubName)?.map((val)=>{
                                                return(
                                                <li key={val.name}> {val.name} </li>
                                                )
                                            })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    <div className='NavMenu1'>
                        <span>
                            Login/Signup 
                        </span>
                        <div className='navMenuLine'></div>
                        <div className='navSubMenuBox'></div>
                    </div>
                </div>

                <div className="NavIcons" style={{width:"20%"}}>
                    {modalIsOpen==true?(
                        <i className="fa-solid fa-xmark closeMark" onClick={()=>handleClose()}></i>
                    ):(
                        <i className="fa-solid fa-magnifying-glass" onClick={()=>handleSearch()}></i>
                    )}
                    <div className='cartIcon'>
                    <i className="fa-solid fa-cart-shopping "></i>
                    <div className='cartMenuBox'>
                        <div className='CartDataBox'>

                        </div>
                    </div>
                    </div> 
                </div>
            </div>
            <div className='MenuIcon'>
                <i className="fa-solid fa-bars" onClick={()=>handleSideNav()}></i>
            </div>
        </div>

        <SearchModal val={modalIsOpen}></SearchModal>
        <SideNav val={sideNav} fun={setSideNav} data={NavMenu}></SideNav>
    </>
  )
}
