import styled from 'styled-components';

export const BioContainer = styled.div`
    display: flex;
    background-color: #5555d1;
    border-radius: 10px;
    @media only screen and (min-width: 1200px) {
        flex-direction: column;
        background-color: white;
        align-items: center;
    }
`;

export const ParagraphContainer = styled.div`
    width: 66%;
    margin: 20px 20px 20px 0px;
    background-color: white;
    padding: 0px 10px;
    border-radius: 10px;
    @media only screen and (min-width: 1200px) {}
`;

export const BioTitle = styled.h3`
    margin-bottom: 10px;
    @media only screen and (min-width: 1200px) {}
`;

export const BioParagraph = styled.p`
    @media only screen and (min-width: 1200px) {}
`;

export const ImageContainer = styled.div`
    width: 33%;
    height: 50%;
    margin: 20px;
    img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
    @media only screen and (min-width: 1200px) {
        img{}
    }
`;