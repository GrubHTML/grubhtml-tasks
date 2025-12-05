import { Link } from "react-router";
import GrubTasksLogo from "./GrubTasksLogo";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto ">
      <GrubTasksLogo />
      <div className="flex items-center gap-6">
        <a
          href="#features"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Features
        </a>
        <Link
          to="/productivity-guides"
          className="text-gray-300 hover:text-white transition-colors"
        >
          Productivity Guides
        </Link>
        <Link to="/signup">
          <button className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all border border-white/20 cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
