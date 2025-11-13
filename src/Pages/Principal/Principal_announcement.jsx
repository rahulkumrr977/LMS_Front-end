import { useState } from "react";
import { 
  Megaphone, 
  Calendar, 
  Plus, 
  Eye, 
  Edit, 
  X, 
  Users, 
  Clock,
  CheckCircle,
  AlertCircle,
  FileText,
  Send,
} from "lucide-react";

export default function PrincipalAnnouncements() {
  const [announcements] = useState([
    { id: 1, title: "Exam Dates", audience: "All Students", status: "Sent", scheduled: "2025-11-01 09:00", icon: "📚" },
    { id: 2, title: "Staff Meeting", audience: "All Teachers", status: "Scheduled", scheduled: "2025-11-05 15:00", icon: "👥" },
    { id: 3, title: "Network Maintenance", audience: "Both", status: "Draft", scheduled: null, icon: "⚙️" },
  ]);

  const getStatusConfig = (status) => {
    if (status === "Sent") {
      return { 
        bg: "from-green-100 to-emerald-100", 
        text: "text-green-700", 
        icon: CheckCircle,
        border: "border-green-300"
      };
    } else if (status === "Scheduled") {
      return { 
        bg: "from-yellow-100 to-orange-100", 
        text: "text-yellow-700", 
        icon: Clock,
        border: "border-yellow-300"
      };
    }
    return { 
      bg: "from-gray-100 to-slate-100", 
      text: "text-gray-700", 
      icon: FileText,
      border: "border-gray-300"
    };
  };

  const getAudienceIcon = (audience) => {
    if (audience === "All Students") return "👨‍🎓";
    if (audience === "All Teachers") return "👨‍🏫";
    return "🌐";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl shadow-lg">
                <Megaphone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Announcements Management
                </h1>
                <p className="text-gray-600 mt-1">Create and manage institutional announcements</p>
              </div>
            </div>

            <button 
              onClick={() => alert("Creating new announcement...")}
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-3 rounded-xl hover:from-orange-700 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              New Announcement
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Send className="w-6 h-6" />
              </div>
              <CheckCircle className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">
              {announcements.filter(a => a.status === "Sent").length}
            </h3>
            <p className="text-green-100">Sent Announcements</p>
          </div>

          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Clock className="w-6 h-6" />
              </div>
              <AlertCircle className="w-6 h-6 text-yellow-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">
              {announcements.filter(a => a.status === "Scheduled").length}
            </h3>
            <p className="text-yellow-100">Scheduled</p>
          </div>

          <div className="bg-gradient-to-br from-gray-500 to-slate-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <FileText className="w-6 h-6" />
              </div>
              <Edit className="w-6 h-6 text-gray-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">
              {announcements.filter(a => a.status === "Draft").length}
            </h3>
            <p className="text-gray-100">Drafts</p>
          </div>
        </div>

        {/* Announcements List */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl">
              <Megaphone className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              All Announcements
            </h2>
          </div>

          <div className="space-y-4">
            {announcements.map((a) => {
              const statusConfig = getStatusConfig(a.status);
              const StatusIcon = statusConfig.icon;
              
              return (
                <div
                  key={a.id}
                  className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl p-6 border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    {/* Left Section */}
                    <div className="flex items-start gap-4 flex-1">
                      <div className="text-5xl">{a.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-800 mb-2">{a.title}</h3>
                        
                        {/* Audience Badge */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 w-fit">
                            <Users className="w-4 h-4" />
                            {a.audience}
                          </div>
                          <span className="text-2xl">{getAudienceIcon(a.audience)}</span>
                        </div>

                        {/* Status Badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${statusConfig.bg} ${statusConfig.text} border-2 ${statusConfig.border} w-fit`}>
                          <StatusIcon className="w-4 h-4" />
                          {a.status}
                        </div>

                        {/* Schedule Info */}
                        {a.scheduled && (
                          <div className="flex items-center gap-2 mt-3 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{a.scheduled}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <button
                        onClick={() => alert(`Viewing announcement ${a.id}`)}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View
                      </button>

                      {a.status === "Draft" && (
                        <button
                          onClick={() => alert(`Editing announcement ${a.id}`)}
                          className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
                        >
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                      )}

                      {a.status === "Scheduled" && (
                        <button
                          onClick={() => alert(`Canceling announcement ${a.id}`)}
                          className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-red-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
                        >
                          <X className="w-4 h-4" />
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Announcement Insights
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800">Total Reach</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Your announcements have reached <span className="font-bold text-blue-600">all students and teachers</span> in the institution.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-green-800">Delivery Rate</h3>
              </div>
              <p className="text-gray-700 text-sm">
                <span className="font-bold text-green-600">100%</span> of scheduled announcements were delivered successfully.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-yellow-800">Upcoming</h3>
              </div>
              <p className="text-gray-700 text-sm">
                <span className="font-bold text-yellow-600">{announcements.filter(a => a.status === "Scheduled").length}</span> announcements scheduled for delivery soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}