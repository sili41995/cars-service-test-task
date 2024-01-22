import { MouseEvent } from 'react';

export interface IProps {
  filters: string[];
  menuHeight: number;
  action: (e: MouseEvent<HTMLInputElement>) => void;
  currentValue: string;
  name: string;
}

export interface IStyledProps {
  menuHeight: number;
}
