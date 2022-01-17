import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './button.js';
import './navbar.css';
import './button.css';

// rfce
function Navbar() {
    // Setting state
    const [click, setClick] = useState(false);
    const [button , setButton] = useState(true);

    // Defining object
    const handleClick = () => setClick(!click);
    // Defining object
    const closeMobileMenu = () => setClick(false);

    //Showbutton constant for mobile screen
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                {/* ul>li*2>a */}
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo">
                        TechSellence <i className="fab fa-typo3"></i> 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                    {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Team' className='nav-links' onClick={closeMobileMenu}>
                                Team
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Reach_Us' className='nav-links' onClick={closeMobileMenu}>
                                Reach_Us
                            </Link>
                        </li>
                    </ul>

                    {button && <Button buttonStyle='btn--outline'> Sign Up</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
