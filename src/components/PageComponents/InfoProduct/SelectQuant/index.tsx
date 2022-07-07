import { useRef, useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { GoCheck } from 'react-icons/go';
import {
  Button,
  ButtonSelect,
  InputAmount,
  OptionQnt,
  Value,
  ValueNumberSelected,
  WapperContainer,
  WapperIcon,
  WapperModalSelect,
  WapperOther,
  WapperSelectM,
} from './styles';

interface SelectAmount {
  repository: number;
}

export const SelectAmountComponent: React.FC<SelectAmount> = ({
  repository,
}): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(1);
  const [mouseEnter, setMouseEnter] = useState(false);

  const input = useRef(null);

  const onAmount = (value): void => {
    setOpen(false);
    setAmount(value);
  };

  const onSetAmout = (value: number): void => {
    if (value === 0) {
      input.current.value = 1;
      return setAmount(1);
    }
    if (value > repository) {
      input.current.value = repository;
      return setAmount(repository);
    }
    return setAmount(value);
  };

  return (
    <WapperContainer
      onBlur={
        !mouseEnter ? () => setTimeout(() => setOpen(false), 110) : undefined
      }
    >
      <ButtonSelect onClick={!open ? () => setOpen(true) : undefined}>
        <Value>Quantidade:</Value>
        <WapperOther>
          <ValueNumberSelected>
            {amount} {amount > 1 ? 'unidades' : 'unidade'}
          </ValueNumberSelected>
          <WapperIcon>
            {open ? <BiChevronUp size={25} /> : <BiChevronDown size={25} />}
          </WapperIcon>
        </WapperOther>
        <WapperModalSelect open={open}>
          <OptionQnt onClick={() => onAmount(1)}>1 unidade</OptionQnt>
          <OptionQnt onClick={() => onAmount(2)}>2 unidades</OptionQnt>
          <OptionQnt onClick={() => onAmount(3)}>3 unidades</OptionQnt>
          {repository > 3 && (
            <OptionQnt>
              <WapperSelectM>
                <InputAmount
                  type="number"
                  ref={input}
                  onMouseLeave={() => setMouseEnter(false)}
                  onMouseEnter={() => setMouseEnter(true)}
                  defaultValue={4}
                  max={repository}
                />
                <Button onClick={() => onSetAmout(Number(input.current.value))}>
                  <GoCheck size={18} color="#fff" />
                </Button>
              </WapperSelectM>
            </OptionQnt>
          )}
        </WapperModalSelect>
      </ButtonSelect>
    </WapperContainer>
  );
};
