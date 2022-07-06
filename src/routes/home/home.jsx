import { PageContainer, Title, BioContainer, ImageContainer, ParagraphContainer, BioTitle, BioParagraph } from './home.styles';

const Home = () => {
    return (
        <PageContainer>
            <Title>Welcome!</Title>
            <BioContainer>
                <ImageContainer>
                    <img src='/bio-image.jpg' alt='headshot' />
                </ImageContainer>
                <ParagraphContainer>
                    <BioTitle>Hi, my name is Jared</BioTitle>
                    <BioParagraph>I am recent graduate from The School of Computing at Queen's University. Previously worked as a Web Developer for Juniper Cafe, currently looking for a developer role.</BioParagraph>
                </ParagraphContainer>
            </BioContainer>
        </PageContainer>
    );
};

export default Home;