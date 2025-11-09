import React, { useState } from "react";
import { 
  CalendarCheck, 
  Users, 
  Clock, 
  AlertTriangle, 
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  BarChart3,
  PieChart,
  Lightbulb,
  Calendar,
  UserCheck,
  UserX,
  Activity
} from "lucide-react";

export default function PrincipalAttendance() {
  const [filter, setFilter] = useState("last_30d");
  
  const summary = { 
    sessionsHeld: 120, 
    avgPresent: 89, 
    latePct: 4, 
    absentPct: 7,
    totalStudents: 450,
    onTimeRate: 85
  };
  
  const classTrends = [
    { name: "10-A", present: 92, late: 3, absent: 5, students: 38, trend: "up" },
    { name: "10-B", present: 86, late: 5, absent: 9, students: 35, trend: "down" },
    { name: "9-A", present: 90, late: 4, absent: 6, students: 40, trend: "up" },
    { name: "9-B", present: 85, late: 6, absent: 9, students: 37, trend: "down" },
  ];

  const getAttendanceColor = (percent) => {
    if (percent >= 90) return {
      bg: "from-green-500 to-emerald-600",
      light: "from-green-50 to-emerald-50",
      border: "border-green-300",
      text: "text-green-700"
    };
    if (percent >= 80) return {
      bg: "from-blue-500 to-indigo-600",
      light: "from-blue-50 to-indigo-50",
      border: "border-blue-300",
      text: "text-blue-700"
    };
    if (percent >= 70) return {
      bg: "from-yellow-500 to-orange-600",
      light: "from-yellow-50 to-orange-50",
      border: "border-yellow-300",
      text: "text-yellow-700"
    };
    return {
      bg: "from-red-500 to-pink-600",
      light: "from-red-50 to-pink-50",
      border: "border-red-300",
      text: "text-red-700"
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl shadow-lg">
                <CalendarCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Attendance & Engagement
                </h1>
                <p className="text-gray-600 mt-1">Track and analyze attendance patterns</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-1 shadow-md border-2 border-orange-200">
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border-0 rounded-lg px-4 py-2 outline-none font-semibold text-gray-700 bg-transparent"
              >
                <option value="last_7d">📅 Last 7 days</option>
                <option value="last_30d">📅 Last 30 days</option>
                <option value="last_90d">📅 Last 90 days</option>
                <option value="this_month">📅 This Month</option>
              </select>
            </div>
          </div>
        </div>

        {/* Main Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <CheckCircle className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-4xl font-bold mb-1">{summary.sessionsHeld}</h3>
            <p className="text-blue-100">Sessions Held</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <UserCheck className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-4xl font-bold mb-1">{summary.avgPresent}%</h3>
            <p className="text-green-100">Avg Present</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Clock className="w-6 h-6" />
              </div>
              <AlertTriangle className="w-6 h-6 text-yellow-200" />
            </div>
            <h3 className="text-4xl font-bold mb-1">{summary.latePct}%</h3>
            <p className="text-yellow-100">Late Arrivals</p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <UserX className="w-6 h-6" />
              </div>
              <XCircle className="w-6 h-6 text-red-200" />
            </div>
            <h3 className="text-4xl font-bold mb-1">{summary.absentPct}%</h3>
            <p className="text-red-100">Absent Rate</p>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">Total Students</h3>
                </div>
                <p className="text-5xl font-bold">{summary.totalStudents}</p>
              </div>
              <Activity className="w-16 h-16 opacity-20" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold">On-Time Rate</h3>
                </div>
                <p className="text-5xl font-bold">{summary.onTimeRate}%</p>
              </div>
              <Clock className="w-16 h-16 opacity-20" />
            </div>
          </div>
        </div>

        {/* Class-wise Attendance */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Class-wise Attendance Analysis
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {classTrends.map((c, i) => {
              const colors = getAttendanceColor(c.present);
              const TrendIcon = c.trend === "up" ? TrendingUp : TrendingDown;
              const trendColor = c.trend === "up" ? "text-green-600" : "text-red-600";
              
              return (
                <div
                  key={i}
                  className={`group bg-gradient-to-br ${colors.light} rounded-2xl p-6 border-2 ${colors.border} hover:border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-r ${colors.bg} rounded-xl shadow-lg`}>
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">Class {c.name}</h3>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {c.students} Students
                        </p>
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-1 ${trendColor}`}>
                      <TrendIcon className="w-5 h-5" />
                      <span className="text-sm font-bold">{c.trend === "up" ? "↑" : "↓"}</span>
                    </div>
                  </div>

                  {/* Main Stat */}
                  <div className="bg-white/70 rounded-xl p-4 mb-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Average Present</p>
                        <p className={`text-4xl font-bold ${colors.text}`}>{c.present}%</p>
                      </div>
                      <div className={`p-3 bg-gradient-to-r ${colors.bg} rounded-xl`}>
                        <UserCheck className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-3 border-2 border-yellow-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-4 h-4 text-yellow-600" />
                        <p className="text-xs text-gray-600 font-semibold">Late</p>
                      </div>
                      <p className="text-xl font-bold text-yellow-700">{c.late}%</p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-3 border-2 border-red-200">
                      <div className="flex items-center gap-2 mb-1">
                        <UserX className="w-4 h-4 text-red-600" />
                        <p className="text-xs text-gray-600 font-semibold">Absent</p>
                      </div>
                      <p className="text-xl font-bold text-red-700">{c.absent}%</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-gray-600 mb-2">
                      <span className="font-medium">Attendance Rate</span>
                      <span className="font-bold">{c.present}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${colors.bg} h-3 rounded-full transition-all duration-500 flex items-center justify-end pr-1`}
                        style={{ width: `${c.present}%` }}
                      >
                        {c.present > 15 && (
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Insights & Recommendations */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-xl">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Insights & Recommendations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border-2 border-red-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg mt-1">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-red-800 mb-2">Areas of Concern</h3>
                  <p className="text-gray-700 text-sm">
                    Classes <span className="font-bold text-red-700">9-B</span> and <span className="font-bold text-red-700">10-B</span> show lower attendance rates. Immediate investigation and intervention recommended.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg mt-1">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-green-800 mb-2">Positive Trends</h3>
                  <p className="text-gray-700 text-sm">
                    Overall engagement index is <span className="font-bold text-green-700">trending up</span> compared to the previous period. Classes 10-A and 9-A showing excellent performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mt-1">
                  <PieChart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-800 mb-2">Data Analysis</h3>
                  <p className="text-gray-700 text-sm">
                    Average presence of <span className="font-bold text-blue-700">{summary.avgPresent}%</span> is within acceptable range. Late arrivals at <span className="font-bold text-blue-700">{summary.latePct}%</span> need monitoring.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Action Items</h3>
                  <p className="text-gray-700 text-sm">
                    Consider implementing attendance improvement programs for underperforming classes. Parent-teacher meetings may help address concerns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}