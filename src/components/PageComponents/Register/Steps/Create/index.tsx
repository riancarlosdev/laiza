import {
  LoginRegisterLayout,
  WapperInputComponent,
} from '@components/login-register/layout';
import { stepProps } from '../..';
import { ButtonRegister, WapperButton, WapperOuther } from './styles';

export const StepCreateComponent: React.FC<stepProps> = ({
  setStepRegister,
}): JSX.Element => {
  return (
    <LoginRegisterLayout title="Seja bem-vindo <3" page="register">
      <>
        <WapperOuther>
          <WapperInputComponent value="Primeiro nome" />
          <WapperInputComponent value="Sobrenome" />
        </WapperOuther>
        <WapperOuther>
          <WapperInputComponent value="CPF" />
          <WapperInputComponent value="Data de nascimento" />
        </WapperOuther>
        <WapperOuther>
          <WapperInputComponent id="email" value="Email" />
        </WapperOuther>
        <WapperOuther>
          <WapperInputComponent type="password" see value="Senha" />
          <WapperInputComponent type="password" value="Confirm senha" />
        </WapperOuther>
        <WapperButton>
          <ButtonRegister onClick={() => setStepRegister(1)}>
            Criar Conta
          </ButtonRegister>
        </WapperButton>
      </>
    </LoginRegisterLayout>
  );
};
