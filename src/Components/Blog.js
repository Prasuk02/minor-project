import React from 'react'
import './blog.css'

export default function blog() {
  return (
    <>
        <div class="container mt-3">
            <h4>Get inspiration for your next trip</h4>
            <div class="row justify-content-between row1 mt-4">
                <div class="col-5 position-relative top-0 start-0">
                <img className='image ' src='https://xx.bstatic.com/xdata/images/xphoto/1182x887/187685778.jpg?k=f0cb78e6a23bd85e959356413f40f132beca697c61df8080ab9cfd0e9373deb4&o=?size=M'/>
                <div className='blogpost1'>
                    <h4 className='mt-4'>Europe’s 10 most festive Christmas markets</h4>
                    <p> From potent mulled wine in Salzburg to sugar-dusted gingerbread in Valkenburg, Europe’s Christmas markets are the perfect opportunity  Here are 10 of the very best.</p>
                </div>
                </div>
                <div class="col-4">
                <img className='image1' src='https://cf.bstatic.com/xdata/images/xphoto/540x405/183822860.webp?k=362dfa460c134ee5d8610a54bc5a132e75ad6249d9bbafc51694558c75f55669&o='/>
                <h4 className='mt-4'>The top 10 travel destinations for 2023</h4>
                <p> From spiritual seaside towns to artistic capitals and hidden gems, this list of the top 10 on-trend places, experiences and stays is sure to inspire a year of incredible travel.</p>
                </div>
                <div class="col-3">
                <img className='image1' src='https://cf.bstatic.com/xdata/images/xphoto/540x405/180173480.webp?k=6ea6aa39bf8daaf82862915b72888bcf8ce68f0641053f336fcdd9d842b29d9d&o='/>
                <h5 className='mt-4'>Europe’s 10 most festive Christmas markets</h5>
                <p> From potent mulled wine in Salzburg to sugar-dusted gingerbread in Valkenburg, Europe’s Christmas markets are the perfect opportunity  Here are 10 of the very best.</p>
                </div>
            </div>
        </div>
    </>
  )
}
