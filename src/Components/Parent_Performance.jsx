import {
  BookOpen,
  Star,
  BarChart3,
  MessageCircle,
  TrendingUp,
  TrendingDown,
  Award,
  Target,
  Sparkles,
  Activity,
  Brain,
  CheckCircle,
  AlertCircle,
  Minus,
} from "lucide-react";

export default function ParentPerformance() {
  const performanceData = [
    { subject: "Mathematics", grade: "A", avg: 88, change: 2, icon: "📐" },
    { subject: "Science", grade: "B+", avg: 81, change: -3, icon: "🔬" },
    { subject: "English", grade: "A-", avg: 85, change: 1, icon: "📚" },
    { subject: "History", grade: "B", avg: 78, change: 0, icon: "🏛️" },
    { subject: "Computer", grade: "A+", avg: 92, change: 4, icon: "💻" },
  ];

  const remarks = [
    {
      subject: "Mathematics",
      comment: "Rahul shows excellent problem-solving ability.",
      teacher: "Mr. Sharma",
    },
    {
      subject: "Science",
      comment: "Needs to focus on lab report writing.",
      teacher: "Mrs. Gupta",
    },
  ];

  const getGradeColor = (grade) => {
    if (grade.startsWith("A")) return { bg: "from-green-100 to-emerald-100", text: "text-green-700", border: "border-green-300" };
    if (grade.startsWith("B")) return { bg: "from-blue-100 to-cyan-100", text: "text-blue-700", border: "border-blue-300" };
    return { bg: "from-yellow-100 to-orange-100", text: "text-yellow-700", border: "border-yellow-300" };
  };

  const getProgressColor = (avg) => {
    if (avg >= 85) return "from-green-500 to-emerald-600";
    if (avg >= 75) return "from-blue-500 to-indigo-600";
    return "from-yellow-500 to-orange-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Student Performance Report
              </h1>
              <p className="text-gray-600 mt-1">Detailed academic performance and progress tracking</p>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Star className="w-6 h-6" />
              </div>
              <Activity className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">8.6</h3>
            <p className="text-blue-100">Overall GPA</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Target className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">85%</h3>
            <p className="text-green-100">Average Score</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <Sparkles className="w-6 h-6 text-purple-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">2</h3>
            <p className="text-purple-100">Subjects with Grade A+</p>
          </div>
        </div>

        {/* Subject Performance Cards */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Subject-wise Performance
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {performanceData.map((p, index) => {
              const gradeColors = getGradeColor(p.grade);
              return (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{p.icon}</div>
                      <div>
                        <h3 className="font-bold text-xl text-gray-800">{p.subject}</h3>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mt-1 bg-gradient-to-r ${gradeColors.bg} ${gradeColors.text} border-2 ${gradeColors.border}`}>
                          Grade {p.grade}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {p.avg}%
                      </div>
                      <div className="flex items-center gap-1 justify-end mt-1">
                        {p.change > 0 ? (
                          <>
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-semibold text-green-600">+{p.change}%</span>
                          </>
                        ) : p.change < 0 ? (
                          <>
                            <TrendingDown className="w-4 h-4 text-red-600" />
                            <span className="text-sm font-semibold text-red-600">{p.change}%</span>
                          </>
                        ) : (
                          <>
                            <Minus className="w-4 h-4 text-gray-500" />
                            <span className="text-sm font-semibold text-gray-500">No change</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${getProgressColor(p.avg)} transition-all duration-500`}
                      style={{ width: `${p.avg}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-600">
                    <span>Progress</span>
                    <span>{p.avg}% / 100%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GPA Trend Chart */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              GPA Trend (Semester-wise)
            </h2>
          </div>

          <div className="w-full h-64 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl flex flex-col items-center justify-center border-2 border-blue-200">
            <BarChart3 className="w-16 h-16 text-blue-600 mb-4" />
            <p className="text-xl font-bold text-blue-700">📊 Performance Chart</p>
            <p className="text-sm text-gray-600 mt-2">Integrate Chart.js or Recharts for detailed trends</p>
          </div>
        </div>

        {/* Teacher Remarks */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Teacher Remarks
            </h2>
          </div>

          <div className="space-y-4">
            {remarks.map((r, i) => (
              <div
                key={i}
                className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-purple-700">{r.subject}</h3>
                    </div>
                    <p className="text-gray-700 mb-2">{r.comment}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 italic">
                    <MessageCircle className="w-4 h-4" />
                    <span>— {r.teacher}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Performance Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-green-800">Strong Foundation</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Rahul shows excellent academic consistency in core subjects with stable performance.
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
                Slight drop noticed in Science — monitor lab participation and report writing skills.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800">Growth Trend</h3>
              </div>
              <p className="text-gray-700 text-sm">
                GPA improved by <span className="font-bold text-blue-600">0.3 points</span> from the previous term. Great progress!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}