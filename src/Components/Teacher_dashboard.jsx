import { useState } from "react";
import { 
  Plus, 
  BookOpen, 
  Edit, 
  CheckCircle, 
  Clock, 
  X,
  Upload,
  Sparkles,
  TrendingUp,
  Eye,
  Trash2,
  FileText,
  Users,
  Award
} from "lucide-react";

export default function TeacherCourses() {
  const [showForm, setShowForm] = useState(false);

  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Mathematics - Algebra",
      description: "Core algebra concepts and applications.",
      status: "Approved",
      students: 45,
      completion: 78,
      lessons: 12,
    },
    {
      id: 2,
      title: "Physics - Motion & Force",
      description: "Newton's Laws and motion analysis.",
      status: "Pending",
      students: 32,
      completion: 0,
      lessons: 8,
    },
  ]);

  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
  });

  const handleCreateCourse = (e) => {
    e.preventDefault();
    if (!newCourse.title) return;

    const newItem = {
      id: Date.now(),
      title: newCourse.title,
      description: newCourse.description,
      status: "Pending",
      students: 0,
      completion: 0,
      lessons: 0,
    };
    setCourses([...courses, newItem]);
    setNewCourse({ title: "", description: "" });
    setShowForm(false);
  };

  const getStatusBadge = (status) => {
    if (status === "Approved") {
      return (
        <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
          <CheckCircle className="w-3 h-3" />
          Approved
        </span>
      );
    }
    return (
      <span className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
        <Clock className="w-3 h-3" />
        Pending
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Course Management
                </h1>
                <p className="text-gray-600 mt-1">Create and manage your courses effectively</p>
              </div>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
            >
              {showForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {showForm ? "Cancel" : "Create New Course"}
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <BookOpen className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{courses.length}</h3>
            <p className="text-blue-100">Total Courses</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <CheckCircle className="w-6 h-6" />
              </div>
              <Award className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">
              {courses.filter((c) => c.status === "Approved").length}
            </h3>
            <p className="text-green-100">Approved Courses</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Clock className="w-6 h-6" />
              </div>
              <Sparkles className="w-6 h-6 text-yellow-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">
              {courses.filter((c) => c.status === "Pending").length}
            </h3>
            <p className="text-yellow-100">Pending Approval</p>
          </div>
        </div>

        {/* Create Course Form */}
        {showForm && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50 animate-in slide-in-from-top-4 duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Create New Course
              </span>
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Course Title
                  </label>
                  <input
                    type="text"
                    value={newCourse.title}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, title: e.target.value })
                    }
                    className="w-full border-2 border-gray-300 rounded-xl p-3 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                    placeholder="e.g., Advanced Calculus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">
                    Short Description
                  </label>
                  <input
                    type="text"
                    value={newCourse.description}
                    onChange={(e) =>
                      setNewCourse({ ...newCourse, description: e.target.value })
                    }
                    className="w-full border-2 border-gray-300 rounded-xl p-3 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                    placeholder="Brief description of the course"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                <label className="block text-sm font-semibold mb-3 text-gray-700 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-blue-600" />
                  Upload Course Materials (PDF/Video)
                </label>
                <input
                  type="file"
                  className="w-full border-2 border-blue-300 p-3 rounded-xl bg-white focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                />
                <p className="text-xs text-gray-600 mt-2">
                  Supported formats: PDF, MP4, AVI, MOV (Max 100MB)
                </p>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleCreateCourse}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold"
                >
                  Save Course
                </button>
                <button
                  onClick={() => {
                    setNewCourse({ title: "", description: "" });
                    setShowForm(false);
                  }}
                  className="px-8 py-3 rounded-xl border-2 border-gray-300 hover:bg-gray-50 transition-all duration-200 font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Courses Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Your Courses
              </span>
            </h2>
            <p className="text-gray-500 hidden lg:block">Manage all your courses</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-xl shadow-lg ${
                        course.status === "Approved" 
                          ? "bg-gradient-to-br from-green-500 to-emerald-600" 
                          : "bg-gradient-to-br from-yellow-500 to-orange-600"
                      }`}>
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-800">{course.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                  </div>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-2xl font-bold text-blue-600">{course.students}</p>
                    <p className="text-xs text-gray-600">Students</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <FileText className="w-5 h-5 text-purple-600" />
                    </div>
                    <p className="text-2xl font-bold text-purple-600">{course.lessons}</p>
                    <p className="text-xs text-gray-600">Lessons</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Award className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-2xl font-bold text-green-600">{course.completion}%</p>
                    <p className="text-xs text-gray-600">Complete</p>
                  </div>
                </div>

                {/* Status and Actions */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-gray-200">
                  <div className="flex items-center gap-2">
                    {getStatusBadge(course.status)}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg border-2 border-gray-300 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200 group/btn">
                      <Eye className="w-4 h-4 text-gray-600 group-hover/btn:text-blue-600" />
                    </button>
                    <button className="p-2 rounded-lg border-2 border-gray-300 hover:bg-indigo-50 hover:border-indigo-400 transition-all duration-200 group/btn">
                      <Edit className="w-4 h-4 text-gray-600 group-hover/btn:text-indigo-600" />
                    </button>
                    <button className="p-2 rounded-lg border-2 border-gray-300 hover:bg-red-50 hover:border-red-400 transition-all duration-200 group/btn">
                      <Trash2 className="w-4 h-4 text-gray-600 group-hover/btn:text-red-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-6 border-2 border-purple-200 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Create Lesson</h3>
                <p className="text-sm text-gray-600">Add new lesson content</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">View Students</h3>
                <p className="text-sm text-gray-600">Manage enrollments</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-200 hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">Analytics</h3>
                <p className="text-sm text-gray-600">Course performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}