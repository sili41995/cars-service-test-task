import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;

export const Item = styled.li`
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: #f9f9f9;
`;

export const Text = styled.p`
  color: #363535;
  font-family: ${({ theme }) => theme.fontFamily.secondaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.otherFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  line-height: ${({ theme }) => theme.lineHeight.secondaryLineHeight};
  letter-spacing: -0.24px;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
`;
