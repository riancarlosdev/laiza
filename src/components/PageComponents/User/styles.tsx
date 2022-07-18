import styled from 'styled-components';

export const WapperContainer = styled.div`
  padding: 30px 0;
`;

export const WapperInfoPage = styled.div``;

export const ValueInfoPage = styled.h2`
  font-family: ${({ theme }) => theme.font.primary};
`;

export const WapperContent = styled.div`
  background: #fff;
  margin: 40px auto 20px auto;
  padding: 5px;
  box-shadow: 0 4px 6px #b2b2b26b;
`;

export const WapperHeaderStep = styled.div`
  height: 115px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ValueTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 300;
  padding: 15px 0 0 10px;
`;

export const ListSteps = styled.ul`
  display: flex;
  padding: 0 50px;
  list-style: none;
  border-bottom: 2px solid #dedede;
`;

export const ItemStep = styled.li<{ active: boolean }>`
  max-width: 180px;
  width: 100%;
  height: 30px;
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.font};
  text-align: center;
  cursor: pointer;
  transform: translateY(3px);

  border-bottom: 2px solid
    ${({ theme, active }) => (active ? theme.colors.secundary : '#dedede')};
`;

export const ContentStepSelected = styled.div`
  margin-top: 20px;
  padding: 0 30px;
`;

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
