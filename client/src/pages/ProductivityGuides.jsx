import { useState } from "react";
import { Clock, User, ArrowRight, Search, Calendar } from "lucide-react";
import AnimatedBackground from "../components/AnimatedBackground";

const ProductivityGuides = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Time Management",
    "Focus",
    "Habits",
    "Tools",
    "Mindset",
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Pomodoro Technique: Boost Your Focus in 25-Minute Sprints",
      excerpt:
        "Learn how breaking your work into focused intervals can dramatically improve your productivity and prevent burnout.",
      author: "Sarah Chen",
      date: "Nov 1, 2024",
      readTime: "5 min read",
      category: "Time Management",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Morning Routines of Highly Productive People",
      excerpt:
        "Discover the morning habits that successful people swear by to start their day with energy and purpose.",
      author: "Alex Thompson",
      date: "Oct 28, 2024",
      readTime: "7 min read",
      category: "Habits",
      image:
        "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Deep Work: How to Focus in a Distracted World",
      excerpt:
        "Master the art of deep concentration and accomplish more meaningful work in less time.",
      author: "Maria Rodriguez",
      date: "Oct 25, 2024",
      readTime: "8 min read",
      category: "Focus",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Building Better To-Do Lists: A Scientific Approach",
      excerpt:
        "Stop writing endless lists that never get done. Learn the psychology-backed methods for effective task management.",
      author: "James Miller",
      date: "Oct 22, 2024",
      readTime: "6 min read",
      category: "Tools",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=400&fit=crop",
    },
    {
      id: 5,
      title: "The Two-Minute Rule: Overcome Procrastination Instantly",
      excerpt:
        "If it takes less than two minutes, do it now. Discover how this simple rule can transform your productivity.",
      author: "Emma Watson",
      date: "Oct 19, 2024",
      readTime: "4 min read",
      category: "Mindset",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Time Blocking: Schedule Your Way to Success",
      excerpt:
        "Learn how to organize your calendar for maximum productivity and work-life balance.",
      author: "David Park",
      date: "Oct 15, 2024",
      readTime: "6 min read",
      category: "Time Management",
      image:
        "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&h=400&fit=crop",
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-6">
            Productivity{" "}
            <span className="bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Guides
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Expert tips, proven strategies, and actionable advice to help you
            work smarter, not harder.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-4 pl-12 pr-4 text-white placeholder:text-gray-400 outline-none focus:border-purple-500 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, idx) => (
            <article
              key={post.id}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
              style={{
                animationDelay: `${idx * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm text-white text-xs rounded-full font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-purple-300 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-gray-400 text-xs">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="mt-4">
                  <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold group">
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">
              No articles found. Try a different search or category.
            </p>
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="max-w-4xl mx-auto px-8 py-20">
        <div className="bg-linear-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8">
            Get the latest productivity tips and guides delivered to your inbox
            every week.
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full py-3 px-6 text-white placeholder:text-gray-400 outline-none focus:border-purple-500 transition-colors"
            />
            <button className="px-8 py-3 bg-linear-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProductivityGuides;
