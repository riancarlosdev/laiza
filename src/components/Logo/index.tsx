import Link from 'next/link';
import styled from 'styled-components';

interface LogoProps {
  type?: '1' | '2';
}

export const Container = styled.div<LogoProps>`
  a {
    text-decoration: none;
    color: ${({ theme, type }) =>
      type === '1' ? '#fff' : theme.colors.secundary};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 22px;
    outline: none;
    font-weight: bold;
    line-height: 10px;
  }
`;

export const LogoComponent: React.FC<LogoProps> = ({
  type = '1',
}): JSX.Element => {
  return (
    <Container type={type}>
      <Link href="/">
        <a>
          ---- <br /> mercado
        </a>
      </Link>
    </Container>
  );
};
