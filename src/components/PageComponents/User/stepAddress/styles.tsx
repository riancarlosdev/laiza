import styled from 'styled-components';

export const WapperContentStep = styled.div`
  display: flex;
`;

export const WapperContent = styled.div`
  width: 100%;

  margin: 0 10px;

  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;

export const WapperTitleStep = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const ValueTitle = styled.p`
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 17px;
`;

export const WapperOther = styled.div`
  display: flex;
`;

export const WapperInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 5px;
  width: 100%;

  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
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

export const WapperItemAddress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f6f6;
  padding: 10px;
  border: 1px solid #dfdfdf;
`;

export const WapperContentItem = styled.div`
  :last-child {
    display: flex;
    flex-direction: column;
  }

  :first-child {
    padding: 2px 15px;
  }
`;

export const ValueItem = styled.p`
  font-family: ${({ theme }) => theme.font.primary};
  line-height: 24px;
`;

export const WapperActionIcon = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  outline: none;

  margin: 3px 0;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease;

  :first-child {
    margin-top: 0;
    background: #cf0000;

    :hover {
      background: #f70202;
    }
  }

  :last-child {
    background: ${({ theme }) => theme.colors.secundary};
    margin-bottom: 0;
    :hover {
      background: #028df7;
    }
  }
`;
