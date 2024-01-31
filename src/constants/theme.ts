import FontFamilyNames from './fontFamilyNames';

declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: {
    primaryColor: string;
    whiteColor: string;
    accentColor: string;
    primaryFontColor: string;
    characteristicsTextColor: string;
    backdropColor: string;
    otherColor: string;
    imgWrapBackgroundColor: string;
    bordersGroupDelimiterColor: string;
  };
  shadows: {
    primaryShadow: string;
  };
  fontWeight: {
    primaryFontWeight: number;
    secondaryFontWeight: number;
    otherFontWeight: number;
  };
  fontSize: {
    titleFontSize: number;
    primaryFontSize: number;
    secondaryFontSize: number;
    otherFontSize: number;
  };
  lineHeight: {
    primaryLineHeight: number;
    secondaryLineHeight: number;
    otherLineHeight: number;
  };
  padding: {
    containerPadding: number;
    sectionPadding: number;
  };
  border: {
    primaryBorder: string;
    secondaryBorder: string;
  };
  borderRadius: {
    primaryBorderRadius: number;
    secondaryBorderRadius: number;
    otherBorderRadius: number;
  };
  fontFamily: {
    primaryFontFamily: FontFamilyNames;
    secondaryFontFamily: FontFamilyNames;
  };
  deskContainerWidth: number;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    primaryColor: '#3470FF',
    whiteColor: '#fff',
    accentColor: '#0B44CD',
    primaryFontColor: '#121417',
    characteristicsTextColor: 'rgba(18, 20, 23, 0.50)',
    backdropColor: 'rgba(18, 20, 23, 0.50)',
    otherColor: '#38b6ff',
    imgWrapBackgroundColor: '#f3f3f2',
    bordersGroupDelimiterColor: 'rgba(138, 138, 137, 0.2)',
  },
  shadows: {
    primaryShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  },
  fontWeight: {
    primaryFontWeight: 400,
    secondaryFontWeight: 500,
    otherFontWeight: 600,
  },
  fontSize: {
    titleFontSize: 16,
    primaryFontSize: 18,
    secondaryFontSize: 14,
    otherFontSize: 12,
  },
  lineHeight: {
    primaryLineHeight: 1.43,
    secondaryLineHeight: 1.5,
    otherLineHeight: 1.11,
  },
  padding: {
    containerPadding: 16,
    sectionPadding: 150,
  },
  border: {
    primaryBorder: '1px solid',
    secondaryBorder: '2px solid',
  },
  borderRadius: {
    primaryBorderRadius: 14,
    secondaryBorderRadius: 12,
    otherBorderRadius: 4,
  },
  fontFamily: {
    primaryFontFamily: FontFamilyNames.manrope,
    secondaryFontFamily: FontFamilyNames.montserrat,
  },
  deskContainerWidth: 1216,
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
