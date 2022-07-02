import { PageContainer, Title, BioContainer, ImageContainer, ParagraphContainer, BioTitle, BioParagraph } from './home.styles';

const Home = () => {
    return (
        <PageContainer>
            <Title>Welcome!</Title>
            <BioContainer>
                <ImageContainer>
                    <img src='/bio-image.jpg' alt='headshot photo' />
                </ImageContainer>
                <ParagraphContainer>
                    <BioTitle>Hi, my name is Jared</BioTitle>
                    <BioParagraph>About me.</BioParagraph>
                </ParagraphContainer>
            </BioContainer>
        </PageContainer>
    );
};

export default Home;