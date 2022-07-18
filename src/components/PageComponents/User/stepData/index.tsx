import {
  ButtonSave,
  ButtonTrocarSenha,
  Input,
  ValueInput,
  WapperButton,
  WapperContentStep,
  WapperInput,
  WapperOther,
} from './styles';

export const StepDataComponent: React.FC = (): JSX.Element => {
  return (
    <WapperContentStep>
      <WapperOther>
        <WapperInput>
          <ValueInput>Nome</ValueInput>
          <Input />
        </WapperInput>
        <WapperInput>
          <ValueInput>Sobrenome</ValueInput>
          <Input />
        </WapperInput>
      </WapperOther>
      <WapperOther>
        <WapperInput>
          <ValueInput>CPF</ValueInput>
          <Input />
        </WapperInput>
        <WapperInput>
          <ValueInput>Email</ValueInput>
          <Input />
        </WapperInput>
      </WapperOther>
      <WapperOther>
        <WapperInput>
          <ValueInput>Data de Nascimento</ValueInput>
          <Input />
        </WapperInput>
        <ButtonTrocarSenha>Trocar Senha</ButtonTrocarSenha>
      </WapperOther>

      <WapperButton>
        <ButtonSave>Salvar</ButtonSave>
      </WapperButton>
    </WapperContentStep>
  );
};
