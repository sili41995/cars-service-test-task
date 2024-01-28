import { FormEvent, MouseEvent, ReactNode } from 'react';

export interface IProps {
  title?: string;
  prefix?: string;
  inputSettings: {};
  showMenu?: boolean;
  defaultValue: string;
  placeholder?: string;
  leftDistance?: number;
  disabled?: boolean;
  children?: ReactNode;
  toggleMenuBtn?: ReactNode;
  onMenuBtnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  leftDistance?: number;
  showFiltersList?: boolean;
}
