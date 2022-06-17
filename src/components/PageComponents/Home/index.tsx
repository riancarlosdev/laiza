import { Advertising } from '@components/Advertising';
import { MaxContainerComponent } from '@components/Global/MaxContainer';
import { categorys } from './data/categorys';
import {
  ImageCategory,
  ItemCategoryWithImage,
  ListCategoryWithImage,
  ValeuCategory,
  WapperSeactionCategory,
} from './styles';

export const HomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <Advertising />
      <MaxContainerComponent>
        <WapperSeactionCategory>
          <ListCategoryWithImage>
            {categorys.map(item => (
              <ItemCategoryWithImage key={item.id}>
                <ImageCategory img={item.image} />
                <ValeuCategory>{item.value}</ValeuCategory>
              </ItemCategoryWithImage>
            ))}
          </ListCategoryWithImage>
        </WapperSeactionCategory>
      </MaxContainerComponent>
    </>
  );
};
