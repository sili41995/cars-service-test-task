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
  font-size: 14px;
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
  color: #121417;
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: 1.11;
  &:is(:hover, :focus) + input:not(:disabled) {
    border-color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Input = styled.input`
  height: 48px;
  outline: none;
  border-radius: 14px;
  background-color: #f7f7fb;
  padding: 14px;
  border: 2px solid;
  border-color: transparent;
  color: #121417;
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: 1.11;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &[name=${SearchParamsKeys.brand}] {
    width: 224px;
    padding-left: 18px;
  }
  &[name=${SearchParamsKeys.price}] {
    width: 125px;
    padding-left: 47px;
  }
  &[name=${SearchParamsKeys.price}]:not(:placeholder-shown) {
    padding-left: 43px;
  }
  &[name=${SearchParamsKeys.mileageFrom}], &[name=${SearchParamsKeys.mileageTo}] {
    width: 160px;
  }
  &[name=${SearchParamsKeys.mileageFrom}] {
    border-right: 1px solid
      ${({ theme }) => theme.colors.bordersGroupDelimiterColor};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding-left: 75px;
  }
  &[name=${SearchParamsKeys.mileageTo}] {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: 53px;
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
    color: #121417;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;
