import Footer from "./Components/Section/FooterSection"
import Header from "./Components/Section/Header"
import HomePage from "./Components/Pages/HomePage";
import LoginPage from "./Components/Pages/LoginPage";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // check if current path is login
  const hideLayout = location.pathname === "/login";

  return (
    <>
      {!hideLayout && <Header />}

      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>

      {/* <Footer /> */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
