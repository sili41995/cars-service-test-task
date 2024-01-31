import styled from '@emotion/styled';

export const ImgWrap = styled.div`
  height: 248px;
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.imgWrapBackgroundColor};
  & ~ p {
    margin-top: ${({ theme }) => theme.spacing(4)};
  }
  & ~ ul {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

export const Image = styled.img``;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  line-height: ${({ theme }) => theme.lineHeight.primaryLineHeight};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  margin-top: ${({ theme }) => theme.spacing(6)};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: ${({ theme }) => theme.lineHeight.primaryLineHeight};
`;

export const Link = styled.a`
  display: inline-block;
  min-width: 168px;
  border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
  margin-top: ${({ theme }) => theme.spacing(6)};
  padding: ${({ theme }) => theme.spacing(3)};
  background-color: ${({ theme }) => theme.colors.primaryColor};
  text-align: center;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  line-height: ${({ theme }) => theme.lineHeight.primaryLineHeight};
`;
