import styled from 'styled-components';

/*
display: flex;
    background-color: #5555d1;
    border-radius: 10px;
    @media only screen and (min-width: 1200px) {
        flex-direction: column;
        background-color: white;
        align-items: center;
    }
*/
export const BioContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: white;
    border-radius: 10px;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }
`;

/*
margin: 20px 20px 20px 0px;
@media only screen and (min-width: 1200px) {
        margin: 0px;
    }
*/
export const ParagraphContainer = styled.div`
    width: 100%;
    background-color: white;
    padding: 0px 10px;
    border-radius: 10px;
    margin: 0px;
    @media only screen and (max-width: 800px) {
        text-align: center;
        width: 95%;
    }
`;

/*
margin-bottom: 10px;
    @media only screen and (min-width: 1200px) {
        text-align: center;
    }
*/
export const BioTitle = styled.h3`
    margin-bottom: 10px;
    @media only screen and (max-width: 800px) {
        text-align: center;
    }
`;

export const BioParagraph = styled.p`
    text-align: justify;
    @media only screen and (min-width: 800px) {}
`;