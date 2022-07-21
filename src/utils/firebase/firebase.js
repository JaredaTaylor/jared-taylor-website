import { initializeApp } from 'firebase/app';
import { getFirestore, collection, query, getDocs, writeBatch, doc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKMnVMvJKoqiLNnUNMm3ZDuhFZz6FJIO4",
  authDomain: "jared-taylor-website-db.firebaseapp.com",
  projectId: "jared-taylor-website-db",
  storageBucket: "jared-taylor-website-db.appspot.com",
  messagingSenderId: "1063384035673",
  appId: "1:1063384035673:web:56fd27fad3d0e43dc31c48"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, object) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  //objectsToAdd.forEach((object) => {
  //  const docRef = doc(collectionRef, object.title.toLowerCase());
  //  batch.set(docRef, object);
  //});
  const docRef = doc(collectionRef, object.title.toLowerCase());
  batch.set(docRef, object);

  await batch.commit();
  console.log('done');
}

export const getProjectsAndDocuments = async () => {
  const collectionRef = collection(db, 'projects');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const projectMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  

  return projectMap;
};

export const getAboutAndDocuments = async () => {
  const collectionRef = collection(db, 'about');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const aboutMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  

  return aboutMap;
};