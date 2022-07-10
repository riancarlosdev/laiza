import { LayoutComponentPay } from '../Layout';
import {
  CheckBox,
  ItemFormPay,
  ValueNameForm,
  ValueTitleResum,
  WapperContentInfoPay,
  WapperFormOfPayContent,
  WapperItemsFormOfPay,
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

export const FormOfPayComponent: React.FC = (): JSX.Element => {
  return (
    <LayoutComponentPay
      title="Forma de Pagamento"
      sub_title="Como será a forma de pagamento?"
    >
      <WapperFormOfPayContent>
        <WapperResumPay>
          <WapperTitleResum>
            <ValueTitleResum>Resumo da compra</ValueTitleResum>
          </WapperTitleResum>
          <WapperContentInfoPay>Resumo da compra</WapperContentInfoPay>
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
