import { lazy } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
const Error = lazy(() => import('./pages/Error'));
const Home =  lazy(() => import('./pages/Home'));
const Success = lazy(() => import('./pages/Success'));
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}/> 
        <Route path='/*' element={<Error/>}/> 
      </Routes>
    </Router>
    </>
  )
}

export default App;
