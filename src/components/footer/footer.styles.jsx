import styled from 'styled-components';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

export const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    border-top-style: solid;
    border-width: 1px;
    border-color: #adadad;
    width: 100%;
    height: 40px;
    display: flex;
    flex-direction: row;
    column-gap: 5%;
    align-items: center;
    background-color: white;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 5px;
    align-items: center;
    justify-content: flex-end;
    width: 50%
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
  color: #5555d1;
`;

export const LinkedinLink = styled.a`
    cursor: pointer;
`;

export const LinkedinIcon = styled(FaLinkedinIn)`
  height: 20px;
  width: 20px;
  color: #5555d1;
`;

