import { useState } from "react";
import {
  Video,
  Calendar,
  Play,
  Upload,
  Users,
  Megaphone,
  Monitor,
  BarChart3,
  Clock,
  Plus,
  X,
  Radio,
  CheckCircle,
  Download,
  Settings,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function TeacherLectures() {
  const [showCreate, setShowCreate] = useState(false);
  const [sessions, setSessions] = useState([
    {
      id: 1,
      title: "Mathematics - Algebra: Quadratic Equations",
      date: "2025-11-03",
      time: "10:00",
      mode: "Live",
      status: "Scheduled",
      attendees: 28,
      duration: "45 min",
    },
    {
      id: 2,
      title: "Physics - Motion (Recorded)",
      date: "2025-10-28",
      time: "00:00",
      mode: "Recorded",
      status: "Uploaded",
      attendees: 120,
      recordingUrl: "#",
      duration: "60 min",
    },
  ]);

  const [newSession, setNewSession] = useState({
    title: "",
    date: "",
    time: "",
    mode: "Live",
  });

  const handleCreateSession = (e) => {
    e.preventDefault();
    if (!newSession.title || !newSession.date) return;
    const s = {
      id: Date.now(),
      ...newSession,
      status: newSession.mode === "Live" ? "Scheduled" : "Uploaded",
      attendees: 0,
      duration: "45 min",
    };
    setSessions((prev) => [s, ...prev]);
    setNewSession({ title: "", date: "", time: "", mode: "Live" });
    setShowCreate(false);
  };

  const handleStartSession = (id) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "Ongoing" } : s))
    );
    alert("Starting live session (integration required for real meeting).");
  };

  const handleEndSession = (id) => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: "Completed", attendees: Math.floor(Math.random() * 30) + 5 } : s
      )
    );
  };

  const handleUploadRecording = (id) => {
    setSessions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "Uploaded", recordingUrl: "#" } : s))
    );
    alert("Recording uploaded (implement file upload to server).");
  };

  const getStatusBadge = (status) => {
    const configs = {
      Scheduled: { bg: "bg-blue-100", text: "text-blue-700", icon: Calendar },
      Ongoing: { bg: "bg-green-100", text: "text-green-700", icon: Radio },
      Completed: { bg: "bg-gray-100", text: "text-gray-700", icon: CheckCircle },
      Uploaded: { bg: "bg-purple-100", text: "text-purple-700", icon: Upload },
    };
    const config = configs[status] || configs.Scheduled;
    const Icon = config.icon;
    return (
      <span className={`${config.bg} ${config.text} px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1`}>
        <Icon className="w-3 h-3" />
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                <Video className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Lecture Delivery
                </h1>
                <p className="text-gray-600 mt-1">Manage your live sessions and recorded content</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowCreate((s) => !s)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
              >
                {showCreate ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                {showCreate ? "Cancel" : "Schedule Session"}
              </button>

              <button
                onClick={() => alert("Open quick tools (polls, whiteboard).")}
                className="bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-200 shadow font-semibold flex items-center gap-2"
              >
                <BarChart3 className="w-5 h-5" />
                Quick Tools
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{sessions.filter(s => s.status === "Scheduled").length}</h3>
            <p className="text-blue-100">Upcoming Sessions</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Video className="w-6 h-6" />
              </div>
              <Sparkles className="w-6 h-6 text-purple-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{sessions.filter(s => s.mode === "Recorded").length}</h3>
            <p className="text-purple-100">Recorded Lectures</p>
          </div>

          <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Users className="w-6 h-6" />
              </div>
              <TrendingUp className="w-6 h-6 text-pink-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{sessions.reduce((acc, s) => acc + s.attendees, 0)}</h3>
            <p className="text-pink-100">Total Attendees</p>
          </div>
        </div>

        {/* Create Session Form */}
        {showCreate && (
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50 animate-in slide-in-from-top-4 duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Create New Session
              </span>
            </h2>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Session Title</label>
                  <input
                    type="text"
                    value={newSession.title}
                    onChange={(e) => setNewSession({ ...newSession, title: e.target.value })}
                    className="w-full border-2 border-gray-300 rounded-xl p-3 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                    placeholder="e.g., Algebra - Quadratic Equations"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Date</label>
                  <input
                    type="date"
                    value={newSession.date}
                    onChange={(e) => setNewSession({ ...newSession, date: e.target.value })}
                    className="w-full border-2 border-gray-300 rounded-xl p-3 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Time</label>
                  <input
                    type="time"
                    value={newSession.time}
                    onChange={(e) => setNewSession({ ...newSession, time: e.target.value })}
                    className="w-full border-2 border-gray-300 rounded-xl p-3 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4">
                <label className="block text-sm font-semibold mb-3 text-gray-700">Session Type</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-200">
                    <input
                      type="radio"
                      name="mode"
                      checked={newSession.mode === "Live"}
                      onChange={() => setNewSession({ ...newSession, mode: "Live" })}
                      className="w-5 h-5"
                    />
                    <div className="flex items-center gap-2">
                      <Radio className="w-5 h-5 text-blue-600" />
                      <span className="font-medium">Live Session</span>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-purple-500 transition-all duration-200">
                    <input
                      type="radio"
                      name="mode"
                      checked={newSession.mode === "Recorded"}
                      onChange={() => setNewSession({ ...newSession, mode: "Recorded" })}
                      className="w-5 h-5"
                    />
                    <div className="flex items-center gap-2">
                      <Upload className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">Pre-recorded / Upload</span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={handleCreateSession}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold"
                >
                  Save Session
                </button>
                <button
                  onClick={() => {
                    setNewSession({ title: "", date: "", time: "", mode: "Live" });
                    setShowCreate(false);
                  }}
                  className="px-8 py-3 rounded-xl border-2 border-gray-300 hover:bg-gray-50 transition-all duration-200 font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sessions List */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Your Sessions
              </span>
            </h2>
            <p className="text-gray-500 hidden lg:block">Manage live classes and recordings</p>
          </div>

          <div className="space-y-6">
            {sessions.map((s) => (
              <div key={s.id} className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className={`rounded-xl p-4 ${
                      s.mode === "Live" ? "bg-gradient-to-br from-blue-500 to-blue-600" : "bg-gradient-to-br from-purple-500 to-purple-600"
                    } shadow-lg`}>
                      {s.mode === "Live" ? (
                        <Radio className="w-7 h-7 text-white" />
                      ) : (
                        <Video className="w-7 h-7 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-gray-800 mb-2">{s.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {s.date}
                        </span>
                        {s.time && (
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {s.time}
                          </span>
                        )}
                        <span className="px-3 py-1 bg-gray-100 rounded-full font-medium">
                          {s.duration}
                        </span>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        {getStatusBadge(s.status)}
                        <span className="flex items-center gap-2 text-sm text-gray-600">
                          <Users className="w-4 h-4" />
                          <span className="font-semibold">{s.attendees}</span> attendees
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {s.mode === "Live" && s.status === "Scheduled" && (
                      <button
                        onClick={() => handleStartSession(s.id)}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold"
                      >
                        <Play className="w-4 h-4" />
                        Start
                      </button>
                    )}

                    {s.status === "Ongoing" && (
                      <>
                        <button
                          onClick={() => handleEndSession(s.id)}
                          className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:from-red-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold"
                        >
                          End Session
                        </button>
                        <button
                          onClick={() => alert("Open live tools (polls, breakout rooms).")}
                          className="px-6 py-3 rounded-xl border-2 border-gray-300 hover:bg-gray-50 flex items-center gap-2 font-semibold transition-all duration-200"
                        >
                          <Settings className="w-4 h-4" />
                          Tools
                        </button>
                      </>
                    )}

                    {s.mode === "Recorded" && s.recordingUrl && (
                      <button
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        View
                      </button>
                    )}

                    {s.mode === "Recorded" && s.status !== "Uploaded" && (
                      <button
                        onClick={() => handleUploadRecording(s.id)}
                        className="px-6 py-3 rounded-xl border-2 border-gray-300 hover:bg-gray-50 flex items-center gap-2 font-semibold transition-all duration-200"
                      >
                        <Upload className="w-4 h-4" />
                        Upload
                      </button>
                    )}

                    <button
                      onClick={() => alert("Open attendance / session report (implement API).")}
                      className="px-6 py-3 rounded-xl border-2 border-gray-300 hover:bg-gray-50 flex items-center gap-2 font-semibold transition-all duration-200"
                    >
                      <Users className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => alert("Open announcement composer (implement).")}
                      className="px-6 py-3 rounded-xl border-2 border-gray-300 hover:bg-gray-50 flex items-center gap-2 font-semibold transition-all duration-200"
                    >
                      <Megaphone className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recorded Lectures Library */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl">
                <Video className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Recorded Lectures Library
              </span>
            </h2>
            <p className="text-gray-500 hidden lg:block">Upload, view and manage recordings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sessions
              .filter((s) => s.mode === "Recorded")
              .map((rec) => (
                <div key={rec.id} className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="mb-4">
                    <div className="w-full h-40 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                      <Video className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{rec.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Calendar className="w-4 h-4" />
                      {rec.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-gray-600" />
                      <span className="font-semibold text-gray-800">{rec.attendees}</span>
                      <span className="text-gray-600">views</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => alert("Play recording (implement player).")}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow font-semibold flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Play
                    </button>
                    <button
                      onClick={() => alert("Download recording (implement).")}
                      className="px-4 py-2 rounded-xl border-2 border-purple-300 hover:bg-purple-50 transition-all duration-200 font-semibold"
                    >
                      <Download className="w-4 h-4" />
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