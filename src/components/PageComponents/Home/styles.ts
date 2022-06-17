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
  max-width: 160px;
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

export const SectionOffers = styled.div``;
export const WapperTop = styled.div``;
export const TitleSection = styled.h3``;
