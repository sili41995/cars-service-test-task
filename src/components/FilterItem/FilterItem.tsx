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

const FilterItem: FC<IProps> = ({
  title = '',
  prefix,
  inputSettings,
  defaultValue,
  placeholder = '',
  leftDistance,
  disabled = false,
  showMenu,
  toggleMenuBtn,
  children,
  onChange,
  onMenuBtnClick,
}) => {
  return (
    <Label>
      {title && <Title>{title}</Title>}
      <InputWrap>
        {prefix && <Prefix leftDistance={leftDistance}>{prefix}</Prefix>}
        <Input
          {...inputSettings}
          type='text'
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
        />
        <ToggleMenuBtn
          type='button'
          onClick={onMenuBtnClick}
          showFiltersList={Boolean(showMenu)}
        >
          {toggleMenuBtn}
        </ToggleMenuBtn>
        {showMenu && children}
      </InputWrap>
    </Label>
  );
};

export default FilterItem;
