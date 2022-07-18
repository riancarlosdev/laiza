import styled from 'styled-components';

export const WapperContentStep = styled.div``;

export const WapperOther = styled.div`
  max-width: 360px;

  :nth-child(3) {
    flex-direction: row !important;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
  }
`;

export const WapperInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0;
  width: 100%;
`;

export const ValueInput = styled.span`
  font-family: sans-serif;
`;

export const Input = styled.input`
  margin-top: 5px;
  border: none;
  outline: none;
  height: 35px;
  width: 100%;
  border: 1px solid #d8d8d8;
  padding-left: 10px;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 16px;
  box-shadow: 3px 2px 4px #ecececcc;
`;

export const ButtonTrocarSenha = styled.button`
  border: none;
  outline: none;
  height: 35px;
  background: ${({ theme }) => theme.colors.secundary};
  max-width: 140px;
  width: 100%;
  margin: 10px 0 10px 5px;

  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  transition: 0.4s ease;

  :hover {
    background: #076b7e;
  }
`;

export const WapperButton = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: flex-end;
`;

export const ButtonSave = styled.button`
  max-width: 266px;
  width: 100%;
  background: ${({ theme }) => theme.colors.secundary};
  border: none;
  outline: none;
  height: 41px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.8px;
  transition: 0.4s ease;
  cursor: pointer;

  :hover {
    background: #02888d;
  }
`;
