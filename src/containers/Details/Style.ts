import styled from 'styled-components';
import { getColorCode, getFontSize } from '../../helpers';

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fonts.lg};
  line-height: 42px;

  img {
    padding: 0 7px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
`;

/** Table **/
export const TableWrapper = styled.div`
  display: flex;
`;

export const Table = styled.table`
  width: 50%;
  border-style: solid;
  border: solid 0.2px ${({ theme }) => theme.colors.gray[100]};
  border-bottom: none;

  tr {
    line-height: 40px;
  }

  th {
    text-align: left;
    padding-inline-start: 10px;
    box-sizing: border-box;

    ${({ theme }) => `
            font-size: ${theme.fonts.xs};
            color: ${theme.colors.black};
            background-color: ${theme.colors.gray[100]};
            `}
  }

  th:first-child {
    border-bottom: solid 0.2px ${({ theme }) => theme.colors.gray[100]};
  }

  td {
    font-size: ${({ theme }) => theme.fonts.default};
    padding-inline-start: 10px;
    border-bottom: solid 0.2px ${({ theme }) => theme.colors.gray[100]};

    input {
      line-height: 40px;
      border: none;
      text-align: right;
      padding-inline-end: 10px;
    }
  }
`;

export const CalculatorWrapper = styled.div`
  padding: 10px 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.gray[100]};

  span {
    font-size: ${({ theme }) => theme.fonts.xxs};
    font-weight: bold;
  }
`;

export const CalculatorInput = styled.input`
  width: 25%;
  min-width: 120px;
  padding: 5px 12px;
  border: none;
  text-align: right;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.xs};
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.span<{
  fontSize?: string;
  color?: string;
  bold?: boolean;
}>`
  font-size: ${({ fontSize }) => getFontSize(fontSize)};
  color: ${({ color }) => getColorCode(color)};
  font-weight: ${({ bold }) => bold && 'bold'};
`;

export const UtilityDiv = styled.div<{
  width?: string;
  border?: string;
  lineHeight?: string;
  padding?: string;
  height?: string;
  marginLeft?: string;
  marginRight?: string;
}>`
  width: ${({ width }) => width};
  border: ${({ border }) => border};
  line-height: ${({ lineHeight }) => lineHeight};
  height: ${({ height }) => height};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  padding: ${({ padding }) => padding};
`;

export const DescBox = styled.div`
  width: 10%;
  border: none;
  vertical-align: middle;
  line-height: 32px;
  padding-inline-start: 5px;
  background-color: #f5f5f5;
`;

export const DescBtn = styled.div`
  width: 100%;
  padding-top: 20px;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.xxs};
  border-bottom: solid 0.5px ${({ theme }) => theme.colors.gray[100]};
`;

export const DescContent = styled.p`
  font-size: ${({ theme }) => theme.fonts.xs};
  padding-top: 10px;
  white-space: pre-line;
  word-break: break-all;
`;
