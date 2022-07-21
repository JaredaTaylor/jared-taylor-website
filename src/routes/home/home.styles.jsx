import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 0px 2%;
`;

export const Title = styled.h2`
  font-size: 38px;
  text-align: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InfoLeft = styled.div`
  order: 1;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media only screen and (max-width: 800px) {
    order: 2;
    align-items: center;
    width: 100%;
  }
`;

export const InfoRight = styled.div`
  order: 2;
  display: flex;
  flex-direction: column;
  width: 50%;
  @media only screen and (max-width: 800px) {
    order: 1;
    align-items: center;
    width: 100%;
  }
`;