import React from 'react';
import './featured.css';
import Homeguest from './Homeguest';
export default function Featured() {
  return (
    <>
    <div class="container mt-4">
        <div>
        <h4>Offers</h4>
        <p>Promotions, deals and special offers for you</p>
        </div>









        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div class="row justify-content-between">
    <div class="col-6 ">
        <img className='offer_img1' src="https://r-xx.bstatic.com/xdata/images/xphoto/714x300/173282684.jpeg?k=e31b490d521194e65d41490f43dc704291ca07eaa762b6f36bca714d3211b9a1&o=" alt="" srcset="" />
        <div className='offer1 px-5 pt-4'>
            <h5>Save 15% with Late Escape Deals</h5>
            <p>Tick one more destination off your <br/> wishlist</p>
            <br/>
            <button className='btn btn-primary'>Explore deals</button>
        </div>
        
    </div>
    <div class="col-6 border">
    <div class="row justify-content-between">
    <div class="col-8 px-4">
    <h5 className='pt-4 '>Fly away to your dream holiday</h5>
      <p>Get inspired, compare and book flights with more flexibility</p>
      <br/>
            <button className='btn btn-primary'>Search for flights</button>
    </div>
    <div class="col-4 ">
      <img className='offer2' src='https://t-cf.bstatic.com/design-assets/assets/v3.49.3/illustrations-traveller/TripsFlightsPlane.png'/>
    </div>
  </div>
    </div>
  </div>
    </div>
    <div class="carousel-item">
    <div class="row justify-content-between">
    <div class="col-6 ">
        <img className='offer_img1' src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner_wide.a1b12d47.png" alt="" srcset="" />
        <div className='offer1 px-5 pt-4'>
            <h5>Save 15% with Late Escape Deals</h5>
            <p>Tick one more destination off your <br/> wishlist</p>
            <br/>
            <button className='btn btn-primary'>Explore deals</button>
        </div>
        
    </div>
    <div class="col-6 border">
    <div class="row justify-content-between">
    <div class="col-8 px-4">
    <h5 className='pt-4 '>Fly away to your dream holiday</h5>
      <p>Get inspired, compare and book flights with more flexibility</p>
      <br/>
            <button className='btn btn-primary'>Search for flights</button>
    </div>
    <div class="col-4 ">
      <img className='offer2' src='https://t-cf.bstatic.com/design-assets/assets/v3.49.3/illustrations-traveller/TripsFlightsPlane.png'/>
    </div>
  </div>
    </div>
  </div>
    </div>
    <div class="carousel-item">
    <div class="row justify-content-between">
    <div class="col-6 ">
        <img className='offer_img1' src="https://r-xx.bstatic.com/xdata/images/xphoto/714x300/182431478.jpeg?k=fcbb6d5552a1d4ff338978206c449077ab8ad696050cfd7e4edef1ddc11225cc&o=" alt="" srcset="" />
        <div className='offer1 px-5 pt-4'>
            <h5>Save 15% with Late Escape Deals</h5>
            <p>Tick one more destination off your <br/> wishlist</p>
            <br/>
            <button className='btn btn-primary'>Explore deals</button>
        </div>
        
    </div>
    <div class="col-6 border">
    <div class="row justify-content-between">
    <div class="col-8 px-4">
    <h5 className='pt-4 '>Fly away to your dream holiday</h5>
      <p>Get inspired, compare and book flights with more flexibility</p>
      <br/>
            <button className='btn btn-primary'>Search for flights</button>
    </div>
    <div class="col-4 ">
      <img className='offer2' src='https://t-cf.bstatic.com/design-assets/assets/v3.49.3/illustrations-traveller/TripsFlightsPlane.png'/>
    </div>
  </div>
    </div>
  </div>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon icon1" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon icon2" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


















        
    </div>
    <div className='container mt-4'>
    <h4>Explore India</h4>
    <p>These popular destinations have a lot to offer</p>
        <div className="featured">
            
            <div className="featureditem">
                
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="" srcset=""  className="fimg"/>
                <div className="ftitle">
                    Chennai 
                </div>
            </div>
            <div className="featureditem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/684657.jpg?k=66dc5035b43e9bb86b756e381e4fec2558064af4a63a8af17836725a854c03ee&o=" alt="" srcset=""  className="fimg"/>
                <div className="ftitle">
                    Jaipur
                </div>
            </div>
            <div className="featureditem">
                <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" srcset=""  className="fimg"/>
                <div className="ftitle">
                    Mumbai
                </div>
            </div>
        </div>
      
        <Homeguest/>
    </div>
    </>
    
  );
}
