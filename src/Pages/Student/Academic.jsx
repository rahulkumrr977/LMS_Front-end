import { Award, BarChart3, BookOpen, Trophy, Target, Clock, ChevronRight } from "lucide-react";

export default function Academic() {
  const courses = [
    { id: 1, name: "Mathematics", progress: 60, chapters: 10, completed: 6, color: "from-blue-500 to-purple-600", accent: "bg-blue-100 text-blue-700" },
    { id: 2, name: "Science", progress: 80, chapters: 12, completed: 10, color: "from-green-500 to-emerald-600", accent: "bg-green-100 text-green-700" },
    { id: 3, name: "English", progress: 40, chapters: 8, completed: 3, color: "from-orange-500 to-red-600", accent: "bg-orange-100 text-orange-700" },
  ];

  const badges = [
    { id: 1, title: "Top 10% Learner", date: "Aug 10, 2025", icon: "🏆", color: "from-yellow-400 to-orange-500" },
    { id: 2, title: "Consistency Streak – 7 Days", date: "Aug 20, 2025", icon: "🔥", color: "from-red-400 to-pink-500" },
    { id: 3, title: "Fastest Quiz Finisher", date: "Sep 01, 2025", icon: "⚡", color: "from-blue-400 to-indigo-500" },
  ];

  const getProgressColor = (percent) => {
    if (percent >= 70) return "from-green-400 to-green-600";
    if (percent >= 30) return "from-yellow-400 to-orange-500";
    return "from-red-400 to-red-600";
  };

  const totalChapters = courses.reduce((acc, c) => acc + c.chapters, 0);
  const completedChapters = courses.reduce((acc, c) => acc + c.completed, 0);
  const overallProgress = Math.round((completedChapters / totalChapters) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Academic Progress Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Track your learning journey and celebrate achievements</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{courses.length}</h3>
            <p className="text-gray-600">Active Courses</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{overallProgress}%</h3>
            <p className="text-gray-600">Overall Progress</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{badges.length}</h3>
            <p className="text-gray-600">Badges Earned</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">17</h3>
            <p className="text-gray-600">Days Left</p>
          </div>
        </div>

        {/* Course Progress */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            Course Progress
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group"
              >
                {/* Course Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">{course.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${course.accent}`}>
                    {course.progress}%
                  </div>
                </div>

                {/* Progress Stats */}
                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-2">
                    <span className="font-semibold text-gray-800">{course.completed}</span> of{' '}
                    <span className="font-semibold text-gray-800">{course.chapters}</span> chapters completed
                  </p>
                  
                  {/* Enhanced Progress Bar */}
                  <div className="relative w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${getProgressColor(course.progress)} shadow-lg transition-all duration-1000 ease-out`}
                      style={{ width: `${course.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <button className={`w-full bg-gradient-to-r ${course.color} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}>
                  Resume Next Chapter
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Badges Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            Achievement Badges
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${badge.color} rounded-full flex items-center justify-center mx-auto mb-6 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {badge.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{badge.title}</h3>
                <p className="text-gray-600 text-sm mb-4">Earned on {badge.date}</p>
                <button className="text-indigo-600 hover:text-indigo-800 font-semibold hover:underline transition-colors">
                  View Details →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Summary */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-4">Overall Learning Summary</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div>
              <p className="text-4xl font-bold mb-2">
                {completedChapters}/{totalChapters}
              </p>
              <p className="text-indigo-100">Chapters Completed</p>
            </div>
            <div className="w-32 h-32 relative">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray={`${overallProgress}, 100`}
                  className="animate-pulse"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">{overallProgress}%</span>
              </div>
            </div>
            <div>
              <p className="text-indigo-100 mb-2">Completion Goal</p>
              <p className="text-xl font-semibold">90% by Sep 30, 2025</p>
              <div className="mt-2 px-4 py-2 bg-white/20 rounded-full text-sm">
                17 days remaining
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}