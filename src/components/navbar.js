import React,{useState ,useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './button.js';
import './navbar.css';
import './button.css';
// import Button from '@mui/material/Button';

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
    };

    // Remove refresh signup button
    useEffect(() => {
        showButton();
    },[]);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                {/* ul>li*2>a */}
                <div className='navbar-container'>
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <i className="fab fa-typo3 fa-pull-right fa-1x"></i> 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                    {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
                    <i className={click ? 'fas fa-times fa-1x fa-pull-right' : 'fas fa-bars fa-1x fa-pull-right'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active fa-1x' : 'nav-menu fa-1x '}>
                        <li className='nav-item'>
                            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
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
                            <Link to='/About_Us' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    {/* Mi ui Button Used */}
                    {/* {button && <Button variant="outlined" color='inherit'>Sign Up</Button>} */}
                </div>
            </nav>
        </>
    );
}

export default Navbar
