import styled from 'styled-components';
import { getColorCode } from '../../helpers';

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
    line-height: 32px;
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

export const Star = styled.span<{ isSelected?: boolean }>`
  cursor: pointer;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.yellow : theme.colors.gray[100]};
`;

export const Text = styled.span`
  cursor: pointer;
`;
