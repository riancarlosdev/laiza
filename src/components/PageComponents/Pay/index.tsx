import { MaxContainerComponent } from '@components/Global/MaxContainer';
import { MdSecurity } from 'react-icons/md';
import { AddressComponent } from './Address';
import { ConfirmComponent } from './Confirm';
import { FormOfPayComponent } from './FormOfPay';
import {
  Header,
  Value,
  WapperCarouselSteps,
  WapperContainer,
  WapperHeader,
  WapperInfoHeader,
  WapperStepsOfPay,
} from './styles';

export const PayComponent: React.FC = (): JSX.Element => {
  return (
    <WapperContainer>
      <WapperHeader>
        <Header>
          <WapperInfoHeader>
            <Value>Local Protegido</Value>
            <MdSecurity size={27} color="#6cff2d" />
          </WapperInfoHeader>
        </Header>
      </WapperHeader>
      <WapperStepsOfPay>
        <MaxContainerComponent>
          <WapperCarouselSteps>
            <AddressComponent />
            <FormOfPayComponent />
            <ConfirmComponent />
          </WapperCarouselSteps>
        </MaxContainerComponent>
      </WapperStepsOfPay>
    </WapperContainer>
  );
};
