import React from 'react';
import GlobalStyle from "../styles/global"
import LoginForm from '../components/LoginForm';
import TopNavbar from '../components/TopNavbar';

const LoginApp:React.FC = ()=> (
  <>
  <GlobalStyle/>
  <TopNavbar/>
  <LoginForm/>
  </>
)

export default LoginApp;