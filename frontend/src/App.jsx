import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import IndisciplinatoPage from "./pages/projects/IndisciplinatoPage";
import LocalisPage from "./pages/projects/LocalisPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<IndisciplinatoPage />} />
        <Route path="/projects/:id" element={<LocalisPage />} />
      </Routes>
    </Router>
  );
}

export default App;
