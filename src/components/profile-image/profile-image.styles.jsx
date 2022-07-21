import styled from 'styled-components';

export const ImageContainer = styled.div`
    padding: 0px 10px;
    img {
        height: 100%;
        width: 100%;
        border-radius: 10px;
        
    }
    @media only screen and (max-width: 800px) {
        width: 65%;
        img {
            border-radius: 50%;
        }
    }
`;