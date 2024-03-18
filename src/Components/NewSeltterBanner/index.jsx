import React from 'react';
import { SlPaperPlane } from "react-icons/sl";
import './index.css'


function NewSeltterBanner() {
    return(
        <div className='medicine-banner-main-container'>
            <div className='medicine-banner-sub-container'>
            <h1 className='medicine-banner-heading'>Join our newsletter</h1>
                <p className='medicine-banner-paragraph'>Join over half a million vitamin lovers and get our latest deals, articles, and resources!</p>
                <div className='medicine-banner-input-container'>
                <input type='search' 
                placeholder='Email Address'
                className='medicine-banner-input' 
                />
                <div className='medicine-banner-button-container'>
                    <button className='medicine-banner-button'><SlPaperPlane className='medicine-banner-icon'/>Subscribe</button>
                </div>
                </div>
                <div className='medicine-banner-input-container1'>
                <input type='search' 
                placeholder='Email Address'
                className='medicine-banner-input1' 
                />
                <div className='medicine-banner-button-container1'>
                    <button className='medicine-banner-button1'><SlPaperPlane className='medicine-banner-icon1'/>Subscribe</button>
                </div>  
                </div>
            </div>
        </div>
    )
}
export default NewSeltterBanner
