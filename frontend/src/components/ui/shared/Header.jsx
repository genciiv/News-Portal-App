import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { Button } from "../button";

const Header = () => {
  return (
    <header className="shadow-lg sticky">
      <div className="flex justify-between items-center max-w-6xl lg:max-w-7xl mx-auto p-4">
        <Link to={"/"}>
          <h1 className="font-bold text-xl sm:text-2xl flex flex-wrap">
            <span className="text-red-600">GV-</span>
            <span className="text-slate-900">Portal</span>
          </h1>
        </Link>
        <form className="p-3 bg-slate-100 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Kerko..."
            className="focus:outline-none bg-transparent w-24 sm:w-64"
          />

          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              Kryefaqe
            </li>
          </Link>

          <Link to={"/about"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              Rreth nesh
            </li>
          </Link>

          <Link to={"/news"}>
            <li className="hidden lg:inline text-slate-700 hover:underline">
              Lajme te fundit
            </li>
          </Link>
        </ul>

        <Link to={"/sign-in"}>
          <Button>Logohu</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
