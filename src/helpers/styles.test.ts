import { getColorCode, getFontSize } from './styles';
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

describe('getFontSize', () => {
  expect(getFontSize('xs')).toEqual(theme.fonts.xs);
  expect(getFontSize('xxs')).toEqual(theme.fonts.xxs);
  expect(getFontSize('sm')).toEqual(theme.fonts.sm);
  expect(getFontSize('lg')).toEqual(theme.fonts.lg);
  expect(getFontSize('xs')).toEqual(theme.fonts.xs);
  expect(getFontSize('xl')).toEqual(theme.fonts.xl);
  expect(getFontSize('')).toEqual(theme.fonts.default);
});
