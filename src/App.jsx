import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  FaHome,
  FaVideo,
  FaClipboard,
  FaCalendarAlt,
  FaWrench,
  FaGraduationCap,
  FaBullhorn,
  FaClipboardList, 
  FaChartLine,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaCalendarCheck,
  FaHistory

} from "react-icons/fa";

// Layout / Nav components
import Nav from "./Components/Nav";
import Sidebar from "./Components/Sidebar";
import Nav1 from "./Components/Nav1";

// Dashboard / content pages
import Student_dashboard from "./Pages/Student/Student_dashboard";
import Calendar from "./Pages/Student/Calender";
import Assignment from "./Pages/Student/Assignment";
import Attendence from "./Pages/Student/Attendence";
import Course from "./Pages/Student/Course";
import Toolls from "./Pages/Student/Tools";
import Academic from "./Pages/Student/Academic";
import Teacher_dashboard from "./Pages/Teacher/Teacher_dashboard";
import Students from "./Pages/Teacher/Teacher_student";
import Teacher_assignment from "./Pages/Teacher/Teacher_assignment";
import Teacher_attendence from "./Pages/Teacher/Teacher_attendence";
import Teacher_Communication from "./Pages/Teacher/Teacher_Communication";
import Teacher_Performances from "./Pages/Teacher/Teacher_report";

import Parent_dashboard from "./Pages/Parent/Parent_dashboard";
import Parent_performance from "./Pages/Parent/Parent_Performance";
import Parent_attendence from "./Pages/Parent/Parent_attendence";
import Parent_analytics from "./Pages/Parent/Parent_analytics";

import Principal_dashboard from "./Pages/Principal/Principal_dasboard";
import Principal_announcement from "./Pages/Principal/Principal_announcement";
import Principal_create from "./Pages/Principal/Principal_Creat_announ";
import Principal_report from "./Pages/Principal/Principal_Report_Home";
import Principal_Teacher from "./Pages/Principal/Principal_Teacher";
import Principal_student from "./Pages/Principal/Principal_student_analytics";
import Principal_report_atten from "./Pages/Principal/Principal_report_attende";
import Principal_log from "./Pages/Principal/Principal_log";


// Login / Auth components
import LoginSelection from "./Components/LoginSelection";
import Principal from "./Components/Principal";
import Teacher from "./Components/Teacher";
import Student from "./Components/Student";
import Parent from "./Components/Parent";

// 🔹 Sidebar Menus for Different Roles
const studentMenu = [
  { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
  { name: "Course", icon: <FaVideo />, path: "/course" },
  { name: "Assignment", icon: <FaClipboard />, path: "/assignment" },
  { name: "Attendance", icon: <FaCalendarAlt />, path: "/attendence" },
  { name: "Tools", icon: <FaWrench />, path: "/tools" },
  { name: "Academic", icon: <FaGraduationCap />, path: "/academic" },
  { name: "Calendar", icon: <FaCalendarAlt />, path: "/calendar" },
];

const teacherMenu = [
  { name: "Dashboard", icon: <FaHome />, path: "/teacher_dashboard" },
  { name: "Students", icon: <FaGraduationCap />, path: "/teacher_students" },
  { name: "Assignments & Quizzes ", icon: <FaClipboard />, path: "/teacher_assignments" },
  { name: "Performance & Analytics", icon: <FaWrench />, path: "/teacher_reports" },
  { name: "Communication", icon: <FaWrench />, path: "/teacher_communication" },
  { name: "Attendence & Task Management ", icon: <FaClipboard />, path: "/teacher_attendence" },
];


const parentMenu = [
  { name: "Dashboard", icon: <FaHome />, path: "/parent_dashboard" },
  {
    name: "Student Performance",
    icon: <FaGraduationCap />,
    path: "/child_progress",
  },
  { name: "Attendance", icon: <FaCalendarAlt />, path: "/parent_attendence" },
  { name: "Progress Analytics", icon: <FaCalendarAlt />, path: "/Student_analytics" },
];

const principalMenu = [
  { name: "Dashboard", icon: <FaHome />, path: "/principal_dashboard" },
  { name: "Announcements", icon: <FaBullhorn />, path: "/principal/announcements" },
  {name: "Create Announcement",icon: <FaClipboardList />,path: "/principal/announcements/new",},
  {
    name: "Reports Home",
    icon: <FaChartLine />,
    path: "/principal/reports",
  },

  {
    name: "Teacher Reports",
    icon: <FaChalkboardTeacher />,
    path: "/principal/reports/teacher/:id",
  },

  {
    name: "Student Analytics",
    icon: <FaUserGraduate />,
    path: "/principal/reports/student/:id",
  },

  {name: "Attendance & Engagement",icon: <FaCalendarCheck />,path: "/principal/reports/attendance",},

  {name: "Audit Logs",icon: <FaHistory />,path: "/principal/logs",},

];

// 🔹 Layout with Nav + Sidebar
function LayoutWithNav({ children, menuItems }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex">
        {sidebarOpen && (
          <Sidebar sidebarOpen={sidebarOpen} menuItems={menuItems} />
        )}
        <main
          className={`flex-1 pt-[125px] overflow-auto transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-0"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

// 🔹 Layout for Login Pages
function LoginPageLayout({ children }) {
  return (
    <>
      <Nav1 />
      {children}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Login Selection */}
          <Route path="/" element={<LoginSelection />} />

          {/* Login Pages */}
          <Route
            path="/student-login"
            element={
              <LoginPageLayout>
                <Student />
              </LoginPageLayout>
            }
          />
          <Route
            path="/teacher-login"
            element={
              <LoginPageLayout>
                <Teacher />
              </LoginPageLayout>
            }
          />
          <Route
            path="/principal-login"
            element={
              <LoginPageLayout>
                <Principal />
              </LoginPageLayout>
            }
          />
          <Route
            path="/parent-login"
            element={
              <LoginPageLayout>
                <Parent />
              </LoginPageLayout>
            }
          />

          {/* Student Pages */}
          <Route
            path="/dashboard"
            element={
              <LayoutWithNav menuItems={studentMenu}>
                <Student_dashboard />
              </LayoutWithNav>
            }
          />
          <Route
            path="/calendar"
            element={
              <LayoutWithNav menuItems={studentMenu}>
                <Calendar />
              </LayoutWithNav>
            }
          />
          <Route
            path="/assignment"
            element={
              <LayoutWithNav menuItems={studentMenu}>
                <Assignment />
              </LayoutWithNav>
            }
          />
          <Route
            path="/attendence"
            element={
              <LayoutWithNav menuItems={studentMenu}>
                <Attendence />
              </LayoutWithNav>
            }
          />
          <Route
            path="/course"
            element={
              <LayoutWithNav menuItems={studentMenu}>
                <Course />
              </LayoutWithNav>
            }
          />
          <Route
            path="/tools"
            element={
              <LayoutWithNav menuItems={studentMenu}>
                <Toolls />
              </LayoutWithNav>
            }
          />
          <Route
            path="/academic"
            element={
              <LayoutWithNav menuItems={studentMenu}>
                <Academic />
              </LayoutWithNav>
            }
          />

          {/* Teacher Pages */}
          <Route
            path="/teacher_dashboard"
            element={
              <LayoutWithNav menuItems={teacherMenu}>
                <Teacher_dashboard />
              </LayoutWithNav>
            }
          />

          <Route
            path="/teacher_students"
            element={
              <LayoutWithNav menuItems={teacherMenu}>
                <Students />
              </LayoutWithNav>
            }
          />
          <Route
            path="/teacher_assignments"
            element={
              <LayoutWithNav menuItems={teacherMenu}>
                <Teacher_assignment />
              </LayoutWithNav>
            }
          />
          <Route
            path="/teacher_reports"
            element={
              <LayoutWithNav menuItems={teacherMenu}>
                <Teacher_Performances />
              </LayoutWithNav>
            }
          />
          <Route
            path="/teacher_communication"
            element={
              <LayoutWithNav menuItems={teacherMenu}>
                <Teacher_Communication />
              </LayoutWithNav>
            }
          />

          <Route
            path="/teacher_attendence"
            element={
              <LayoutWithNav menuItems={teacherMenu}>
                < Teacher_attendence />
              </LayoutWithNav>
            }
          />

          {/* Parent Pages */}
          <Route
            path="/parent_dashboard"
            element={
              <LayoutWithNav menuItems={parentMenu}>
                <Parent_dashboard />
              </LayoutWithNav>
            }
          />
          <Route
            path="/child_progress"
            element={
              <LayoutWithNav menuItems={parentMenu}>
                <Parent_performance />
              </LayoutWithNav>
            }
          />
          <Route
            path="/parent_attendence"
            element={
              <LayoutWithNav menuItems={parentMenu}>
                <Parent_attendence />
              </LayoutWithNav>
            }
          />
          <Route
            path="/Student_analytics"
            element={
              <LayoutWithNav menuItems={parentMenu}>
                <Parent_analytics />
              </LayoutWithNav>
            }
          />
          {/* Principal Pages */}
         <Route
            path="/principal_dashboard"
            element={
              <LayoutWithNav menuItems={principalMenu}>
                <Principal_dashboard />
              </LayoutWithNav>
            }
          />
          <Route
            path="/principal/announcements"
            element={
              <LayoutWithNav menuItems={principalMenu}>
                <Principal_announcement />
              </LayoutWithNav>
            }
          />
          <Route
            path="/principal/announcements/new"
            element={
              <LayoutWithNav menuItems={principalMenu}>
                <Principal_create />
              </LayoutWithNav>
            }
          />
          <Route
            path="/principal/reports"
            element={
              <LayoutWithNav menuItems={principalMenu}>
                <Principal_report />
              </LayoutWithNav>
            }
          />
         
          <Route
            path="/principal/reports/teacher/:id"
            element={
              <LayoutWithNav menuItems={principalMenu}>
                <Principal_Teacher />
              </LayoutWithNav>
            }
          />
          <Route
            path="/principal/reports/student/:id"
            element={
              <LayoutWithNav menuItems={principalMenu}>
                <Principal_student />
              </LayoutWithNav>
            }
          />
          <Route
            path="/principal/reports/attendance"
            element={
              <LayoutWithNav menuItems={principalMenu}>
                <Principal_report_atten />
              </LayoutWithNav>
            }
          />
          <Route
            path="/principal/logs"
            element={
              <LayoutWithNav menuItems={principalMenu}>
                <Principal_log />
              </LayoutWithNav>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
