import { Link } from "react-router";
import GrubTasksLogo from "../components/GrubTasksLogo";
import GoogleIcon from "../components/GoogleIcon";

const SignUp = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto ">
        <GrubTasksLogo />
        <div className="flex items-center gap-6">
          <p
            to="/productivity-guides"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Already have an account?
          </p>
          <Link to="/signin">
            <button className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all border border-white/20 cursor-pointer">
              Sign In
            </button>
          </Link>
        </div>
      </nav>
      {/* SignUp form */}
      <div className="flex items-center justify-center min-h-[calc(100vh-120px)] px-8">
        <div className="w-full max-w-md">
          <form
            action=""
            className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 px-8 py-12 shadow-2xl"
          >
            <h2 className="text-3xl text-center font-bold text-white mb-8">
              Create an Account
            </h2>
            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Username"
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="password"
                placeholder="Password: 6-64 characters"
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-4 py-2 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105">
                Sign Up
              </button>
              {/* Divider */}
              <div className="flex items-center gap-4 my-2">
                <div className="flex-1 h-px bg-white/20"></div>
                <span className="text-gray-400 text-sm">or</span>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>

              {/* Google Button */}
              <button
                type="button"
                className="flex items-center justify-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 transition-all hover:scale-105 font-medium"
              >
                <GoogleIcon />
                Continue with Google
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
