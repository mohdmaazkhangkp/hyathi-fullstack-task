import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AllPage from "./pages/AllPage";
import AdoptedPage from "./pages/AdoptedPage";


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/all" element={<AllPage />} />
        <Route path="/adopted" element={<AdoptedPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
