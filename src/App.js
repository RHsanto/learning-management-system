import Home from "./components/Home/Home";
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import PopularCourses from "./components/Home/PopularCourses/PopularCourses";
import Instructor from "./components/Home/Instructor/Instructor";
import Reviews from "./components/Home/Reviews/Reviews";
import Online from "./components/Home/OnlineLearn/Online";
import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";
import LatestNews from "./components/Home/LatestBlog/LatestNews";
function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route  path="/instructor" element={<Instructor/>} />
          <Route  path="/reviews" element={<Reviews/>} />
          <Route  path="/popular-course" element={<PopularCourses/>} />
          <Route  path="/online-course" element={<Online/>} />
          <Route  path="/news-blogs" element={<LatestNews/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
