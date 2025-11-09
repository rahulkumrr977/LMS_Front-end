import PrincipalLogin from './Principal'; 
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";// path adjust karo as needed

export default function TeacherLogin() {
  return (
    <PrincipalLogin
      backgroundImage="src/assets/background.jpeg"
      characterImage="src/assets/Teacher.png"
      title ="Teacher Login"
      icon={faChalkboardTeacher}
      expectedUsername="student"
      expectedPassword="12345"
      redirectPath="/teacher_dashboard"
    />
  );
}
