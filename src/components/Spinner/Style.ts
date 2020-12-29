import styled from 'styled-components';

export const ImgWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.gray[200]};
`;

export const ImgContainer = styled.img`
  position: fixed;
  top: 50%;
  left: 50%;
`;
