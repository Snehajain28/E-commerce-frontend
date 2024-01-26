import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Card from '../Card/Card.js';
i

const HomeCarousel = ({ CarouselData, sectionName }) => {

   const responsive = {
        0: { items: 1 },
        600: { items: 2 },
        720: { items: 3 },
        1024: { items: 4 },
    }

    const items = CarouselData.slice(0, 10).map((data) => { return <Card item={data} /> })

    return (<div className='border'>
        <h1 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h1>
        <div className='relative p-5 '>
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