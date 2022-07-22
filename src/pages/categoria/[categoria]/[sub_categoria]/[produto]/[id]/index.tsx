import { LayoutComponent } from '@components/Global/Layout';
import { MaxContainerComponent } from '@components/Global/MaxContainer';
import { InfoProductComponent } from '@components/PageComponents/InfoProduct';

export default function InfoProductPage(): JSX.Element {
  return (
    <LayoutComponent>
      <MaxContainerComponent>
        <InfoProductComponent />
      </MaxContainerComponent>
    </LayoutComponent>
  );
}
