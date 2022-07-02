import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Nav from './routes/nav/nav';
import Projects from './routes/projects-page/projects';

const App = () => {

  //const dispatch = useDispatch();

  //useEffect(() => {
  //  dispatch(checkUserSession());
  //}, []);

  return (
    <Routes>
      <Route path='/' element={ <Nav /> }>
        <Route index element={ <Home /> }/>
        <Route path='projects' element={ <Projects /> }/>
      </Route>
    </Routes>
  );
};

export default App;
