import styled from '@emotion/styled';

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
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
