import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import {
  ItemWidth,
  ValueWidth,
  ButtonWapperWidth,
  WapperVisible,
  WapperIcon,
  WapperModalWidth,
} from './styles';

export const WidthComponent: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <ButtonWapperWidth onBlur={() => setOpen(false)}>
      <WapperVisible onClick={() => setOpen(true)}>
        <ValueWidth>M</ValueWidth>
        <WapperIcon>
          {open ? <BiChevronUp size={19} /> : <BiChevronDown size={19} />}
        </WapperIcon>
      </WapperVisible>
      {open && (
        <WapperModalWidth>
          <ItemWidth onClick={() => setOpen(false)}>P</ItemWidth>
          <ItemWidth onClick={() => setOpen(false)}>M</ItemWidth>
          <ItemWidth onClick={() => setOpen(false)}>G</ItemWidth>
        </WapperModalWidth>
      )}
    </ButtonWapperWidth>
  );
};
