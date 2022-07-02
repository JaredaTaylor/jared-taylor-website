import { CategoryTitle, ProjectsPreview } from './projects.styles';
import { Fragment, useState, useEffect, useContext } from 'react';
import { ProjectsContext } from '../../contexts/projects.context';
import  ProjectCard from '../../components/project-card/project-card';

const Projects = () => {

    const { projectsMap } = useContext(ProjectsContext);

    return (
        <div>
            <h2>Projects</h2>
            
            {Object.keys(projectsMap).map((title) => (
                <Fragment key={title}>
                    <CategoryTitle>{title}</CategoryTitle>
                    <ProjectsPreview key={title}>
                        {projectsMap[title].map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </ProjectsPreview>
                </Fragment>
            ))}
        </div>
    );
};

export default Projects;