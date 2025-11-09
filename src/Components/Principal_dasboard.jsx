import {
  Home,
  Users,
  GraduationCap,
  TrendingUp,
  Bell,
  Download,
  ChevronRight,
  Sparkles,
  BookOpen,
  BarChart3,
  Activity,
  Target,
  Clock,
  FileText,
  UserCheck,
} from "lucide-react";

export default function PrincipalDashboard() {
  const summary = {
    totalTeachers: 28,
    totalStudents: 1120,
    activeCourses: 64,
    lastRefresh: "Nov 03, 2025 10:20 IST",
  };

  const recentAnnouncements = [
    { id: 1, title: "Exam Dates Announced", audience: "All Students", time: "2025-11-02 09:00", type: "important" },
    { id: 2, title: "Staff Meeting", audience: "All Teachers", time: "2025-11-01 16:00", type: "info" },
  ];

  const teacherHeatmap = Array.from({ length: 6 }).map((_, r) =>
    Array.from({ length: 6 }).map(() => Math.floor(Math.random() * 100))
  );

  const quickAccessLinks = [
    { title: "Reports Home", desc: "Open reporting suite", icon: FileText, color: "from-blue-500 to-indigo-600" },
    { title: "Teacher Reports", desc: "Teacher performance", icon: GraduationCap, color: "from-green-500 to-emerald-600" },
    { title: "Student Analytics", desc: "Student progress", icon: BarChart3, color: "from-purple-500 to-fuchsia-600" },
    { title: "Attendance & Engagement", desc: "Engagement trends", icon: UserCheck, color: "from-orange-500 to-red-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-slate-700 to-indigo-700 rounded-2xl shadow-lg">
                <Home className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-700 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
                  Principal Dashboard
                </h1>
                <p className="text-gray-600 mt-1">Comprehensive institutional overview and analytics</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => alert("Exporting dashboard data...")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Export
              </button>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-xl border border-gray-200">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-sm text-gray-600">Last refresh: {summary.lastRefresh}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <Activity className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{summary.totalTeachers}</h3>
            <p className="text-blue-100">Total Teachers</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{summary.totalStudents}</h3>
            <p className="text-green-100">Total Students</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <Target className="w-6 h-6 text-yellow-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{summary.activeCourses}</h3>
            <p className="text-yellow-100">Active Courses</p>
          </div>
        </div>

        {/* Heatmap and Notifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Teacher Performance Heatmap */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-xl">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Teacher Performance Heatmap
              </h2>
            </div>

            <div className="grid grid-cols-6 gap-2 mb-4">
              {teacherHeatmap.flat().map((val, idx) => (
                <div
                  key={idx}
                  title={`Performance Score: ${val}`}
                  className={`aspect-square rounded-lg flex items-center justify-center text-xs font-bold cursor-pointer transform hover:scale-110 transition-all duration-200 shadow ${
                    val > 75 
                      ? "bg-gradient-to-br from-red-500 to-pink-600 text-white" 
                      : val > 50 
                      ? "bg-gradient-to-br from-yellow-400 to-orange-500 text-white" 
                      : "bg-gradient-to-br from-green-400 to-emerald-500 text-white"
                  }`}
                  onClick={() => alert(`Drilling down to performance score: ${val}`)}
                >
                  {val}
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-xs text-gray-600 bg-gray-50 p-3 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded"></div>
                <span>0-50: Good</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded"></div>
                <span>51-75: Average</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-red-500 to-pink-600 rounded"></div>
                <span>76-100: Excellent</span>
              </div>
            </div>
          </div>

          {/* Notification Log */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Notifications
              </h2>
            </div>

            <div className="space-y-3 mb-4">
              {recentAnnouncements.map((a) => (
                <div
                  key={a.id}
                  className={`p-4 rounded-2xl border-2 hover:shadow-lg transition-all duration-300 ${
                    a.type === "important"
                      ? "bg-gradient-to-br from-red-50 to-pink-50 border-red-200"
                      : "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-lg ${
                      a.type === "important"
                        ? "bg-gradient-to-r from-red-500 to-pink-600"
                        : "bg-gradient-to-r from-blue-500 to-indigo-600"
                    }`}>
                      <Bell className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-800 mb-1">{a.title}</div>
                      <div className="text-xs text-gray-600 mb-1">{a.audience}</div>
                      <div className="flex items-center gap-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        {a.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => alert("Opening announcements list...")} 
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center justify-center gap-2"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Access */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Quick Access
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAccessLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <button
                  key={i}
                  onClick={() => alert(`Opening ${link.title}...`)}
                  className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-left"
                >
                  <div className={`p-3 bg-gradient-to-br ${link.color} rounded-xl mb-4 w-fit`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-lg text-gray-800 mb-2">{link.title}</div>
                  <div className="text-sm text-gray-600 mb-3">{link.desc}</div>
                  <div className="flex items-center gap-1 text-sm text-blue-600 font-semibold">
                    <span>Open</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}