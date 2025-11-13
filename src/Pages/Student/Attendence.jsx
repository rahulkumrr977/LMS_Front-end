import { 
  Users, 
  Calendar, 
  TrendingUp, 
  Award,
  Clock,
  CheckCircle,
  AlertTriangle,
  Eye,
  BarChart3,
  Target,
  BookOpen,
  Activity
} from "lucide-react";

export default function Attendance() {
  const attendance = [
    { 
      subject: "Mathematics", 
      attended: 8, 
      total: 10, 
      color: "from-blue-500 to-indigo-600",
      accentColor: "bg-blue-50 border-blue-200",
      textColor: "text-blue-600",
      icon: "📊",
      recentTrend: "up"
    },
    { 
      subject: "Science", 
      attended: 6, 
      total: 8, 
      color: "from-green-500 to-emerald-600",
      accentColor: "bg-green-50 border-green-200", 
      textColor: "text-green-600",
      icon: "🧪",
      recentTrend: "down"
    },
    { 
      subject: "English", 
      attended: 10, 
      total: 10, 
      color: "from-purple-500 to-violet-600",
      accentColor: "bg-purple-50 border-purple-200",
      textColor: "text-purple-600",
      icon: "📚",
      recentTrend: "up"
    },
    { 
      subject: "History", 
      attended: 5, 
      total: 9, 
      color: "from-orange-500 to-red-600",
      accentColor: "bg-orange-50 border-orange-200",
      textColor: "text-orange-600",
      icon: "🏛️",
      recentTrend: "down"
    },
  ];

  const overallAttendance = Math.round(
    (attendance.reduce((acc, s) => acc + s.attended, 0) /
      attendance.reduce((acc, s) => acc + s.total, 0)) *
      100
  );

  const getAttendanceStatus = (percent) => {
    if (percent >= 90) return { 
      label: "Excellent", 
      color: "text-green-600 bg-green-100 border-green-200",
      icon: <Award className="w-4 h-4" />
    };
    if (percent >= 80) return { 
      label: "Good", 
      color: "text-blue-600 bg-blue-100 border-blue-200",
      icon: <CheckCircle className="w-4 h-4" />
    };
    if (percent >= 60) return { 
      label: "Average", 
      color: "text-yellow-600 bg-yellow-100 border-yellow-200",
      icon: <Clock className="w-4 h-4" />
    };
    return { 
      label: "Needs Improvement", 
      color: "text-red-600 bg-red-100 border-red-200",
      icon: <AlertTriangle className="w-4 h-4" />
    };
  };

  const totalSessions = attendance.reduce((acc, s) => acc + s.total, 0);
  const totalAttended = attendance.reduce((acc, s) => acc + s.attended, 0);
  const perfectAttendanceSubjects = attendance.filter(s => (s.attended / s.total) === 1).length;
  const averageAttendance = Math.round(attendance.reduce((acc, s) => acc + (s.attended / s.total), 0) / attendance.length * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 shadow-lg mb-6">
            <Users className="w-6 h-6 text-indigo-600" />
            <span className="text-indigo-600 font-semibold">Attendance Tracker</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Attendance Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Track your class attendance and maintain academic excellence</p>
        </div>

        {/* Quick Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{overallAttendance}%</h3>
            <p className="text-gray-600">Overall Rate</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{totalAttended}</h3>
            <p className="text-gray-600">Classes Attended</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{perfectAttendanceSubjects}</h3>
            <p className="text-gray-600">Perfect Subjects</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{totalSessions}</h3>
            <p className="text-gray-600">Total Sessions</p>
          </div>
        </div>

        {/* Subject-wise Attendance Cards */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            Subject-wise Attendance
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {attendance.map((subj, idx) => {
              const percent = Math.round((subj.attended / subj.total) * 100);
              const status = getAttendanceStatus(percent);
              return (
                <div
                  key={idx}
                  className={`${subj.accentColor} border-2 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${subj.color} rounded-full transform translate-x-8 -translate-y-8`}></div>
                  </div>

                  {/* Header */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{subj.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800">{subj.subject}</h3>
                          <p className="text-gray-600 text-sm">{subj.attended}/{subj.total} sessions</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {subj.recentTrend === 'up' ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <Activity className="w-4 h-4 text-red-500" />
                        )}
                      </div>
                    </div>

                    {/* Circular Progress */}
                    <div className="flex items-center justify-center mb-6">
                      <div className="relative w-24 h-24">
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={`url(#gradient-${idx})`}
                            strokeWidth="2"
                            strokeDasharray={`${percent}, 100`}
                            className="transition-all duration-1000 ease-out"
                          />
                          <defs>
                            <linearGradient id={`gradient-${idx}`} gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor={percent >= 80 ? "#10b981" : percent >= 60 ? "#f59e0b" : "#ef4444"} />
                              <stop offset="100%" stopColor={percent >= 80 ? "#059669" : percent >= 60 ? "#d97706" : "#dc2626"} />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-2xl font-bold text-gray-800">{percent}%</span>
                        </div>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className={`flex items-center justify-center gap-2 px-4 py-2 rounded-xl border mb-4 ${status.color}`}>
                      {status.icon}
                      <span className="font-semibold text-sm">{status.label}</span>
                    </div>

                    {/* Linear Progress Bar */}
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${subj.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                          style={{ width: `${percent}%` }}
                        >
                          <div className="h-full bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button className={`w-full bg-gradient-to-r ${subj.color} text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}>
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Overall Summary */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Overall Attendance Summary</h2>
            <div className="flex items-center justify-center gap-8">
              {/* Main Circular Progress */}
              <div className="relative">
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
                      strokeDasharray={`${overallAttendance}, 100`}
                      className="animate-pulse"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">{overallAttendance}%</span>
                    <span className="text-sm text-indigo-100">Overall</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">{totalAttended}</div>
                  <div className="text-indigo-100 text-sm">Classes Attended</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">{totalSessions}</div>
                  <div className="text-indigo-100 text-sm">Total Sessions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">{perfectAttendanceSubjects}</div>
                  <div className="text-indigo-100 text-sm">Perfect Subjects</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold">{attendance.length}</div>
                  <div className="text-indigo-100 text-sm">Total Subjects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Message */}
          <div className="text-center">
            {overallAttendance >= 90 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Award className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Outstanding Attendance!</h3>
                <p className="text-indigo-100">You're maintaining excellent attendance. Keep up the great work!</p>
              </div>
            )}
            {overallAttendance >= 75 && overallAttendance < 90 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Good Attendance!</h3>
                <p className="text-indigo-100">You're doing well! Try to improve further to achieve excellence.</p>
              </div>
            )}
            {overallAttendance < 75 && (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Target className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Room for Improvement</h3>
                <p className="text-indigo-100">Focus on attending more classes to improve your academic performance.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}