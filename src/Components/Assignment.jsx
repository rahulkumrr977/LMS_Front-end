import { 
  FileText, 
  Brain, 
  Upload, 
  Eye, 
  Play, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Award,
  Calendar,
  TrendingUp,
  Target,
  ChevronRight,
  Download
} from "lucide-react";

export default function Assignments() {
  const assignments = [
    {
      id: 1,
      title: "Essay on Photosynthesis",
      due: "Sep 15, 2025",
      status: "Pending",
      subject: "Science",
      priority: "High",
      description: "Write a detailed essay about the process of photosynthesis",
      points: 20,
      color: "from-red-500 to-pink-600",
      icon: "🌱"
    },
    {
      id: 2,
      title: "History Project Report",
      due: "Sep 18, 2025",
      status: "Submitted",
      subject: "History",
      priority: "Medium",
      description: "Research project on ancient civilizations",
      points: 30,
      color: "from-yellow-500 to-orange-600",
      icon: "🏛️"
    },
    {
      id: 3,
      title: "English Literature Essay",
      due: "Sep 20, 2025",
      status: "Graded",
      subject: "English",
      priority: "Low",
      description: "Analysis of Shakespeare's literary techniques",
      points: 25,
      grade: "A+",
      color: "from-green-500 to-emerald-600",
      icon: "📚"
    },
  ];

  const quizzes = [
    {
      id: 1,
      title: "Algebra Quiz 1",
      chapter: "Chapter 2 – Linear Equations",
      status: "Completed",
      score: "85%",
      subject: "Mathematics",
      questions: 15,
      duration: "30 min",
      attempts: "1/3",
      color: "from-green-500 to-teal-600",
      icon: "📊"
    },
    {
      id: 2,
      title: "Science Quiz – Atoms",
      chapter: "Chapter 4 – Atoms & Molecules",
      status: "Not Started",
      score: null,
      subject: "Science",
      questions: 20,
      duration: "45 min",
      attempts: "0/3",
      color: "from-blue-500 to-indigo-600",
      icon: "⚛️"
    },
    {
      id: 3,
      title: "English Quiz – Poetry",
      chapter: "Chapter 3 – Poems",
      status: "In Progress",
      score: null,
      subject: "English",
      questions: 12,
      duration: "25 min",
      attempts: "1/3",
      color: "from-purple-500 to-violet-600",
      icon: "📝"
    },
  ];

  const getStatusConfig = (status, type = 'assignment') => {
    const configs = {
      "Pending": { 
        color: "bg-red-100 text-red-700 border-red-200", 
        icon: <AlertTriangle className="w-4 h-4" />,
        bgColor: "bg-red-50"
      },
      "Not Started": { 
        color: "bg-red-100 text-red-700 border-red-200", 
        icon: <Clock className="w-4 h-4" />,
        bgColor: "bg-red-50"
      },
      "Submitted": { 
        color: "bg-yellow-100 text-yellow-700 border-yellow-200", 
        icon: <Upload className="w-4 h-4" />,
        bgColor: "bg-yellow-50"
      },
      "In Progress": { 
        color: "bg-yellow-100 text-yellow-700 border-yellow-200", 
        icon: <Play className="w-4 h-4" />,
        bgColor: "bg-yellow-50"
      },
      "Graded": { 
        color: "bg-green-100 text-green-700 border-green-200", 
        icon: <Award className="w-4 h-4" />,
        bgColor: "bg-green-50"
      },
      "Completed": { 
        color: "bg-green-100 text-green-700 border-green-200", 
        icon: <CheckCircle className="w-4 h-4" />,
        bgColor: "bg-green-50"
      },
    };
    return configs[status] || { color: "bg-gray-100 text-gray-700", icon: <Clock className="w-4 h-4" /> };
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-600 border-red-200";
      case "Medium": return "bg-yellow-100 text-yellow-600 border-yellow-200";
      case "Low": return "bg-green-100 text-green-600 border-green-200";
      default: return "bg-gray-100 text-gray-600 border-gray-200";
    }
  };

  // Calculate stats
  const totalAssignments = assignments.length;
  const pendingAssignments = assignments.filter(a => a.status === "Pending").length;
  const totalQuizzes = quizzes.length;
  const completedQuizzes = quizzes.filter(q => q.status === "Completed").length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 shadow-lg mb-6">
            <FileText className="w-6 h-6 text-indigo-600" />
            <span className="text-indigo-600 font-semibold">Academic Tasks</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Assignments & Quizzes
          </h1>
          <p className="text-gray-600 text-lg">Track your assignments and test your knowledge with quizzes</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{totalAssignments}</h3>
            <p className="text-gray-600">Total Assignments</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{pendingAssignments}</h3>
            <p className="text-gray-600">Pending Tasks</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{totalQuizzes}</h3>
            <p className="text-gray-600">Total Quizzes</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{completedQuizzes}</h3>
            <p className="text-gray-600">Completed Quizzes</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Enhanced Assignments Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              Assignments
            </h2>
            <div className="space-y-6">
              {assignments.map((assignment) => {
                const statusConfig = getStatusConfig(assignment.status);
                return (
                  <div
                    key={assignment.id}
                    className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{assignment.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                            {assignment.title}
                          </h3>
                          <p className="text-gray-600 text-sm">{assignment.subject}</p>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold border ${getPriorityColor(assignment.priority)}`}>
                        {assignment.priority} Priority
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">{assignment.description}</p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>Due: {assignment.due}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4" />
                        <span>{assignment.points} Points</span>
                      </div>
                    </div>

                    {/* Status and Actions */}
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${statusConfig.color}`}>
                        {statusConfig.icon}
                        <span className="font-semibold text-sm">
                          {assignment.status}
                          {assignment.grade && ` (${assignment.grade})`}
                        </span>
                      </div>

                      <div className="flex gap-2">
                        {assignment.status === "Pending" && (
                          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                            <Upload className="w-4 h-4" />
                            Upload
                          </button>
                        )}
                        {assignment.status === "Submitted" && (
                          <button className="text-blue-600 border-2 border-blue-200 font-medium py-2 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300 flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            View
                          </button>
                        )}
                        {assignment.status === "Graded" && (
                          <button className="text-green-600 border-2 border-green-200 font-medium py-2 px-4 rounded-xl hover:bg-green-50 transition-all duration-300 flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Download
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Quizzes Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              Quizzes
            </h2>
            <div className="space-y-6">
              {quizzes.map((quiz) => {
                const statusConfig = getStatusConfig(quiz.status, 'quiz');
                return (
                  <div
                    key={quiz.id}
                    className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="text-3xl">{quiz.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                            {quiz.title}
                          </h3>
                          <p className="text-gray-600 text-sm">{quiz.chapter}</p>
                        </div>
                      </div>
                      {quiz.score && (
                        <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                          {quiz.score}
                        </div>
                      )}
                    </div>

                    {/* Quiz Details Grid */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-gray-800">{quiz.questions}</div>
                        <div className="text-xs text-gray-600">Questions</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-gray-800">{quiz.duration}</div>
                        <div className="text-xs text-gray-600">Duration</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-xl">
                        <div className="text-lg font-bold text-gray-800">{quiz.attempts}</div>
                        <div className="text-xs text-gray-600">Attempts</div>
                      </div>
                    </div>

                    {/* Status and Actions */}
                    <div className="flex items-center justify-between">
                      <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${statusConfig.color}`}>
                        {statusConfig.icon}
                        <span className="font-semibold text-sm">{quiz.status}</span>
                      </div>

                      <div className="flex gap-2">
                        {quiz.status === "Not Started" && (
                          <button className={`bg-gradient-to-r ${quiz.color} text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}>
                            <Play className="w-4 h-4" />
                            Start Quiz
                          </button>
                        )}
                        {quiz.status === "In Progress" && (
                          <button className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold py-2 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4" />
                            Continue
                          </button>
                        )}
                        {quiz.status === "Completed" && (
                          <button className="text-green-600 border-2 border-green-200 font-medium py-2 px-4 rounded-xl hover:bg-green-50 transition-all duration-300 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            View Results
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievement Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Award className="w-12 h-12" />
            <h3 className="text-3xl font-bold">Keep Up The Great Work!</h3>
          </div>
          <p className="text-indigo-100 text-lg mb-6">
            You've completed {completedQuizzes} out of {totalQuizzes} quizzes. Stay focused and achieve your academic goals!
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4">
              <div className="text-2xl font-bold">{Math.round((completedQuizzes/totalQuizzes) * 100)}%</div>
              <div className="text-indigo-100 text-sm">Quiz Completion</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4">
              <div className="text-2xl font-bold">{totalAssignments - pendingAssignments}</div>
              <div className="text-indigo-100 text-sm">Assignments Done</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}