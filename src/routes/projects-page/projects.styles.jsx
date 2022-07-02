import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 0px 2%;
`;

export const Title = styled.h2`
  font-size: 38px;
  text-align: center;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`

export const CategoryTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 25px;
`;

export const ProjectsPreview = styled.div`
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  margin-bottom: 30px;
`;