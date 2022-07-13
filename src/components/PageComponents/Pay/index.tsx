import { MaxContainerComponent } from '@components/Global/MaxContainer';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { MdSecurity } from 'react-icons/md';
import { DefaultTheme, StyledComponent } from 'styled-components';
import { AddressComponent } from './Address';
import { ConfirmComponent } from './Confirm';
import { FormOfPayComponent } from './FormOfPay';
import {
  Header,
  Value,
  WapperCarouselSteps,
  WapperChangeStep,
  WapperContainer,
  WapperHeader,
  WapperInfoHeader,
  WapperStepsOfPay,
} from './styles';

type stepStateProps = 'ADDRESS' | 'FORM' | 'PAY';
export interface stepProps {
  setStep: Dispatch<SetStateAction<stepStateProps>>;
  setChangeStep: (value: boolean) => void;
}

export const PayComponent: React.FC = (): JSX.Element => {
  const [step, setStep] = useState<stepStateProps>('ADDRESS');
  const [changeStep, setChangeStep] = useState(false);

  return (
    <WapperContainer>
      <WapperHeader>
        <Header>
          <WapperInfoHeader>
            <Value>Local Protegido</Value>
            <MdSecurity size={27} color="#6cff2d" />
          </WapperInfoHeader>
        </Header>
      </WapperHeader>
      <WapperStepsOfPay>
        <MaxContainerComponent>
          <WapperCarouselSteps>
            {changeStep && (
              <WapperChangeStep>
                <p>Calma estou fazendo o meu melhor :(</p>
              </WapperChangeStep>
            )}
            {step === 'ADDRESS' && (
              <AddressComponent
                setChangeStep={setChangeStep}
                setStep={setStep}
              />
            )}
            {step === 'FORM' && (
              <FormOfPayComponent
                setChangeStep={setChangeStep}
                setStep={setStep}
              />
            )}
            {step === 'PAY' && (
              <ConfirmComponent
                setChangeStep={setChangeStep}
                setStep={setStep}
              />
            )}
          </WapperCarouselSteps>
        </MaxContainerComponent>
      </WapperStepsOfPay>
    </WapperContainer>
  );
};
