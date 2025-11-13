import { useState } from "react";
import {
  Megaphone,
  Mail,
  MessageCircle,
  Send,
  User,
  Calendar,
  Share2,
  Bell,
  Sparkles,
  Clock,
  Users,
  Reply,
} from "lucide-react";

export default function TeacherCommunication() {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Midterm Exam Schedule",
      message: "All midterm exams will start from 10th November. Check the portal for your timetable.",
      date: "2025-11-02",
      priority: "High",
    },
    {
      id: 2,
      title: "Assignment Reminder",
      message: "Submit your Physics Lab Report by 8th November before midnight.",
      date: "2025-11-01",
      priority: "Medium",
    },
  ]);

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: "",
    message: "",
  });

  const handlePostAnnouncement = (e) => {
    e.preventDefault();
    if (!newAnnouncement.title || !newAnnouncement.message) return;
    setAnnouncements((prev) => [
      {
        id: Date.now(),
        title: newAnnouncement.title,
        message: newAnnouncement.message,
        date: new Date().toISOString().split("T")[0],
        priority: "Medium",
      },
      ...prev,
    ]);
    setNewAnnouncement({ title: "", message: "" });
  };

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Rohit Sharma",
      message: "Sir, can you please extend the submission deadline?",
      time: "10:30 AM",
      isTeacher: false,
    },
    {
      id: 2,
      sender: "Teacher (You)",
      message: "Please submit by Friday; extensions are limited.",
      time: "10:32 AM",
      isTeacher: true,
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage) return;
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "Teacher (You)", message: newMessage, time: "Now", isTeacher: true },
    ]);
    setNewMessage("");
  };

  const getPriorityBadge = (priority) => {
    if (priority === "High") {
      return (
        <span className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
          <Bell className="w-3 h-3" />
          High Priority
        </span>
      );
    }
    return (
      <span className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit">
        <Bell className="w-3 h-3" />
        Medium Priority
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl shadow-lg">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Communication Center
              </h1>
              <p className="text-gray-600 mt-1">Connect with your students and share updates</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Megaphone className="w-6 h-6" />
              </div>
              <Sparkles className="w-6 h-6 text-yellow-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{announcements.length}</h3>
            <p className="text-yellow-100">Active Announcements</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <Users className="w-6 h-6 text-blue-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">{messages.length}</h3>
            <p className="text-blue-100">Messages Exchanged</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <MessageCircle className="w-6 h-6" />
              </div>
              <Reply className="w-6 h-6 text-green-200" />
            </div>
            <h3 className="text-3xl font-bold mb-1">2</h3>
            <p className="text-green-100">Forum Discussions</p>
          </div>
        </div>

        {/* Announcements Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl">
              <Megaphone className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Announcements
            </h2>
          </div>

          {/* New Announcement Form */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 mb-8 border-2 border-yellow-200">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5 text-yellow-600" />
              Create New Announcement
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Title</label>
                  <input
                    type="text"
                    value={newAnnouncement.title}
                    onChange={(e) =>
                      setNewAnnouncement({ ...newAnnouncement, title: e.target.value })
                    }
                    placeholder="e.g. Important Notice"
                    className="w-full border-2 border-yellow-300 p-3 rounded-xl focus:ring-4 focus:ring-yellow-200 focus:border-yellow-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                  <input
                    type="text"
                    value={newAnnouncement.message}
                    onChange={(e) =>
                      setNewAnnouncement({ ...newAnnouncement, message: e.target.value })
                    }
                    placeholder="Write your announcement..."
                    className="w-full border-2 border-yellow-300 p-3 rounded-xl focus:ring-4 focus:ring-yellow-200 focus:border-yellow-500 transition-all duration-200"
                  />
                </div>
              </div>
              <button
                onClick={handlePostAnnouncement}
                className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-3 rounded-xl hover:from-yellow-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold"
              >
                Post Announcement
              </button>
            </div>
          </div>

          {/* Announcement List */}
          <div className="space-y-4">
            {announcements.map((a) => (
              <div
                key={a.id}
                className="group bg-gradient-to-br from-white to-yellow-50 rounded-2xl p-6 border-2 border-yellow-200 hover:border-yellow-400 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg">
                        <Megaphone className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-gray-800">{a.title}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{a.message}</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        {a.date}
                      </div>
                      {getPriorityBadge(a.priority)}
                    </div>
                  </div>
                  <button
                    onClick={() => alert("Announcement shared successfully")}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Messages Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Messages
            </h2>
          </div>

          {/* Message Chat Box */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border-2 border-blue-200 h-96 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isTeacher ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-md p-4 rounded-2xl shadow-lg ${
                    msg.isTeacher
                      ? "bg-gradient-to-br from-blue-600 to-indigo-600 text-white"
                      : "bg-white text-gray-700 border-2 border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      msg.isTeacher ? "bg-white/20" : "bg-gradient-to-br from-gray-300 to-gray-400"
                    }`}>
                      <User className={`w-4 h-4 ${msg.isTeacher ? "text-white" : "text-gray-700"}`} />
                    </div>
                    <p className="font-semibold text-sm">{msg.sender}</p>
                  </div>
                  <p className="mb-2">{msg.message}</p>
                  <div className="flex items-center gap-1 text-xs opacity-70">
                    <Clock className="w-3 h-3" />
                    {msg.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 border-2 border-blue-300 rounded-xl p-4 focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage(e);
                }
              }}
            />
            <button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send
            </button>
          </div>
        </div>

        {/* Discussion Forum Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Discussion Forum
            </h2>
          </div>

          <div className="space-y-6">
            {/* Student Discussion */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  R
                </div>
                <div>
                  <p className="font-bold text-gray-800">Rahul Mehta</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-3 h-3" />
                    Posted 2 hours ago
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Sir, can we get the recording for yesterday's algebra lecture?
              </p>
              <button
                onClick={() => alert("Reply to this discussion")}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow font-semibold flex items-center gap-2"
              >
                <Reply className="w-4 h-4" />
                Reply
              </button>
            </div>

            {/* Teacher Response */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  T
                </div>
                <div>
                  <p className="font-bold text-gray-800">Teacher (You)</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-3 h-3" />
                    Posted 1 hour ago
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                The recording is available in the "Lecture Delivery" section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}