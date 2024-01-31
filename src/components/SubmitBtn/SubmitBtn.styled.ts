import styled from '@emotion/styled';

export const Button = styled.button`
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  padding: 0 ${({ theme }) => theme.spacing(11)};
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  line-height: ${({ theme }) => theme.lineHeight.primaryLineHeight};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
