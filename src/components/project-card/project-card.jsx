import { Name, ProjectCardContainer, GitLink, TechContainer, Technology } from './project-card.styles';

const ProjectCard = ({project}) => {
    const { name, githubUrl, tech } = project;

    return (
        <ProjectCardContainer>
            <Name>{name}</Name>
            <TechContainer>
                {
                tech.map((element) => (
                    <Technology key={element}>{element}</Technology>
                ))
                }
            </TechContainer>
            {githubUrl && <GitLink to={githubUrl}>To Github</GitLink>}
            <span>Description:</span>
            <span>Future Work:</span>
        </ProjectCardContainer>
    );
};

export default ProjectCard;