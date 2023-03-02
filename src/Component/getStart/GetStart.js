import React from "react";
import getStart from '../../Assests/getStart.png'
import getStart1 from '../../Assests/GetStart1.png'
import getStart2 from '../../Assests/getStart2.png'
import './Getstart.css'

const data = [{
    id:1,
    image:getStart,
    title:"Project Introduction",
    desc:"We’re a team who truly care for our work and for each other. Follow the Guidelines for Preparing Intro for Project Work"
},
{
    id:2,
    image:getStart1,
    title:"Research & Concept",
    desc:"Analysis and refined thinking techniques to finds answers/truth by asking questions which have never been asked before."
},
{
    id:3,
    image:getStart2,
    title:"Project Termination",
    desc:"Acceptance testing has been carried out, and the project deliverables have been handed over to the client."
}
]

const GetStart = () => {
  return (
    <secton>
      <div className="container mt-2">
        <div className="ot_heading">
            <h6 className="sub_heading">HOW TO GET STARTED</h6>
            <h2 class="main-heading">Few Simple Steps<br/>
              for Successful Business</h2>
        </div>
        <div className="row main_card">
           {data.map((item)=>(
            <div className="col-md-4 card_boxes" key={item.id}>
                <div className="countNum">{item.id}</div>
            <div className="cord_Box">
              <img src={item.image} className="card_Image" alt={item.title}/>
              <div className="card_body_box">
                <h5 className="Start_title">{item.title}</h5>
                <p className="start_text">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
           ))} 
          
        </div>
      </div>
    </secton>
  );
};

export default GetStart;
