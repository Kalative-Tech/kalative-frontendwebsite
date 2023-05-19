import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NewsLetter from "./pages/NewsLetter";
import NewsLetters from "./pages/NewsLetters";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Signup from "./pages/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/data/:id" element={<Blog />} />
      <Route path="/newsletters" element={<NewsLetters />} />
      <Route path="/news/:id" element={<NewsLetter />} />
    </Routes>
  );
}

export default App;
