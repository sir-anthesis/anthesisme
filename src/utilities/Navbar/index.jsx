import Image from "next/image";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header>
      <div className="nav container">
        <a href="/" className="logo">
          Anthesis<span>me</span>
        </a>
        <InputSearch />
        <a href="#" className="user">
          <Image
            src="/user.jpg"
            alt=""
            className="user-img"
            width={100}
            height={100}
          />
        </a>
        <div className="navbar">
          <a href="#home" className="nav-link nav-active">
            <i className="bx bx-home"></i>
            <span className="nav-link-title">Home</span>
          </a>
          <a href="#popular" className="nav-link">
            <i className="bx bxs-hot"></i>
            <span className="nav-link-title">Trending</span>
          </a>
          <a href="#movies" className="nav-link">
            <i className="bx bx-compass"></i>
            <span className="nav-link-title">Explore</span>
          </a>
          <a href="play-page.html" className="nav-link">
            <i className="bx bx-tv"></i>
            <span className="nav-link-title">Movies</span>
          </a>
          <a href="#home" className="nav-link">
            <i className="bx bx-heart"></i>
            <span className="nav-link-title">Favourite</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
