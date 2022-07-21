import styled from 'styled-components';

export const BioContainer = styled.div`
    padding: 0px 10px 40px 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    ul {
        padding: 0px 0px 0px 20px;
    }
    li {
        color: gray;
    }
    h3 {
        margin-bottom: 10px;
    }
    @media only screen and (max-width: 800px) {
        align-items: center;
        text-align: center;
        width: 95%;
        ul {
            text-align: left;
        }
    }
`;

export const ParagraphContainer = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 10px;
    margin: 0px;
    @media only screen and (max-width: 800px) {
        
    }
`;

export const BioTitle = styled.h3`
    margin-bottom: 10px;
    @media only screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const Paragraph = styled.p`
    text-align: left;
    color: gray;
    @media only screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const ProjectsLinkContainer = styled.div`
`;