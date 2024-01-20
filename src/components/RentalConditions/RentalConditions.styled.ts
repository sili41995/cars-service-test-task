import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
  flex-wrap: wrap;
`;

export const Item = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
`;

export const Text = styled.p`
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  line-height: 1.5;
  letter-spacing: -0.24px;
`;

export const Accent = styled.span`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
`;
