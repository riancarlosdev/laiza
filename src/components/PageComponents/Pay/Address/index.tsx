import { useCallback } from 'react';
import { stepProps } from '..';
import { LayoutComponentPay } from '../Layout';
import {
  CheckBox,
  Input,
  PlusAddress,
  ValueAddress,
  ValueInformation,
  ValueInput,
  ValueTitleSetAddress,
  WapperAddNewAddress,
  WapperAddressExistent,
  WapperContentAddressSave,
  WapperInfoAddressEx,
  WapperInformationNewAddress,
  WapperInput,
  WapperSetAddressExistent,
  WapperTitleSetAddressExistent,
} from './styles';

interface WapperInput {
  value: string;
  placeholder: string;
  required?: boolean;
  available?: boolean;
}

const RenderWapperInput: React.FC<WapperInput> = ({
  placeholder,
  value,
  required,
  available,
}): JSX.Element => (
  <WapperInput>
    <ValueInput>
      {value}
      {required && <strong>*</strong>}
    </ValueInput>
    <Input disabled={available} placeholder={placeholder} />
  </WapperInput>
);

interface ItemAddress {
  address: string;
  number: string;
  city: string;
  state: string;
  country: string;
}

const RenderItemAddress: React.FC<ItemAddress> = ({
  address,
  city,
  country,
  number,
  state,
}): JSX.Element => (
  <WapperAddressExistent>
    <CheckBox type="radio" name="address-exist" />
    <WapperInfoAddressEx>
      <ValueAddress>{address}</ValueAddress>
      <PlusAddress>
        N° {number}, {city}, {state} - {country}
      </PlusAddress>
    </WapperInfoAddressEx>
  </WapperAddressExistent>
);

export const AddressComponent: React.FC<stepProps> = ({
  setStep,
  setChangeStep,
}): JSX.Element => {
  return (
    <LayoutComponentPay
      title="Endereço"
      sub_title="Onde vamos entregar a sua compra?"
      next
      funcClickNext={() => {
        setChangeStep(true);
        setTimeout(() => {
          setStep('FORM');
          setChangeStep(false);
        }, 600);
      }}
    >
      <>
        <WapperInformationNewAddress>
          <ValueInformation>
            Insira o endereço que vamos salva-lo para suas proximas compras :)
          </ValueInformation>
        </WapperInformationNewAddress>
        <WapperAddNewAddress>
          <RenderWapperInput placeholder="00000-000" value="CEP" required />
          <RenderWapperInput
            placeholder="Preenchimento automatico"
            available
            value="Estado"
            required
          />
          <RenderWapperInput
            placeholder="Preenchimento automatico"
            available
            value="Cidade"
            required
          />
          <RenderWapperInput
            placeholder="Ex: Av. Ernâni de Oliveira Rocha"
            value="Endereço"
            required
          />
          <RenderWapperInput placeholder="Ex: Centro" value="Bairro" required />
          <RenderWapperInput placeholder="Ex: 284" value="Número" required />
          <RenderWapperInput
            placeholder="Ex: Rua ao lado da garagem"
            value="Complemento"
          />
        </WapperAddNewAddress>
        <WapperSetAddressExistent>
          <WapperTitleSetAddressExistent>
            <ValueTitleSetAddress>
              ou <span>Selecione um endereço salvo</span>
            </ValueTitleSetAddress>
          </WapperTitleSetAddressExistent>
          <WapperContentAddressSave>
            <RenderItemAddress
              number="28"
              city="São Sebastião do Passé"
              address="Rua José Casemiro Pena"
              state="Bahia"
              country="Brasil"
            />
          </WapperContentAddressSave>
        </WapperSetAddressExistent>
      </>
    </LayoutComponentPay>
  );
};
