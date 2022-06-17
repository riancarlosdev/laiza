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
}

export const ProductItem: React.FC<ProductProps> = ({
  info_frete,
  price_actual,
  title,
  porcent,
  price_old,
}): JSX.Element => {
  return (
    <Container>
      <Image />
      <WapperInfo>
        <TitleProduct>{title}</TitleProduct>
        <WapperPrice>
          <PriceOld>R$ {price_old}</PriceOld>
          <WapperDraftPrice>
            <PriceActual>R$ {price_actual}</PriceActual>
            <PorcetPrice>{porcent}% OFF</PorcetPrice>
          </WapperDraftPrice>
        </WapperPrice>
        {info_frete && <InfoFrete />}
      </WapperInfo>
    </Container>
  );
};
