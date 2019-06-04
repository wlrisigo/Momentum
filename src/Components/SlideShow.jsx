import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css';

import {Image} from 'semantic-ui-react'


import bearHold from '../Images/HomePage/SlideShow/BearHold.jpg'
import katePro from '../Images/HomePage/SlideShow/KateProPic.jpeg'
import lungePush from '../Images/HomePage/SlideShow/LungePush.jpg'

import stirPot from '../Images/HomePage/SlideShow/Stir_The_Pot.png'


import React from "react";


const Slides = () => {
    const content = [
        {
            image: katePro,
            title: "Hello"
        },
        {
            image: lungePush,
            title: "Hello"
        },
        {
            image: bearHold,
            title:"Hello"
        },
        {
            image: stirPot,
            title: "Hello"
        }

    ];
    return (
        <Slider autoplay= "4000" duration='3000' previousButton='' nextButton=''>

            {content.map((item, index) =>

                <div key={index}>

                    <Image src={item.image} fluid={true} centered  />
                </div>


            )}

                    </Slider>
    )}

export default Slides;