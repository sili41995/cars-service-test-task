import { FormEvent, MouseEvent, ReactNode } from 'react';

export interface IProps {
  title: string;
  prefix?: string;
  inputSettings: {};
  menuBtnIcon: ReactNode;
  showMenu: boolean;
  action: (e: FormEvent<HTMLInputElement>) => void;
  currentValue: string;
  variants: string[];
  onMenuBtnClick: (e: MouseEvent<HTMLButtonElement>) => void;
  defaultValue: string;
  placeholder: string;
  leftDistance?: number;
  filtersListName: string;
  disabled?: boolean;
}

export interface IStyledProps {
  leftDistance?: number;
  showFiltersList?: boolean;
}
