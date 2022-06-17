import { MaxContainerComponent } from '@components/Global/MaxContainer';
import Carousel from 'react-multi-carousel';
import { images } from './data/images';
import { Container, Image, WapperImage } from './styles';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const Advertising: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Carousel
        responsive={responsive}
        autoPlay
        infinite
        customTransition="ease 2s"
      >
        {images.map(item => (
          <WapperImage>
            <Image img={item.value} />
          </WapperImage>
        ))}
      </Carousel>
    </Container>
  );
};
