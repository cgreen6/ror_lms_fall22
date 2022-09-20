import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import Nomatch from '/components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';

const App = () => (
  <>
    <Routes>
      <Route path='/' element={ <Home /> } />
    </Routes>
  </>
)

export default App;