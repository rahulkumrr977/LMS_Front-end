import { useState } from "react";
import {
  Plus,
  ClipboardList,
  CheckCircle,
  X,
  FileQuestion,
  UserCheck,
  Upload,
  Calendar,
  Eye,
  Edit,
  TrendingUp,
  Award,
  Clock,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function TeacherAssessments() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      title: "Essay on Global Warming",
      due: "2025-11-05",
      submissions: 22,
      graded: 18,
      status: "Active",
      totalStudents: 30,
    },
    {
      id: 2,
      title: "Physics Lab Report",
      due: "2025-11-08",
      submissions: 10,
      graded: 0,
      status: "Pending Review",
      totalStudents: 28,
    },
  ]);

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    due: "",
    file: null,
  });

  const [quizzes, setQuizzes] = useState([
    {
      id: 1,
      title: "Math Quiz 1 – Algebra",
      questions: 10,
      attempts: 25,
      avgScore: 78,
      status: "Active",
    },
    {
      id: 2,
      title: "Science Quiz – Atoms",
      questions: 8,
      attempts: 18,
      avgScore: 82,
      status: "Closed",
    },
  ]);

  const [showAssignmentForm, setShowAssignmentForm] = useState(false);
  const [showQuizForm, setShowQuizForm] = useState(false);

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    if (!newAssignment.title) return;
    setAssignments((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newAssignment.title,
        due: newAssignment.due,
        submissions: 0,
        graded: 0,
        status: "Active",
        totalStudents: 30,
      },
    ]);
    setNewAssignment({ title: "", due: "", file: null });
    setShowAssignmentForm(false);
  };

  const [newQuiz, setNewQuiz] = useState({ title: "", questions: 0 });
  const handleCreateQuiz = (e) => {
    e.preventDefault();
    if (!newQuiz.title) return;
    setQuizzes((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: newQuiz.title,
        questions: newQuiz.questions || 0,
        attempts: 0,
        avgScore: 0,
        status: "Active",
      },
    ]);
    setNewQuiz({ title: "", questions: 0 });
    setShowQuizForm(false);
  };

  const getStatusBadge = (status) => {
    if (status === "Active") {
      return (
        <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
          <CheckCircle className="w-3 h-3" />
          Active
        </span>
      );
    } else if (status === "Closed") {
      return (
        <span className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
          <Clock className="w-3 h-3" />
          Closed
        </span>
      );
    }
    return (
      <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
        <Clock className="w-3 h-3" />
        Pending
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg">
              <ClipboardList className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Assignments & Quizzes
              </h1>
              <p className="text-gray-600 mt-1">Create and manage student assessments</p>
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <ClipboardList className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{assignments.length}</h3>
            <p className="text-green-100">Total Assignments</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <FileQuestion className="w-6 h-6" />
              </div>
              <Sparkles className="w-6 h-6 text-purple-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{quizzes.length}</h3>
            <p className="text-purple-100">Total Quizzes</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <UserCheck className="w-6 h-6" />
              </div>
              <Award className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">
              {assignments.reduce((a, b) => a + b.graded, 0)}
            </h3>
            <p className="text-blue-100">Graded Students</p>
          </div>
        </div>

        {/* Assignments Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Assignments
              </span>
            </h2>
            <button
              onClick={() => setShowAssignmentForm(!showAssignmentForm)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
            >
              {showAssignmentForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {showAssignmentForm ? "Cancel" : "Create Assignment"}
            </button>
          </div>

          {/* New Assignment Form */}
          {showAssignmentForm && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border-2 border-blue-200 animate-in slide-in-from-top-4 duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-600" />
                New Assignment
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Title</label>
                    <input
                      type="text"
                      value={newAssignment.title}
                      onChange={(e) =>
                        setNewAssignment({ ...newAssignment, title: e.target.value })
                      }
                      className="w-full border-2 border-blue-300 p-3 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                      placeholder="e.g. Essay on Climate Change"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Due Date</label>
                    <input
                      type="date"
                      value={newAssignment.due}
                      onChange={(e) =>
                        setNewAssignment({ ...newAssignment, due: e.target.value })
                      }
                      className="w-full border-2 border-blue-300 p-3 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Upload File</label>
                    <input
                      type="file"
                      className="w-full border-2 border-blue-300 p-3 rounded-xl bg-white focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <button
                  onClick={handleCreateAssignment}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold"
                >
                  Save Assignment
                </button>
              </div>
            </div>
          )}

          {/* Assignments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {assignments.map((a) => (
              <div
                key={a.id}
                className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">{a.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>Due: {a.due}</span>
                    </div>
                  </div>
                  {getStatusBadge(a.status)}
                </div>

                {/* Progress Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Submissions</p>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-600" />
                      <span className="text-xl font-bold text-blue-600">{a.submissions}</span>
                      <span className="text-sm text-gray-600">/ {a.totalStudents}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Graded</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-xl font-bold text-green-600">{a.graded}</span>
                      <span className="text-sm text-gray-600">/ {a.submissions}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Completion Rate</span>
                    <span>{Math.round((a.submissions / a.totalStudents) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(a.submissions / a.totalStudents) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t-2 border-blue-200">
                  <button
                    onClick={() => alert("Open submissions page")}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow font-semibold flex items-center justify-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                  <button
                    onClick={() => alert("Open grading panel")}
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow font-semibold flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Grade
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quizzes Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                <FileQuestion className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Quizzes
              </span>
            </h2>
            <button
              onClick={() => setShowQuizForm(!showQuizForm)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
            >
              {showQuizForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {showQuizForm ? "Cancel" : "Create Quiz"}
            </button>
          </div>

          {/* New Quiz Form */}
          {showQuizForm && (
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mb-8 border-2 border-purple-200 animate-in slide-in-from-top-4 duration-300">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-purple-600" />
                New Quiz
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Quiz Title</label>
                    <input
                      type="text"
                      value={newQuiz.title}
                      onChange={(e) =>
                        setNewQuiz({ ...newQuiz, title: e.target.value })
                      }
                      className="w-full border-2 border-purple-300 p-3 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-200"
                      placeholder="e.g. Algebra Basics"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">No. of Questions</label>
                    <input
                      type="number"
                      value={newQuiz.questions}
                      onChange={(e) =>
                        setNewQuiz({
                          ...newQuiz,
                          questions: parseInt(e.target.value, 10) || 0,
                        })
                      }
                      className="w-full border-2 border-purple-300 p-3 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-200"
                      min="1"
                    />
                  </div>
                </div>
                <button
                  onClick={handleCreateQuiz}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold"
                >
                  Save Quiz
                </button>
              </div>
            </div>
          )}

          {/* Quizzes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {quizzes.map((q) => (
              <div
                key={q.id}
                className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">{q.title}</h3>
                    <p className="text-sm text-gray-600">
                      {q.questions} Questions
                    </p>
                  </div>
                  {getStatusBadge(q.status)}
                </div>

                {/* Quiz Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Attempts</p>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-xl font-bold text-purple-600">{q.attempts}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Avg Score</p>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-pink-600" />
                      <span className="text-xl font-bold text-pink-600">{q.avgScore}%</span>
                    </div>
                  </div>
                </div>

                {/* Score Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Average Performance</span>
                    <span>{q.avgScore}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${q.avgScore}%` }}
                    ></div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t-2 border-purple-200">
                  <button
                    onClick={() => alert("Open quiz editor")}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow font-semibold flex items-center justify-center gap-2"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => alert("View quiz results")}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow font-semibold flex items-center justify-center gap-2"
                  >
                    <BarChart3 className="w-4 h-4" />
                    Results
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}