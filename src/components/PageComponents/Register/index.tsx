import {
  LoginRegisterLayout,
  WapperInputComponent,
} from '@components/login-register/layout';
import { ButtonRegister, WapperButton, WapperOuther } from './styles';

export const RegisterComponent: React.FC = (): JSX.Element => {
  return (
    <LoginRegisterLayout page="register">
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
          <ButtonRegister>Criar Conta</ButtonRegister>
        </WapperButton>
      </>
    </LoginRegisterLayout>
  );
};
