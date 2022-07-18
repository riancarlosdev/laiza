import { LogoComponent } from '@components/Logo';
import Link from 'next/link';
import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import {
  ButtonSee,
  Form,
  Input,
  TitlePage,
  ValueInfo,
  ValueInput,
  Wapper2Input,
  WapperContainer,
  WapperContent,
  WapperInfoLogin,
  WapperInput,
  WapperInterContent,
  WapperLogo,
} from './styles';

interface LoginRegisterProps {
  children: JSX.Element;
  page: 'register' | 'login';
  title?: string;
}

interface InputProps {
  value: string;
  type?: 'text' | 'password';
  placeholder?: string;
  id?: string;
  see?: boolean;
}

export const WapperInputComponent: React.FC<InputProps> = ({
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

export const LoginRegisterLayout: React.FC<LoginRegisterProps> = ({
  children,
  page,
  title,
}): JSX.Element => (
  <WapperContainer>
    <WapperLogo>
      <LogoComponent type="2" />
    </WapperLogo>
    <WapperContent style={{ padding: '45px 25px 20px' }}>
      {title && <TitlePage>{title}</TitlePage>}
      <WapperInterContent>
        <Form>{children}</Form>
        <WapperInfoLogin>
          <ValueInfo>
            {page === 'register' ? 'Já tem conta?' : 'Ainda não tem conta?'}

            <Link
              href={
                page === 'register' ? '/account/login' : '/account/register'
              }
            >
              <a>{page === 'register' ? 'Entrar' : 'Criar conta'}</a>
            </Link>
          </ValueInfo>
        </WapperInfoLogin>
      </WapperInterContent>
    </WapperContent>
  </WapperContainer>
);
