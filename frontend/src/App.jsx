import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";  // Import Courses Page
import Dashboard from "./pages/Dashboard";  // Import Dashboard Page

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Courses" element={<Courses />} />  {/* New Courses Page */}
        <Route path="/Dashboard" element={<Dashboard />} />  {/* New Dashboard Page */}
      </Routes>
    </Router>
  );
}

export default App;
