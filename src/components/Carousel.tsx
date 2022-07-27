import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
import jeans from '../assets/jeans.jpg'
import necklace from '../assets/necklace.jpg'
import salad from '../assets/salad.jpg'

interface imagesGuard {
  id: number
  url: string
  des: string
  to: string
}

function CarouselCom() {
  const images: imagesGuard[] = [
    {
      id: 1,
      url: jeans,
      des: 'Jeans!',
      to: '/fashion'
    },
    {
      id: 2,
      url: necklace,
      des: 'Accessories!',
      to: '/accessory'
    },
    {
      id: 3,
      url: salad,
      des: 'Salad!',
      to: '/salad'
    }
  ]

  const slide = images.map((image) => {
    return (
      <div key={ image.id } className="relative">
        <Link key={ image.id } to={ image.to } className="absolute z-10" style={{ height: "100%", width: "100%" }} />
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold absolute left-0 top-1/4 pl-20 lg:pl-44 2xl:pl-72">
          <span className="fontKnewave">{ image.des }</span>
          {/* <span className="text-base block text-left text-white font-normal py-1.5 pl-px">더 자세히 알아보기</span> */}
        </h2>
        <img src={ image.url } alt={ "캐러셀 이미지 " + image.id } style={{ maxHeight: "700px", width: "100%", objectFit: "cover" }} />
      </div>
    )
  })


  return (
    <Carousel autoPlay={true} showThumbs={false} interval={4000} infiniteLoop={true} showStatus={false} showArrows={false}>
      { slide }
    </Carousel>
  );
}

export default CarouselCom;