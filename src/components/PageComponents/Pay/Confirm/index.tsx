import { LayoutComponentPay } from '../Layout';
import {
  ImageQrCode,
  ValueInfoPay,
  WapperConfirmPay,
  WapperInfoPay,
  WapperQRcode,
} from './styles';

export const ConfirmComponent: React.FC = (): JSX.Element => {
  return (
    <LayoutComponentPay
      title="Efetuar Pagamento"
      sub_title="Seu pedido é confirmado após o pagamento. Faça o pagamento nos
          proximos 10 minutos."
    >
      <WapperConfirmPay>
        <WapperInfoPay>
          <ValueInfoPay>
            Pague com QRcode ou se preferir, copie o codigo abaixo
          </ValueInfoPay>
        </WapperInfoPay>
        <WapperQRcode>
          <ImageQrCode />
        </WapperQRcode>
      </WapperConfirmPay>
    </LayoutComponentPay>
  );
};
