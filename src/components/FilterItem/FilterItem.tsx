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
  title,
  prefix,
  inputSettings,
  menuBtnIcon,
  onMenuBtnClick,
  defaultValue,
  placeholder,
  leftDistance,
  disabled = false,
  children,
}) => {
  return (
    <Label>
      <Title>{title}</Title>
      <InputWrap>
        {prefix && <Prefix leftDistance={leftDistance}>{prefix}</Prefix>}
        <Input
          {...inputSettings}
          type='text'
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
        />
        <ToggleMenuBtn
          type='button'
          onClick={onMenuBtnClick}
          showFiltersList={Boolean(children)}
        >
          {menuBtnIcon}
        </ToggleMenuBtn>
        {children}
      </InputWrap>
    </Label>
  );
};

export default FilterItem;
