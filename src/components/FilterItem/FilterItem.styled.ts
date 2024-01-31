import styled from '@emotion/styled';
import { SearchParamsKeys } from 'constants/index';
import { IStyledProps } from './FilterItem.types';

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.span`
  color: #8a8a89;
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: 1.29;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const Prefix = styled.p<IStyledProps>`
  position: absolute;
  top: 50%;
  left: ${({ leftDistance }) => leftDistance}px;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: ${({ theme }) => theme.lineHeight.otherLineHeight};
  &:is(:hover, :focus) + input:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Input = styled.input`
  height: 48px;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  background-color: #f7f7fb;
  padding: ${({ theme }) => theme.spacing(3)};
  border: ${({ theme }) => theme.border.secondaryBorder};
  border-color: transparent;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: ${({ theme }) => theme.lineHeight.otherLineHeight};
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &[name=${SearchParamsKeys.brand}] {
    width: 224px;
    padding-left: ${({ theme }) => theme.spacing(4)};
  }
  &[name=${SearchParamsKeys.price}] {
    width: 125px;
    ${({ theme }) => theme.spacing(12)};
  }
  &[name=${SearchParamsKeys.price}]:not(:placeholder-shown) {
    padding-left: ${({ theme }) => theme.spacing(11)};
  }
  &[name=${SearchParamsKeys.mileageFrom}], &[name=${SearchParamsKeys.mileageTo}] {
    width: 160px;
  }
  &[name=${SearchParamsKeys.mileageFrom}] {
    border-right: 1px solid
      ${({ theme }) => theme.colors.bordersGroupDelimiterColor};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-left: ${({ theme }) => theme.spacing(19)};
  }
  &[name=${SearchParamsKeys.mileageTo}] {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: ${({ theme }) => theme.spacing(13)};
  }
  &::placeholder {
    color: currentColor;
  }
  &:not(:disabled):is(:hover, :focus) {
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const ToggleMenuBtn = styled.button<IStyledProps>`
  position: absolute;
  right: 18px;
  top: 50%;
  padding: 0;
  border: none;
  background-color: transparent;
  transform-origin: center;
  transform: translateY(-50%)
    ${({ showFiltersList }) => showFiltersList && 'rotate(180deg)'};
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
  &:is(:hover, :focus) svg {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
  & svg {
    display: block;
    color: ${({ theme }) => theme.colors.primaryFontColor};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;
