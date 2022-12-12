import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Block from './components/Block';
import Navbar from './components/Navbar';
import { ThemeContext } from './context';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode === true ? 'dark' : 'light'
  return (
    <div className='app' data-theme={darkMode}>
      <BrowserRouter>
        <Navbar />
        <Block />
      </BrowserRouter>
    </div>
  );
}

export default App;
