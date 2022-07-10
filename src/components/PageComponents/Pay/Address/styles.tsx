import styled from 'styled-components';

export const WapperAddNewAddress = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const WapperInformationNewAddress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
`;

export const ValueInformation = styled.p`
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.colors.font};
`;

export const WapperInput = styled.div`
  max-width: 360px;
  width: 100%;
  padding: 0 5px;
  display: flex;
  flex-direction: column;

  margin: 10px 10px;
`;

export const ValueInput = styled.span`
  font-family: ${({ theme }) => theme.font.primary};
  position: relative;

  strong {
    color: #f71313;
    position: absolute;
    transform: translate(2px, -5px);
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 5px;
  height: 41px;

  border: 2px solid ${({ theme }) => theme.colors.border_1};
  background: #fff;
  outline: none;
  padding-left: 10px;

  :focus {
    border: 2px solid ${({ theme }) => theme.colors.secundary};
  }

  font-size: 17px;
  color: ${({ theme }) => theme.colors.font};

  ::placeholder {
    color: ${({ theme }) => theme.colors.font_hiper_light};
  }
`;

// ITEM ADDRESS EXISTENT
export const WapperSetAddressExistent = styled.div``;

export const WapperTitleSetAddressExistent = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`;

export const ValueTitleSetAddress = styled.p`
  font-size: 18px;
  font-family: ${({ theme }) => theme.font.primary};
`;

export const WapperContentAddressSave = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const WapperAddressExistent = styled.label`
  display: flex;
  align-items: center;
  max-width: 280px;
  width: 100%;
  height: 80px;
  background: #e6e6e6;
  padding: 10px;
  cursor: pointer;
`;

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`;

export const WapperInfoAddressEx = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.font.primary};
  height: 100%;
  margin-left: 10px;
`;

export const ValueAddress = styled.p``;

export const PlusAddress = styled.p`
  font-size: 15px;
  font-family: sans-serif;
  line-height: 18px;
`;
