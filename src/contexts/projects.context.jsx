import { createContext, useState, useEffect } from 'react';

import { getProjectsAndDocuments } from '../utils/firebase/firebase';


export const ProjectsContext = createContext({
  projectsMap: {},
});

export const ProjectsProvider = ({ children }) => {
  const [projectsMap, setProjectsMap] = useState({});

  //useEffect(() => {
  //  addCollectionAndDocuments('projects', PROJECTS_DATA)   
  //}, []);

  useEffect(() => {
    const getProjectsMap = async () => {
      const projectMap = await getProjectsAndDocuments();
      setProjectsMap(projectMap);
    };

    getProjectsMap();
  }, []);

  const value = { projectsMap };
  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};