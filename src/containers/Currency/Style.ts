import styled from 'styled-components';

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
