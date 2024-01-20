import { FC } from 'react';
import { IProps } from './CarTitle.types';
import { Model, Title } from './CarTitle.styled';

const CarTitle: FC<IProps> = ({ fontSize, make, model, year }) => (
  <Title fontSize={fontSize}>
    {`${make} `}
    <Model>{model}</Model>
    {`, ${year}`}
  </Title>
);

export default CarTitle;
