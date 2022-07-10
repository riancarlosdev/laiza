import {
  ButtonNext,
  ValueSubTitlePage,
  ValueTitlePage,
  WapperButtonNext,
  WapperContainer,
  WapperContent,
  WapperTitlePage,
} from './styles';

interface LayoutPayProps {
  children: JSX.Element;
  title: string;
  sub_title: string;
  to_back?: boolean;
}

export const LayoutComponentPay: React.FC<LayoutPayProps> = ({
  children,
  title,
  sub_title,
  to_back,
}): JSX.Element => {
  return (
    <WapperContainer>
      <WapperTitlePage>
        <ValueTitlePage>{title}</ValueTitlePage>
        <ValueSubTitlePage>{sub_title}</ValueSubTitlePage>
      </WapperTitlePage>

      <WapperContent>
        <div>{children}</div>
        <WapperButtonNext to_back={to_back}>
          {to_back && <ButtonNext to_back={to_back}>Voltar</ButtonNext>}
          <ButtonNext>Continuar</ButtonNext>
        </WapperButtonNext>
      </WapperContent>
    </WapperContainer>
  );
};
