import React from "react";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Featured from "../Components/Featured";
import Property from "../Components/Property";
import "./home.css";
import Homeguest from "../Components/Homeguest";
import MailList from "../Components/MailList";
import Footer from "../Components/Footer";
import Blog from "../Components/Blog";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homecontainer">
        <Featured />
        <Property />
        <Blog />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}
