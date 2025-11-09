import { useState } from "react";
import { MessageSquare, Mic, Smile, Send, BookOpen, Sparkles, Star } from "lucide-react";

export default function Tools() {
  const [chatOpen, setChatOpen] = useState(false);
  const [mood, setMood] = useState(null);
  const [voiceNote, setVoiceNote] = useState("");
  const [chatMessage, setChatMessage] = useState("");

  const suggestedLessons = [
    { id: 1, title: "Chapter 3 – Fractions", subject: "Mathematics", difficulty: "Medium", icon: "📐" },
    { id: 2, title: "Chapter 5 – Photosynthesis", subject: "Biology", difficulty: "Easy", icon: "🌱" },
  ];

  const moods = [
    { label: "😊 Happy", value: "happy", color: "from-yellow-400 to-orange-500", emoji: "😊" },
    { label: "😕 Confused", value: "confused", color: "from-gray-400 to-gray-600", emoji: "😕" },
    { label: "😐 Bored", value: "bored", color: "from-blue-400 to-blue-600", emoji: "😐" },
    { label: "💪 Motivated", value: "motivated", color: "from-green-400 to-emerald-500", emoji: "💪" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Smart Learning Tools
            </h1>
          </div>
          <p className="text-lg text-gray-600">Enhance your learning experience with AI-powered assistance</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* AI Chatbot */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Study Assistant
                </span>
              </h2>
              <div className="flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-700 text-sm font-medium">Online</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 text-lg">
              Get instant help with your doubts and questions. I'm here 24/7! 🤖✨
            </p>
            
            <button
              onClick={() => setChatOpen(!chatOpen)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold text-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              {chatOpen ? "Close Chat" : "Start Conversation"}
            </button>

            {chatOpen && (
              <div className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-5 border-2 border-blue-200 animate-in slide-in-from-top-2 duration-300">
                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Ask me anything about your studies... 🤔"
                    className="flex-1 border-2 border-blue-300 px-4 py-3 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                  />
                  <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="text-gray-500 text-sm">💡 Try asking: "Explain photosynthesis" or "Help with fractions"</p>
                </div>
              </div>
            )}
          </div>

          {/* Mood Check-In */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-300 group">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                How are you feeling?
              </span>
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Track your learning mood for personalized recommendations! 🌟
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {moods.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setMood(m.value)}
                  className={`p-4 rounded-2xl border-2 font-semibold text-center transform hover:scale-105 transition-all duration-200 ${
                    mood === m.value
                      ? `bg-gradient-to-r ${m.color} text-white shadow-lg border-transparent scale-105`
                      : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="text-3xl mb-2">{m.emoji}</div>
                  <div className="text-sm">{m.label.split(' ').slice(1).join(' ')}</div>
                </button>
              ))}
            </div>
            
            {mood && (
              <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-4 border-2 border-green-200 animate-in slide-in-from-bottom-2 duration-300">
                <p className="text-center font-semibold text-gray-800 flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  You're feeling <span className="text-green-600 capitalize">{mood}</span> today!
                </p>
                <p className="text-center text-sm text-gray-600 mt-2">
                  ✨ I'll personalize your learning experience accordingly
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Suggested Lessons */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-300 group">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Recommended Lessons
              </span>
            </h2>
            
            <div className="space-y-4">
              {suggestedLessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className="group/item p-5 bg-gradient-to-r from-white to-gray-50 rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-102"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{lesson.icon}</span>
                        <div>
                          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            {lesson.subject}
                          </span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                              lesson.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                              lesson.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {lesson.difficulty}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{lesson.title}</h3>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transform group-hover/item:scale-105 transition-all duration-200 shadow-lg font-semibold">
                      Start →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Voice Notes */}
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-6 border border-white/50 hover:shadow-2xl transition-all duration-300 group">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                Quick Notes
              </span>
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              Capture your thoughts and ideas instantly! 🎙️💡
            </p>
            
            <div className="space-y-4">
              <textarea
                value={voiceNote}
                onChange={(e) => setVoiceNote(e.target.value)}
                placeholder="Write your thoughts, ideas, or quick notes here... 📝"
                className="w-full border-2 border-gray-300 rounded-2xl p-4 focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-200 resize-none"
                rows="5"
              />
              
              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl hover:from-green-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold">
                  💾 Save Note
                </button>
                <button className="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-2xl hover:from-red-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center justify-center gap-2">
                  <Mic className="w-5 h-5" />
                  🎤 Record
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}