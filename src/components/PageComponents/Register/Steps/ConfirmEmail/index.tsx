import {
  LoginRegisterLayout,
  WapperInputComponent,
} from '@components/login-register/layout';
import { stepProps } from '../..';
import { ValueInfo, WapperInfoEmail, WapperOuther } from './styles';

export const StepCodeConfirmComponent: React.FC<stepProps> = ({
  setStepRegister,
}): JSX.Element => {
  return (
    <LoginRegisterLayout
      title="Enviamos o codigo para confirmar seu cadastro, insira ele no campo abaixo"
      page="confirm_email"
    >
      <WapperOuther>
        <WapperInputComponent
          onChange={() => setStepRegister(2)}
          value="Codigo"
        />
      </WapperOuther>
    </LoginRegisterLayout>
  );
};
