import styled from 'styled-components';

export const WapperContainer = styled.div`
  margin: 0 10px;
  width: 100%;
  max-width: 180px;
  height: 120px;

  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;

export const Value = styled.span`
  font-family: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.colors.font};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.4px;
`;

export const Image = styled.div<{ image: string }>`
  width: 100%;
  max-width: 180px;
  height: 120px;

  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;
