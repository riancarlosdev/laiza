import styled from 'styled-components';

export const WapperContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWapperSet = styled.button`
  :first-child {
    margin-right: 8px;
  }
  :last-child {
    margin-left: 8px;
  }

  outline: none;
  background: none;
  border: none;
  background: #e3e3e3;
  cursor: pointer;
  transition: 0.2s ease;

  :hover {
    background: #d0d0d0;
  }
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

export const ValueAmount = styled.span`
  font-size: 18px;
  font-family: sans-serif;
`;
