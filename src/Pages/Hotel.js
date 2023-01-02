import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import MailList from '../Components/MailList';
import Footer from '../Components/Footer';
import './Hotel.css';
import { useLocation } from 'react-router-dom';
import {useState} from 'react';

const Hotel = () => {
  const location =useLocation();
  // const[name,setname]=useState(location.state.name);
  
       const photos=[
    {
        src:"https://m.economictimes.com/thumb/msid-73023854,width-1200,height-900,resizemode-4,imgsize-235513/hotel-agencies.jpg"

    },
    {
        src:"https://www.theleela.com/prod/content/assets/styles/tl_500_400_webp/public/2021-08/5-star-hotel-in-gurgaon.jpg.webp?VersionId=D5T.KxFkezC_30U9CADkLUyTLLit2SST&itok=24CBkall"

    },
    {
        src:"https://www.tajhotels.com/content/dam/tajhotels/ihcl/press-room/AMD-%20FacadeNight-cropped.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg"

    },
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLq_m49Hq_t6eqe-3mTkbJfgVI7xvaApVxwg&usqp=CAU"
    },
    {
        src:"https://media-cdn.tripadvisor.com/media/photo-s/15/a0/01/73/hyatt-place-jacksonville.jpg"

    },
    {
        src:"https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg"

    },
    {
        src:"https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"

    }
];
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
        <div className="hotelcontainer">
          <div className="hotelwrapper">
            <button className="booknow">Reserve or book now</button>
            <h1 className="hoteltitle">Taj Hotel</h1>
            <div className="hoteladdress">
              <FontAwesomeIcon icon={faLocationDot}/>
              <span>Elton st 125 New York</span>
            </div>
            <span className="hoteldistance">
              Excellent location 500m from center
            </span>
            <span className="hotelprice">
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelimgs">
              {
                photos.map(photo =>(
                  <div className="hotelimgwrapper">
                    <img src={photo.src} alt="" className="hotelimg" />
                  </div>
                ))
              }
              <div className="hoteldetails">
                <div className="hoteldetailtext">
                  <h1 className="hoteltitle">Stay in the heart of krakow</h1>
                  <p className="hoteldesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, id mollitia beatae aspernatur incidunt totam, eos, doloribus in sapiente alias amet deleniti harum. Totam, temporibus dolores corrupti nemo nihil obcaecati provident labore fugiat expedita nam. Voluptates fuga, vitae excepturi obcaecati asperiores est dignissimos ut veniam odit enim accusamus non sunt nemo eveniet a. Dolor iste molestiae dolorum consequatur, fuga velit!
                  </p>
                </div>
                <div className="hoteldetailprice">
                  <h1>perfect for a 9-night stay!</h1>
                  <span>
                    Located in the real heart of krakow, this property has an excellent location sccore of 9.1
                  </span>
                  <h2>
                    <b>$945</b>(9 nights)
                  </h2>
                  <button>Reserve or Book Now!</button>
                </div>
              </div>

            </div>
            <MailList/>
            <Footer/>
            
          </div>
        </div>
      
    </div>

  );
}

export default Hotel;

