declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: { [key: string]: string };
  shadows: { [key: string]: string };
  fontWeight: { [key: string]: number };
  fontSize: { [key: string]: number };
  padding: { [key: string]: number };
  borderRadius: { [key: string]: number };
  fontFamily: { [key: string]: string };
  deskContainerWidth: number;
  primaryGap: number;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
}

const theme: ITheme = {
  colors: {
    primaryColor: '#3470FF',
    whiteColor: '#fff',
    accentColor: '#0B44CD',
    characteristicsTextColor: 'rgba(18, 20, 23, 0.50)',
    backdropColor: 'rgba(18, 20, 23, 0.50)',
    otherColor: '#38b6ff',
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
    primaryFontSize: 16,
    secondaryFontSize: 18,
  },
  padding: {
    containerPadding: 16,
    sectionPadding: 150,
  },
  borderRadius: {
    primaryBorderRadius: 4,
  },
  fontFamily: { primaryFontFamily: 'Manrope' },
  deskContainerWidth: 1216,
  primaryGap: 20,
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
};

export default theme;
