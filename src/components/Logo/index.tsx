import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  a {
    text-decoration: none;
    color: #fff;
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 22px;
    outline: none;
    font-weight: bold;
    line-height: 10px;
  }
`;

export const LogoComponent: React.FC = (): JSX.Element => {
  return (
    <Container>
      <Link href="/">
        <a>
          ---- <br /> mercado
        </a>
      </Link>
    </Container>
  );
};
