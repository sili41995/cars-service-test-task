import styled from '@emotion/styled';
import { IStyledProps } from './PaginationBar.types';
import { setBtnDisplayProp } from 'utils';

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing(10)};
`;

export const Item = styled.li<IStyledProps>`
  display: ${({ currentPage, page, step }) =>
    setBtnDisplayProp({ currentPage, page, step })};
`;

export const TemplateItem = styled.li`
  & button {
    cursor: default;
    &:is(:hover, :focus) {
      box-shadow: none;
    }
  }
`;

export const Button = styled.button`
  min-width: 30px;
  height: 40px;
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: transparent;
  border-color: transparent;
  border-radius: ${({ theme }) => `${theme.borderRadius.otherBorderRadius}px`};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => `${theme.fontSize.titleFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &.active {
    background-color: ${({ theme }) => theme.colors.otherColor};
  }
  &:is(:hover, :focus, :active) {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
`;
