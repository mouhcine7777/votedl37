import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectCities from './pages/SelectCities';
import VotingScreen from './pages/VotingScreen';
import ScorePage from './pages/ScorePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectCities />} />
        <Route path="/vote" element={<VotingScreen />} />
        <Route path="/score" element={<ScorePage />} />
      </Routes>
    </BrowserRouter>
  );
}