import { LayoutComponent } from '@components/Global/Layout';
import { MaxContainerComponent } from '@components/Global/MaxContainer';
import { SubCategoryComponent } from '@components/PageComponents/SubCategory';

export default function SubCategoryPage(): JSX.Element {
  return (
    <LayoutComponent>
      <MaxContainerComponent>
        <SubCategoryComponent />
      </MaxContainerComponent>
    </LayoutComponent>
  );
}
