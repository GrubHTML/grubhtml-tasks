function UIShowcase({ isVisible }) {
  return (
    <>
      <div
        className={`max-w-5xl mx-auto px-8 pb-20 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 blur-3xl opacity-20" />
          <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="space-y-3">
              {[
                "Design new landing page",
                "Review team proposals",
                "Update documentation",
              ].map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all group cursor-pointer"
                >
                  <div className="w-5 h-5 rounded-full border-2 border-purple-400 group-hover:bg-purple-400 transition-all" />
                  <span className="text-gray-200 flex-1">{task}</span>
                  <span className="text-xs text-gray-500">Today</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UIShowcase;
