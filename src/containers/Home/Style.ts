import styled, { css } from 'styled-components';

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

  ${({ active }) => active && ActiveStyle}
`;

export const Loading = styled.div``;
