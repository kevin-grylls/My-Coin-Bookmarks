import { getColorCode } from './colors';
import { theme } from '../styles';

describe('getColorCode', () => {
  it('should return proper color code', () => {
    expect(getColorCode('black')).toEqual(theme.colors.black);
    expect(getColorCode('red')).toEqual(theme.colors.red);
    expect(getColorCode('blue')).toEqual(theme.colors.blue);
    expect(getColorCode('yellow')).toEqual(theme.colors.yellow);
    expect(getColorCode('default')).toEqual(theme.colors.gray[500]);
  });
});
