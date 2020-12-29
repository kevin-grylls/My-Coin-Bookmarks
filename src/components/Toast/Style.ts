import styled, { keyframes, css } from 'styled-components';

const fadeOut = keyframes`
0% {
    opacity: 1;
}

100% {
    opacity: 0.3;
}
`;

const anim = css`
  animation-duration: 2.3s;
  animation-timing-function: ease-out;
  animation-name: ${fadeOut};
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;

export const Message = styled.div<{ isSelected?: boolean }>`
  position: fixed;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  ${anim};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.xxs};
  font-weight: bold;
  text-align: center;
  width: 180px;
  line-height: 40px;
  border-radius: 3px;
  border: solid 1px ${({ theme }) => theme.colors.gray[500]};
  background-color: ${({ theme }) => theme.colors.blue};
`;
