import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const ProjectCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border-style: solid;
  border-color: #5555d1;
  border-radius: 10px;
  outline-color: #5555d1;
  box-shadow: 1px 3px rgb(0 0 0 / 0.2);
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #5555d1;
  align-items: center;
  position: relative;
  border-style: solid;
  border-color: #5555d1;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Name = styled.span`
  font-weight: 800;
  font-size: 18px;
  text-align: center;
  width: 90%;
  margin-bottom: 5px;
  margin-top: 8px;
  text-decoration: underline;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
  row-gap: 5px;
  align-items: center;
  justify-content: center;
  margin: 10px 5px;
`;

export const Technology = styled.span`
  text-align: center;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px;
`;

export const GitLink = styled.a`
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 5px;
`;

export const GithubIcon = styled(FaGithub)`
  height: 24px;
  width: 24px;
  color: white;
`;

export const DetailsContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin: 10px 0px 10px 0px;
`;

export const DetailsText = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    margin: 0px 0px 2px 0px;
  }
  p {
    margin: 0px;
  }
`;