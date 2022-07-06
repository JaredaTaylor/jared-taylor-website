import { Name, ProjectCardContainer, GitLink, TechContainer, Technology, InfoContainer, DetailsContainer, GithubIcon, DetailsText } from './project-card.styles';


const ProjectCard = ({project}) => {
    const { name, githubUrl, tech, description, wip, todo } = project;

    return (
        <ProjectCardContainer>
            <InfoContainer>
                <Name>{name}</Name>
                <TechContainer>
                    {
                    tech.map((element) => (
                        <Technology key={element}>{element}</Technology>
                    ))
                    }
                </TechContainer>
                {githubUrl && <GitLink href={ githubUrl }><GithubIcon /></GitLink>}
            </InfoContainer>
            <DetailsContainer>
                <DetailsText>
                    <h4>Description:</h4>
                    <p>{ description }</p>
                </DetailsText>
                {wip &&
                <DetailsText>
                    <h4>Future Work:</h4>
                    <p>{ todo }</p>
                </DetailsText>}
            </DetailsContainer>
        </ProjectCardContainer>
    );
};

export default ProjectCard;