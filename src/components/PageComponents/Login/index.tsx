import {
  LoginRegisterLayout,
  WapperInputComponent,
} from '@components/login-register/layout';
import { ButtonRegister, WapperButton, WapperOuther } from './styles';

export const LoginComponent: React.FC = (): JSX.Element => {
  return (
    <LoginRegisterLayout title="Bem-vindo de volta!" page="login">
      <>
        <WapperOuther>
          <WapperInputComponent value="Email" />
        </WapperOuther>
        <WapperOuther>
          <WapperInputComponent value="Senha" />
        </WapperOuther>
        <WapperButton>
          <ButtonRegister>Entrar</ButtonRegister>
        </WapperButton>
      </>
    </LoginRegisterLayout>
  );
};
