import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProjectCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const GitLink = styled(Link)`
    cursor: pointer;
`;

export const TechContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 5px;
    align-items: center;
    justify-content: center;
`;

export const Technology = styled.span`
    background-color: yellow;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;