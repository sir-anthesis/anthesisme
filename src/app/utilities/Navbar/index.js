import Image from "next/image";

const Navbar = () => {
  return (
    <header>
      <div className="nav container">
        <a href="index.html" className="logo">
          Anthesis<span>me</span>
        </a>
        <div className="search-box">
          <input
            type="search"
            name=""
            id="search-input"
            placeholder="Search movie"
          />
          <i className="bx bx-search"></i>
        </div>
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
