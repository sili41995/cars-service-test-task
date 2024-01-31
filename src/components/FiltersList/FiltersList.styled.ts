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
  height: ${({ name }) => (name === SearchParamsKeys.price ? 188 : 272)}px;
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing(3.5)} ${theme.spacing(2)} ${theme.spacing(
      3.5
    )} ${theme.spacing(4.5)}`};
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  ${({ theme }) => theme.border.primaryBorder} rgba(18, 20, 23, 0.05);
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
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.titleFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: ${({ theme }) => theme.lineHeight.otherLineHeight};
  &.active {
    color: ${({ theme }) => theme.colors.primaryFontColor};
  }
`;

export const Input = styled.input`
  position: fixed;
  transform: scale(0);
`;
