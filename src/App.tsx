import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import FuneralCoverPage from './pages/FuneralCoverPage';
import BackToTop from './components/BackToTop';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/funeral-cover" element={<FuneralCoverPage />} />
      </Routes>
      <BackToTop />
    </Router>
  );
}

export default App;
