import styled from 'styled-components';

export const Container = styled.header`
  height: calc(55px + 40px);
  width: 100%;
  background: ${({ theme }) => theme.colors.secundary};

  display: flex;
  align-items: center;
  box-shadow: 0 0px 3px #111;
  position: relative;
  z-index: 1;
`;

export const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const Wapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 560px;
  width: 100%;
`;

export const WapperAnnouncement = styled.div`
  font-family: sans-serif;
  color: #fff;

  span,
  p {
    letter-spacing: 1.4px;
  }
`;

export const WapperSearch = styled.label`
  max-width: 440px;
  width: 100%;
  height: 37px;
  position: relative;

  ::after {
    content: '';
    width: 1.3px;
    height: 60%;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.shadown_1};
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  box-shadow: 1px 1px 3px #555;
  padding-left: 10px;
  font-size: 17px;

  ::placeholder {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.8px;
    color: ${({ theme }) => theme.colors.font_hiper_light};
  }
`;

export const WapperIconSearch = styled.button`
  outline: none;
  background-color: transparent;
  border: none;

  position: absolute;
  top: 0;
  right: 0;

  width: 40px;
  height: 100%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wapper3 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 100%;
`;

export const WapperCategory = styled.div`
  height: 40px;
  width: 100%;
`;

export const ListCategory = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  height: 100%;
  max-width: 650px;
  width: 100%;
  justify-content: space-between;

  a {
    color: #fff;
    text-decoration: none;
    transition: 0.2s ease;
  }

  a :hover {
    color: #222;
  }
`;

export const ItemCategory = styled.li`
  font-family: sans-serif;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.4px;
  padding: 7px 0px;
`;

export const WapperUser = styled.div`
  display: flex;
  max-width: 250px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: #fff;
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 0.4px;
    transition: 0.2s ease;

    :hover {
      color: #222;
    }
  }
`;
