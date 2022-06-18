import styled from 'styled-components';

export const WapperSeactionCategory = styled.div`
  margin: 20px 0;
`;

export const ListCategoryWithImage = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ItemCategoryWithImage = styled.li`
  display: flex;
  align-items: center;
  max-width: 184px;
  width: 100%;
  cursor: pointer;

  :hover span {
    transition: ease 0.2s;
    color: #333;
  }
`;

export const ImageCategory = styled.div<{ img?: string }>`
  min-width: 60px;
  min-height: 60px;

  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 50%;
  margin: 0 5px;

  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;

export const ValeuCategory = styled.span`
  font-family: ${({ theme }) => theme.font.primary};
  margin-left: 8px;
  font-weight: 600;
  letter-spacing: 0.8px;
  font-size: 15px;
  color: #888;
`;

export const SectionOffers = styled.div`
  margin-top: 40px;
`;

export const WapperTop = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  a {
    text-decoration: none;
    font-family: sans-serif;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.secundary};
  }
`;

export const TitleSection = styled.h3`
  margin-right: 12px;

  font-weight: 500;
  letter-spacing: 0.4px;
  font-family: ${({ theme }) => theme.font.primary};
  color: ${({ theme }) => theme.colors.font};
  font-size: 23px;
`;

export const WapperOfferProduct = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WapperOfferProductItem = styled.div`
  margin: 0 6px;

  :first-child {
    margin-left: 0;
  }
  :last-child {
    margin-right: 0;
  }
`;
