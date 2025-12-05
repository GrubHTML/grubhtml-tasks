import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
const GetButton = () => {
  return (
    <Link to="/signup">
      <button className="group px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer">
        Get Started Free
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </Link>
  );
};

export default GetButton;
