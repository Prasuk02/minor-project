import React from 'react';
import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import Featured from '../Components/Featured';
import Property from '../Components/Property';
import './home.css';
import Homeguest from '../Components/Homeguest';
import MailList from '../Components/MailList';
import Footer from '../Components/Footer';
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homecontainer">
          <Featured/>
          <h1 className="hometitle">Browse by property type </h1>
          <Property/>
          <h1 className="hometitle">Explore India </h1>
           <Homeguest/>
           <MailList/>
           <Footer/>
        </div>
      
    </div>
  );
}
