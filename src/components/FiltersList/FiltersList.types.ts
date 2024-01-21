import { MouseEvent } from 'react';

export interface IProps {
  filters: string[];
  name: string;
  action: (e: MouseEvent<HTMLInputElement>) => void;
  currentValue: string;
}

export interface IStyledProps {
  name: string;
}
