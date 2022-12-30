import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { jeans, necklace, salad } from '@assets/images/index';

interface ImagesGuard {
  id: number
  url: string
  des: string
  to: string
}

function CarouselImages() {
  const images: ImagesGuard[] = [
    {
      id: 1,
      url: jeans,
      des: 'Jeans!',
      to: '/fashion',
    },
    {
      id: 2,
      url: necklace,
      des: 'Accessories!',
      to: '/accessory',
    },
    {
      id: 3,
      url: salad,
      des: 'Salad!',
      to: '/salad',
    },
  ];

  const slide = images.map((image) => (
    <div key={image.id} className="relative">
      <Link key={image.id} to={image.to} className="absolute z-10 h-full w-full" />
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-bold absolute left-0 top-1/4 pl-20 lg:pl-44 2xl:pl-72">
        <span className="fontKnewave">{image.des}</span>
      </h2>
      <img src={image.url} alt={`캐러셀 이미지 ${image.id}`} className="w-full object-cover" style={{ maxHeight: '700px' }} />
    </div>
  ));

  return (
    <Carousel
      autoPlay={true}
      interval={4000}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
    >
      { slide }
    </Carousel>
  );
}

export default CarouselImages;
