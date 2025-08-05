import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import MembershipPage from "./pages/MembershipPage";
import PersonalTrainerPage from "./pages/PersonalTrainerPage";
import BlogPage from "./pages/BlogPage";
import GalleryPage from "./pages/GalleryPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/about-us"
          element={<AboutUsPage />}
        />
        <Route
          path="/membership"
          element={<MembershipPage />}
        />
        <Route
          path="/personal-trainer"
          element={<PersonalTrainerPage />}
        />
        <Route
          path="/blog"
          element={<BlogPage />}
        />
        <Route
          path="/gallery"
          element={<GalleryPage />}
        />
      </Routes>
    </>
  );
}

export default App;
