import React from 'react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function SideNav(props) {

    var sideNav=props.val;
    var setSideNav=props.fun;
    var NavMenu=props.data;

    const handleClose=()=>{
        setSideNav(false)
    }


  return (
    <div>
        <Modal isOpen={sideNav} className="sideModalBox">
        <i className="fa-solid fa-xmark closeMarkSide" onClick={()=>handleClose()}></i>
        <div className='sideMenus'>
            <div className='SideNavName'>Home</div>

            {NavMenu.map((item)=>{
                return(
                    <div className='SideNavName'>{item.name}</div>
                )
            })}  

            <div className='SideNavName' style={{border:"none"}}>Login/SignUp</div>
        </div>

        </Modal>
    </div>
  )
}
