import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router";

const GrubTasksLogo = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold text-white">GrubTasks</span>
      </div>
    </Link>
  );
};

export default GrubTasksLogo;
