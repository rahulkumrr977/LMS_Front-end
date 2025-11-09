import PrincipalLogin from "./Principal";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons"; // path adjust karo as needed

export default function TeacherLogin() {
  return (
    <PrincipalLogin
      backgroundImage="src/assets/background.jpeg"
      characterImage="src/assets/5-removebg-preview.png"
      title="Student Login"
      icon={faChalkboardTeacher}
      expectedUsername="student"
      expectedPassword="1234"
      redirectPath="/dashboard"
    />
  );
}
