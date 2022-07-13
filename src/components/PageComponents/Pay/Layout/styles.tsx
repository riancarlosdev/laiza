import styled from 'styled-components';

export const WapperContainer = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: calc(660px - 80px);
`;

export const WapperTitlePage = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid #dbdbdb;
  padding: 0 10px;
`;

export const ValueTitlePage = styled.h3`
  font-family: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.colors.font};
  font-weight: 300;
  font-size: 22px;
`;

export const ValueSubTitlePage = styled.h4`
  font-family: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.colors.font_hiper_light};
  font-weight: 300;
  font-size: 16px;
  margin-top: 5px;
`;

export const WapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(660px - 80px);
  padding: 0 10px;
  background: #fbfbfb;
`;

// BUTTON
export const WapperButtonNext = styled.div<{ to_back?: boolean }>`
  display: flex;
  width: 100%;
  justify-content: ${({ to_back }) => (to_back ? 'space-between' : 'flex-end')};
`;

export const ButtonNext = styled.button<{ to_back?: boolean }>`
  background: ${({ theme, to_back }) =>
    !to_back ? theme.colors.secundary : theme.colors.font};
  font-family: sans-serif;
  color: #fff;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 17px;
  max-width: 220px;
  width: 100%;
  height: 45px;
  margin-bottom: 5px;
  cursor: pointer;
  transition: 0.4s ease;

  :hover {
    background: ${({ to_back }) => (!to_back ? '#0560a2' : '#242424')};
  }
  border: none;
  outline: none;
`;
