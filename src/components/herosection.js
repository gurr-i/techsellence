import React from 'react';
import '../App.css';
import { Button } from '../components/button';
import './herosection.css';
// import video4 from './videos/video4.mp4';
import video12 from './videos/video12.mp4';


// rfce
function Herosection() {
    return (
        <>
        <div className='hero-container'>
        {/* debug */}
            {/* <video src='/public/videos/video4.mp4' autoPlay loop muted /> */}

            {/* <video id="background-video" loop autoPlay>
                <source src="/public/videos/video4.mp4" type="video/mp4" /> */}
                {/* <source src="http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4" type="video/ogg" /> */}
                {/* Your browser does not support the video tag.
            </video> */}

            <video  autoPlay loop muted style={{width:"100%", position:"absolute", height:"100%", objectFit:"cover", transform:"translate(-50% -50%)", zIndex:"-1", preload: 'auto',}}>
            <source src={video12} type='video/mp4'/>
            </video>

            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Get Started
                </Button>
                {/* <div className='btn---primary'> */}
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Watch Trailer <i className='far fa-play fa-1x'></i>
                </Button>
                {/* </div> */}
            </div>
        </div>
        </>
    );
}

export default Herosection;
