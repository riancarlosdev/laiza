import { useRouter } from 'next/router';
import { sub_category } from './data';
import { ItemCategory } from './ItemCategory';
import {
  WapperContainer,
  WapperHeaderTop,
  InfoTitlePage,
  WapperCategory,
} from './styles';

export const CategoryComponent: React.FC = (): JSX.Element => {
  const { query } = useRouter();

  return (
    <WapperContainer>
      <WapperHeaderTop>
        <InfoTitlePage>{query.categoria}</InfoTitlePage>
      </WapperHeaderTop>

      <WapperCategory>
        <ItemCategory items={sub_category} />
      </WapperCategory>
    </WapperContainer>
  );
};
