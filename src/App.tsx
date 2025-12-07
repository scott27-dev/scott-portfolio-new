import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyles';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { WorkHistory } from './pages/WorkHistory';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<WorkHistory />} />
      </Routes>
    </Router>
  );
};

export default App;