import {
  TrendingUp,
  Target,
  Trophy,
  BookOpen,
  ArrowUp,
  Sparkles,
  Award,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Star,
  Activity,
  Brain,
  TrendingDown,
} from "lucide-react";

export default function ParentAnalytics() {
  const goals = [
    { title: "Complete all assignments on time", progress: 90, status: "Excellent" },
    { title: "Maintain GPA above 8.5", progress: 85, status: "Good" },
    { title: "Achieve 95% attendance", progress: 92, status: "Excellent" },
    { title: "Improve Science subject score", progress: 70, status: "Needs Improvement" },
  ];

  const moduleProgress = [
    { subject: "Mathematics", completed: 88, icon: "📐", trend: "up" },
    { subject: "Science", completed: 76, icon: "🔬", trend: "down" },
    { subject: "English", completed: 91, icon: "📚", trend: "up" },
    { subject: "History", completed: 80, icon: "🏛️", trend: "up" },
    { subject: "Computer", completed: 95, icon: "💻", trend: "up" },
  ];

  const analytics = {
    avgGPA: 8.6,
    gpaGrowth: 4.2,
    totalModules: 45,
    completedModules: 39,
  };

  const getProgressColor = (progress) => {
    if (progress >= 90) return "from-green-500 to-emerald-600";
    if (progress >= 80) return "from-blue-500 to-indigo-600";
    return "from-yellow-500 to-orange-600";
  };

  const getStatusBadge = (status) => {
    if (status === "Excellent") {
      return (
        <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
          <Star className="w-3 h-3" />
          Excellent
        </span>
      );
    } else if (status === "Good") {
      return (
        <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
          <CheckCircle className="w-3 h-3" />
          Good
        </span>
      );
    }
    return (
      <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
        <AlertCircle className="w-3 h-3" />
        Needs Improvement
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-2xl shadow-lg">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                Goal Monitoring & Progress Analytics
              </h1>
              <p className="text-gray-600 mt-1">Track your child's academic journey and achievements</p>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <TrendingUp className="w-6 h-6" />
              </div>
              <Activity className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{analytics.avgGPA}</h3>
            <p className="text-blue-100">Average GPA</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Trophy className="w-6 h-6" />
              </div>
              <ArrowUp className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1 flex items-center gap-2">
              <ArrowUp className="w-7 h-7" />
              {analytics.gpaGrowth}%
            </h3>
            <p className="text-green-100">GPA Growth</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <Sparkles className="w-6 h-6 text-yellow-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{analytics.totalModules}</h3>
            <p className="text-yellow-100">Total Modules</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Target className="w-6 h-6" />
              </div>
              <Award className="w-6 h-6 text-purple-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{analytics.completedModules}</h3>
            <p className="text-purple-100">Completed Modules</p>
          </div>
        </div>

        {/* Learning Goals Progress */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-xl">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Learning Goals Progress
            </h2>
          </div>

          <div className="space-y-6">
            {goals.map((goal, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{goal.title}</h3>
                    {getStatusBadge(goal.status)}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                      {goal.progress}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full bg-gradient-to-r ${getProgressColor(goal.progress)} transition-all duration-500`}
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subject Completion Progress */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Subject Completion Progress
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {moduleProgress.map((m, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{m.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{m.subject}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        {m.trend === "up" ? (
                          <span className="text-green-600 flex items-center gap-1 font-semibold">
                            <TrendingUp className="w-3 h-3" />
                            Improving
                          </span>
                        ) : (
                          <span className="text-orange-600 flex items-center gap-1 font-semibold">
                            <TrendingDown className="w-3 h-3" />
                            Needs Focus
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    {m.completed}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${getProgressColor(m.completed)} transition-all duration-500`}
                    style={{ width: `${m.completed}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GPA Trend */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              GPA Trend Over Time
            </h2>
          </div>

          <div className="w-full h-64 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-2xl flex flex-col items-center justify-center border-2 border-green-200">
            <BarChart3 className="w-16 h-16 text-green-600 mb-4" />
            <p className="text-xl font-bold text-green-700">📈 Chart Visualization</p>
            <p className="text-sm text-gray-600 mt-2">Integrate Chart.js or Recharts for detailed trends</p>
          </div>
        </div>

        {/* Analytics Insights */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Key Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-green-800">Module Completion</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Your child has completed{" "}
                <span className="font-bold text-green-600">
                  {analytics.completedModules}/{analytics.totalModules}
                </span>{" "}
                modules this term. Excellent progress!
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800">GPA Improvement</h3>
              </div>
              <p className="text-gray-700 text-sm">
                GPA improved by{" "}
                <span className="font-bold text-blue-600">
                  {analytics.gpaGrowth}%
                </span>{" "}
                compared to the previous term. Great work!
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-6 border-2 border-purple-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-purple-800">Goal Progress</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Learning goals are{" "}
                <span className="font-bold text-purple-600">on track</span>{" "}
                with an average completion of 84%. Keep it up!
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-yellow-800">Area of Focus</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Science needs more attention with only{" "}
                <span className="font-bold text-yellow-600">76%</span>{" "}
                module completion. Consider extra practice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}