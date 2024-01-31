import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  gap: ${({ theme }) => theme.spacing(5)};
  justify-content: center;
  align-items: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing(12)};
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: flex-end;
`;
