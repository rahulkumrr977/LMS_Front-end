import {
  Calendar,
  UserCheck,
  UserX,
  PieChart,
  Clock,
  TrendingUp,
  Award,
  Sparkles,
  AlertCircle,
  CheckCircle,
  Target,
  Activity,
} from "lucide-react";

export default function ParentAttendance() {
  const attendanceSummary = {
    totalDays: 180,
    presentDays: 165,
    absentDays: 15,
    avgPercent: ((165 / 180) * 100).toFixed(1),
  };

  const subjectWise = [
    { subject: "Mathematics", percent: 95, icon: "📐" },
    { subject: "Science", percent: 85, icon: "🔬" },
    { subject: "English", percent: 92, icon: "📚" },
    { subject: "History", percent: 75, icon: "🏛️" },
    { subject: "Computer", percent: 98, icon: "💻" },
  ];

  const dailyRecords = [
    { date: "2025-10-30", subject: "Mathematics", status: "Present" },
    { date: "2025-10-30", subject: "Science", status: "Absent" },
    { date: "2025-10-31", subject: "English", status: "Present" },
    { date: "2025-10-31", subject: "History", status: "Present" },
    { date: "2025-11-01", subject: "Computer", status: "Present" },
    { date: "2025-11-01", subject: "Mathematics", status: "Present" },
  ];

  const getColor = (percent) => {
    if (percent >= 90) return { bg: "from-green-50 to-emerald-50", border: "border-green-200", text: "text-green-700" };
    if (percent >= 75) return { bg: "from-yellow-50 to-orange-50", border: "border-yellow-200", text: "text-yellow-700" };
    return { bg: "from-red-50 to-pink-50", border: "border-red-200", text: "text-red-700" };
  };

  const getProgressColor = (percent) => {
    if (percent >= 90) return "from-green-500 to-emerald-600";
    if (percent >= 75) return "from-yellow-500 to-orange-600";
    return "from-red-500 to-pink-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Attendance Tracking
              </h1>
              <p className="text-gray-600 mt-1">Monitor your child's attendance and participation</p>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <Activity className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{attendanceSummary.totalDays}</h3>
            <p className="text-blue-100">Total Days</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <UserCheck className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{attendanceSummary.presentDays}</h3>
            <p className="text-green-100">Present Days</p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <UserX className="w-6 h-6" />
              </div>
              <AlertCircle className="w-6 h-6 text-red-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{attendanceSummary.absentDays}</h3>
            <p className="text-red-100">Absent Days</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <PieChart className="w-6 h-6" />
              </div>
              <Target className="w-6 h-6 text-purple-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{attendanceSummary.avgPercent}%</h3>
            <p className="text-purple-100">Average Rate</p>
          </div>
        </div>

        {/* Attendance Progress */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Overall Performance
                </span>
              </h2>
              <p className="text-gray-600 mb-6">
                Your child has maintained excellent attendance with {attendanceSummary.avgPercent}% attendance rate this semester.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Present Days</span>
                  <span className="text-green-600 font-bold">{attendanceSummary.presentDays}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500"
                    style={{ width: `${(attendanceSummary.presentDays / attendanceSummary.totalDays) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Absent Days</span>
                  <span className="text-red-600 font-bold">{attendanceSummary.absentDays}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 transition-all duration-500"
                    style={{ width: `${(attendanceSummary.absentDays / attendanceSummary.totalDays) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="w-48 h-48 bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 rounded-full flex items-center justify-center border-8 border-white shadow-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {attendanceSummary.avgPercent}%
                </div>
                <div className="text-sm text-gray-600 font-medium">Attendance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Subject-wise Attendance */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Subject-wise Attendance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectWise.map((s, i) => {
              const colors = getColor(s.percent);
              return (
                <div
                  key={i}
                  className={`group bg-gradient-to-br ${colors.bg} rounded-2xl p-6 border-2 ${colors.border} hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{s.icon}</div>
                      <h3 className="font-bold text-lg text-gray-800">{s.subject}</h3>
                    </div>
                    <span className={`text-2xl font-bold ${colors.text}`}>
                      {s.percent}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full bg-gradient-to-r ${getProgressColor(s.percent)} transition-all duration-500`}
                      style={{ width: `${s.percent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Attendance Records */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Recent Attendance Records
            </h2>
          </div>

          <div className="space-y-4">
            {dailyRecords.map((r, index) => (
              <div
                key={index}
                className={`group rounded-2xl p-5 border-2 hover:shadow-lg transition-all duration-300 ${
                  r.status === "Present"
                    ? "bg-gradient-to-br from-white to-green-50 border-green-200 hover:border-green-400"
                    : "bg-gradient-to-br from-white to-red-50 border-red-200 hover:border-red-400"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">{r.date}</span>
                    </div>
                    <div className="text-gray-800 font-bold">{r.subject}</div>
                  </div>
                  {r.status === "Present" ? (
                    <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit">
                      <UserCheck className="w-4 h-4" />
                      Present
                    </span>
                  ) : (
                    <span className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit">
                      <UserX className="w-4 h-4" />
                      Absent
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance Insights */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Attendance Insights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-green-800">Excellent Rate</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Your child has maintained a consistent attendance rate of{" "}
                <span className="font-bold text-green-600">{attendanceSummary.avgPercent}%</span>{" "}
                this semester.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-yellow-800">Needs Focus</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Attendance in <span className="font-bold text-yellow-600">History</span> needs improvement (below 80%).
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800">Top Subjects</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Excellent participation in{" "}
                <span className="font-bold text-blue-600">Computer</span> and{" "}
                <span className="font-bold text-blue-600">Mathematics</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}