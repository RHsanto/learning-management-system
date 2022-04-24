import Home from "./components/Home/Home";
import './App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import PopularCourses from "./components/Home/PopularCourses/PopularCourses";
import Online from "./components/Home/OnlineLearn/Online";
import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";
import LatestNews from "./components/Home/LatestBlog/LatestNews";
import ExpertInstructor from "./components/Home/Instructor/ExpertInstructor";
import AllReviews from "./components/Home/Reviews/AllReviews";
import SingleCourse from "./components/SingleItems/SingleCourse";
import About from "./components/Home/About/About";
import SuitableCourse from "./components/Home/SuitableCourse/SuitableCourse";
import Categories from "./components/Home/Categories/Categories";
import Counter from "./components/Home/Counter/Counter";
import Supporters from "./components/Home/Supporters/Supporters";
import NotFound from "./components/NotFound/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
          <Navbar/>
        <Routes>
          <Route index element={<Home />} />
          <Route  path="/instructor" element={<ExpertInstructor/>} />
          <Route  path="/reviews" element={<AllReviews/>} />
          <Route  path="/about" element={<About/>} />
          <Route  path="/suti-course" element={<SuitableCourse/>} />
          <Route  path="/top-category" element={<Categories/>} />
          <Route  path="/counter" element={<Counter/>} />
          <Route  path="/supporters" element={<Supporters/>} />
          <Route  path="/popular-course" element={<PopularCourses/>} />
          <Route  path="/popular-courses/:id" element={<SingleCourse/>} />
          <Route  path="/online-course" element={<Online/>} />
          <Route  path="/news-blogs" element={<LatestNews/>} />
          <Route  path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
