import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import {Collapse} from 'react-collapse';


Modal.setAppElement('#root');

export default function SideNav(props) {

    var sideNav=props.val;
    var setSideNav=props.fun;
    var NavMenu=props.data;

    const handleClose=()=>{
        setSideNav(false)
    }

    // const [show,setShow]=useState(false)
    const [value,setValue]=useState("")

    const [one,setOne] = useState(false)
    const [two,setTwo] = useState(false)
    const [three,setThree] = useState(false)
    const [four,setFour] = useState(false)
    const [five,setFive] = useState(false)




    const handleSubCollapse=(e)=>{
        setValue(e)
    }

    useEffect(()=>{
        if(value){
            setOne(!one)
            setTwo(!two)
            setThree(!three)
            setFour(!four)
            setFive(!five)
        }
    },[value])


  return (
    <div>
        <Modal isOpen={sideNav} className="sideModalBox">
        <i className="fa-solid fa-xmark closeMarkSide" onClick={()=>handleClose()}></i>
        <div className='sideMenus'>
            <div className='SideNavName'>Home</div>

            {NavMenu.map((item)=>{
                return(
                    <div className='SideNavName' key={item.name}>
                        {item.name}
                        <i className='fa-solid fa-chevron-right collapseBtn' onClick={()=>handleSubCollapse(item.coll)}></i> 
                        <p>{item.coll}</p>
                        <Collapse isOpened={item.coll}>
                        <ul>
                            {(item?.SubName)?.map((val)=>{
                                return(
                                <li key={val.name}> {val.name} </li>
                                )
                            })
                            }
                        </ul>
                        </Collapse>                       
                    </div>
                )
            })}  

            <div className='SideNavName' style={{border:"none"}}>Login/SignUp</div>
        </div>

        </Modal>
    </div>
  )
}
