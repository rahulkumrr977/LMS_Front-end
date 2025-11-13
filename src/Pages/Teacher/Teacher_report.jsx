import { useState } from "react";
import {
  TrendingUp,
  Download,
  GraduationCap,
  Calendar,
  CheckCircle,
  XCircle,
  Award,
  Users,
  Target,
  Sparkles,
  BarChart3,
  TrendingDown,
  AlertCircle,
  Star,
  Activity,
} from "lucide-react";

export default function TeacherAnalytics() {
  const [analytics] = useState({
    totalStudents: 120,
    avgAttendance: 88,
    avgScore: 76,
    assignmentsCompleted: 340,
    assignmentsPending: 60,
  });

  const [studentPerformance] = useState([
    {
      id: 1,
      name: "Rohit Sharma",
      attendance: 92,
      avgScore: 81,
      status: "Excellent",
      improvement: "+5%",
    },
    {
      id: 2,
      name: "Pooja Verma",
      attendance: 85,
      avgScore: 72,
      status: "Good",
      improvement: "+2%",
    },
    {
      id: 3,
      name: "Amit Kumar",
      attendance: 70,
      avgScore: 65,
      status: "Needs Improvement",
      improvement: "-3%",
    },
  ]);

  const handleDownloadReport = () => {
    alert("Report downloading... (connect backend PDF/Excel export API)");
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

  const completionRate = (
    (analytics.assignmentsCompleted /
      (analytics.assignmentsCompleted + analytics.assignmentsPending)) *
    100
  ).toFixed(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Performance & Analytics
                </h1>
                <p className="text-gray-600 mt-1">Track student progress and insights</p>
              </div>
            </div>

            <button
              onClick={handleDownloadReport}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Report
            </button>
          </div>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <GraduationCap className="w-6 h-6" />
              </div>
              <Users className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{analytics.totalStudents}</h3>
            <p className="text-blue-100">Total Students</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{analytics.avgAttendance}%</h3>
            <p className="text-green-100">Average Attendance</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <Target className="w-6 h-6 text-purple-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{analytics.avgScore}%</h3>
            <p className="text-purple-100">Average Score</p>
          </div>
        </div>

        {/* Assignment Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Assignments Completed</p>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {analytics.assignmentsCompleted}
                </h3>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3">
              <div className="flex items-center gap-2 text-green-700">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">{completionRate}% completion rate</span>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Assignments Pending</p>
                <h3 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  {analytics.assignmentsPending}
                </h3>
              </div>
              <div className="p-4 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl">
                <XCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-3">
              <div className="flex items-center gap-2 text-red-700">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Needs attention</span>
              </div>
            </div>
          </div>
        </div>

        {/* Student Performance Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Student Performance Overview
              </span>
            </h2>
          </div>

          {/* Student Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {studentPerformance.map((s) => (
              <div
                key={s.id}
                className="group bg-gradient-to-br from-white to-indigo-50 rounded-2xl p-6 border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {s.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{s.name}</h3>
                      <div className={`text-sm font-semibold flex items-center gap-1 ${
                        s.improvement.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {s.improvement.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {s.improvement}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-4">
                  {/* Attendance */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Attendance</span>
                      <span className="font-bold text-gray-800">{s.attendance}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${s.attendance}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Average Score */}
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600 font-medium">Average Score</span>
                      <span className="font-bold text-gray-800">{s.avgScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${s.avgScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-indigo-200">
                  {getStatusBadge(s.status)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Key Insights
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-green-800">High Engagement</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Students with attendance above 90% show an average score increase of <span className="font-bold text-green-600">12%</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-yellow-800">Low Engagement</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Students attending less than <span className="font-bold text-yellow-600">75%</span> need attention for improvement
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800">Assignment Rate</h3>
              </div>
              <p className="text-gray-700 text-sm">
                <span className="font-bold text-blue-600">{completionRate}%</span> of total assignments have been successfully submitted
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}