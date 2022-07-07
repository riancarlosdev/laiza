import Link from 'next/link';
import { useState } from 'react';
import { info_product } from './data';
import { SelectAmountComponent } from './SelectQuant';
import {
  ButtonAction,
  // ButtonSeeOptions,
  ItemImage,
  ListImages,
  TitleProduct,
  ValueActualPrice,
  ValueFrete,
  ValueInfoFrete,
  ValueInfoNew,
  ValueInfoRoute,
  ValueInfoTop,
  ValueOldPrice,
  ValuePorcent,
  ValueRepository,
  WapperButtonActionsProduct,
  WapperContainer,
  WapperContentInfos,
  WapperFrete,
  WapperImage,
  WapperImagesProduct,
  WapperInfoOfProduct,
  WapperInfoProduct,
  WapperInfoRoute,
  WapperInfoTop,
  WapperPrices,
  WapperRepository,
  WapperValueActualPrice,
} from './styles';

export const InfoProductComponent: React.FC = (): JSX.Element => {
  const [imageActive, setImageActive] = useState({
    id: info_product.images[0].id,
    image: info_product.images[0].image,
  });

  return (
    <WapperContainer>
      <WapperInfoRoute>
        <Link href="/">
          <a>Voltar</a>
        </Link>
        <ValueInfoRoute>
          <Link href="/">
            <a>Pagina</a>
          </Link>{' '}
          {'>'}{' '}
          <Link href="/">
            <a>Pagina</a>
          </Link>{' '}
          {'>'}{' '}
          <Link href="/">
            <a>Pagina</a>
          </Link>
        </ValueInfoRoute>
      </WapperInfoRoute>

      <WapperInfoProduct>
        <WapperImagesProduct>
          <ListImages>
            {info_product.images.map(item => (
              <ItemImage
                onClick={() =>
                  setImageActive({ id: item.id, image: item.image })
                }
                active={imageActive.id === item.id}
                key={item.id}
                image={item.image}
              />
            ))}
          </ListImages>
          <WapperImage
            image={imageActive.image ?? info_product.images[0].image}
          />
        </WapperImagesProduct>
        <WapperInfoOfProduct>
          <div>
            <WapperInfoTop>
              {info_product.new && <ValueInfoNew>Novo</ValueInfoNew>}
              <ValueInfoTop>{info_product.qnt_sales} vendidos</ValueInfoTop>
            </WapperInfoTop>
            <WapperContentInfos>
              <TitleProduct>{info_product.title}</TitleProduct>
              <WapperPrices>
                <ValueOldPrice>R$ {info_product.price_old}</ValueOldPrice>
                <WapperValueActualPrice>
                  <ValueActualPrice>
                    R$ {info_product.price_actual}
                  </ValueActualPrice>
                  <ValuePorcent>27% OFF</ValuePorcent>
                </WapperValueActualPrice>
              </WapperPrices>
              <WapperFrete>
                {info_product.frete && <ValueFrete>Frete gratís</ValueFrete>}
                <ValueInfoFrete>
                  Chegará em sua casa entre os dias{' '}
                  <strong>12 e 14 de maio</strong>
                </ValueInfoFrete>
                {/* <ButtonSeeOptions>Ver mais opções</ButtonSeeOptions> */}
              </WapperFrete>
              <SelectAmountComponent repository={info_product.repository} />
              <WapperRepository>
                {info_product.repository !== 0 && info_product.repository ? (
                  <ValueRepository>
                    {info_product.repository}{' '}
                    {info_product.repository > 1 ? 'unidades' : 'unidade'} em
                    estoque
                  </ValueRepository>
                ) : (
                  <ValueRepository on={info_product.repository === 0}>
                    Produto Indisponivel em Estoque
                  </ValueRepository>
                )}
              </WapperRepository>
            </WapperContentInfos>
          </div>

          {info_product.repository !== 0 && (
            <WapperButtonActionsProduct>
              <ButtonAction color="pay">Comprar Agora</ButtonAction>
              <ButtonAction color="cart">Adicionar ao Carrinho</ButtonAction>
            </WapperButtonActionsProduct>
          )}
        </WapperInfoOfProduct>
      </WapperInfoProduct>

      {/* <WapperInfoPlusProduct>
        <WapperInfoTopPlus>
          <ValueTopInfoInfoPlus>
            Mais informações para o produto:{' '}
          </ValueTopInfoInfoPlus>
        </WapperInfoTopPlus>
        <ListInformationProductPlus>
          <ItemInformation>
            <ValueInformation>Caracteristicas gerais</ValueInformation>
            <WapperValues></
          </ItemInformation>
        </ListInformationProductPlus>
      </WapperInfoPlusProduct> */}
    </WapperContainer>
  );
};
