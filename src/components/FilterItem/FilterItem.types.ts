import { MouseEvent, ReactNode } from 'react';

export interface IProps {
  title?: string;
  prefix?: string;
  inputSettings: {};
  showMenu?: boolean;
  defaultValue: string;
  placeholder?: string;
  leftDistance?: number;
  disabled?: boolean;
  onMenuBtnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

export interface IStyledProps {
  leftDistance?: number;
  showFiltersList?: boolean;
}
