import { LayoutComponent } from '@components/Global/Layout';
import { MaxContainerComponent } from '@components/Global/MaxContainer';
import { useState } from 'react';
import { StepAddressComponent } from './stepAddress';
import { StepDataComponent } from './stepData';
import {
  ButtonSave,
  ButtonTrocarSenha,
  ContentStepSelected,
  Input,
  ItemStep,
  ListSteps,
  ValueInfoPage,
  ValueInput,
  ValueTitle,
  WapperButton,
  WapperContainer,
  WapperContent,
  WapperContentStep,
  WapperHeaderStep,
  WapperInfoPage,
  WapperInput,
  WapperOther,
} from './styles';

export const UserComponent: React.FC = (): JSX.Element => {
  const [step, setStep] = useState(1);

  return (
    <LayoutComponent>
      <MaxContainerComponent>
        <WapperContainer>
          <WapperInfoPage>
            <ValueInfoPage>Area do usuario</ValueInfoPage>
          </WapperInfoPage>

          <WapperContent>
            <WapperHeaderStep>
              <ValueTitle>Meu Perfil</ValueTitle>
              <ListSteps>
                <ItemStep onClick={() => setStep(1)} active={step === 1}>
                  Dados do Usuario
                </ItemStep>
                <ItemStep onClick={() => setStep(2)} active={step === 2}>
                  Endereços
                </ItemStep>
              </ListSteps>
            </WapperHeaderStep>
            <ContentStepSelected>
              {step === 1 && <StepDataComponent />}
              {step === 2 && <StepAddressComponent />}
            </ContentStepSelected>
          </WapperContent>
        </WapperContainer>
      </MaxContainerComponent>
    </LayoutComponent>
  );
};
