import styled from 'styled-components';

export const WapperInfoRoute = styled.div`
  display: flex;
  position: relative;

  color: ${({ theme }) => theme.colors.font};
  font-size: 12px;

  :first-child {
    a::after {
      content: '';
      background: #cecece;
      height: 100%;
      width: 2px;
      position: absolute;
      top: 0;
      left: 50px;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.font};
    font-family: ${({ theme }) => theme.font.primary};
    font-size: 16px;
  }
`;

export const ValueInfoRoute = styled.p`
  margin-left: 15px;

  a {
    color: ${({ theme }) => theme.colors.secundary};
    font-weight: 600;
    margin: 0 5px;

    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
      color: ${({ theme }) => theme.colors.font};
    }
  }
`;
