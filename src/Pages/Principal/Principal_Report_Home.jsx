import React, { useState } from "react";
import { FileText, Download, Calendar, TrendingUp, Users, BookOpen, Clock, CheckCircle, BarChart3, PieChart, FileSpreadsheet } from "lucide-react";

export default function PrincipalReports() {
  const [filters, setFilters] = useState({ period: "last_30d", grade: "All" });
  
  const reports = [
    { 
      id: "teacher", 
      title: "Teacher Reports", 
      description: "Performance, attendance & evaluations",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      count: "24 Teachers"
    },
    { 
      id: "student", 
      title: "Student Analytics", 
      description: "Academic progress & achievements",
      icon: BookOpen,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      count: "350 Students"
    },
    { 
      id: "attendance", 
      title: "Attendance & Engagement", 
      description: "Attendance trends & participation rates",
      icon: TrendingUp,
      color: "from-purple-500 to-fuchsia-600",
      bgColor: "from-purple-50 to-fuchsia-50",
      borderColor: "border-purple-200",
      count: "98% Average"
    },
  ];

  const recentExports = [
    { 
      name: "reports_student_20251101-1020_IST.csv", 
      size: "12 MB", 
      status: "Completed",
      type: "csv",
      date: "Nov 01, 2025"
    },
    { 
      name: "reports_teacher_20251028-0912_IST.pdf", 
      size: "220 KB", 
      status: "Completed",
      type: "pdf",
      date: "Oct 28, 2025"
    },
    { 
      name: "reports_attendance_20251025-1545_IST.xlsx", 
      size: "3.5 MB", 
      status: "Completed",
      type: "xlsx",
      date: "Oct 25, 2025"
    },
  ];

  const getFileIcon = (type) => {
    if (type === "csv" || type === "xlsx") return FileSpreadsheet;
    return FileText;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Reports & Analytics
                </h1>
                <p className="text-gray-600 mt-1">Generate and export institutional reports</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-white rounded-xl p-1 shadow-md border-2 border-orange-200">
                <select 
                  value={filters.period} 
                  onChange={(e)=>setFilters({...filters, period:e.target.value})} 
                  className="border-0 rounded-lg px-4 py-2 outline-none font-semibold text-gray-700 bg-transparent"
                >
                  <option value="last_7d">📅 Last 7 days</option>
                  <option value="last_30d">📅 Last 30 days</option>
                  <option value="last_90d">📅 Last 90 days</option>
                </select>
              </div>
              
              <button 
                onClick={()=>alert("Download current view as CSV/PDF...")} 
                className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-3 rounded-xl hover:from-orange-700 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <BarChart3 className="w-6 h-6" />
              </div>
              <FileText className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">3</h3>
            <p className="text-blue-100">Report Categories</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Download className="w-6 h-6" />
              </div>
              <CheckCircle className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{recentExports.length}</h3>
            <p className="text-green-100">Recent Exports</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <PieChart className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-purple-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">98%</h3>
            <p className="text-purple-100">Data Accuracy</p>
          </div>
        </div>

        {/* Report Cards */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Available Reports
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reports.map((r) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.id}
                  className={`group bg-gradient-to-br ${r.bgColor} rounded-3xl p-6 border-2 ${r.borderColor} hover:border-orange-400 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${r.color} rounded-xl shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-800 mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{r.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-700">{r.count}</span>
                    <button
                      onClick={() => alert(`Opening ${r.title}...`)}
                      className={`bg-gradient-to-r ${r.color} text-white px-5 py-2 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold text-sm`}
                    >
                      Open →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Exports */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Recent Exports
            </h2>
          </div>

          <div className="space-y-4">
            {recentExports.map((exp, idx) => {
              const FileIcon = getFileIcon(exp.type);
              return (
                <div
                  key={idx}
                  className="group bg-gradient-to-br from-white to-green-50 rounded-2xl p-5 border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl shadow-lg">
                        <FileIcon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 mb-1">{exp.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.date}
                          </span>
                          <span>•</span>
                          <span>{exp.size}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 border-2 border-green-300">
                        <CheckCircle className="w-4 h-4" />
                        {exp.status}
                      </div>
                      
                      <button
                        onClick={() => alert(`Downloading ${exp.name}...`)}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Insights */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            📊 Report Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-orange-800">Performance Trends</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Track academic and administrative performance metrics over time.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800">Detailed Analytics</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Access comprehensive data analysis and visualization tools.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-green-800">Easy Export</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Download reports in multiple formats (CSV, PDF, XLSX) instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}