import React, { useState } from "react";
import { Megaphone, Calendar, Send, RotateCcw, Users, Zap, Clock } from "lucide-react";

export default function PrincipalNewAnnouncement() {
  const [form, setForm] = useState({
    title: "",
    message: "",
    audience: "all_students",
    delivery: "send_now",
    scheduledFor: "",
    expiry: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Announcement saved/scheduled (implement API). Data: " +
        JSON.stringify(form, null, 2)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl shadow-lg">
              <Megaphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                New Announcement
              </h1>
              <p className="text-gray-600 mt-1">Create and send announcements to your school community</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50 space-y-6">
          
          {/* Title Field */}
          <div className="group">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2 mb-2">
              <span className="text-2xl">📝</span>
              <span>Title</span>
              <span className="text-gray-400 text-xs font-normal">(max 120 characters)</span>
            </label>
            <input
              required
              maxLength={120}
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full border-2 border-orange-200 rounded-xl p-4 focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all duration-300 outline-none bg-gradient-to-br from-white to-orange-50"
              placeholder="Enter announcement title..."
            />
            <p className="text-xs text-gray-500 mt-2 font-medium">{form.title.length}/120 characters</p>
          </div>

          {/* Message Field */}
          <div className="group">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2 mb-2">
              <span className="text-2xl">✍️</span>
              <span>Message</span>
            </label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border-2 border-amber-200 rounded-xl p-4 focus:border-amber-500 focus:ring-4 focus:ring-amber-200 transition-all duration-300 outline-none resize-none bg-gradient-to-br from-white to-amber-50"
              rows={6}
              placeholder="Write your announcement message here..."
            ></textarea>
          </div>

          {/* Three Column Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Audience */}
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Users className="w-5 h-5" />
                </div>
                <label className="text-sm font-bold">Audience</label>
              </div>
              <select
                value={form.audience}
                onChange={(e) => setForm({ ...form, audience: e.target.value })}
                className="w-full border-2 border-blue-300 rounded-xl p-3 bg-white text-gray-800 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all outline-none font-semibold"
              >
                <option value="all_students">All Students 👨‍🎓</option>
                <option value="all_teachers">All Teachers 👨‍🏫</option>
                <option value="both">Both 🌐</option>
              </select>
            </div>

            {/* Delivery */}
            <div className="bg-gradient-to-br from-yellow-500 to-orange-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Zap className="w-5 h-5" />
                </div>
                <label className="text-sm font-bold">Delivery</label>
              </div>
              <select
                value={form.delivery}
                onChange={(e) => setForm({ ...form, delivery: e.target.value })}
                className="w-full border-2 border-yellow-300 rounded-xl p-3 bg-white text-gray-800 focus:border-yellow-500 focus:ring-4 focus:ring-yellow-200 transition-all outline-none font-semibold"
              >
                <option value="send_now">⚡ Send Now</option>
                <option value="scheduled">📅 Schedule</option>
              </select>
            </div>

            {/* Scheduled Time */}
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Calendar className="w-5 h-5" />
                </div>
                <label className="text-sm font-bold">Scheduled For</label>
              </div>
              <input
                type="datetime-local"
                value={form.scheduledFor}
                onChange={(e) =>
                  setForm({ ...form, scheduledFor: e.target.value })
                }
                className="w-full border-2 border-pink-300 rounded-xl p-3 bg-white text-gray-800 focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all outline-none disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                disabled={form.delivery !== "scheduled"}
              />
              <p className="text-xs text-pink-100 mt-2 font-medium flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Min: now + 5 minutes
              </p>
            </div>
          </div>

          {/* Expiry Field */}
          <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-6 border-2 border-purple-200 transform hover:scale-[1.01] transition-all duration-300">
            <label className="text-sm font-bold text-gray-700 flex items-center gap-2 mb-3">
              <span className="text-2xl">⏳</span>
              <span>Expiry</span>
              <span className="text-gray-500 text-xs font-normal">(optional)</span>
            </label>
            <input
              type="datetime-local"
              value={form.expiry}
              onChange={(e) => setForm({ ...form, expiry: e.target.value })}
              className="w-full border-2 border-purple-300 rounded-xl p-3 bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-200 transition-all outline-none font-semibold"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-xl hover:from-orange-700 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-bold flex items-center gap-3 text-lg"
            >
              <Send className="w-5 h-5" />
              {form.delivery === "send_now" ? "Send Now" : "Schedule Announcement"}
            </button>
            
            <button
              onClick={() => {
                setForm({
                  title: "",
                  message: "",
                  audience: "all_students",
                  delivery: "send_now",
                  scheduledFor: "",
                  expiry: "",
                });
              }}
              className="bg-white text-gray-700 px-8 py-4 rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg font-bold flex items-center gap-3 text-lg"
            >
              <RotateCcw className="w-5 h-5" />
              Reset
            </button>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            📌 Quick Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-green-800">Target Audience</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Choose the right audience to ensure your message reaches the intended recipients.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800">Schedule Smart</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Schedule announcements at optimal times for maximum visibility and engagement.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border-2 border-yellow-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-yellow-800">Clear Messages</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Keep your announcements concise and clear for better understanding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}