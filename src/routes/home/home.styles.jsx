import styled from 'styled-components';

export const PageContainer = styled.div`
  margin: 0px 2%;
`;

export const Title = styled.h2`
  font-size: 38px;
  text-align: center;
`;

export const BioContainer = styled.div`
    display: flex;
    background-color: #5555d1;
    border-radius: 10px;
`;

export const ParagraphContainer = styled.div`
    width: 66%;
    margin: 20px 20px 20px 0px;
`;

export const BioTitle = styled.h3`
    background-color: yellow;
    margin-bottom: 10px;
`;

export const BioParagraph = styled.p`
    background-color: pink;
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
`;