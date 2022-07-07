import Link from 'next/link';
import {
  Container,
  Image,
  InfoFrete,
  PorcetPrice,
  PriceActual,
  PriceOld,
  TitleProduct,
  WapperDraftPrice,
  WapperInfo,
  WapperPrice,
} from './styles';

interface ProductProps {
  title: string;
  price_old?: string;
  price_actual: string;
  porcent?: string;
  info_frete: boolean;
  img?: string;
}

export const ProductItem: React.FC<ProductProps> = ({
  info_frete,
  price_actual,
  title,
  porcent,
  price_old,
  img,
}): JSX.Element => {
  return (
    <Container>
      <Image img={img} />
      <WapperInfo>
        <TitleProduct>{title}</TitleProduct>
        <WapperPrice>
          <PriceOld>R$ {price_old}</PriceOld>
          <WapperDraftPrice>
            <PriceActual>R$ {price_actual}</PriceActual>
            <PorcetPrice>{porcent}% OFF </PorcetPrice>
          </WapperDraftPrice>
          {info_frete && (
            <p
              style={{
                marginTop: 14,
                color: '#13ac0e',
                fontFamily: 'sans-serif',
              }}
            >
              Frete Gratís
            </p>
          )}
        </WapperPrice>
      </WapperInfo>
    </Container>
  );
};
