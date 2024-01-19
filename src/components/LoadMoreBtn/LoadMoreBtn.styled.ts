import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  border: 3px solid;
  border-color: ${({ theme }) => theme.colors.primaryColor};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  margin: 100px auto 0;
  padding: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.primaryColor};
  font-family: Manrope;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: 1.5;
  text-decoration-line: underline;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc},
    border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:is(:hover, :focus) {
    color: ${({ theme }) => theme.colors.accentColor};
    border-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
