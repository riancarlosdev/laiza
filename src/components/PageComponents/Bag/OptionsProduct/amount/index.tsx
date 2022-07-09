import { IoIosRemove, IoIosAdd } from 'react-icons/io';
import { ButtonWapperSet, ValueAmount, WapperContainer } from './styles';

export const AmountComponent: React.FC = (): JSX.Element => {
  return (
    <WapperContainer>
      <ButtonWapperSet>
        <IoIosRemove size={18} />
      </ButtonWapperSet>
      <ValueAmount>01</ValueAmount>
      <ButtonWapperSet>
        <IoIosAdd size={18} />
      </ButtonWapperSet>
    </WapperContainer>
  );
};
