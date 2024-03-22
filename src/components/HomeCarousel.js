import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from './Card.js';


const HomeCarousel = ({ CarouselData, sectionName }) => {

   const responsive = {
        0: { items: 1.5 },
        375: { items: 1.75 },
        400:{items:2},
        600: { items: 2.5 },
        720: { items: 3 },
        1024: { items: 4.5 },
       
    }

    const items = CarouselData.slice(0, 10).map((data) => { return <Card item={data} /> })

    return (<div className=''>
        <h1 className='text-2xl pointer-cursor lg:ml-[4rem] ml-[1.5rem] font-extrabold text-gray-800 pt-3 pb-1 md:pb-3'>{sectionName}</h1>
        <div className='relative '>
            <AliceCarousel
                responsive={responsive}
                mouseTracking
                disableDotsControls
                touchMoveDefaultEvents
                items={items}
            />


        </div>
    </div>)
}
export default HomeCarousel;