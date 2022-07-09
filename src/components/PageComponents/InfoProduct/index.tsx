import { ProductItem } from '@components/Product';
import Link from 'next/link';
import { useState } from 'react';
import { offers } from '../Home/data/offers';
import { info_product } from './data';
import { SelectAmountComponent } from './SelectQuant';
import {
  ButtonAction,
  DescriptionProduct,
  // ButtonSeeOptions,
  ItemImage,
  ItemInformation,
  ListImages,
  ListInformationProductPlus,
  ResponseValueInfo,
  TitleProduct,
  ValueActualPrice,
  ValueFrete,
  ValueInfoContent,
  ValueInfoFrete,
  ValueInfoNew,
  ValueInformation,
  ValueInfoRoute,
  ValueInfoTop,
  ValueOldPrice,
  ValuePorcent,
  ValueRepository,
  ValueTopInfoInfoPlus,
  WapperAllValueOfInformation,
  WapperButtonActionsProduct,
  WapperCardsInfos,
  WapperContainer,
  WapperContentInfos,
  WapperContentInfoTop,
  WapperFrete,
  WapperImage,
  WapperImagesProduct,
  WapperInfoOfProduct,
  WapperInfoPlusProduct,
  WapperInfoProduct,
  WapperInfoRoute,
  WapperInfoTop,
  WapperInfoTopPlus,
  WapperOfferProduct,
  WapperOfferProductItem,
  WapperOfInfos,
  WapperPrices,
  WapperRepository,
  WapperValueActualPrice,
  WapperValues,
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
        <WapperContentInfoTop>
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
        </WapperContentInfoTop>

        <WapperInfoPlusProduct>
          <WapperOfInfos padding>
            <WapperInfoTopPlus>
              <ValueTopInfoInfoPlus>
                Mais informações para o produto: {info_product.title}
              </ValueTopInfoInfoPlus>
            </WapperInfoTopPlus>
            <WapperCardsInfos>
              <ListInformationProductPlus>
                <ItemInformation>
                  <ValueInformation>Caracteristicas gerais</ValueInformation>
                  <WapperAllValueOfInformation>
                    <WapperValues>
                      <ValueInfoContent>Cor</ValueInfoContent>
                      <ResponseValueInfo>Vermelho</ResponseValueInfo>
                    </WapperValues>
                    <WapperValues>
                      <ValueInfoContent>Tamanho</ValueInfoContent>
                      <ResponseValueInfo>420mm x 320mm</ResponseValueInfo>
                    </WapperValues>
                    <WapperValues>
                      <ValueInfoContent>Cor</ValueInfoContent>
                      <ResponseValueInfo>Vermelho</ResponseValueInfo>
                    </WapperValues>
                  </WapperAllValueOfInformation>
                </ItemInformation>
              </ListInformationProductPlus>
              <ListInformationProductPlus>
                <ItemInformation>
                  <ValueInformation>Caracteristicas gerais</ValueInformation>
                  <WapperAllValueOfInformation>
                    <WapperValues>
                      <ValueInfoContent>Cor</ValueInfoContent>
                      <ResponseValueInfo>Vermelho</ResponseValueInfo>
                    </WapperValues>
                    <WapperValues>
                      <ValueInfoContent>Tamanho</ValueInfoContent>
                      <ResponseValueInfo>420mm x 320mm</ResponseValueInfo>
                    </WapperValues>
                    <WapperValues>
                      <ValueInfoContent>Cor</ValueInfoContent>
                      <ResponseValueInfo>Vermelho</ResponseValueInfo>
                    </WapperValues>
                  </WapperAllValueOfInformation>
                </ItemInformation>
              </ListInformationProductPlus>
              <ListInformationProductPlus>
                <ItemInformation>
                  <ValueInformation>Caracteristicas gerais</ValueInformation>
                  <WapperAllValueOfInformation>
                    <WapperValues>
                      <ValueInfoContent>Cor</ValueInfoContent>
                      <ResponseValueInfo>Vermelho</ResponseValueInfo>
                    </WapperValues>
                    <WapperValues>
                      <ValueInfoContent>Tamanho</ValueInfoContent>
                      <ResponseValueInfo>420mm x 320mm</ResponseValueInfo>
                    </WapperValues>
                    <WapperValues>
                      <ValueInfoContent>Cor</ValueInfoContent>
                      <ResponseValueInfo>Vermelho</ResponseValueInfo>
                    </WapperValues>
                  </WapperAllValueOfInformation>
                </ItemInformation>
              </ListInformationProductPlus>
              <ListInformationProductPlus>
                <ItemInformation>
                  <ValueInformation>Caracteristicas gerais</ValueInformation>
                  <WapperAllValueOfInformation>
                    <WapperValues>
                      <ValueInfoContent>Cor</ValueInfoContent>
                      <ResponseValueInfo>Vermelho</ResponseValueInfo>
                    </WapperValues>
                    <WapperValues>
                      <ValueInfoContent>Tamanho</ValueInfoContent>
                      <ResponseValueInfo>420mm x 320mm</ResponseValueInfo>
                    </WapperValues>
                    <WapperValues>
                      <ValueInfoContent>Cor</ValueInfoContent>
                      <ResponseValueInfo>Vermelho</ResponseValueInfo>
                    </WapperValues>
                  </WapperAllValueOfInformation>
                </ItemInformation>
              </ListInformationProductPlus>
            </WapperCardsInfos>
          </WapperOfInfos>
          <WapperOfInfos padding>
            <WapperInfoTopPlus>
              <ValueTopInfoInfoPlus>Descrição do produto</ValueTopInfoInfoPlus>
            </WapperInfoTopPlus>
            <DescriptionProduct>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad optio
              eius voluptatum non voluptatibus commodi inventore omnis laborum
              dolorum. Veritatis debitis nisi officiis corrupti! Necessitatibus
              est corporis laborum, odio optio, ducimus ipsam sequi maxime
              officiis corrupti debitis mollitia magnam nulla sapiente vitae
              ipsum incidunt fuga expedita nam recusandae quos architecto
              eligendi delectus id! Quam est laudantium aliquid modi sed sit
              ullam architecto pariatur explicabo neque laboriosam tempore odit
              ipsum illum qui fugiat ut, earum vero odio dicta perspiciatis.
              Accusantium dicta repellendus laborum, neque doloremque id
              eligendi harum quia quam impedit iusto eius totam voluptatum. Quo
              eligendi nisi deserunt repudiandae hic excepturi quidem dolor
              ducimus nam soluta mollitia perferendis iure quae repellendus
              nostrum asperiores aspernatur illo expedita, quisquam dolores, ea
              laudantium tempora! Error natus fugit illo aliquid? Culpa quo at
              quasi sapiente placeat repudiandae suscipit nulla sit ipsa nisi
              facere, sunt aut, eos sequi. Culpa, maxime enim, illum aut nam
              iste voluptatum modi quisquam, est inventore libero dignissimos
              saepe! Vel id blanditiis eius accusantium modi illo suscipit iusto
              rerum exercitationem quidem ex, impedit, alias consectetur
              corrupti. Quam tempore ullam cum odit, ratione enim, maxime quasi
              voluptatem repellat laudantium ipsam quos vero, consectetur
              suscipit possimus asperiores nihil facere labore laboriosam?
              Distinctio, ab.
            </DescriptionProduct>
          </WapperOfInfos>
          <WapperOfInfos>
            <WapperInfoTopPlus padding>
              <ValueTopInfoInfoPlus>Talvez você goste</ValueTopInfoInfoPlus>
            </WapperInfoTopPlus>
            <WapperOfferProduct>
              {offers.map(item => (
                <Link href="/product/545">
                  <a>
                    <WapperOfferProductItem>
                      <ProductItem {...item} />
                    </WapperOfferProductItem>
                  </a>
                </Link>
              ))}
            </WapperOfferProduct>
          </WapperOfInfos>
        </WapperInfoPlusProduct>
      </WapperInfoProduct>
    </WapperContainer>
  );
};
