import styled from '@emotion/styled';
import { IStyledProps } from './FiltersList.types';
import { SearchParamsKeys } from 'constants/index';

export const List = styled.ul<IStyledProps>`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  transform: translateY(${({ theme }) => theme.spacing()});
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  height: ${({ name }) =>
    name === SearchParamsKeys.price ? '188px' : '272px'};
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(3.5)} ${theme.spacing(2)} ${theme.spacing(
      3.5
    )} ${theme.spacing(4.5)}`};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background-color: ${({ theme }) => theme.colors.whiteColor};
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  overflow: auto;
`;

export const Item = styled.li``;

export const Label = styled.label`
  &:is(:hover) {
    cursor: pointer;
  }
`;

export const Title = styled.span`
  color: rgba(18, 20, 23, 0.2);
  font-family: Manrope;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: 1.25;
  &.active {
    color: #121417;
  }
`;

export const Input = styled.input`
  position: fixed;
  transform: scale(0);
`;
