import { LogoComponent } from '@components/Logo';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import {
  ButtonRegister,
  ButtonSee,
  FormRegister,
  Input,
  ValueInfo,
  ValueInput,
  Wapper2Input,
  WapperButton,
  WapperContainer,
  WapperContent,
  WapperInfoLogin,
  WapperInput,
  WapperInterContent,
  WapperLogo,
  WapperOuther,
} from './styles';

interface InputProps {
  value: string;
  type?: 'text' | 'password';
  placeholder?: string;
  id?: string;
  see?: boolean;
}

const WapperInputComponent: React.FC<InputProps> = ({
  placeholder,
  type = 'text',
  value,
  id,
  see,
}): JSX.Element => {
  const [seeState, setSee] = useState(false);
  return (
    <WapperInput id={id}>
      <ValueInput>{value}</ValueInput>
      <Wapper2Input>
        <Input type={seeState ? 'text' : type} placeholder={placeholder} />
        {see && (
          <ButtonSee type="button" onClick={() => setSee(!seeState)}>
            {seeState ? (
              <BsFillEyeFill size={20} />
            ) : (
              <BsFillEyeSlashFill size={20} />
            )}
          </ButtonSee>
        )}
      </Wapper2Input>
    </WapperInput>
  );
};

export const RegisterComponent: React.FC = (): JSX.Element => {
  return (
    <WapperContainer>
      <WapperLogo>
        <LogoComponent type="2" />
      </WapperLogo>
      <WapperContent>
        <WapperInterContent>
          <FormRegister>
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
          </FormRegister>
          <WapperInfoLogin>
            <ValueInfo>
              Já tem conta?
              <Link href="/account/login">
                <a>Entrar</a>
              </Link>
            </ValueInfo>
          </WapperInfoLogin>
        </WapperInterContent>
      </WapperContent>
    </WapperContainer>
  );
};
