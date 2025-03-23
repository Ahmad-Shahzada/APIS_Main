import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import RandomUser from "./components/RandomUser";
import UserDetail from "./components/UserDetail";
import Random from "./components/Random";

const AppContent = () => {
  const location = useLocation();
  const isUserDetailPage = location.pathname.startsWith("/user/");

  return (
    <>
      {!isUserDetailPage && <Random />}
      <Routes>
        <Route path="/" element={<RandomUser />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
