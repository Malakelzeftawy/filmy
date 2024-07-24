import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={`navbar ${styles.navbar} text-white py-4 shadow-2xl ms-5 me-5 `}>
        <div className="container">
          <div className="flex justify-between items-center ">
            <div className="flex justify-between w-full  md:gap-16 md:w-fit items-center">
              <Link to="/" className="bg-yellow-400 px-2 py-1 rounded-sm">
                <h1 className="text-4xl font-bold cursor-pointer text-black">
                  Filmy
                </h1>
              </Link>
              <div className="flex items-center gap-7 text-xl font-semibold">


                <div className="flex items-center gap-1 menu ">
                   <i className="fa-solid fa-square-caret-down"></i>
                    <span className="cursor-pointer">
                      <Link to="/allmovies">All movies</Link>
                    </span>
                    {/* <div className=" w-28 list text-lg">
                      <Link to="/allmovies">All Movies</Link>
                    </div> */}
                </div>




                <div className="md:hidden">
                <i className="fa-solid fa-bars text-2xl"></i>
                </div>
              </div>
            </div>

            <div className="w-12 h-12 text-center hidden md:block">
              <span className="text-3xl font-semibold">...</span>
            </div>

            <div className="hidden md:flex gap-14 items-center ">
              <div className="flex items-center gap-1 text-lg font-semibold">
                <i className="fa-regular fa-bookmark"></i>
                <span>
                  <Link to="/watchlist">Watchlist</Link>
                </span>
              </div>

              <ul className="flex items-center gap-2 font-semibold text-lg">
                {/* <li>
                  <NavLink to="/login">Sign in</NavLink>
                </li> */}
                {/* <li>
                        <a href="">Logout</a>
                    </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
