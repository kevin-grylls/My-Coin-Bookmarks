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
