import styled from 'styled-components';

// FORM OF PAY

export const WapperFormOfPayContent = styled.div`
  margin: 40px 0 30px;

  display: flex;
  justify-content: space-between;
`;

export const WapperResumPay = styled.div`
  max-width: 410px;
  width: 100%;
  background: #fff;

  border: 1px solid #dedede;
  box-shadow: 0 0 12px #90909028;
  padding-bottom: 10px;
`;

export const WapperContentInfo = styled.div`
  border-bottom: 2px solid #efefef;
  padding: 20px;

  :first-child {
    padding-top: 0;
  }
  :last-child {
    border-bottom: 0;
  }
`;

export const ValueInfoUser = styled.p`
  font-family: ${({ theme }) => theme.font.primary};
  margin: 5px;
  font-size: 15px;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const ItemProduct = styled.div`
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

export const ValueProduct = styled.p`
  font-family: sans-serif;
  font-size: 15px;
  :first-child {
    max-width: 50%;
    width: 100%;
    font-size: 16px;
  }

  :last-child {
    max-width: 25%;
    width: 100%;
    text-align: end;
    font-weight: 600;
    color: #000 !important;
  }

  :nth-child(2) {
    max-width: 25%;
    width: 100%;
    text-align: center;
  }
`;

export const WapperOuther = styled.div`
  color: ${({ theme }) => theme.colors.font};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }

  #total {
    font-size: 22px;
  }
`;

export const ValueResum = styled.span`
  font-family: sans-serif;
  font-size: 15px;
  :last-child {
    color: #000;
    font-weight: 600;
  }
`;

export const WapperTitleResum = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ValueTitleResum = styled.span`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 600;
  letter-spacing: 1px;
`;

export const WapperContentInfoPay = styled.div``;

export const WapperItemsFormOfPay = styled.div`
  width: 100%;
  margin-left: 25px;

  display: flex;
  flex-direction: column;
`;

// ITEM
export const ItemFormPay = styled.label<{ available: boolean }>`
  display: flex;
  align-items: center;

  background: ${({ available }) => (!available ? '#f6f6f6' : '#fff')};
  transition: 0.3s ease;

  :hover {
    background: ${({ available }) => (!available ? '#f6f6f6' : '#fafafa')};
  }

  width: 100%;
  padding: 5px 15px;
  cursor: ${({ available }) => (!available ? '' : 'pointer')};

  opacity: ${({ available }) => !available && '0.4'};

  height: 90px;
  border: 1px solid #dedede;
  box-shadow: 0 0 12px #90909028;
  margin: 10px 0;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;
export const CheckBox = styled.input`
  margin-right: 15px;
`;

export const ValueNameForm = styled.span`
  font-family: ${({ theme }) => theme.font.primary};
  letter-spacing: 1px;
  font-weight: 600;
`;
