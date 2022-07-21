import { BioContainer, ParagraphContainer, BioTitle, Paragraph, ProjectsLinkContainer } from "./biography.styles"
import Education from "../education/education";
import WorkExp from "../work-exp/work-exp";
import Certs from "../certs/certs";


/* since childhood I have always been interested in computer programs, but not necessarily computer programming.
 I had a friend show me some applications they had been created, like a web browser or pong, and I would play 
 around and tweak the code but I never had the urge to develop anything on my own. That all changed when I played my
 first 


*/

const Biography = ({ aboutMap }) => {


    return (
        <BioContainer>
            <ParagraphContainer>
                <BioTitle>Hi, my name is Jared.</BioTitle>
                <Paragraph>
                    I am recent graduate from The School of Computing at Queen's University. Previously worked as a Web Developer for Juniper Cafe,
                    currently looking for a developer role. Currently, I am in search of a full-time developer position.
                </Paragraph>
            </ParagraphContainer>
            <Education educationList={aboutMap.education} />
            <WorkExp workList={aboutMap.work} />
            <Certs certList={aboutMap.certs} />
            {/*
            <ProjectsLinkContainer>
                <h3>Projects</h3>
                <Paragraph>Want to view some of my project work? Visit my projects page.</Paragraph>

            </ProjectsLinkContainer>
            */}
        </BioContainer>
    );
};

export default Biography;