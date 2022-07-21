import { PageContainer, ProjectsPreview, Title } from './projects.styles';
import { Fragment, useContext } from 'react';
import { ProjectsContext } from '../../contexts/projects.context';
import  ProjectCard from '../../components/project-card/project-card';


const Projects = () => {

    const { projectsMap } = useContext(ProjectsContext);

    return (
        <PageContainer>
            <Title>Projects</Title>
            
            {Object.keys(projectsMap).map((title) => (
                <Fragment key={title}>
                    <ProjectsPreview key={title}>
                        {projectsMap[title].map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </ProjectsPreview>
                </Fragment>
            ))}
        </PageContainer>
    );
};

export default Projects;