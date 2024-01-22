import { MouseEvent } from 'react';

export interface IProps {
  filters: string[];
  action: (e: MouseEvent<HTMLInputElement>) => void;
  currentValue: string;
  name: string;
}

export interface IStyledProps {
  name: string;
}
