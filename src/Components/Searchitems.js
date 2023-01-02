import './searchitem.css';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
const Searchitems = (props) => {
    const navigate =useNavigate()
    const[name,setname]=useState("");
    const handleavail=()=>{
       setname(props.name)
        navigate("/hotels/:id")

    }
  return (
    <div className='searchitem'>
        <img src={props.url} alt="" className='siImg' />
        <div className="sidesc">
            <h1 className="sititle">{props.name}</h1>
            <span className="sidistance">{props.distance} from centre</span>
            <span className="sitaxi">Free airport Taxi</span>
            <span className="sisubtitle">{props.aboutroom}</span>
            <span className="sifeatures">{props.desc} Travel sustainable level {props.level} </span>
        <span className="sicancel">Free cancellation</span>
        <span className="sicanceldesc">
            {/* {props.anyline} */}
        </span>
    </div>
    <div className="sidetails">
        <div className="sirating">
            <span>Excellent</span>
            <button>{props.rating}</button>
        </div>
        <div className="sidetailtext">
            <span className="siprice">{props.price}</span>
            <span className="sitax">Includes taxes and fees</span>
            <button className="sicheckbtn" onClick={handleavail}>See availability</button>
        </div>
        </div>
        
    </div>
  );
}

export default Searchitems;
