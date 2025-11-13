import React from "react";
import { 
  GraduationCap, 
  TrendingUp, 
  BookOpen, 
  Award, 
  Target,
  BarChart3,
  Users,
  CheckCircle,
  Lightbulb,
  ArrowLeft
} from "lucide-react";

export default function PrincipalTeacherReport() {
  const id = "T12345"; // mock id
  const teacher = { 
    name: "Ms. Kavita Sharma", 
    courses: 5, 
    avgOutcome: 78, 
    engagement: 85,
    department: "Mathematics",
    experience: "8 years"
  };

  const classSummary = [
    { className: "10-A", completion: 82, avgScore: 74, students: 35 },
    { className: "10-B", completion: 88, avgScore: 79, students: 38 },
    { className: "10-C", completion: 85, avgScore: 76, students: 36 },
  ];

  const getScoreColor = (score) => {
    if (score >= 80) return { bg: "from-green-500 to-emerald-600", text: "text-green-700", light: "from-green-50 to-emerald-50", border: "border-green-300" };
    if (score >= 70) return { bg: "from-yellow-500 to-orange-600", text: "text-yellow-700", light: "from-yellow-50 to-orange-50", border: "border-yellow-300" };
    return { bg: "from-red-500 to-pink-600", text: "text-red-700", light: "from-red-50 to-pink-50", border: "border-red-300" };
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
                  Teacher Performance Report
                </h1>
                <p className="text-gray-600 mt-1">Comprehensive teaching analytics and insights</p>
              </div>
            </div>

            <div className="bg-white rounded-xl px-4 py-2 shadow-md border-2 border-orange-200">
              <p className="text-xs text-gray-500">Teacher ID</p>
              <p className="text-lg font-bold text-orange-600">{id}</p>
            </div>
          </div>
        </div>

        {/* Teacher Profile Card */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-xl text-white">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="p-6 bg-white/20 rounded-2xl backdrop-blur-sm">
                <GraduationCap className="w-16 h-16" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">{teacher.name}</h2>
                <div className="flex flex-wrap items-center gap-4 text-blue-100">
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {teacher.department}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {teacher.experience}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {teacher.courses} Active Courses
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[120px]">
                <p className="text-4xl font-bold mb-1">{teacher.avgOutcome}%</p>
                <p className="text-sm text-blue-100">Avg Outcome</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[120px]">
                <p className="text-4xl font-bold mb-1">{teacher.engagement}%</p>
                <p className="text-sm text-blue-100">Engagement</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <CheckCircle className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">
              {Math.round(classSummary.reduce((acc, c) => acc + c.completion, 0) / classSummary.length)}%
            </h3>
            <p className="text-green-100">Avg Completion</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Target className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">
              {Math.round(classSummary.reduce((acc, c) => acc + c.avgScore, 0) / classSummary.length)}%
            </h3>
            <p className="text-purple-100">Avg Class Score</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">
              {classSummary.reduce((acc, c) => acc + c.students, 0)}
            </h3>
            <p className="text-yellow-100">Total Students</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{classSummary.length}</h3>
            <p className="text-pink-100">Active Classes</p>
          </div>
        </div>

        {/* Class Breakdown */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Class Performance Breakdown
            </h2>
          </div>

          <div className="space-y-4">
            {classSummary.map((c, i) => {
              const completionColor = getScoreColor(c.completion);
              const scoreColor = getScoreColor(c.avgScore);
              
              return (
                <div
                  key={i}
                  className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    {/* Class Info */}
                    <div className="flex items-center gap-4 flex-1">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">Class {c.className}</h3>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {c.students} Students
                        </p>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-4">
                      <div className={`bg-gradient-to-r ${completionColor.light} rounded-2xl p-4 border-2 ${completionColor.border} min-w-[140px]`}>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Completion Rate</p>
                        <div className="flex items-center gap-2">
                          <div className={`p-1 bg-gradient-to-r ${completionColor.bg} rounded-lg`}>
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <p className={`text-2xl font-bold ${completionColor.text}`}>{c.completion}%</p>
                        </div>
                      </div>

                      <div className={`bg-gradient-to-r ${scoreColor.light} rounded-2xl p-4 border-2 ${scoreColor.border} min-w-[140px]`}>
                        <p className="text-xs font-semibold text-gray-600 mb-1">Average Score</p>
                        <div className="flex items-center gap-2">
                          <div className={`p-1 bg-gradient-to-r ${scoreColor.bg} rounded-lg`}>
                            <Target className="w-4 h-4 text-white" />
                          </div>
                          <p className={`text-2xl font-bold ${scoreColor.text}`}>{c.avgScore}%</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="mt-4 space-y-2">
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Completion Progress</span>
                        <span>{c.completion}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${completionColor.bg} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${c.completion}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Score Progress</span>
                        <span>{c.avgScore}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${scoreColor.bg} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${c.avgScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Insights */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-xl">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              Key Insights & Recommendations
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg mt-1">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-green-800 mb-2">Performance Overview</h3>
                  <p className="text-gray-700 text-sm">
                    Average outcome is <span className="font-bold text-green-700">{teacher.avgOutcome}%</span> with <span className="font-bold text-green-700">{teacher.engagement}%</span> student engagement. Performance is above institutional average.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg mt-1">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-blue-800 mb-2">Best Performing Class</h3>
                  <p className="text-gray-700 text-sm">
                    Class <span className="font-bold text-blue-700">10-B</span> shows highest completion rate at <span className="font-bold text-blue-700">88%</span>. Consider sharing best practices with other sections.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg mt-1">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-yellow-800 mb-2">Areas of Focus</h3>
                  <p className="text-gray-700 text-sm">
                    Class 10-A shows opportunity for improvement. Consider additional support sessions or peer learning initiatives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-6 border-2 border-purple-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-lg mt-1">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-purple-800 mb-2">Recommendation</h3>
                  <p className="text-gray-700 text-sm">
                    Consistent high engagement across all classes. Maintain current teaching methodologies and continue innovative practices.
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