import { FC } from 'react';
import { IProps } from './LoadMoreBtn.types';
import { Button } from './LoadMoreBtn.styled';

const LoadMoreBtn: FC<IProps> = ({ disabled }) => {
  return (
    <Button type='button' disabled={disabled}>
      Load more
    </Button>
  );
};

export default LoadMoreBtn;
