import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
      <BackToTop />
    </Router>
  );
}

export default App;
