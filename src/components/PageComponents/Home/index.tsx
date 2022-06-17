import { Advertising } from '@components/Advertising';
import { MaxContainerComponent } from '@components/Global/MaxContainer';
import { ProductItem } from '@components/Product';
import Link from 'next/link';
import { categorys } from './data/categorys';
import {
  ImageCategory,
  ItemCategoryWithImage,
  ListCategoryWithImage,
  SectionOffers,
  TitleSection,
  ValeuCategory,
  WapperSeactionCategory,
  WapperTop,
} from './styles';

export const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Advertising />
      <MaxContainerComponent>
        <>
          <WapperSeactionCategory>
            <ListCategoryWithImage>
              {categorys.map(item => (
                <ItemCategoryWithImage key={item.id}>
                  <ImageCategory img={item.image} />
                  <ValeuCategory>{item.value}</ValeuCategory>
                </ItemCategoryWithImage>
              ))}
            </ListCategoryWithImage>
          </WapperSeactionCategory>

          <SectionOffers>
            <WapperTop>
              <TitleSection>Ofertas do Dia</TitleSection>
              <Link href="/offers">
                <a>Ver mais</a>
              </Link>
            </WapperTop>
            <ProductItem
              info_frete
              price_actual="137,00"
              title="Casaco Macio com Capuz de Pelucia Quente Pele"
              porcent="10"
              price_old="149,98"
            />
          </SectionOffers>
        </>
      </MaxContainerComponent>
    </>
  );
};
