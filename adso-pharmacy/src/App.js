import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="login" element={<Login />}></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
