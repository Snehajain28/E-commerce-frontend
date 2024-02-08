import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import HomeCarousel from '../components/HomeCarousel';
import Footer from '../components/Footer';
import { gounsPage1 } from '../data/Gouns/gouns'
import { kurtaPage1 } from '../data/Kurta/kurta';
import { mens_kurta } from '../data/Men/men_kurta';
import { mensShoesPage1 } from '../data/shoes';
import { lengha_page1 } from '../data/Women/LenghaCholi';
import { sareePage1 } from '../data/Saree/page1';
import { lehngacholiPage2 } from '../data/Saree/lenghaCholiPage2';
import { mensPantsPage1 } from '../data/pants/men_page1';
import { dressPage1 } from '../data/dress/page1';
import Search from '../components/Search';

function Home() {


  return (
    <div>
      <Navbar/>
       <Carousel />
     <Search/>
      <div className='mt-1'>
      <div className='space-y-10 py-10 flex flex-col justify-center px-5 lg:px-10'>
        <HomeCarousel sectionName={"Gouns"} CarouselData={gounsPage1} />
        <HomeCarousel sectionName={"Kurtas"} CarouselData={kurtaPage1} />
        <HomeCarousel sectionName={"Lehnga"} CarouselData={lehngacholiPage2} />
        <HomeCarousel sectionName={"Saree"} CarouselData={sareePage1} />
        <HomeCarousel sectionName={"Shoes"} CarouselData={mensShoesPage1} />
        <HomeCarousel sectionName={"Lehnga"} CarouselData={lengha_page1} />
        <HomeCarousel sectionName={"Pants"} CarouselData={mensPantsPage1} />
        <HomeCarousel sectionName={"Men's Kurta"} CarouselData={mens_kurta} />
        <HomeCarousel sectionName={"Dress"} CarouselData={dressPage1} />

      </div>
      <Footer />
      </div>
    </div>
  );
}

export default Home;
