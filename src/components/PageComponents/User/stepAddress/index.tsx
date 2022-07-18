import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import {
  ButtonSave,
  ButtonTrocarSenha,
  Input,
  ValueInput,
  ValueItem,
  ValueTitle,
  WapperActionIcon,
  WapperButton,
  WapperContent,
  WapperContentItem,
  WapperContentStep,
  WapperInput,
  WapperItemAddress,
  WapperOther,
  WapperTitleStep,
} from './styles';

export const StepAddressComponent: React.FC = (): JSX.Element => {
  return (
    <WapperContentStep>
      <WapperContent>
        <WapperTitleStep>
          <ValueTitle>Adicionar um novo endereço</ValueTitle>
        </WapperTitleStep>
        <WapperOther>
          <WapperInput>
            <ValueInput>CEP</ValueInput>
            <Input />
          </WapperInput>
          <WapperInput>
            <ValueInput>Estado</ValueInput>
            <Input />
          </WapperInput>
        </WapperOther>
        <WapperOther>
          <WapperInput>
            <ValueInput>Cidade</ValueInput>
            <Input />
          </WapperInput>
          <WapperInput>
            <ValueInput>Endereço</ValueInput>
            <Input />
          </WapperInput>
        </WapperOther>
        <WapperOther>
          <WapperInput>
            <ValueInput>Bairro</ValueInput>
            <Input />
          </WapperInput>
          <WapperInput>
            <ValueInput>Numero</ValueInput>
            <Input />
          </WapperInput>
        </WapperOther>
        <WapperOther>
          <WapperInput>
            <ValueInput>Complemento</ValueInput>
            <Input />
          </WapperInput>
        </WapperOther>

        <WapperButton>
          <ButtonSave>Adicionar</ButtonSave>
        </WapperButton>
      </WapperContent>
      <WapperContent>
        <WapperTitleStep>
          <ValueTitle>Endereços salvos</ValueTitle>
        </WapperTitleStep>

        <WapperItemAddress>
          <WapperContentItem>
            <ValueItem>Rua José Casemiro Pena, N° 28</ValueItem>
            <ValueItem>São Sebastião do Passé</ValueItem>
            <ValueItem>Bahia - Brasil</ValueItem>
          </WapperContentItem>
          <WapperContentItem>
            <WapperActionIcon>
              <AiOutlineDelete size={20} />
            </WapperActionIcon>
            <WapperActionIcon>
              <AiOutlineEdit size={20} />
            </WapperActionIcon>
          </WapperContentItem>
        </WapperItemAddress>
      </WapperContent>
    </WapperContentStep>
  );
};
