import ProtectedRoute from './components/ProtectedRoute';
import Error from './pages/Error'
import Home from './pages/Home'
import Success from './pages/Success'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}/> 
        <Route path='/*' element={<Error/>}/> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
