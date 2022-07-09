import styled from 'styled-components';

export const WapperContainer = styled.div`
  margin-top: 10px;
  display: flex;
  position: relative;
  max-width: 230px;
`;

export const ButtonSelect = styled.button`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;

  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const WapperOther = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ValueNumberSelected = styled.span`
  font-size: 17px;
`;

export const WapperIcon = styled.div``;

export const Value = styled.span`
  font-family: sans-serif;
  letter-spacing: 0.4px;
  font-size: 17px;
  margin-right: 5px;
`;

export const ValueQnt = styled.span`
  font-family: sans-serif;
  font-size: 17px;
  letter-spacing: 0.4px;

  margin-right: 10px;
`;

export const WapperModalSelect = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;

  top: 35px;
  right: 0;

  max-width: 135px;
  width: 100%;
  padding: 3px;
  background: #f1f1f1;
  box-shadow: 4px 4px 4px #7d7d7d63;
`;

export const OptionQnt = styled.span`
  padding: 7px 6px;
  font-size: 17px;
  font-family: sans-serif;
  text-align: start;

  :hover {
    background: #e8e8e8;
  }
`;

export const WapperSelectM = styled.div`
  display: flex;
  align-items: center;
`;

export const InputAmount = styled.input`
  width: 100%;
  border: none;
  background: #fff;
  outline: none;
  height: 26px;
  margin-right: 10px;
  margin-left: 5px;

  padding-left: 10px;
  font-size: 17px;
  ::placeholder {
    color: ${({ theme }) => theme.colors.font_hiper_light2};
  }
  -moz-appearance: textfield;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  transition: 0.3s ease;
  cursor: pointer;
  :hover {
    background: #04b0d2;
  }
  outline: none;
  height: 30px;
  min-width: 30px;
`;
