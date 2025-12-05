const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    feedback:
      "I think it's the best task management app in recent years. Even the free version is great! The interface is beautiful and intuitive.",
  },
  {
    name: "Alex Thompson",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    feedback:
      "You can manage your to-do list, habits, schedules, and even use the Pomo Timer. An all-in-one productivity app that has all the features you need!",
  },
  {
    name: "Maria Rodriguez",
    role: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    feedback:
      "So it seems to me that this is the perfect planner! From the bottom of my heart I recommend everyone who wants to tune in their tasks and your life!",
  },
  {
    name: "James Miller",
    role: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    feedback:
      "TaskFlow has completely transformed how I organize my day. The clean interface and powerful features make productivity effortless. Highly recommended!",
  },
  {
    name: "Emma Watson",
    role: "UX Researcher",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    feedback:
      "A task management app that helps users to stay organized. Perfect for educators and students. The interface is clean and easy to navigate.",
  },
  {
    name: "David Park",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    feedback:
      "This version is for any device. Managing tasks across all my devices has never been easier. The sync is flawless and the design is stunning!",
  },
];

const Testimonials = ({ isVisible }) => {
  return (
    <section className="py-16">
      <div
        className={`max-w-7xl mx-auto px-8 pb-32 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-purple-400 text-lg font-semibold mb-3">
            Highly rated by users
          </h2>
          <p className="text-white text-4xl font-bold">
            Ongoing updates to stay preferred
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:bg-white/10 transition-all hover:scale-105"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-semibold">{t.name}</h3>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                {t.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
