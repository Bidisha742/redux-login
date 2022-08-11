import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import {Home} from './pages/Home';
import {About} from './pages/About';
import { Login } from './pages/Login';

function App() {
  return (
    <Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Navigation>
  );
}

export default App;
