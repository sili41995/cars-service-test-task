import styled from '@emotion/styled';

export const NavContainer = styled.nav``;

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
`;

export const ListItem = styled.li`
  & a {
    display: block;
    width: 100px;
    padding: ${({ theme }) => theme.spacing(3)};
    border-radius: ${({ theme }) => theme.borderRadius.otherBorderRadius}px;
    border: ${({ theme }) => theme.border.primaryBorder};
    border-color: ${({ theme }) => theme.colors.whiteColor};
    color: ${({ theme }) => theme.colors.whiteColor};
    font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
    font-size: ${({ theme }) => theme.fontSize.titleFontSize}px;
    font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
    text-align: center;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc},
      background-color ${({ theme }) => theme.transitionDurationAndFunc};
    &:is(:hover, :focus),
    &.active {
      color: ${({ theme }) => theme.colors.otherColor};
      background-color: ${({ theme }) => theme.colors.whiteColor};
    }
  }
`;
