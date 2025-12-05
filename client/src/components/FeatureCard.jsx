import React from "react";
import { Zap, Sparkles, Cloud, Bell, BarChart2, Moon } from "lucide-react";
const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Easy to Use",
    desc: "Add tasks in seconds",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Clean & Minimal UI",
    desc: "A distraction-free interface built for focus",
  },
  {
    icon: <Cloud className="w-6 h-6" />,
    title: "Cross-Device Sync",
    desc: "Access your tasks seamlessly from any device",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Custom Reminders",
    desc: "Stay on track with flexible, personalized alerts",
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    title: "Progress Insights",
    desc: "Visualize your productivity with smart analytics",
  },
  {
    icon: <Moon className="w-6 h-6" />,
    title: "Dark Mode Ready",
    desc: "Comfortable viewing day or night",
  },
];
const FeatureCard = ({ isVisible }) => {
  return (
    <section
      className={`py-16 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-purple-400 text-lg font-semibold mb-3">
          Rich and diverse features
        </h2>
        <p className="text-white text-4xl font-bold">Meet your unique needs</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:scale-105 hover:border-purple-500/50"
            style={{
              transitionDelay: `${idx * 100}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <div className="w-12 h-12 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <div className="text-purple-300">{feature.icon}</div>
            </div>
            <h3 className="text-white font-semibold text-lg mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCard;
