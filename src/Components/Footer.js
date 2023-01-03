import React from 'react';
import './footer.css';
export default function Footer(){
  return (
    <>
        <div class="container-fluid border">
            <div class="row justify-content-evenly ">
                <div class="col-md-4 mt-5 ">
                    <h4>FOLLOW US</h4>
                    <i class="bi bi-facebook follow " ></i>
                    <i class="bi bi-instagram follow " ></i>
                    <i class="bi bi-google follow "></i>
                    <i class="bi bi-linkedin follow "></i>
                    <i class="bi bi-youtube follow "></i>
                </div>

                <div class="col-md-2 mt-5 ">
                    <h5>SERVICES</h5>
                    <a href="#" class="help">Hotel Booking</a> <br/>
                    <a href="#" class="help">Flight Tickets</a> <br/>
                    <a href="#" class="help">Airport Taxi</a> <br/>
                    <a href="#" class="help">Car Rental </a> <br/>
                    <a href="#" class="help"></a> <br/>
                </div>
        
                <div class="col-md-2 mt-5">
                    <h5>ABOUT US</h5>
                    <a href="#" class="help">About Tripify</a> <br/>
                    <a href="#" class="help">Why Tripify</a> <br/>
                    <a href="#" class="help">Blog</a> <br/>
                    <a href="#" class="help">Reviews</a> <br/>
                </div>
                <div class="col-md-2 mt-5">
                    <h5>HELP </h5>
                    <a href="#" class="help">Payment Policy</a> <br/>
                    <a href="#" class="help">Privacy Policy</a> <br/>
                    <a href="#" class="help">Terms And Conditions</a> <br/>
                    <a href="#" class="help">Disclaimer</a> <br/>
                    <a href="#" class="help">Contact Us</a> <br/>
                    <a href="#" class="help">Faq</a>
                </div>
            </div>
            <hr className='mt-5'/>

            <div class="row justify-content-center">
                
                <div class="col-md-5 text-center ">
                
                    <p> &#169; 2023 Tripify Private Limited, All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </>
  );
}