import Image from "next/image";
import InputSearch from "./InputSearch";
import AuthButton from "./AuthButton";
import Link from "next/link";
import { authUserSession } from "@/libs/auth";

const Navbar = async () => {
  const user = await authUserSession();

  return (
    <header>
      <div className="nav container">
        <a href="/" className="logo">
          Anthesis<span>me</span>
        </a>
        <InputSearch />
        {!user ? (
          <Link
            href={"/api/auth/signin"}
            className="px-4 py-2 bg-orange-400 rounded font-bold"
          >
            Sign In
          </Link>
        ) : (
          <AuthButton image={user.image} />
        )}
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
