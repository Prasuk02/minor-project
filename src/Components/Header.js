import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faBed, faPlane, faCar, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons';
  import {useState} from 'react';

  import { DateRange } from 'react-date-range';
  import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; 
import {format} from "date-fns";
import { useNavigate } from 'react-router-dom';
export default function Header({type}) {
  const[destination,setdestination]=useState("");
  const [opendate,setopendate]=useState(false)
  const [openroom,setopenroom]=useState(false)
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  // const[openoption,setopenoption]=useState(false);
  const [options,setoptions]=useState({
    adult:1,
    children:0,
    room:1
  })
  const navigate =useNavigate()
  const handleoption=(name,operation)=>{
    setoptions((prev)=>{
      return{...prev,
      [name]:operation==="i"?options[name]+1:options[name]-1,
      };
    });
  }
  const handleSearch =()=>{
    navigate("/hotels",{state:{destination,date,options} })

  }
  return (
    <>
   <div className="header bg-primary">
    <div className="headerContainer">
        <div className="headerlist">
            <div className="headerlistitem"><FontAwesomeIcon icon={faBed} /><span>Stays</span></div>
            <div className="headerlistitem"><FontAwesomeIcon icon={faPlane} /><span>Flights</span></div>
            <div className="headerlistitem"><FontAwesomeIcon icon={faCar} /><span>Car Rentals</span></div>
            <div className="headerlistitem"><FontAwesomeIcon icon={faBed} /><span>Attractions</span></div>
            <div className="headerlistitem"><FontAwesomeIcon icon={faCar} /><span>Airport taxis</span></div>
        </div>

        {type!=="list" &&
        <>
        <h1 className="headertitle">Save 15% with late escape deals gg</h1>
        <p className='message'>There is still time to check one more destination off your wishlist</p>
        <button className='headerbtn'>More deals</button>
        <div className='mainbgimg'>
        <div className="text-center">
  <img src="https://img.freepik.com/free-vector/people-using-online-appointment-booking-app_74855-5556.jpg?w=200" class="rounded" alt="..."/>
</div>
        </div>
        <div className="headersearch">
            <div className="headersearchitem">
            <FontAwesomeIcon icon={faBed}  className="hicon"/>
            <input type="text" placeholder="Where are you going" className="hsearchinput" 
            onChange={(e)=>setdestination(e.target.value)}
            /></div>
            <div className="headersearchitem">
            <FontAwesomeIcon icon={faCalendarDays} className="hicon" />
            <span class="hstext" onClick={()=>setopendate(!opendate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`} </span></div>
            {opendate && <DateRange
              editableDateInputs={true}
              onChange={item => setdate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              minDate={new Date()}
            />}
            <div className="headersearchitem">
            <FontAwesomeIcon icon={faPerson} className="hicon" />
            <span className="hstext" onClick={()=>{setopenroom(!openroom)}}>{options.adult} adult {options.children} children {options.room} Room </span>
              {openroom && <div className="options">
                <div className="optionitem">
                  <span className="optiontext">Adult</span>
                  <div className="optionctr">
                  <button className="counterbtn" onClick={()=>handleoption("adult","i")} >+</button>
                  <span className="counternumber">{options.adult}</span>
                  <button disabled={options.adult<=1} className="counterbtn" onClick={()=>handleoption("adult","d")}>-</button>
                  </div>
                  
                </div>
                <div className="optionitem">
                  <span className="optiontext">Children</span>
                  <div className="optionctr">
                  <button className="counterbtn" onClick={()=>handleoption("children","i")} >+</button>
                  <span className="counternumber">{options.children}</span>
                  <button disabled={options.children<=0}className="counterbtn" onClick={()=>handleoption("children","d")} >-</button>
                  </div>
                </div>
                <div className="optionitem">
                  <span className="optiontext">Room</span>
                  <div className="optionctr">
                  <button className="counterbtn"onClick={()=>handleoption("room","i")}>+</button>
                  <span className="counternumber">{options.room}</span>
                  <button disabled={options.room<=1} className="counterbtn" onClick={()=>handleoption("room","d")}>-</button>
                  </div>
                </div>
              </div>}
            <button class="hsearchbtn btn btn-success" type="submit" onClick={handleSearch}>Search</button>

            </div>
        </div></>}
    </div>
   </div>
   </>
  );
}
