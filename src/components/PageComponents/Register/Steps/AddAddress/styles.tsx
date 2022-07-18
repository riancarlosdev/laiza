import styled from 'styled-components';

export const WapperOuther = styled.div`
  display: flex;
  width: 100%;
  margin: 25px 0;

  #email {
    width: 100% !important;
    max-width: 100% !important;
  }

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const WapperInfoAddAddress = styled.div``;
export const ValueInfo = styled.p``;

export const WapperButtonConfirmAddress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.secundary};
    font-family: sans-serif;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background: ${({ theme }) => theme.colors.secundary};
  color: #fff;
  transition: 0.2s ease;

  max-width: 200px;
  width: 100%;
  height: 41px;
  font-size: 15px;
  letter-spacing: 0.4px;
  cursor: pointer;

  :hover {
    background: #033e79;
  }
`;
