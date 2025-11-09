import {
  GraduationCap,
  TrendingUp,
  Calendar,
  Bell,
  Info,
  Award,
  ChevronRight,
  Sparkles,
  Target,
  BookOpen,
  AlertCircle,
  CheckCircle,
  User,
  BarChart3,
} from "lucide-react";

export default function ParentDashboard() {
  const child = {
    name: "Rahul Sharma",
    grade: "Grade 9 - Section B",
    rollNo: "R9B21",
    gpa: 8.6,
    attendance: 92,
    alerts: 2,
  };

  const alerts = [
    {
      id: 1,
      title: "Low attendance in Mathematics",
      message: "Rahul's attendance in Mathematics has dropped below 80%.",
      date: "Nov 1, 2025",
      type: "warning",
    },
    {
      id: 2,
      title: "Upcoming Parent–Teacher Meeting",
      message: "Scheduled for Nov 6 at 10 AM in Room 203.",
      date: "Nov 3, 2025",
      type: "info",
    },
  ];

  const quickLinks = [
    {
      name: "Performance Report",
      icon: BarChart3,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      path: "/parent/performance/rahul",
    },
    {
      name: "Attendance Record",
      icon: Calendar,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      path: "/parent/attendance/rahul",
    },
    {
      name: "Progress Analytics",
      icon: TrendingUp,
      color: "from-purple-500 to-fuchsia-600",
      bgColor: "from-purple-50 to-fuchsia-50",
      path: "/parent/analytics/rahul",
    },
  ];

  const getAlertStyle = (type) => {
    if (type === "warning") {
      return {
        bg: "from-yellow-50 to-orange-50",
        border: "border-yellow-200",
        icon: AlertCircle,
        iconColor: "text-yellow-600",
      };
    }
    return {
      bg: "from-blue-50 to-indigo-50",
      border: "border-blue-200",
      icon: Info,
      iconColor: "text-blue-600",
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl shadow-lg">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Parent Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Welcome back! Here's your child's progress overview</p>
            </div>
          </div>
        </div>

        {/* Child Overview Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Student Info */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-28 h-28 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl">
                  {child.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-1">{child.name}</h2>
                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <GraduationCap className="w-5 h-5" />
                  <span className="font-semibold">{child.grade}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded-full font-medium">
                    Roll No: {child.rollNo}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-5 shadow-xl text-white text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <Award className="w-6 h-6" />
                </div>
                <p className="text-sm opacity-90 mb-1">GPA</p>
                <p className="text-3xl font-bold">{child.gpa}</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-5 shadow-xl text-white text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <Calendar className="w-6 h-6" />
                </div>
                <p className="text-sm opacity-90 mb-1">Attendance</p>
                <p className="text-3xl font-bold">{child.attendance}%</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl p-5 shadow-xl text-white text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex justify-center mb-2">
                  <Bell className="w-6 h-6" />
                </div>
                <p className="text-sm opacity-90 mb-1">Alerts</p>
                <p className="text-3xl font-bold">{child.alerts}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Quick Access
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.path}
                  className={`group bg-gradient-to-br ${link.bgColor} rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className={`p-4 bg-gradient-to-br ${link.color} rounded-2xl shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-800">{link.name}</p>
                      <div className="flex items-center justify-center gap-1 text-sm text-gray-600 mt-2">
                        <span>View Details</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Alerts Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Recent Alerts
            </h2>
          </div>

          {alerts.length > 0 ? (
            <div className="space-y-4">
              {alerts.map((alert) => {
                const style = getAlertStyle(alert.type);
                const AlertIcon = style.icon;
                return (
                  <div
                    key={alert.id}
                    className={`group bg-gradient-to-br ${style.bg} rounded-2xl p-6 border-2 ${style.border} hover:shadow-xl transition-all duration-300`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`p-3 bg-white rounded-xl shadow ${style.iconColor}`}>
                          <AlertIcon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-800 mb-2">{alert.title}</h3>
                          <p className="text-gray-700 mb-2">{alert.message}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{alert.date}</span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => console.log("View details clicked")}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2 w-fit"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">No recent alerts - Everything looks good! 🎉</p>
            </div>
          )}
        </div>

        {/* Academic Summary */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-xl">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Academic Overview
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800">GPA Performance</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Rahul has maintained consistent performance with{" "}
                <span className="font-bold text-blue-600">{child.gpa} CGPA</span> this semester.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-green-800">Attendance Rate</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Attendance rate is{" "}
                <span className="font-bold text-green-600">{child.attendance}%</span> — above average performance.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-yellow-800">Action Items</h3>
              </div>
              <p className="text-gray-700 text-sm">
                <span className="font-bold text-yellow-600">{child.alerts}</span> alerts need attention for continued success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}