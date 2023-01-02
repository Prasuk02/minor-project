import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import './List.css'
import {format} from "date-fns";
import {useState} from 'react';
import { DateRange } from 'react-date-range';
import Searchitems from '../Components/Searchitems';
export default function List() {
  const location =useLocation();
  const [destination,setdestination]=useState(location.state.destination)
  const [date,setdate]=useState(location.state.date)
  const[options,setoptions]=useState(location.state.options)
  const[opendate,setopendate]=useState(false)
  return (

    <div className='container'>
       <Navbar/>
    
     
      <Header type="list" />
      <div className="listcontainer">
        <div className="listwrapper">
          <div className="listsearch">
            <h1 className="lstitle">Search</h1>
            <div className="lsitem">
              <label>Destination</label>
              <input type="text" placeholder={destination}/>
            </div>
            <div className="lsitem">
              <label>Check-In Date</label>
              <span onClick={()=>setopendate(!opendate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
              {opendate && <DateRange 
              onChange={item=> setdate([item.selection])} minDate={new Date()} ranges={date } />}
            </div>
            <div className="lsitem">
              <label>Options</label>
              <div className="lsoptions">
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Min price<small> per night </small>
                </span>
                <input type="number" className="isoptioninput" />
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Max price<small> per night </small>
                </span>
                <input type="number" className="isoptioninput" />
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Adult
                </span>
                <input type="number" min={1} className="isoptioninput" placeholder={options.adult} />
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Children
                </span>
                <input type="number" min={0} className="isoptioninput" placeholder={options.children } />
              </div>
              <div className="lsoptionitem">
                <span className="lsoptiontext">
                  Room
                </span>
                <input type="number"  min={1} className="isoptioninput" placeholder={options.room} />
              </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listresult">
            <Searchitems url="https://cf.bstatic.com/xdata/images/hotel/square600/400263483.webp?k=23b9e35395affb6370c56a2aeccbcb0fdcf774d61d3e939315011681a8f69e4e&o=&s=1" name="hotel decent suites" distance="14.8" aboutroom="Delux king room" desc="1 double bed" level="3" price="3,504" rating="7.4"/>
            <Searchitems url="https://cf.bstatic.com/xdata/images/hotel/square600/363351646.webp?k=ebf488e926e1c51e8a93a44f41d2f7469965f8b88a9f2251a70615e37a84fe02&o=&s=1"name="Hotel cottage yes please" distance="1.4" aboutroom="Delux double bed" desc="1 single bed" level="2" price="5,070" rating="8.4"/>
            <Searchitems url="https://cf.bstatic.com/xdata/images/hotel/square600/287051874.webp?k=72e42ca80309d5ecb73231025d021654872c2c49c0c4d9d0ee8480f92f336199&o=&s=1"name="Hotel star one " distance="13.1" aboutroom="Delux room" desc="1 extra large double bed" level="2"price="6,544" rating="8.9"/>
            <Searchitems url="https://cf.bstatic.com/xdata/images/hotel/square600/103601620.webp?k=e8addf20164dc6d44495503b1f677cfa47dbda60d1839888caa1c819c6e9d587&o=&s=1"name="Hotel Aero star" distance="13.1" aboutroom="Delux double or twin room" desc="1 extra large double bed" level="3" price="3,504" rating="7.4"/>
            <Searchitems url="https://cf.bstatic.com/xdata/images/hotel/square600/305336877.webp?k=e8015c0457d068d297feaf2f7a314f6b6094ff6d3506956218e67a5737d7b722&o=&s=1"name="Hotel D'Capitol" distance="14.8" aboutroom="Delux double bed" desc="1 double bed" level="3"price="2,500" rating="6.5"/>
            <Searchitems url="https://cf.bstatic.com/xdata/images/hotel/square600/234890162.webp?k=5a661bf505d297628983579df4963e44ab0f6981c0b09f92fb32abd2276e504d&o=&s=1"name="Hotel shri vinayak" distance="1.3" aboutroom="Delux double or twin room" desc="Multiple bed type" level=""price="6,220" rating="9.4"/>
            <Searchitems url="https://cf.bstatic.com/xdata/images/hotel/square600/395522435.webp?k=661b10278ec84041822e7031d55ed190bb53d382d8aa0848b63a7e7fc2b4ecb7&o=&s=1"name="Staybook" distance="1.8" aboutroom="Economy double room" desc="1 large double bed" level="3"price="1,540" rating="5.4"/>
          </div>
        </div>
        <div className="listresult"></div>
      </div>
      </div>
      
 
  );
}
