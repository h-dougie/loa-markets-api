import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import CharacterInfo from "./routes/CharacterInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/char/:name" element={<CharacterInfo />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
