import styled, { css } from 'styled-components';
import { getColorCode } from '../helpers';

export const Layout = styled.div`
  * {
    margin: 0;
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  min-width: 720px;
`;

export const Section = styled.section`
  width: 100%;
`;

/** Tab **/
export const TabWrapper = styled.div.attrs(() => ({
  'data-test-id': 'tab',
}))`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const ActiveStyle = css`
  background-color: white;
  border-radius: 3px;
  ${({ theme }) => `color: ${theme.colors.black};`}

  a {
    text-decoration: none;
    ${({ theme }) => `color: ${theme.colors.black};`}
  }
`;

export const TabItem = styled.span.attrs(() => ({
  'data-test-id': 'tab-item',
}))<{ active: boolean }>`
  width: 50%;
  text-align: center;
  line-height: 32px;
  font-weight: bold;
  box-sizing: border-box;

  ${({ theme }) => `
    color: ${theme.colors.gray[400]};
    font-size: ${theme.fonts.default};
    border: solid 1px ${theme.colors.gray[100]};
    background-color: ${theme.colors.gray[100]};`}

  a {
    text-decoration: none;
    ${({ theme }) => `color: ${theme.colors.gray[400]};`}
  }

  &:hover {
    ${ActiveStyle}
  }

  ${({ active }) => active && ActiveStyle}
`;

/** Table **/
export const TableWrapper = styled.table`
  width: 100%;

  th {
    line-height: 24px;
    ${({ theme }) => `
            font-size: ${theme.fonts.xxs};
            color: ${theme.colors.gray[200]};
            background-color: ${theme.colors.gray[50]};
            `}
  }

  td {
    line-height: 30px;
    ${({ theme }) => `font-size: ${theme.fonts.xs};`}
  }
`;

export const TableItem = styled.td<{ align?: string; color?: string }>`
  ${({ align }) => `text-align: ${align};`}
  color: ${({ color }) => getColorCode(color)};
  border-bottom: solid 0.5px ${({ theme }) => theme.colors.gray[100]};

  &::before {
    content: &#8361;
  }
`;

export const Loading = styled.div``;

export const Star = styled.span<{ isSelected?: boolean }>`
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.yellow : theme.colors.gray[100]};
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px 0;
`;

export const Select = styled.select<{ marginLeft?: string }>`
  border: none;
  outline: none;
  ${({ theme }) => `
    font-size: ${theme.fonts.xs};
    color: ${theme.colors.gray[500]};`}
  ${({ marginLeft }) => `margin-left: ${marginLeft};`}
`;
