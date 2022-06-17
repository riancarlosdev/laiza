import { LayoutComponent } from '@components/Global/Layout';
import { HomePage } from '@components/PageComponents/Home';

export default function IndexPage(): JSX.Element {
  return (
    <LayoutComponent>
      <HomePage />
    </LayoutComponent>
  );
}
