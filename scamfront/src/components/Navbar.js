import { Link } from "react-router-dom";
import { useState } from 'react';
import {AiOutlineMenu,AiFillCloseCircle} from 'react-icons/ai';

import wafe from './logo.png';
import './navbar.css';

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
  })

const Navbar = ({page}) => {

    const [ openMenu, setopenMenu ] = useState(false)

    return (
        <nav>
        <div className='nav__container'>
        <div className="content1">
            <img className='logo'  src= {wafe} alt="Logo" />
            <h1 className="h3">{page}</h1>
        </div>
            

            <ul className="nav__menu">
                <Link className='nav__menu_a' to='/'>
                    <li>Products</li>
                </Link>
                <Link className='nav__menu_a' to='/'>
                    <li>Solutions</li>
                </Link>
                <Link className='nav__menu_a' to='/jigsaws'>
                    <li>Technical-Hub</li>
                </Link>
                <Link className='nav__menu_a' to='/'>
                    <li>Support</li>
                </Link>
                <Link className='nav__menu_a' to='/'>
                    <li>Careers</li>
                </Link>

            </ul>
            <AiOutlineMenu className='menu_icon' onClick={ () => setopenMenu(true) } />
            
        </div>

        <div style={{
            display: openMenu ? "flex" : "none"
        }} className='nav_fixed' >
            
            <AiFillCloseCircle onClick={ () => setopenMenu(false) } className='nav_fixed_Canel' />

            <Link onClick={ () => setopenMenu(false)} className='nav_fixed_a' to='/'>
                <li>Product</li>
            </Link>

            <Link onClick={ () => setopenMenu(false)} className='nav_fixed_a' to='/'>
                <li>Support</li>
            </Link>

            <Link onClick={ () => setopenMenu(false)} className='nav_fixed_a' to='/'>
                <li>Technical-Hub</li>
            </Link>

            <Link onClick={ () => setopenMenu(false)} className='nav_fixed_a' to='/'>
                <li>Careers</li>
            </Link>
            <Link onClick={ () => setopenMenu(false)} className='nav_fixed_a' to='/'>
                <li>Solutions</li>
            </Link>

            
      </div>

        </nav>
    )
}

export default Navbar