import { useState } from 'react';
import { StepAddAddressComponent } from './Steps/AddAddress';
import { StepCodeConfirmComponent } from './Steps/ConfirmEmail';
import { StepCreateComponent } from './Steps/Create';

export interface stepProps {
  setStepRegister: (value: number) => void;
}

export const RegisterComponent: React.FC = (): JSX.Element => {
  const [stepRegister, setStepRegister] = useState(0);

  if (stepRegister === 1) {
    return <StepCodeConfirmComponent setStepRegister={setStepRegister} />;
  }

  if (stepRegister === 2) {
    return <StepAddAddressComponent />;
  }

  return <StepCreateComponent setStepRegister={setStepRegister} />;
};
