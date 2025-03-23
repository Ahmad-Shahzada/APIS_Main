import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RandomUser from "./components/RandomUser";
import UserDetail from "./components/UserDetail";
import Random from "./components/Random";

function App() {
  return (
    <Router>
      <Random/>
      <Routes>
        <Route path="/" element={<RandomUser />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
