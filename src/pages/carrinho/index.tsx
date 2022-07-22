import { LayoutComponent } from '@components/Global/Layout';
import { MaxContainerComponent } from '@components/Global/MaxContainer';
import { BagComponent } from '@components/PageComponents/Bag';

export default function CartPage(): JSX.Element {
  return (
    <LayoutComponent>
      <MaxContainerComponent>
        <BagComponent />
      </MaxContainerComponent>
    </LayoutComponent>
  );
}
