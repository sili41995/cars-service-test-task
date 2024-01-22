import { IOnToggleMenuBtnClickProps } from 'types/types';
import makeBlur from './makeBlur';

const onToggleMenuBtnClick = ({
  e,
  setState,
}: IOnToggleMenuBtnClickProps): void => {
  setState((prevState) => !prevState);
  makeBlur(e.currentTarget);
};

export default onToggleMenuBtnClick;
