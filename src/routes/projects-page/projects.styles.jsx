import styled from 'styled-components';

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  margin-bottom: 30px;
`;