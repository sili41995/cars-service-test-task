import styled from '@emotion/styled';
import { IStyledProps } from './CarTitle.types';

export const Title = styled.p<IStyledProps>`
  color: #121417;
  font-family: Manrope;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: ${({ fontSize }) => 24 / fontSize};
`;

export const Model = styled.span`
  color: ${({ theme }) => theme.colors.primaryColor};
`;
