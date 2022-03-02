import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginApp from './layouts/Login';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <BrowserRouter>    
    <Routes>
      <Route path="/login" element={ <LoginApp/> }/>     
    </Routes>    
  </BrowserRouter>,
  document.getElementById('root')
);
