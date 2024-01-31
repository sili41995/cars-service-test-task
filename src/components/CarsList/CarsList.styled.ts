import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${({ theme }) => theme.spacing(7)};
  row-gap: ${({ theme }) => theme.spacing(12)};
`;
