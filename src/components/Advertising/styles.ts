import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const WapperImage = styled.div``;

export const Image = styled.div<{ img?: string }>`
  width: 100%;
  height: 450px;

  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
