import styled from 'styled-components';

export const WapperContainer = styled.div``;

export const WapperHeader = styled.div`
  background: ${({ theme }) => theme.colors.secundary};
`;

export const Header = styled.header`
  max-width: 990px;
  width: 100%;
  margin: 0 auto;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const WapperInfoHeader = styled.div`
  display: flex;
  align-items: center;
  max-width: 165px;
  width: 100%;
  justify-content: space-between;
`;

export const Value = styled.span`
  font-family: sans-serif;
  color: #fff;
  letter-spacing: 1px;
`;

// STEPS

export const WapperStepsOfPay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 60px);
`;

export const WapperCarouselSteps = styled.div`
  min-height: 660px;
  background: #fff;
  width: 100%;
  display: flex;

  position: relative;
`;

export const WapperChangeStep = styled.div`
  position: absolute;
  background: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;
