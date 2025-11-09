import { 
  Play, 
  Eye, 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  ChevronRight,
  Award,
  TrendingUp
} from "lucide-react";

export default function Course() {
  const courses = [
    {
      id: 1,
      title: "Mathematics – Grade 9",
      instructor: "Mr. Sharma",
      progress: 40,
      thumbnail: "https://via.placeholder.com/300x200?text=📊+Mathematics",
      color: "from-blue-500 to-indigo-600",
      accentColor: "bg-blue-50 border-blue-200",
      textColor: "text-blue-600",
      totalLessons: 24,
      completedLessons: 10,
      duration: "45 min",
      rating: 4.8,
      students: 1200,
      icon: "📊"
    },
    {
      id: 2,
      title: "Science – Grade 9",
      instructor: "Mrs. Gupta",
      progress: 70,
      thumbnail: "https://via.placeholder.com/300x200?text=🧪+Science",
      color: "from-green-500 to-emerald-600",
      accentColor: "bg-green-50 border-green-200",
      textColor: "text-green-600",
      totalLessons: 30,
      completedLessons: 21,
      duration: "50 min",
      rating: 4.9,
      students: 980,
      icon: "🧪"
    },
    {
      id: 3,
      title: "English – Grade 9",
      instructor: "Mr. Singh",
      progress: 90,
      thumbnail: "https://via.placeholder.com/300x200?text=📚+English",
      color: "from-purple-500 to-violet-600",
      accentColor: "bg-purple-50 border-purple-200",
      textColor: "text-purple-600",
      totalLessons: 20,
      completedLessons: 18,
      duration: "40 min",
      rating: 4.7,
      students: 1500,
      icon: "📚"
    },
  ];

  const getProgressLabel = (progress) => {
    if (progress >= 80) return { label: "Almost Complete", color: "text-green-600 bg-green-100" };
    if (progress >= 50) return { label: "In Progress", color: "text-yellow-600 bg-yellow-100" };
    return { label: "Getting Started", color: "text-blue-600 bg-blue-100" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-3 shadow-lg mb-6">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <span className="text-indigo-600 font-semibold">Learning Dashboard</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            My Courses
          </h1>
          <p className="text-gray-600 text-lg">Continue your learning journey with these amazing courses</p>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">{courses.length}</h3>
            <p className="text-gray-600">Active Courses</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {Math.round(courses.reduce((acc, course) => acc + course.progress, 0) / courses.length)}%
            </h3>
            <p className="text-gray-600">Average Progress</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {courses.reduce((acc, course) => acc + course.completedLessons, 0)}
            </h3>
            <p className="text-gray-600">Lessons Completed</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              {courses.reduce((acc, course) => acc + parseInt(course.duration), 0)}
            </h3>
            <p className="text-gray-600">Minutes/Week</p>
          </div>
        </div>

        {/* Enhanced Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => {
            const progressStatus = getProgressLabel(course.progress);
            return (
              <div
                key={course.id}
                className="group bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3"
              >
                {/* Enhanced Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Progress Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${progressStatus.color} backdrop-blur-sm`}>
                    {progressStatus.label}
                  </div>
                  
                  {/* Course Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl">
                    {course.icon}
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-gray-800 ml-1" />
                    </div>
                  </div>
                </div>

                {/* Enhanced Content */}
                <div className="p-6">
                  {/* Title and Rating */}
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {course.title}
                    </h2>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium text-gray-700">{course.rating}</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {course.instructor} • {course.students.toLocaleString()} students
                  </p>

                  {/* Course Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className="text-lg font-bold text-gray-800">{course.completedLessons}</div>
                      <div className="text-xs text-gray-600">of {course.totalLessons} lessons</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl">
                      <div className="text-lg font-bold text-gray-800">{course.duration}</div>
                      <div className="text-xs text-gray-600">avg per lesson</div>
                    </div>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Course Progress</span>
                      <span className="text-sm font-bold text-gray-800">{course.progress}%</span>
                    </div>
                    <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${course.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                        style={{ width: `${course.progress}%` }}
                      >
                        <div className="h-full bg-white/30 animate-pulse"></div>
                      </div>
                      {/* Progress Indicator */}
                      <div 
                        className="absolute top-0 h-full w-1 bg-white shadow-lg transition-all duration-1000"
                        style={{ left: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className={`flex-1 bg-gradient-to-r ${course.color} text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}>
                      <Play className="w-4 h-4" />
                      {course.progress > 0 ? 'Continue' : 'Start Course'}
                    </button>
                    <button className={`px-4 py-3 ${course.textColor} border-2 ${course.accentColor.split(' ')[1]} rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 flex items-center gap-2`}>
                      <Eye className="w-4 h-4" />
                      Details
                    </button>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1 bg-gradient-to-r ${course.color}`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
            <p className="text-indigo-100 mb-6">Explore our complete catalog of courses and accelerate your learning journey</p>
            <button className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto hover:scale-105">
              Browse All Courses
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}