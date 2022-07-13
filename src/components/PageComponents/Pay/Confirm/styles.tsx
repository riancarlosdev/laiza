import styled from 'styled-components';

// CONFIRM
export const WapperConfirmPay = styled.div``;
export const WapperInfoPay = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.font};
    font-family: ${({ theme }) => theme.font.primary};

    strong {
      color: ${({ theme }) => theme.colors.secundary};
      font-family: sans-serif;
      font-size: 18px;
    }
  }
`;

export const ValueInfoPay = styled.h3`
  font-family: sans-serif;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.font};
  font-size: 20px;
`;

export const WapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const WapperQRcode = styled.div`
  height: 300px;
  width: 300px;
`;

export const ImageQrCode = styled.div<{ qr: string }>`
  width: 300px;
  height: 300px;

  background-image: url(${({ qr }) => qr});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const WapperInfoQrCode = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ededed;
  width: 70%;
  padding-top: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WapperTextInfo = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextValueInfoQrCode = styled.p`
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.font};
`;

export const WapperInput = styled.div`
  position: relative;
`;

export const Input = styled.input`
  border: none;
  background: #fff;
  outline: none;
  width: 220px;
  height: 35px;
  box-shadow: 0 0 6px #e9e9e9bc;
  border: 1px solid #dadada;
`;

export const ButtonCopy = styled.button`
  height: 35px;
  margin-left: 5px;
  border: none;
  background: ${({ theme }) => theme.colors.secundary};
  outline: none;
  width: 75px;
  color: #fff;
  text-transform: uppercase;
  transition: 0.2s ease;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 1px;

  :hover {
    background: #0582c6;
  }
`;

export const WapperNotification = styled.div<{ copy: boolean }>`
  background: #01b888;
  width: 90px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;

  span {
    color: #fff;
    font-family: sans-serif;
    font-size: 14px;
  }

  position: absolute;
  top: 3px;
  left: 70px;

  transition: 0.2s ease;
  opacity: ${({ copy }) => (copy ? 1 : 0)};
`;
