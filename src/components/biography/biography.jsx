import { BioContainer, ImageContainer, ParagraphContainer, BioTitle, BioParagraph } from "./biography.styles"

const Biography = () => {
    return (
        <BioContainer>
            <ImageContainer>
                <img src='/bio-image.jpg' alt='headshot' />
            </ImageContainer>
            <ParagraphContainer>
                <BioTitle>Hi, my name is Jared</BioTitle>
                <BioParagraph>I am recent graduate from The School of Computing at Queen's University. Previously worked as a Web Developer for Juniper Cafe, currently looking for a developer role.</BioParagraph>
            </ParagraphContainer>
        </BioContainer>
    );
};

export default Biography;