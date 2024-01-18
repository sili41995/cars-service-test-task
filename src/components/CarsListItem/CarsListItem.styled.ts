import styled from '@emotion/styled';

export const Card = styled.li`
  flex-basis: calc((100% - 87px) / 4);
`;

export const ImgWrap = styled.div`
  height: 268px;
  border-radius: 14px;
  overflow: hidden;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;
`;

export const Image = styled.img``;

export const LearnMoreBtn = styled.button`
  display: inline-block;
  width: 100%;
  border-radius: 12px;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  margin-top: ${({ theme }) => theme.spacing(7)};
  padding: ${({ theme }) => theme.spacing(3)};
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
