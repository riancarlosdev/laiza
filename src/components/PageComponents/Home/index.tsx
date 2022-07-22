import { Advertising } from '@components/Advertising';
import { MaxContainerComponent } from '@components/Global/MaxContainer';
import { ProductItem } from '@components/Product';
import Link from 'next/link';
import { categorys } from './data/categorys';
import { offers } from './data/offers';
import {
  ImageCategory,
  ItemCategoryWithImage,
  ListCategoryWithImage,
  SectionOffers,
  TitleSection,
  ValeuCategory,
  WapperSeactionCategory,
  WapperTop,
  WapperOfferProduct,
  WapperOfferProductItem,
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
            <WapperOfferProduct>
              {offers.map(item => (
                <Link
                  href={`/categoria/${item.slug.category}/${item.slug.sub_category}/${item.slug.title}/${item.slug.id}`}
                >
                  <a>
                    <WapperOfferProductItem>
                      <ProductItem {...item} />
                    </WapperOfferProductItem>
                  </a>
                </Link>
              ))}
            </WapperOfferProduct>
          </SectionOffers>
        </>
      </MaxContainerComponent>
    </>
  );
};
