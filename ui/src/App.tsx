import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import "antd/dist/antd.css";
import Header from './components/Layout/Header';
import Employee from './pages/Employee';
import Login from './pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='login' />} />
          <Route path='/login' element={<Login />} />
          <Route element={<Header />} >
            <Route path='/employee' element={<Employee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
