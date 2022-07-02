import { Name, ProjectCardContainer, GitLink, TechContainer, Technology, InfoContainer, DetailsContainer, GithubIcon, Description, FutureWork } from './project-card.styles';


const ProjectCard = ({project}) => {
    const { name, githubUrl, tech } = project;

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
                {githubUrl && <GitLink to={githubUrl}><GithubIcon /></GitLink>}
            </InfoContainer>
            <DetailsContainer>
                <Description>Description:</Description>
                <FutureWork>Future Work:</FutureWork>
            </DetailsContainer>
        </ProjectCardContainer>
    );
};

export default ProjectCard;