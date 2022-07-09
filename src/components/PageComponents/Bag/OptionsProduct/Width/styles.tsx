import styled from 'styled-components';

export const ButtonWapperWidth = styled.button`
  position: relative;
  max-width: 50px;
  width: 100%;

  border: none;
  outline: none;
  background: none;
`;

export const WapperVisible = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px 5px 3px 6px;
  background: #e3e3e3;
  border-radius: 12px;
  transition: 0.2s ease;
  cursor: pointer;
  height: 30px;

  :hover {
    background: #d4d4d4;
  }
`;

export const WapperIcon = styled.div``;

export const ValueWidth = styled.div`
  font-size: 14px;
`;

export const WapperModalWidth = styled.div`
  position: absolute;
  top: 32px;
  width: 100%;
  height: auto;

  background: #f2f2f2;
  text-align: start;
  padding: 2px;
  border: 1px solid #e4e4e4;
`;

export const ItemWidth = styled.div`
  padding: 3px 3px;
  cursor: pointer;

  :hover {
    background: #d4d4d4;
  }
`;
