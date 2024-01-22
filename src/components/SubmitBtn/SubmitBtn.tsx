import { FC } from 'react';
import { Button } from './SubmitBtn.styled';
import { IProps } from './SubmitBtn.types';
import { onSubmitFormBtnClick } from 'utils';

const SubmitBtn: FC<IProps> = ({ title }) => (
  <Button type='submit' onClick={onSubmitFormBtnClick}>
    {title}
  </Button>
);

export default SubmitBtn;
