import { useState } from "react";
import { 
  BookOpen, 
  Calendar, 
  Bell, 
  Users, 
  Target, 
  TrendingUp, 
  Clock,
  Award,
  Play,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  User
} from "lucide-react";

import { useTranslation } from "react-i18next";


export default function Student_dashboard() {

  const { t } = useTranslation();

  const [quote] = useState("Small steps every day = Big results.");

  const courses = [
    { id: 1, title: "Mathematics", instructor: "Mr. Sharma", progress: 40, color: "from-blue-500 to-indigo-600", accent: "bg-blue-50 border-blue-200", icon: "📊" },
    { id: 2, title: "Science", instructor: "Mrs. Gupta", progress: 70, color: "from-green-500 to-emerald-600", accent: "bg-green-50 border-green-200", icon: "🧪" },
    { id: 3, title: "English", instructor: "Mr. Singh", progress: 90, color: "from-purple-500 to-violet-600", accent: "bg-purple-50 border-purple-200", icon: "📚" },
  ];

  const events = [
    { id: 1, type: "Assignment", title: "Math Homework", date: "Sep 15", priority: "high", icon: "📝", color: "text-red-600 bg-red-50" },
    { id: 2, type: "Quiz", title: "Science Quiz", date: "Sep 18", priority: "medium", icon: "🧠", color: "text-yellow-600 bg-yellow-50" },
    { id: 3, type: "Live Session", title: "English Grammar", date: "Sep 20", priority: "low", icon: "🎥", color: "text-blue-600 bg-blue-50" },
  ];

  const notifications = [
    { id: 1, message: "New content uploaded in Science.", type: "info", time: "2 hours ago" },
    { id: 2, message: "Assignment deadline extended for Math.", type: "warning", time: "5 hours ago" },
    { id: 3, message: "Quiz results available in English.", type: "success", time: "1 day ago" },
  ];

  const attendance = [
    { subject: "Math", attended: 8, total: 10, color: "from-blue-400 to-blue-600" },
    { subject: "Science", attended: 6, total: 8, color: "from-green-400 to-green-600" },
    { subject: "English", attended: 10, total: 10, color: "from-purple-400 to-purple-600" },
  ];

  const overallAttendance = Math.round(
    (attendance.reduce((acc, s) => acc + s.attended, 0) /
      attendance.reduce((acc, s) => acc + s.total, 0)) *
      100
  );

  const getAttendanceColor = (percent) => {
    if (percent >= 80) return "text-green-600 bg-green-50";
    if (percent >= 60) return "text-yellow-600 bg-yellow-50";
    return "text-red-600 bg-red-50";
  };

  const getNotificationIcon = (type) => {
    switch(type) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning': return <AlertCircle className="w-4 h-4 text-yellow-500" />;
      default: return <Bell className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-4 sm:px-6 md:px-8 py-6">
      <div className="w-full max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Welcome Section with Enhanced Design */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">
                  {t("welcome", { name: "Rahul" })}
                  </h1>
                <p className="text-indigo-100">{t("keep_learning")}</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mt-6">
              <p className="text-lg italic font-medium">"{t("quote")}"</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{t("active_courses")}</p>
                <p className="text-2xl font-bold text-gray-800">{courses.length}</p>
              </div>
              <BookOpen className="w-8 h-8 text-indigo-600" />
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{t("attendance")}</p>
                <p className="text-2xl font-bold text-gray-800">{overallAttendance}%</p>
              </div>
              <Users className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{t("upcoming_events")}</p>
                <p className="text-2xl font-bold text-gray-800">{events.length}</p>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">{t("notifications")}</p>
                <p className="text-2xl font-bold text-gray-800">{notifications.length}</p>
              </div>
              <Bell className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>

        {/* Courses Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            {t("your_courses")}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className={`${course.accent} border-2 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">{course.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                    <p className="text-gray-600 text-sm">{t("instructor", { name: course.instructor })}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">{t("progress")}</span>
                    <span className="text-sm font-semibold text-gray-800">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ width: `${course.progress}%` }}
                    >
                      <div className="h-full bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <button className={`w-full bg-gradient-to-r ${course.color} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}>
                  <Play className="w-4 h-4" />
                  {t("resume_learning")}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Events Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              {t("upcoming_events")}
            </h2>
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl space-y-4">
              {events.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center text-lg`}>
                      {event.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{event.title}</p>
                      <p className="text-sm text-gray-600">{t(`event_type_${event.type.toLowerCase()}`)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-800">{event.date}</p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      event.priority === 'high' ? 'bg-red-100 text-red-600' : 
                      event.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' : 
                      'bg-green-100 text-green-600'
                    }`}>
                      {t(`priority_${event.priority}`)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notifications Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Bell className="w-4 h-4 text-white" />
              </div>
              Notifications
            </h2>
            <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl space-y-4">
              {notifications.map((note) => (
                <div key={note.id} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  {getNotificationIcon(note.type)}
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{note.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{note.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Attendance Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            {t("attendance")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {attendance.map((subj, idx) => {
              const percent = Math.round((subj.attended / subj.total) * 100);
              return (
                <div key={idx} className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{subj.subject}</h3>
                  <p className="text-gray-600 mb-4">{t("sessions_attended", {attended: subj.attended,total: subj.total,})}</p>
                  
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray={`${percent}, 100`}
                        className="animate-pulse"
                      />
                      <defs>
                        <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor={percent >= 80 ? "#10b981" : percent >= 60 ? "#f59e0b" : "#ef4444"} />
                          <stop offset="100%" stopColor={percent >= 80 ? "#059669" : percent >= 60 ? "#d97706" : "#dc2626"} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-800">{percent}%</span>
                    </div>
                  </div>
                  {percent >= 80? t("excellent"): percent >= 60? t("good"): t("needs_improvement")}
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getAttendanceColor(percent)}`}>
                    
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t("overall_attendance")}</h3>
            <div className={`inline-block text-3xl font-bold px-6 py-3 rounded-xl ${getAttendanceColor(overallAttendance)}`}>
              {overallAttendance}%
            </div>
          </div>
        </div>

        {/* Learning Goals */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            {t("learning_goals")}
          </h2>
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800">{t("weekly_target")}</h3>
                <p className="text-gray-600">{t("target_description")}</p>
              </div>
              <Award className="w-12 h-12 text-purple-600" />
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600">{t("chapters_completed", { completed: 1, total: 2 })}</span>
                <span className="font-bold text-purple-600">{t("chapters_completed", { completed: 1, total: 2 })}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-4 rounded-full shadow-lg" style={{ width: "50%" }}>
                  <div className="h-full bg-white/20 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>{t("halfway_there")}</span>
              <span>{t("percent_complete", { percent: 50 })}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}