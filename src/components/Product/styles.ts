import styled from 'styled-components';

export const Container = styled.div`
  min-width: calc(1100px / 5);
  max-width: calc(1100px / 5);
  width: 100%;
  background: #fff;
  border: 1.8px solid ${({ theme }) => theme.colors.border_1};
  box-shadow: 0 0 0.8px ${({ theme }) => theme.colors.shadown_1};
  border-radius: 1px;
  padding: 1px 1px 10px;

  :hover h2 {
    color: ${({ theme }) => theme.colors.font};
  }

  cursor: pointer;
`;

export const Image = styled.div<{ img?: string }>`
  width: 100%;
  height: 263px;

  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border_1};
`;

export const WapperInfo = styled.div`
  padding: 10px;

  height: 140px;
`;

export const TitleProduct = styled.h2`
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.font_hiper_light};
  font-size: 14px;

  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 20px;
  padding: 0 3px;
`;

export const WapperPrice = styled.p``;

export const PriceOld = styled.s`
  font-size: 13px;
  letter-spacing: 0.4px;
  font-family: sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.font_hiper_light2};
`;

export const WapperDraftPrice = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
`;

export const PriceActual = styled.span`
  font-size: 19px;
  font-family: sans-serif;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.font};
`;

export const PorcetPrice = styled.span`
  color: ${({ theme }) => theme.colors.secundary};
  font-family: sans-serif;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.4px;
`;

export const InfoFrete = styled.p`
  color: #0bc404;
  font-family: sans-serif;
  font-size: 15px;
  margin-top: 3px;
`;
