import { useState } from "react";
import {
  UserCheck,
  UserX,
  ClipboardList,
  Calendar,
  Plus,
  CheckCircle,
  Clock,
  X,
  Users,
  Target,
  Sparkles,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

export default function TeacherAttendance() {
  const [date, setDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [students, setStudents] = useState([
    { id: 1, name: "Rohit Sharma", present: true, rollNo: "001" },
    { id: 2, name: "Pooja Verma", present: false, rollNo: "002" },
    { id: 3, name: "Amit Kumar", present: true, rollNo: "003" },
    { id: 4, name: "Sneha Singh", present: true, rollNo: "004" },
  ]);

  const [tasks, setTasks] = useState([
    { id: 1, title: "Math Worksheet", due: "2025-11-03", status: "Pending" },
    { id: 2, title: "Science Experiment", due: "2025-11-05", status: "Completed" },
  ]);

  const [newTask, setNewTask] = useState({ title: "", due: "" });
  const [showTaskForm, setShowTaskForm] = useState(false);

  const toggleAttendance = (id) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, present: !s.present } : s))
    );
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTask.title || !newTask.due) return;
    setTasks([
      ...tasks,
      { id: Date.now(), title: newTask.title, due: newTask.due, status: "Pending" },
    ]);
    setNewTask({ title: "", due: "" });
    setShowTaskForm(false);
  };

  const markTaskComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, status: "Completed" } : t
      )
    );
  };

  const attendanceSummary = {
    total: students.length,
    present: students.filter((s) => s.present).length,
    absent: students.filter((s) => !s.present).length,
  };

  const attendancePercentage = Math.round((attendanceSummary.present / attendanceSummary.total) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-cyan-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl shadow-lg">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                Attendance & Task Management
              </h1>
              <p className="text-gray-600 mt-1">Track student attendance and manage class tasks</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <Sparkles className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{attendanceSummary.total}</h3>
            <p className="text-blue-100">Total Students</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <UserCheck className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{attendanceSummary.present}</h3>
            <p className="text-green-100">Present Today</p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <UserX className="w-6 h-6" />
              </div>
              <AlertCircle className="w-6 h-6 text-red-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{attendanceSummary.absent}</h3>
            <p className="text-red-100">Absent Today</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Target className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-purple-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{attendancePercentage}%</h3>
            <p className="text-purple-100">Attendance Rate</p>
          </div>
        </div>

        {/* Attendance Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Student Attendance
              </span>
            </h2>
            <div className="flex items-center gap-3 bg-gradient-to-r from-teal-50 to-emerald-50 px-6 py-3 rounded-xl border-2 border-teal-200">
              <Calendar className="w-5 h-5 text-teal-600" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-transparent border-none focus:outline-none font-semibold text-gray-700"
              />
            </div>
          </div>

          {/* Student Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {students.map((s) => (
              <div
                key={s.id}
                className={`group rounded-2xl p-6 border-2 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  s.present
                    ? "bg-gradient-to-br from-white to-green-50 border-green-200 hover:border-green-400"
                    : "bg-gradient-to-br from-white to-red-50 border-red-200 hover:border-red-400"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                      s.present
                        ? "bg-gradient-to-br from-green-500 to-emerald-600"
                        : "bg-gradient-to-br from-red-500 to-pink-600"
                    }`}>
                      {s.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{s.name}</h3>
                      <p className="text-sm text-gray-600">Roll No: {s.rollNo}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    {s.present ? (
                      <span className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit">
                        <UserCheck className="w-4 h-4" />
                        Present
                      </span>
                    ) : (
                      <span className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 w-fit">
                        <UserX className="w-4 h-4" />
                        Absent
                      </span>
                    )}
                    <button
                      onClick={() => toggleAttendance(s.id)}
                      className={`px-4 py-2 rounded-xl text-sm font-semibold transform hover:scale-105 transition-all duration-200 shadow ${
                        s.present
                          ? "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700"
                          : "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700"
                      }`}
                    >
                      Mark {s.present ? "Absent" : "Present"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Attendance Progress */}
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-6 border-2 border-teal-200">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-gray-800">Today's Attendance</h3>
              <span className="text-2xl font-bold text-emerald-600">{attendancePercentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${attendancePercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Task Management Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                <ClipboardList className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Class Tasks
              </span>
            </h2>
            <button
              onClick={() => setShowTaskForm(!showTaskForm)}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
            >
              {showTaskForm ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              {showTaskForm ? "Cancel" : "Add Task"}
            </button>
          </div>

          {/* New Task Form */}
          {showTaskForm && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border-2 border-blue-200">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-600" />
                New Task
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Task Title</label>
                    <input
                      type="text"
                      value={newTask.title}
                      onChange={(e) =>
                        setNewTask({ ...newTask, title: e.target.value })
                      }
                      className="w-full border-2 border-blue-300 rounded-xl p-3 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                      placeholder="e.g. Complete Worksheet"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-700">Due Date</label>
                    <input
                      type="date"
                      value={newTask.due}
                      onChange={(e) =>
                        setNewTask({ ...newTask, due: e.target.value })
                      }
                      className="w-full border-2 border-blue-300 rounded-xl p-3 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>
                </div>
                <button
                  onClick={handleAddTask}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold"
                >
                  Save Task
                </button>
              </div>
            </div>
          )}

          {/* Task Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {tasks.map((t) => (
              <div
                key={t.id}
                className={`group rounded-2xl p-6 border-2 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  t.status === "Completed"
                    ? "bg-gradient-to-br from-white to-green-50 border-green-200 hover:border-green-400"
                    : "bg-gradient-to-br from-white to-yellow-50 border-yellow-200 hover:border-yellow-400"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-xl shadow-lg ${
                      t.status === "Completed"
                        ? "bg-gradient-to-br from-green-500 to-emerald-600"
                        : "bg-gradient-to-br from-yellow-500 to-orange-600"
                    }`}>
                      {t.status === "Completed" ? (
                        <CheckCircle className="w-6 h-6 text-white" />
                      ) : (
                        <Clock className="w-6 h-6 text-white" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{t.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                        <Calendar className="w-4 h-4" />
                        Due: {t.due}
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                    t.status === "Completed"
                      ? "bg-gradient-to-r from-green-100 to-emerald-100 text-green-700"
                      : "bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-700"
                  }`}>
                    {t.status}
                  </span>
                </div>

                {t.status !== "Completed" && (
                  <button
                    onClick={() => markTaskComplete(t.id)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Mark Complete
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Task Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Completed Tasks</p>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    {tasks.filter((t) => t.status === "Completed").length}
                  </h3>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">Pending Tasks</p>
                  <h3 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    {tasks.filter((t) => t.status === "Pending").length}
                  </h3>
                </div>
                <div className="p-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl">
                  <Clock className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}