import styled from 'styled-components';

export const WapperContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const WapperContent = styled.div`
  background: #fff;
  padding: 45px 10px 20px;
  box-shadow: 0px 2px 4px #64646434;
`;

export const TitlePage = styled.h1`
  font-family: ${({ theme }) => theme.font.primary};
  margin: 0 auto 25px auto;
  font-size: 19px;
  color: ${({ theme }) => theme.colors.font};
  text-align: center;
  max-width: 410px;
  line-height: 28px;
`;

export const WapperLogo = styled.div`
  margin-bottom: 55px;
`;

export const WapperInterContent = styled.div``;
export const Form = styled.form``;

export const WapperInfoLogin = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

export const ValueInfo = styled.p`
  font-family: ${({ theme }) => theme.font.primary};
  a {
    margin-left: 5px;
  }
`;

export const ButtonSee = styled.button`
  min-width: 30px;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
  padding-left: 5px;
`;

export const WapperInput = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: 0 10px;
`;

export const Wapper2Input = styled.div`
  width: 100%;
  display: flex;
`;

export const ValueInput = styled.span`
  font-size: 15px;
  font-family: ${({ theme }) => theme.font.primary};
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  border: none;
  outline: none;
  background: #fff;
  border: 1px solid #d2d2d2;
  box-shadow: 0 0 4px #8b8b8b24;
  padding-left: 10px;
  font-size: 15px;
`;
