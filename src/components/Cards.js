import React from 'react';
import CardItems from './Carditem';
import "../components/Cards.css"
import img1 from "../components/images/img1.jpg"
import img2 from "../components/images/img2.jpg"
import img3 from "../components/images/img3.jpg"
import img4 from "../components/images/img4.jpg"
import img5 from "../components/images/img5.jpg"

function Cards() {
  return(
    <>
    <div className="cards">
        <h1>Cards</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    {/* Importing Components */}
                    <CardItems
                        src={img1}
                        text="Explore the hidden waterfall deep inside the Amazon Jungle!"
                        label="Adventure"
                        path="/services"
                    />
                    <CardItems
                        src={img2}
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Luxury'
                        path='/services'
                    />
            </ul>
            <ul className='cards__items'>
                <CardItems
                    src={img3}
                    text='Set Sail in the Atlantic Ocean visiting Uncharted   Waters'
                    label='Mystery'
                    path='/services'
                />
                <CardItems
                    src={img4}
                    text='Experience Football on Top of the Himilayan      Mountains'
                    label='Adventure'
                    path='/products'
                />
                <CardItems
                    src={img5}
                    text='Ride through the Sahara Desert on a guided camel    tour'
                    label='Adrenaline'
                    path='/sign-up'
                />
            </ul>
            </div>
        </div>
    </div>
    </>
  );
}

export default Cards;
