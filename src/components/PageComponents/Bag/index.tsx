import { ProductItem } from '@components/Product';
import Link from 'next/link';
import { offers } from '../Home/data/offers';
import { AmountComponent } from './OptionsProduct/amount';
import { ColorComponent } from './OptionsProduct/Color';
import { WidthComponent } from './OptionsProduct/Width';
import {
  ButtonSale,
  CardItemFormPay,
  ImageProduct,
  Item,
  Name,
  QuestionSale,
  ResponseSale,
  Table,
  Td,
  Th,
  Tr,
  ValueTitileSale,
  ValueTitlePage,
  WapperActionsProduct,
  WapperButtonPay,
  WapperContainer,
  WapperContentPage,
  WapperContentSale,
  WapperContentSaleContainer,
  WapperInfomartionTotalSale,
  WapperInfoProduct,
  WapperInformationSale,
  WapperItemsCart,
  WapperItensFormPay,
  WapperProduct,
  WapperQuestions,
  WapperRe,
  WapperTitleSale,
  WapperValueTitlePage,
} from './styles';

export const BagComponent: React.FC = (): JSX.Element => {
  return (
    <WapperContainer>
      <WapperValueTitlePage>
        <ValueTitlePage>Carrinho de Compras</ValueTitlePage>
      </WapperValueTitlePage>
      <WapperInformationSale>
        <WapperContentPage>
          <WapperItemsCart>
            <Table>
              <Tr>
                <Th>Produto</Th>
                <Th>Preço</Th>
                <Th>Quantidade</Th>
                <Th>Total</Th>
              </Tr>
              <Tr>
                <Td>
                  <WapperProduct>
                    <ImageProduct image="https://via.placeholder.com/60" />
                    <WapperInfoProduct>
                      <Name>Nome Produto</Name>
                      <WapperActionsProduct>
                        <WidthComponent />
                        <ColorComponent />
                      </WapperActionsProduct>
                    </WapperInfoProduct>
                  </WapperProduct>
                </Td>
                <Td style={{ fontFamily: 'sans-serif' }}>R$ 10,00</Td>
                <Td>
                  <AmountComponent />
                </Td>
                <Td>
                  <div
                    style={{
                      width: 85,
                      textAlign: 'center',
                      fontFamily: 'sans-serif',
                      fontSize: 18,
                    }}
                  >
                    R$ 10,00
                  </div>
                </Td>
              </Tr>
              <Tr>
                <Td last>
                  <WapperProduct>
                    <ImageProduct image="https://via.placeholder.com/60" />
                    <WapperInfoProduct>
                      <Name>Nome Produto</Name>
                      <WapperActionsProduct>
                        <WidthComponent />
                        <ColorComponent />
                      </WapperActionsProduct>
                    </WapperInfoProduct>
                  </WapperProduct>
                </Td>
                <Td last style={{ fontFamily: 'sans-serif' }}>
                  R$ 10,00
                </Td>
                <Td last>
                  <AmountComponent />
                </Td>
                <Td last>
                  <div
                    style={{
                      width: 85,
                      textAlign: 'center',
                      fontFamily: 'sans-serif',
                      fontSize: 18,
                    }}
                  >
                    R$ 10,00
                  </div>
                </Td>
              </Tr>
            </Table>
          </WapperItemsCart>
        </WapperContentPage>

        <WapperContentSaleContainer>
          <WapperTitleSale>
            <ValueTitileSale>Resumo do Pedido</ValueTitileSale>
          </WapperTitleSale>
          <WapperInfomartionTotalSale>
            <WapperContentSale>
              <WapperQuestions>
                <QuestionSale>Frete</QuestionSale>
                <ResponseSale>R$ 00,00</ResponseSale>
              </WapperQuestions>
              <WapperQuestions>
                <QuestionSale>Total</QuestionSale>
                <ResponseSale>R$ 20,00</ResponseSale>
              </WapperQuestions>

              <WapperButtonPay>
                <Link href="/pay">
                  <a>
                    <ButtonSale>Finalizar Compra</ButtonSale>
                  </a>
                </Link>
              </WapperButtonPay>
            </WapperContentSale>
          </WapperInfomartionTotalSale>

          <WapperTitleSale>
            <ValueTitileSale>Forma de Pagamento</ValueTitileSale>
          </WapperTitleSale>
          <WapperItensFormPay>
            <CardItemFormPay>
              <Item image="/images/logo-pix.png" />
            </CardItemFormPay>
          </WapperItensFormPay>
        </WapperContentSaleContainer>
      </WapperInformationSale>

      <WapperRe>
        <ValueTitileSale>Produtos Recomendados</ValueTitileSale>

        <WapperProduct>
          {offers.map(item => (
            <ProductItem {...item} />
          ))}
        </WapperProduct>
      </WapperRe>
    </WapperContainer>
  );
};
