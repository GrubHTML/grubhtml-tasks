import { useLocation } from "react-router";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";
import { Toaster } from "react-hot-toast";

const App = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/signup" ||
    location.pathname === "/signin" ||
    location.pathname === "/tasks";

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        {!hideLayout && <Navbar />}
        <AppRouter />
        {!hideLayout && <Footer />}
      </div>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
