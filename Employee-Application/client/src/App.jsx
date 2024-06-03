import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Add from "./components/Add";
import Index from "./components/Index";
import Edit from "./components/Edit";
import "./App.css";
import Delete from "./components/Delete";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="nav">
          <Link to="/">Employee List</Link>
          <Link to="/add">Add New Employee</Link>
        </nav>
        <h1 className="heading">Employee Management</h1>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
