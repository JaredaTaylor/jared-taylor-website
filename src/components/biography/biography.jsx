import { BioContainer, ParagraphContainer, BioTitle, BioParagraph } from "./biography.styles"

/* since childhood I have always been interested in computer programs, but not necessarily computer programming.
 I had a friend show me some applications they had been created, like a web browser or pong, and I would play 
 around and tweak the code but I never had the urge to develop anything on my own. That all changed when I played my
 first 


*/

const Biography = () => {
    return (
        <BioContainer>
            <ParagraphContainer>
                <BioTitle>Hi, my name is Jared.</BioTitle>
                <BioParagraph>
                    I am recent graduate from The School of Computing at Queen's University. Previously worked as a Web Developer for Juniper Cafe,
                    currently looking for a developer role. Currently, I am in search of a full-time developer position.
                </BioParagraph>
            </ParagraphContainer>
        </BioContainer>
    );
};

export default Biography;