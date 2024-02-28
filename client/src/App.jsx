import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-[#171212] text-white  relative  w-full ">
        <header className="w-full flex justify-between items-center bg-transparent px-[20em] py-4 fixed">
          <Link to="/">
            <h1 className="text-[24px] font-medium">MovieLand</h1>
          </Link>

          <div className="flex items-center gap-10">
            <Link to="/movies">Movies</Link>
            <Link to="#">Showtimes</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/AboutUs">About Us</Link>
          </div>
        </header>

        <main className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<Movie />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
