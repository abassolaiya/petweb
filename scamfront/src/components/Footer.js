import React from 'react'
import { Link } from 'react-router-dom';

import wafe from './logo.png';
import './footer.css'



const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='links'>
        <ul className="links__menu">
                <Link  to='/signin'>
                    <li>Product</li>
                </Link>
                <Link  to='/'>
                    <li>Support</li>
                </Link>
                <Link  to='/signin'>
                    <li>Technical-hub</li>
                </Link>
                <Link  to='/signin'>
                    <li>Carrer</li>
                </Link>
                <Link  to='/signin'>
                    <li>Solutions</li>
                </Link>

            </ul>
            
        </div>
        <div className='appdownload'>
            <div className='downloadapp__content'>
            {/* <img src={wafers} alt= 'wafer logo'/> */}
                <p>A bank is a financial institution licensed to receive deposits and make loans. There are several types of banks including retail, commercial, and investment banks. In most countries, banks are regulated by the national government or central bank.
                </p>
                {/* // <p>Download OHealth App here</p>
                // <div className='stores'>
                // <a href='https://apps.apple.com/us/app/ohealth-app/id1570474561'>
                //     <img src={appstore} alt= 'app store logo'/>
                // </a>
                
                // <a href='https://play.google.com/store/apps/details?id=com.ohealth.ohealth&pli=1'>
                //     <img src={playstore} alt='play store logo'/>
                // </a>
                    
                    
                // </div> 
                // <p className='text'>OHealth App is available on all mobile platforms</p>*/}
            </div>
        </div>
        <div className='contactus'>

            <div className='footer_left'>
                <img className='logo' src={wafe} alt= 'Bank logo'/>
                <p>Get the latest update on Finace and the Exchange Market in real time,
                    sign up for our news letter:
                    <form>
                        <input placeholder='Email' className='footer__input'></input>
                        <button className='footer_button'>Subscribe</button>
                    </form>
                </p>
                
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
