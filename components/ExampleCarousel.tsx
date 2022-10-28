import { SetStateAction, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface IProp {
  data: any;
}

function ExampleCarousel({ data }: IProp) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel style={{ padding: `10vh`, borderRadius: `10px` }} activeIndex={index} onSelect={handleSelect}>
      {data.carouselBodies.map((carouselData: any) => {
        return (
          <Carousel.Item key={carouselData.carouselTitle}>
            <img className="d-block w-100" src={carouselData.imageUrl.url} alt="First slide" />
            <Carousel.Caption>
              <h3>{carouselData.carouselTitle}</h3>
              <p>{carouselData.carouselDescription}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ExampleCarousel;
