import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MediaKit from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/media-kit" element={<MediaKit />} />
      </Routes>
    </Router>
  );
}

export default App;
