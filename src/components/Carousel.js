import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



 const main_Carousel=[
    {
        "img": "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/0/10_5.jpg"
       
    },
    { 
        "img": "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_4.jpg"
     
    } ,
    {
        "img": "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_8.jpg"
       
    },
    {
        "img": "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_4.jpg"
       
    },
    {
        "img": "https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_11.jpg"
        
    }
      
    ]


const items = main_Carousel.map((item) => 
 {return ( <img alt="" src={item.img} className='-z-10 lg:h-[20rem] '></img>)})

const Carousel = () => (
<div className='mt-[4rem]'>
    <AliceCarousel
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        disableDotsControls
        disableButtonsControls
        items={items}
    />
    </div>
);
export default Carousel;