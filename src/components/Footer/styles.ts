import styled from 'styled-components';

export const Container = styled.footer`
  background: #fff;
  padding: 15px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border_1};

  margin-top: 30px;
`;

export const ListLinksCompany = styled.ul`
  list-style: none;
  display: flex;
  max-width: 410px;
  width: 100%;
  justify-content: space-between;
`;

export const ItemLInk = styled.li`
  color: ${({ theme }) => theme.colors.font};
  font-family: sans-serif;
  font-size: 13px;

  margin: 0 3px;
  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;

export const WapperInfoCompany = styled.div`
  margin-top: 10px;
`;

export const Copy = styled.span`
  color: ${({ theme }) => theme.colors.font_hiper_light};
  font-family: sans-serif;
  font-size: 13px;
  margin-bottom: 10px;
`;

export const WapperCnpjEnd = styled.div``;

export const Cnpj = styled.span`
  color: ${({ theme }) => theme.colors.font_hiper_light};
  font-family: sans-serif;
  font-size: 13px;
  margin-bottom: 10px;
`;
export const End = styled.p`
  color: ${({ theme }) => theme.colors.font_hiper_light};
  font-family: sans-serif;
  font-size: 13px;
`;
