import styled, { css } from 'styled-components';

export const WapperButtonContainer = styled.button`
  background: none;
  outline: none;
  border: none;
  max-width: 50px;
  width: 100%;
  position: relative;
`;

export const WapperVisible = styled.div`
  height: 30px;
  padding: 3px 5px 3px 6px;
  align-items: center;
  justify-content: space-between;
  background: #e3e3e3;
  border-radius: 12px;
  transition: 0.2s ease;
  display: flex;
  cursor: pointer;
  :hover {
    background: #d4d4d4;
  }
`;

export const ColorSelected = styled.div<{ background: string }>`
  width: 15px;
  height: 15px;
  background: ${({ background }) => background};
  border-radius: 50%;
  border: 2px solid #ffffff;
  box-shadow: 0 0 5px #00000094;
`;
export const WapperIcon = styled.div``;
export const WapperModalListColors = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  background: #f2f2f2;
  text-align: start;
  padding: 2px;
  border: 1px solid #e4e4e4;

  position: absolute;
  width: 100%;
  top: 32px;
`;

interface ItemProps {
  background: string;
  active?: boolean;
}

export const WapperItem = styled.div`
  padding: 3px 8px;
  :hover {
    background: #dcdcdc;
  }

  margin: 5px 0px;

  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
  cursor: pointer;
`;

export const Item = styled.li<ItemProps>`
  margin: 5px 0px;

  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }

  background: ${({ background }) => background};

  ${({ active }) =>
    active &&
    css`
      border: 1px solid #ffffff;
      box-shadow: 0 0 4px #00000085;
    `}
  padding: 8px 3px;
  cursor: pointer;
`;
