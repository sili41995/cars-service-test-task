import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backdropColor};
  @media screen and (max-height: 500px) {
    align-items: flex-start;
  }
`;

export const Container = styled.div`
  width: 541px;
  position: relative;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  padding: ${({ theme }) => theme.spacing(10)};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 0;
  border: 0;
  background-color: transparent;
  &:is(:hover, :focus) svg {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
  & svg {
    display: block;
    color: #121417;
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;
