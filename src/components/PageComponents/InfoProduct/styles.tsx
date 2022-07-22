import styled from 'styled-components';

export const WapperContainer = styled.div`
  margin: 20px 0;
`;

export const WapperInfoProduct = styled.div`
  margin-top: 20px;

  background: #fff;
  padding: 5px;
  border: 1px solid #dbdbdb;
  box-shadow: 0 0 4px #bdbdbde4;
`;

export const WapperContentInfoTop = styled.div`
  display: flex;
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 2px solid #f3f3f3;
`;

export const WapperImagesProduct = styled.div`
  display: flex;
`;

export const ListImages = styled.ul`
  margin-right: 5px;
  max-height: 450px;
  height: 100%;
  list-style: none;
`;

interface ItemImageProps {
  active: boolean;
  image: string;
}

export const ItemImage = styled.li<ItemImageProps>`
  width: 55px;
  height: 55px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border: 2px solid
    ${({ active, theme }) => (active ? theme.colors.secundary : '#ffffff')};
  margin: 3px 0;

  cursor: pointer;

  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
`;

export const WapperImage = styled.div<{ image?: string }>`
  width: 400px;
  height: 450px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WapperInfoOfProduct = styled.div`
  margin-left: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WapperInfoTop = styled.div`
  display: flex;
  align-items: center;
`;

export const ValueInfoNew = styled.span`
  font-family: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.colors.font_hiper_light};

  margin-right: 20px;
  position: relative;

  ::after {
    content: '';
    width: 2px;
    height: 100%;
    position: absolute;
    left: 46px;
    top: 0;
    background: #d8d8d8;
  }

  font-size: 15px;
`;

export const ValueInfoTop = styled.span`
  font-family: ${({ theme }) => theme.font.primary};
  color: #555;
  font-size: 15px;
`;

export const WapperContentInfos = styled.div`
  margin-top: 10px;
`;

export const TitleProduct = styled.h1`
  font-family: ${({ theme }) => theme.font.primary};
  min-height: 73px;
`;

export const WapperPrices = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

export const ValueOldPrice = styled.s`
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.font_hiper_light2};
  font-size: 20px;
  font-weight: 100;
`;

export const WapperValueActualPrice = styled.div`
  display: flex;
  align-items: center;
`;

export const ValuePorcent = styled.small`
  margin-left: 15px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secundary};
  font-family: sans-serif;
  font-weight: 600;
  letter-spacing: 0.4px;
`;

export const ValueActualPrice = styled.span`
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.font};
  font-size: 45px;
  font-weight: 600;
`;

export const WapperFrete = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ValueFrete = styled.span`
  color: ${({ theme }) => theme.colors.secundary};
  font-family: sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const ValueInfoFrete = styled.span`
  font-family: sans-serif;
  color: #414141;
  strong {
    color: ${({ theme }) => theme.colors.font};
  }
`;

export const WapperRepository = styled.div``;
export const ValueRepository = styled.p<{ on?: boolean }>`
  color: ${({ on }) => (on ? '#f70d0d' : '#444')};
  font-family: sans-serif;

  font-size: ${({ on }) => (on ? '18px' : '16px')};
  font-weight: ${({ on }) => (on ? '600' : '400')};
`;

export const WapperButtonActionsProduct = styled.div``;

export const ButtonAction = styled.button<{ color: 'pay' | 'cart' }>`
  outline: none;
  background: ${({ color }) => (color === 'cart' ? '#018849' : '#099ab4')};
  cursor: pointer;

  :hover {
    background: ${({ color }) => (color === 'cart' ? '#07775d' : '#09889e')};
  }

  font-weight: ${({ color }) => (color === 'cart' ? '300' : '600')};
  height: 55px;
  max-width: 260px;
  width: 100%;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.8px;
  margin: 0 5px;
  border: none;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`;

// export const ButtonSeeOptions = styled.button``;

export const WapperInfoPlusProduct = styled.div`
  margin-top: 40px;
`;

export const WapperInfoTopPlus = styled.div<{ padding?: boolean }>`
  padding-left: ${({ padding }) => padding && '20px'};
`;

export const ValueTopInfoInfoPlus = styled.h2`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 300;
  font-size: 25px;
  line-height: 35px;
`;

export const WapperCardsInfos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5px;

  max-width: 930px;
`;

export const ListInformationProductPlus = styled.ul`
  max-width: 300px;
  width: 100%;
  margin: 15px 0;
`;

export const ItemInformation = styled.li`
  display: flex;
  flex-direction: column;
`;

export const ValueInformation = styled.span`
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 20px;
`;

export const WapperAllValueOfInformation = styled.div`
  margin-top: 8px;

  max-width: 300px;
  width: 100%;
  background: #f8f8f8;
  border-radius: 5px;
  overflow: hidden;
`;

export const WapperValues = styled.div`
  margin: 5px 0;
  padding: 15px 15px;
  :nth-child(odd) {
    background: #f0f0f0;
  }

  font-family: sans-serif;
  display: flex;
  justify-content: space-between;

  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
`;

export const ResponseValueInfo = styled.span`
  color: #444;
`;
export const ValueInfoContent = styled.span`
  color: #666;
`;

export const WapperOfInfos = styled.div<{ padding?: boolean }>`
  padding-left: ${({ padding }) => padding && '20px'};
  padding-right: ${({ padding }) => padding && '20px'};
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom: 2px solid #f3f3f3;

  :last-child {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export const DescriptionProduct = styled.p`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0.2px;
`;

export const WapperOfferProduct = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const WapperOfferProductItem = styled.div`
  margin: 0 6px;

  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;
