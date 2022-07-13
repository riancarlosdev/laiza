import { useCallback, useRef, useState } from 'react';
import { stepProps } from '..';
import { LayoutComponentPay } from '../Layout';
import {
  ButtonCopy,
  ImageQrCode,
  Input,
  TextValueInfoQrCode,
  ValueInfoPay,
  WapperConfirmPay,
  WapperContent,
  WapperInfoPay,
  WapperInfoQrCode,
  WapperInput,
  WapperNotification,
  WapperQRcode,
  WapperTextInfo,
} from './styles';

export const ConfirmComponent: React.FC<stepProps> = (): JSX.Element => {
  const inputCode = useRef(null);
  const [copy, setCopy] = useState(false);

  const onCopyCode = useCallback(() => {
    inputCode.current.select();
    document.execCommand('copy');
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  }, [setCopy]);

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
          <span>
            Valor da total da compra:{' '}
            <strong>
              R$ 100<small>,00</small>
            </strong>
          </span>
        </WapperInfoPay>
        <WapperContent>
          <WapperQRcode>
            <ImageQrCode qr="https://via.placeholder.com/400" />
          </WapperQRcode>
          <WapperInfoQrCode>
            <WapperTextInfo>
              <TextValueInfoQrCode>
                Ou copie o codigo abaixo
              </TextValueInfoQrCode>
            </WapperTextInfo>
            <WapperInput>
              <Input disabled ref={inputCode} />
              <ButtonCopy onClick={onCopyCode}>Copy</ButtonCopy>
              <WapperNotification copy={copy}>
                <span>Copiado!</span>
              </WapperNotification>
            </WapperInput>
          </WapperInfoQrCode>
        </WapperContent>
      </WapperConfirmPay>
    </LayoutComponentPay>
  );
};
