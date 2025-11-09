import { CalendarDays, Clock, Plus, BookOpen, Brain, Users } from "lucide-react";

export default function Calendar() {
  const events = [
    {
      id: 1,
      type: "Assignment",
      title: "Math Homework – Algebra",
      date: "2025-09-15",
      time: "10:00 AM",
      status: "Upcoming",
      color: "bg-gradient-to-r from-orange-400 to-pink-500",
      icon: BookOpen,
    },
    {
      id: 2,
      type: "Quiz",
      title: "Science Quiz – Atoms",
      date: "2025-09-18",
      time: "12:00 PM",
      status: "Upcoming",
      color: "bg-gradient-to-r from-purple-500 to-indigo-600",
      icon: Brain,
    },
    {
      id: 3,
      type: "Live Class",
      title: "English Grammar",
      date: "2025-09-20",
      time: "5:00 PM",
      status: "Upcoming",
      color: "bg-gradient-to-r from-green-400 to-blue-500",
      icon: Users,
    },
  ];

  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getEventTypeColor = (type) => {
    switch(type) {
      case 'Assignment': return 'text-orange-500 bg-orange-50';
      case 'Quiz': return 'text-purple-500 bg-purple-50';
      case 'Live Class': return 'text-green-500 bg-green-50';
      default: return 'text-blue-500 bg-blue-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Academic Calendar
          </h1>
          <p className="text-gray-600 text-lg">Stay organized and never miss a deadline</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Monthly Calendar */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                    <CalendarDays className="w-6 h-6 text-white" />
                  </div>
                  September 2025
                </h2>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    ←
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                    →
                  </button>
                </div>
              </div>

              {/* Week days header */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {weekDays.map((day) => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-500 p-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((day) => {
                  const eventToday = events.find(
                    (e) => new Date(e.date).getDate() === day
                  );
                  const isToday = day === 14; // Sample today
                  
                  return (
                    <div
                      key={day}
                      className={`
                        relative p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg
                        ${eventToday 
                          ? "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-md" 
                          : "bg-white/60 border-gray-100 hover:bg-white/80"
                        }
                        ${isToday ? "ring-2 ring-blue-400 bg-gradient-to-br from-blue-100 to-indigo-100" : ""}
                      `}
                    >
                      <span className={`font-bold text-lg ${isToday ? 'text-blue-700' : 'text-gray-700'}`}>
                        {day}
                      </span>
                      {eventToday && (
                        <div className="mt-2">
                          <div className={`text-xs px-2 py-1 rounded-full font-medium ${getEventTypeColor(eventToday.type)}`}>
                            {eventToday.type}
                          </div>
                        </div>
                      )}
                      {isToday && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Side Panel */}
          <div className="space-y-6">
            
            {/* Upcoming Events */}
            <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-6 border border-white/20">
              <h2 className="text-xl font-bold flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                Upcoming Events
              </h2>
              
              <div className="space-y-4">
                {events.map((event, index) => {
                  const Icon = event.icon;
                  return (
                    <div
                      key={event.id}
                      className="group p-4 rounded-2xl bg-white/60 hover:bg-white/80 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-100"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-xl ${event.color} shadow-lg`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {event.date} • {event.time}
                          </p>
                          <div className={`inline-block mt-2 text-xs px-2 py-1 rounded-full font-medium ${getEventTypeColor(event.type)}`}>
                            {event.type}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-6 border border-white/20">
              <h2 className="text-xl font-bold mb-4">This Week</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-blue-600">Events</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                  <div className="text-2xl font-bold text-green-600">1</div>
                  <div className="text-sm text-green-600">Quiz</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-3xl p-6 border border-white/20">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group">
                  <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                  Add Event
                </button>
                <button className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                  <Clock className="w-5 h-5" />
                  Set Reminder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}