import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Management from "./pages/Management";
import Home from "./pages/Home";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gerenciamento" element={<Management />} />
      </Routes>
    </Router>
  )
}

export default App
