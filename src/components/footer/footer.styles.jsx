import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export const FooterContainer = styled.div`
  border-top-style: solid;
  border-width: 1px;
  border-color: rgb(58, 58, 58, 0.2);
  width: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 5%;
  align-items: center;
  background-color: #55b6ee;
`;

export const FooterContentsContainer = styled.div`
  margin: 6px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const CopyrightIcon = styled(AiOutlineCopyrightCircle)`
    color: black;
    height: 16px;
    width: 16px;
    padding-top: 2px;
`;

export const CopyrightText = styled.span`
    color: black;
    height: 20px;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    align-items: center;
    justify-content: flex-start;
    width: 50%
`;

export const GitLink = styled.a`
  cursor: pointer;
`;

export const GithubIcon = styled(FaGithub)`
  height: 20px;
  width: 20px;
  color: white;
`;

export const LinkedinLink = styled.a`
    cursor: pointer;
`;

export const LinkedinIcon = styled(FaLinkedinIn)`
  height: 20px;
  width: 20px;
  color: white;
`;

