import styled from 'styled-components';

export const WapperContainer = styled.div`
  margin: 30px 0;
`;

export const WapperValueTitlePage = styled.div`
  margin: 20px 0;
`;

export const ValueTitlePage = styled.p`
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 22px;
  color: ${({ theme }) => theme.colors.font};
`;

export const WapperContentPage = styled.div`
  background: #fff;
  padding: 10px 0;
  box-shadow: 0 0 12px #2d2d2d24;
  width: 100%;
`;

export const WapperItemsCart = styled.div``;
export const Table = styled.table``;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 5px 0;
  font-family: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.colors.font};
  :first-child {
    width: 60%;
  }

  :nth-child(2) {
    width: 20%;
    text-align: start;
  }

  :nth-child(3) {
    width: 20%;
    text-align: start;
  }

  :nth-child(4) {
    width: 200px;
  }
  font-size: 14px;
`;

export const Td = styled.td<{ last?: boolean }>`
  border-bottom: ${({ last }) => !last && '1px solid #d9d9d9'};
  color: ${({ theme }) => theme.colors.font};
  padding: 10px 0;

  :first-child {
    padding-left: 10px;
  }

  :last-child {
    padding-right: 10px;
  }
`;

export const WapperProduct = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ImageProduct = styled.div<{ image: string }>`
  max-width: 110px;
  width: 100%;
  height: 110px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WapperInfoProduct = styled.div`
  width: 100%;
  padding: 0 5px 0 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.p`
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 18px;
`;

export const WapperActionsProduct = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  button {
    margin: 0 5px;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }
`;

export const WapperInformationSale = styled.div`
  display: flex;
`;

export const WapperContentSaleContainer = styled.div`
  max-width: 300px;
  width: 100%;
  margin-left: 15px;
`;

export const WapperInfomartionTotalSale = styled.div`
  background: #fff;
  box-shadow: 0 0 12px #2d2d2d24;
  padding: 5px 20px;
  margin-bottom: 20px;
`;

export const WapperTitleSale = styled.div`
  margin-bottom: 15px;
`;

export const ValueTitileSale = styled.h3`
  font-size: 22px;
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 100;
`;

export const WapperContentSale = styled.div``;

export const WapperQuestions = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: sans-serif;
  margin: 20px 0;
  align-items: center;
`;

export const QuestionSale = styled.span`
  font-size: 19px;
  color: ${({ theme }) => theme.colors.font};
`;

export const ResponseSale = styled.span`
  font-size: 18px;
`;

export const WapperButtonPay = styled.div``;

export const ButtonSale = styled.button`
  background: ${({ theme }) => theme.colors.secundary};
  border: none;
  outline: none;

  width: 100%;
  height: 45px;
  margin-bottom: 15px;
  font-size: 18px;
  letter-spacing: 0.4px;
  color: #fff;

  cursor: pointer;
  transition: 0.2s ease;

  :hover {
    background: #0463a7;
  }
`;

export const WapperItensFormPay = styled.div`
  margin-top: 10px;
`;

export const CardItemFormPay = styled.div`
  background: #fff;
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.div<{ image: string }>`
  width: 35px;
  height: 35px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${({ image }) => image});
`;

export const WapperRe = styled.div`
  margin: 20px 0;
`;
