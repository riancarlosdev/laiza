import {
  LoginRegisterLayout,
  WapperInputComponent,
} from '@components/login-register/layout';
import Link from 'next/link';
import { Button, WapperButtonConfirmAddress, WapperOuther } from './styles';

export const StepAddAddressComponent: React.FC = (): JSX.Element => {
  return (
    <LoginRegisterLayout
      title="Agora vamos adicionar o seu endereco de entrega?"
      page="add_address"
    >
      <>
        <WapperOuther>
          <WapperInputComponent value="CEP" placeholder="00000-00" />
          <WapperInputComponent
            value="Estado"
            placeholder="Preechimento automatico"
          />
        </WapperOuther>
        <WapperOuther>
          <WapperInputComponent
            value="Cidade"
            placeholder="Preechimento automatico"
          />
          <WapperInputComponent
            value="Endereço"
            placeholder="Av. Ernâni de Oliveira"
          />
        </WapperOuther>
        <WapperOuther>
          <WapperInputComponent value="Bairro" placeholder="Centro" />
          <WapperInputComponent value="Numero" placeholder="284" />
        </WapperOuther>
        <WapperOuther>
          <WapperInputComponent
            value="Complemento"
            placeholder="Rua ao lado da garagem"
          />
        </WapperOuther>

        <WapperButtonConfirmAddress>
          <Link href="/">
            <a>Pular</a>
          </Link>
          <Button>Adicionar endereço</Button>
        </WapperButtonConfirmAddress>
      </>
    </LoginRegisterLayout>
  );
};
