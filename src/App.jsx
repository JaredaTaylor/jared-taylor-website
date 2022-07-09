import { Routes, Route } from 'react-router-dom';
import { Page, HeaderAndContent } from './App.styles';
import Home from './routes/home/home';
import Nav from './routes/nav/nav';
import Projects from './routes/projects-page/projects';
import Playground from './routes/playground/playground';
import Footer from './components/footer/footer';

const App = () => {

  //const dispatch = useDispatch();

  //useEffect(() => {
  //  dispatch(checkUserSession());
  //}, []);

  return (
    <Page>
      <HeaderAndContent>
        <Routes>
          <Route path='/' element={ <Nav /> }>
            <Route index element={ <Home /> }/>
            <Route path='projects' element={ <Projects /> }/>
            <Route path='playground' element={ <Playground /> }/>
          </Route>
        </Routes>
      </HeaderAndContent>
      <Footer />
    </Page>
  );
};

export default App;
