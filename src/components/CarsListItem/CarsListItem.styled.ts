import styled from '@emotion/styled';
import { IStyledProps } from './CarsListItem.types';

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: space-between;
  width: calc((100% - ${({ theme }) => theme.spacing(7 * 3)}) / 4);
  overflow: hidden;
`;

export const BasicInfoWrap = styled.div``;

export const DetailedInfoWrap = styled.div``;

export const ImgWrap = styled.div`
  position: relative;
  height: 268px;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  overflow: hidden;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    ${({ theme }) => theme.colors.imgWrapBackgroundColor};
`;

export const TitleWrap = styled.div`
  display: flex;
`;

export const Price = styled.p`
  margin-right: ${({ theme }) => theme.spacing(2)};
  margin-left: auto;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.titleFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  line-height: ${({ theme }) => theme.lineHeight.secondaryLineHeight};
`;

export const Image = styled.img``;

export const FavBtn = styled.button<IStyledProps>`
  position: absolute;
  top: ${({ theme }) => theme.spacing(4)};
  right: ${({ theme }) => theme.spacing(4)};
  display: block;
  background-color: transparent;
  padding: 0;
  border: 0;
  &:is(:hover, :focus) svg {
    fill: ${({ theme, isFavCar }) =>
      isFavCar ? theme.colors.whiteColor : theme.colors.primaryColor};
  }
  & svg {
    display: block;
    fill: ${({ theme, isFavCar }) =>
      isFavCar ? theme.colors.primaryColor : theme.colors.whiteColor};
    transition: fill ${({ theme }) => theme.transitionDurationAndFunc};
  }
`;

export const LearnMoreBtn = styled.button`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
  border-color: transparent;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  margin-top: ${({ theme }) => theme.spacing(7)};
  padding: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.whiteColor};
  font-family: ${({ theme }) => theme.fontFamily.primaryFontFamily};
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  line-height: ${({ theme }) => theme.lineHeight.primaryLineHeight};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:is(:hover, :focus) {
    background-color: ${({ theme }) => theme.colors.accentColor};
  }
`;
