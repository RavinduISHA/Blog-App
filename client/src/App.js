import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Route ,Routes } from 'react-router-dom';
import Layout from './components/Layout';
import IndexPage from './pages/IndexPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Route>
      </Routes>
  );
}

export default App;
