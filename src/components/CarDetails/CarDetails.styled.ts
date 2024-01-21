import styled from '@emotion/styled';

export const ImgWrap = styled.div`
  height: 248px;
  border-radius: 14px;
  overflow: hidden;
  background-color: #f3f3f2;
  & ~ p {
    margin-top: 14px;
  }
  & ~ ul {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Image = styled.img`
  height: auto;
`;

export const Description = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  line-height: 1.43;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const Title = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: 1.43;
`;

export const Link = styled.a`
  display: inline-block;
  min-width: 168px;
  border-radius: 12px;
  margin-top: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: Manrope;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  line-height: 1.43;
`;
