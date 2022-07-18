import styled from 'styled-components';

export const WapperContainer = styled.div``;

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

export const WapperButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonRegister = styled.button`
  cursor: pointer;
  max-width: 240px;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background: ${({ theme }) => theme.colors.secundary};
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-size: 14px;
  transition: 0.2s ease;

  :hover {
    background: #036b8b;
  }
`;
