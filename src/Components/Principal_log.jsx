import React, { useState } from "react";
import { 
  History, 
  Download, 
  Shield, 
  Activity,
  LogIn,
  Send,
  Eye,
  Edit,
  Trash2,
  Settings,
  FileText,
  Clock,
  MapPin,
  Filter,
  Search
} from "lucide-react";

export default function PrincipalLogs() {
  const [logs] = useState([
    { id: 1, ts: "2025-11-03T10:15:00+05:30", action: "Login", ip: "203.0.113.5", user: "Principal", device: "Desktop", status: "success" },
    { id: 2, ts: "2025-11-02T09:00:00+05:30", action: "Sent Announcement", ip: "203.0.113.5", user: "Principal", device: "Mobile", status: "success" },
    { id: 3, ts: "2025-10-31T14:20:00+05:30", action: "Viewed Report (student)", ip: "203.0.113.5", user: "Principal", device: "Desktop", status: "success" },
    { id: 4, ts: "2025-10-30T11:45:00+05:30", action: "Updated Settings", ip: "203.0.113.5", user: "Principal", device: "Desktop", status: "success" },
    { id: 5, ts: "2025-10-29T16:30:00+05:30", action: "Exported Report", ip: "203.0.113.5", user: "Principal", device: "Desktop", status: "success" },
    { id: 6, ts: "2025-10-28T08:15:00+05:30", action: "Login", ip: "203.0.113.12", user: "Principal", device: "Mobile", status: "failed" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterAction, setFilterAction] = useState("all");

  const getActionIcon = (action) => {
    if (action.includes("Login")) return LogIn;
    if (action.includes("Announcement")) return Send;
    if (action.includes("Viewed")) return Eye;
    if (action.includes("Updated")) return Edit;
    if (action.includes("Deleted")) return Trash2;
    if (action.includes("Settings")) return Settings;
    if (action.includes("Exported")) return Download;
    return FileText;
  };

  const getActionColor = (action) => {
    if (action.includes("Login")) return {
      bg: "from-blue-500 to-indigo-600",
      light: "from-blue-50 to-indigo-50",
      border: "border-blue-300",
      text: "text-blue-700"
    };
    if (action.includes("Announcement")) return {
      bg: "from-purple-500 to-fuchsia-600",
      light: "from-purple-50 to-fuchsia-50",
      border: "border-purple-300",
      text: "text-purple-700"
    };
    if (action.includes("Viewed")) return {
      bg: "from-green-500 to-emerald-600",
      light: "from-green-50 to-emerald-50",
      border: "border-green-300",
      text: "text-green-700"
    };
    if (action.includes("Updated") || action.includes("Settings")) return {
      bg: "from-yellow-500 to-orange-600",
      light: "from-yellow-50 to-orange-50",
      border: "border-yellow-300",
      text: "text-yellow-700"
    };
    if (action.includes("Exported")) return {
      bg: "from-teal-500 to-cyan-600",
      light: "from-teal-50 to-cyan-50",
      border: "border-teal-300",
      text: "text-teal-700"
    };
    return {
      bg: "from-gray-500 to-slate-600",
      light: "from-gray-50 to-slate-50",
      border: "border-gray-300",
      text: "text-gray-700"
    };
  };

  const getStatusColor = (status) => {
    if (status === "success") return {
      bg: "from-green-500 to-emerald-600",
      text: "text-green-700",
      light: "bg-green-100"
    };
    return {
      bg: "from-red-500 to-pink-600",
      text: "text-red-700",
      light: "bg-red-100"
    };
  };

  const formatTimestamp = (ts) => {
    const date = new Date(ts);
    return {
      date: date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }),
      time: date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
    };
  };

  const filteredLogs = logs.filter(log => {
    const matchesSearch = log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.ip.includes(searchQuery);
    const matchesFilter = filterAction === "all" || log.action.toLowerCase().includes(filterAction.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl shadow-lg">
                <History className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Audit & Login Logs
                </h1>
                <p className="text-gray-600 mt-1">Track all system activities and access history</p>
              </div>
            </div>

            <button 
              onClick={() => alert("Export logs (implement backend).")} 
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-6 py-3 rounded-xl hover:from-orange-700 hover:to-amber-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Export Logs
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Activity className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-1">{logs.length}</h3>
            <p className="text-blue-100">Total Activities</p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Shield className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-1">
              {logs.filter(l => l.status === "success").length}
            </h3>
            <p className="text-green-100">Successful</p>
          </div>

          <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Shield className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-1">
              {logs.filter(l => l.status === "failed").length}
            </h3>
            <p className="text-red-100">Failed Attempts</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-fuchsia-600 rounded-3xl p-6 shadow-xl text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <LogIn className="w-6 h-6" />
              </div>
            </div>
            <h3 className="text-4xl font-bold mb-1">
              {logs.filter(l => l.action.includes("Login")).length}
            </h3>
            <p className="text-purple-100">Login Events</p>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by action or IP address..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all outline-none bg-white font-semibold"
              />
            </div>

            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterAction}
                onChange={(e) => setFilterAction(e.target.value)}
                className="pl-12 pr-8 py-3 border-2 border-orange-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-200 transition-all outline-none bg-white font-semibold min-w-[200px]"
              >
                <option value="all">All Actions</option>
                <option value="login">Login</option>
                <option value="announcement">Announcements</option>
                <option value="viewed">Viewed Reports</option>
                <option value="updated">Updates</option>
                <option value="exported">Exports</option>
              </select>
            </div>
          </div>
        </div>

        {/* Logs List */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl">
              <History className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              Recent Activity ({filteredLogs.length})
            </h2>
          </div>

          <div className="space-y-4">
            {filteredLogs.map((log) => {
              const ActionIcon = getActionIcon(log.action);
              const colors = getActionColor(log.action);
              const statusColors = getStatusColor(log.status);
              const timestamp = formatTimestamp(log.ts);
              
              return (
                <div
                  key={log.id}
                  className={`group bg-gradient-to-br ${colors.light} rounded-2xl p-6 border-2 ${colors.border} hover:border-orange-400 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Icon & Action */}
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`p-3 bg-gradient-to-r ${colors.bg} rounded-xl shadow-lg`}>
                        <ActionIcon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800 mb-1">{log.action}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {timestamp.date} at {timestamp.time}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {log.ip}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Info Cards */}
                    <div className="flex flex-wrap gap-3">
                      <div className="bg-white/70 rounded-xl px-4 py-2 border border-gray-200">
                        <p className="text-xs text-gray-600">User</p>
                        <p className="font-bold text-gray-800">{log.user}</p>
                      </div>

                      <div className="bg-white/70 rounded-xl px-4 py-2 border border-gray-200">
                        <p className="text-xs text-gray-600">Device</p>
                        <p className="font-bold text-gray-800">{log.device}</p>
                      </div>

                      <div className={`${statusColors.light} rounded-xl px-4 py-2 border-2 ${colors.border}`}>
                        <p className="text-xs text-gray-600">Status</p>
                        <p className={`font-bold ${statusColors.text} capitalize`}>{log.status}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredLogs.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gray-100 to-slate-100 rounded-full mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">No logs found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Security Info */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Security & Compliance
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-green-800">Secure Access</h3>
              </div>
              <p className="text-gray-700 text-sm">
                All activities are logged with timestamp, IP address, and device information for security auditing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <History className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-blue-800">Audit Trail</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Complete audit trail maintained for compliance and troubleshooting purposes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-fuchsia-50 rounded-2xl p-6 border-2 border-purple-200 transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-lg">
                  <Download className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-purple-800">Export Options</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Export logs in CSV or PDF format for external auditing and record-keeping.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}