import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Add more routes below as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
