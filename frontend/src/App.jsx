import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SingleProjectPage from "./pages/projects/SingleProjectPage";
import "transition-style";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<SingleProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;
