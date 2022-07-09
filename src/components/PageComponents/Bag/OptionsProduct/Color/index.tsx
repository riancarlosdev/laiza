import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import {
  ColorSelected,
  Item,
  WapperButtonContainer,
  WapperIcon,
  WapperItem,
  WapperModalListColors,
  WapperVisible,
} from './styles';

export const ColorComponent: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <WapperButtonContainer onBlur={() => setOpen(false)}>
      <WapperVisible onClick={() => setOpen(true)}>
        <ColorSelected background="#e00000" />
        <WapperIcon>
          {open ? <BiChevronUp size={19} /> : <BiChevronDown size={19} />}
        </WapperIcon>
      </WapperVisible>
      {open && (
        <WapperModalListColors>
          <WapperItem onClick={() => setOpen(false)}>
            <Item background="#e00000" />
          </WapperItem>
          <WapperItem onClick={() => setOpen(false)}>
            <Item background="#d4a600" />
          </WapperItem>
          <WapperItem onClick={() => setOpen(false)}>
            <Item background="#13e300" />
          </WapperItem>
          <WapperItem onClick={() => setOpen(false)}>
            <Item background="#00acdc" />
          </WapperItem>
        </WapperModalListColors>
      )}
    </WapperButtonContainer>
  );
};
