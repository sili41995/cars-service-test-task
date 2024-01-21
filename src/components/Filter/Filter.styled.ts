import styled from '@emotion/styled';
import { SearchParamsKeys } from 'constants/index';
import { IStyledProps } from './Filter.types';

export const Form = styled.form`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.span`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: 1.29;
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const Input = styled.input`
  height: 48px;
  border-radius: 14px;
  background-color: #f7f7fb;
  padding: 14px;
  border: none;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: 1.11;
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
  &::placeholder {
    color: currentColor;
  }
  &:is(:hover, :focus) {
    outline: none;
  }
`;

export const Prefix = styled.p<IStyledProps>`
  position: absolute;
  top: 50%;
  left: ${({ inputName }) =>
    inputName === SearchParamsKeys.price ? 18 : 24}px;
  transform: translateY(-50%);
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: 1.11;
`;

export const Button = styled.button`
  height: 48px;
  border-radius: 12px;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding: 0 ${({ theme }) => theme.spacing(11)};
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: Manrope;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  line-height: 1.43;
`;
