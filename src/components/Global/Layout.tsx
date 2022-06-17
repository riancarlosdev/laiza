import { FooterComponent } from '@components/Footer';
import { HeaderComponent } from '@components/Header';
import { ContainerGlobal } from './styles';

interface LayoutProps {
  children: JSX.Element;
}

export const LayoutComponent: React.FC<LayoutProps> = ({
  children,
}): JSX.Element => {
  return (
    <>
      <HeaderComponent />
      <ContainerGlobal>{children}</ContainerGlobal>
      <FooterComponent />
    </>
  );
};
