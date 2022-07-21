import { createContext, useState, useEffect } from 'react';

import { getAboutAndDocuments } from '../utils/firebase/firebase';


export const AboutContext = createContext({
  aboutMap: {},
});

export const AboutProvider = ({ children }) => {
    const [aboutMap, setAboutMap] = useState(null);

    useEffect(() => {
        const getAboutMap = async () => {
        const projectMap = await getAboutAndDocuments();
        setAboutMap(projectMap);
        };

        getAboutMap();
    }, []);

  const value = { aboutMap };
  return (
    <AboutContext.Provider value={value}>
      {children}
    </AboutContext.Provider>
  );
};