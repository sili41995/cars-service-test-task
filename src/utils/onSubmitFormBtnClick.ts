import { MouseEvent } from 'react';
import makeBlur from './makeBlur';

const onSubmitFormBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
  makeBlur(e.currentTarget);
};

export default onSubmitFormBtnClick;
