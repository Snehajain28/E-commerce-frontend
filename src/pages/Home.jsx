import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel/Carousel';
import { dressPage1 } from '../data/dress/page1';
import HomeCarousel from '../components/AnotherCarousels/HomeCarousel';
import Footer from '../components/Footer';
import Product from '../components/Product/Product';
import {gounsPage1} from '../data/Gouns/gouns'

function Home() {
  return (
    <div >
      <Navbar />
      <Carousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeCarousel sectionName={"Dress"} CarouselData={dressPage1} />
        <HomeCarousel sectionName={"Gouns"} CarouselData={gounsPage1} />

      </div>
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
