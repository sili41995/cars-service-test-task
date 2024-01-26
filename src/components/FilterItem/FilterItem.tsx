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
      <Title>{title}</Title>
      {children ? (
        <InputWrap>
          {prefix && <Prefix leftDistance={leftDistance}>{prefix}</Prefix>}
          {input}
          <ToggleMenuBtn
            type='button'
            onClick={onMenuBtnClick}
            showFiltersList={Boolean(showMenu)}
          >
            {menuBtnIcon}
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
