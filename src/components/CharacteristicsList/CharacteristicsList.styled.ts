import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 5px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    p::after {
      content: '';
      display: inline-block;
      width: 1px;
      height: 16px;
      background-color: rgba(18, 20, 23, 0.1);
    }
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${({ theme }) => theme.colors.characteristicsTextColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  line-height: 1.5;
  white-space: nowrap;
`;
