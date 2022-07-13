import { useCallback } from 'react';
import { stepProps } from '..';
import { LayoutComponentPay } from '../Layout';
import {
  CheckBox,
  ItemFormPay,
  ItemProduct,
  ValueInfoUser,
  ValueNameForm,
  ValueProduct,
  ValueResum,
  ValueTitleResum,
  WapperContentInfo,
  WapperContentInfoPay,
  WapperFormOfPayContent,
  WapperItemsFormOfPay,
  WapperOuther,
  WapperResumPay,
  WapperTitleResum,
} from './styles';

interface ItemFormOfPayProps {
  value: string;
  available?: boolean;
}

const RenderItemFormOfPay: React.FC<ItemFormOfPayProps> = ({
  value,
  available,
}): JSX.Element => (
  <ItemFormPay available={available}>
    <CheckBox type="radio" name="form-of-pay" disabled={!available} />
    <ValueNameForm>{value}</ValueNameForm>
  </ItemFormPay>
);

export const FormOfPayComponent: React.FC<stepProps> = ({
  setStep,
  setChangeStep,
}): JSX.Element => {
  return (
    <LayoutComponentPay
      funcClickNext={() => {
        setChangeStep(true);
        setTimeout(() => {
          setStep('PAY');
          setChangeStep(false);
        }, 600);
      }}
      funcClickBackTo={() => {
        setChangeStep(true);
        setTimeout(() => {
          setStep('ADDRESS');
          setChangeStep(false);
        }, 600);
      }}
      to_back
      title="Forma de Pagamento"
      sub_title="Como será a forma de pagamento?"
      next
    >
      <WapperFormOfPayContent>
        <WapperResumPay>
          <WapperTitleResum>
            <ValueTitleResum>Resumo do pedido</ValueTitleResum>
          </WapperTitleResum>
          <WapperContentInfoPay>
            <WapperContentInfo>
              <ValueInfoUser>Rian Carlos de Sousa Pinho</ValueInfoUser>
              <ValueInfoUser>095.733.665-92</ValueInfoUser>
              <ValueInfoUser>
                Rua José Casemiro Pena, 28, São Sebastião do Passé, Bahia -
                Brasil
              </ValueInfoUser>
              <ValueInfoUser>43850-000</ValueInfoUser>
              <ValueInfoUser>Codigo do pedido: 215452</ValueInfoUser>
            </WapperContentInfo>
            <WapperContentInfo>
              {['1', '2'].map(item => (
                <ItemProduct key={item}>
                  <ValueProduct>
                    Casaco de Moletom da Nike Estampado
                  </ValueProduct>
                  <ValueProduct>02x</ValueProduct>
                  <ValueProduct>R$ 150,00</ValueProduct>
                </ItemProduct>
              ))}
            </WapperContentInfo>
            <WapperContentInfo>
              <WapperOuther>
                <ValueResum>Frete</ValueResum>
                <ValueResum>R$ 00,00</ValueResum>
              </WapperOuther>
              <WapperOuther>
                <ValueResum>Total</ValueResum>
                <ValueResum id="total">R$ 300,00</ValueResum>
              </WapperOuther>
            </WapperContentInfo>
          </WapperContentInfoPay>
        </WapperResumPay>

        <WapperItemsFormOfPay>
          <RenderItemFormOfPay value="Cartão de Creditos" />
          <RenderItemFormOfPay value="Cartão de Debito" />
          <RenderItemFormOfPay available value="PIX" />
        </WapperItemsFormOfPay>
      </WapperFormOfPayContent>
    </LayoutComponentPay>
  );
};
