import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
