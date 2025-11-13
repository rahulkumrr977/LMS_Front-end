import React from "react";
import { 
  GraduationCap, 
  BookOpen, 
  TrendingUp, 
  Award, 
  Target,
  Calendar,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
  BarChart3,
  Trophy,
  Clock,
  Star,
  MessageSquare
} from "lucide-react";

export default function PrincipalStudentAnalytics() {
  const id = "S67890"; // mock id
  const student = { 
    name: "Riya Sharma", 
    class: "10-A", 
    gpa: 8.9, 
    attendance: 93,
    rollNo: "2024-10A-015",
    section: "Science Stream"
  };

  const courseProgress = [
    { course: "Mathematics", progress: 92, score: 88, teacher: "Mr. Kumar", status: "excellent" },
    { course: "Science", progress: 78, score: 72, teacher: "Ms. Verma", status: "good" },
    { course: "English", progress: 88, score: 85, teacher: "Mrs. Singh", status: "excellent" },
    { course: "Social Studies", progress: 95, score: 91, teacher: "Mr. Sharma", status: "excellent" },
    { course: "Computer Science", progress: 85, score: 80, teacher: "Ms. Patel", status: "good" },
  ];

  const getProgressColor = (progress) => {
    if (progress >= 90) return { 
      bg: "from-green-500 to-emerald-600", 
      light: "from-green-50 to-emerald-50", 
      border: "border-green-300",
      text: "text-green-700"
    };
    if (progress >= 75) return { 
      bg: "from-blue-500 to-indigo-600", 
      light: "from-blue-50 to-indigo-50", 
      border: "border-blue-300",
      text: "text-blue-700"
    };
    return { 
      bg: "from-yellow-500 to-orange-600", 
      light: "from-yellow-50 to-orange-50", 
      border: "border-yellow-300",
      text: "text-yellow-700"
    };
  };

  const getGPAColor = (gpa) => {
    if (gpa >= 9.0) return "from-green-500 to-emerald-600";
    if (gpa >= 8.0) return "from-blue-500 to-indigo-600";
    if (gpa >= 7.0) return "from-yellow-500 to-orange-600";
    return "from-red-500 to-pink-600";
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 90) return "from-green-500 to-emerald-600";
    if (attendance >= 75) return "from-yellow-500 to-orange-600";
    return "from-red-500 to-pink-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.history.back()}
                className="p-3 bg-gradient-to-r from-gray-500 to-slate-600 rounded-xl shadow-lg hover:scale-105 transition-all"
              >
                <ArrowLeft className="w-6 h-6 text-white" />
              </button>
              <div className="p-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Student Analytics Report
                </h1>
                <p className="text-gray-600 mt-1">Comprehensive academic performance overview</p>
              </div>
            </div>

            <div className="bg-white rounded-xl px-4 py-2 shadow-md border-2 border-orange-200">
              <p className="text-xs text-gray-500">Student ID</p>
              <p className="text-lg font-bold text-orange-600">{id}</p>
            </div>
          </div>
        </div>

        {/* Student Profile Card */}
        <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-3xl p-8 shadow-xl text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                <GraduationCap className="w-16 h-16" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{student.name}</h2>
                <div className="flex flex-wrap items-center gap-4 text-purple-100">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Class {student.class}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Roll No: {student.rollNo}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    {student.section}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className={`bg-gradient-to-br ${getGPAColor(student.gpa)} rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Trophy className="w-6 h-6" />
              </div>
              <Star className="w-6 h-6 opacity-50" />
            </div>
            <h3 className="text-4xl font-bold mb-1">{student.gpa}</h3>
            <p className="opacity-90">GPA / CGPA</p>
          </div>

          <div className={`bg-gradient-to-br ${getAttendanceColor(student.attendance)} rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300`}>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <CheckCircle className="w-6 h-6 opacity-50" />
            </div>
            <h3 className="text-4xl font-bold mb-1">{student.attendance}%</h3>
            <p className="opacity-90">Attendance</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 opacity-50" />
            </div>
            <h3 className="text-4xl font-bold mb-1">{courseProgress.length}</h3>
            <p className="opacity-90">Active Courses</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Target className="w-6 h-6" />
              </div>
              <Award className="w-6 h-6 opacity-50" />
            </div>
            <h3 className="text-4xl font-bold mb-1">
              {Math.round(courseProgress.reduce((acc, c) => acc + c.progress, 0) / courseProgress.length)}%
            </h3>
            <p className="opacity-90">Avg Progress</p>
          </div>
        </div>

        {/* Course Progress */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Course Progress & Performance
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courseProgress.map((c, i) => {
              const colors = getProgressColor(c.progress);
              
              return (
                <div
                  key={i}
                  className={`group bg-gradient-to-br ${colors.light} rounded-2xl p-6 border-2 ${colors.border} hover:border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 bg-gradient-to-r ${colors.bg} rounded-xl shadow-lg`}>
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{c.course}</h3>
                        <p className="text-xs text-gray-600 flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          {c.teacher}
                        </p>
                      </div>
                    </div>
                    
                    {c.status === "excellent" && (
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Excellent
                      </div>
                    )}
                    {c.status === "good" && (
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Good
                      </div>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/70 rounded-xl p-3 border border-gray-200">
                      <p className="text-xs text-gray-600 mb-1">Progress</p>
                      <p className={`text-2xl font-bold ${colors.text}`}>{c.progress}%</p>
                    </div>
                    <div className="bg-white/70 rounded-xl p-3 border border-gray-200">
                      <p className="text-xs text-gray-600 mb-1">Score</p>
                      <p className={`text-2xl font-bold ${colors.text}`}>{c.score}%</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-xs text-gray-600 mb-2">
                      <span className="font-medium">Completion Status</span>
                      <span className="font-bold">{c.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${colors.bg} h-3 rounded-full transition-all duration-500 flex items-center justify-end pr-1`}
                        style={{ width: `${c.progress}%` }}
                      >
                        {c.progress > 20 && (
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

        {/* Teacher Remarks & Insights */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Teacher Remarks */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Teacher Remarks
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-green-800 mb-1">Overall Performance</h3>
                    <p className="text-sm text-gray-700">
                      No critical remarks. Overall performance is <span className="font-bold text-green-700">stable and consistent</span> across all subjects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 border-2 border-yellow-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg mt-1">
                    <AlertCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-yellow-800 mb-1">Areas for Improvement</h3>
                    <p className="text-sm text-gray-700">
                      Attention suggested to <span className="font-bold text-yellow-700">lab reports in Science</span>. Consider additional support for practical work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Insights */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                Academic Insights
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-4 border-2 border-purple-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-lg mt-1">
                    <Trophy className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-purple-800 mb-1">Strengths</h3>
                    <p className="text-sm text-gray-700">
                      Excelling in <span className="font-bold text-purple-700">Mathematics and Social Studies</span> with 90%+ progress rates.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border-2 border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mt-1">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-800 mb-1">Recommendations</h3>
                    <p className="text-sm text-gray-700">
                      Maintain excellent attendance record. Focus on improving Science practical work for better outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}