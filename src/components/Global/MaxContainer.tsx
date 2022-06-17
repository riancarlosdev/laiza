import styled from 'styled-components';

interface LayoutProps {
  children: JSX.Element;
}

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
`;

export const MaxContainerComponent: React.FC<LayoutProps> = ({
  children,
}): JSX.Element => {
  return <Container>{children}</Container>;
};
