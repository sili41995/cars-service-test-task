import {
  Input,
  InputWrap,
  Label,
  Prefix,
  Title,
  ToggleMenuBtn,
} from './FilterItem.styled';
import { FC } from 'react';
import { IProps } from './FilterItem.types';
import { IconSizes } from 'constants/index';
import { FaChevronDown } from 'react-icons/fa';

const FilterItem: FC<IProps> = ({
  title = '',
  prefix,
  inputSettings,
  onMenuBtnClick,
  defaultValue,
  placeholder = '',
  leftDistance,
  disabled = false,
  showMenu,
  children,
}) => {
  const input = (
    <Input
      {...inputSettings}
      type='text'
      placeholder={placeholder}
      defaultValue={defaultValue}
      disabled={disabled}
    />
  );

  return (
    <Label>
      {title && <Title>{title}</Title>}
      {children ? (
        <InputWrap>
          {prefix && <Prefix leftDistance={leftDistance}>{prefix}</Prefix>}
          {input}
          <ToggleMenuBtn
            type='button'
            onClick={onMenuBtnClick}
            showFiltersList={Boolean(showMenu)}
          >
            <FaChevronDown size={IconSizes.otherSize} />
          </ToggleMenuBtn>
          {showMenu && children}
        </InputWrap>
      ) : (
        input
      )}
    </Label>
  );
};

export default FilterItem;
