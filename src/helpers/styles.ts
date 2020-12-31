import * as styles from '../styles';

export const getColorCode = (color?: string) => {
  const { theme } = styles;

  switch (color) {
    case 'red':
      return theme.colors.red;
    case 'blue':
      return theme.colors.blue;
    case 'yellow':
      return theme.colors.yellow;
    case 'black':
      return theme.colors.black;
    default:
      return theme.colors.gray[500];
  }
};

export const getFontSize = (size?: string) => {
  const { theme } = styles;

  switch (size) {
    case 'sm':
      return theme.fonts.sm;
    case 'xs':
      return theme.fonts.xs;
    case 'lg':
      return theme.fonts.lg;
    case 'xl':
      return theme.fonts.xl;
    case 'xxs':
      return theme.fonts.xxs;
    default:
      return theme.fonts.default;
  }
};
