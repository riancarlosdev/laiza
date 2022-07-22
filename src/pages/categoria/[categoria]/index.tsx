import { LayoutComponent } from '@components/Global/Layout';
import { MaxContainerComponent } from '@components/Global/MaxContainer';
import { CategoryComponent } from '@components/PageComponents/category';

export default function CategoryPage(): JSX.Element {
  return (
    <LayoutComponent>
      <MaxContainerComponent>
        <CategoryComponent />
      </MaxContainerComponent>
    </LayoutComponent>
  );
}
