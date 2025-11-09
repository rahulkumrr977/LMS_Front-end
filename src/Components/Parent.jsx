import PrincipalLogin from './Principal'; 
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";// path adjust karo as needed

export default function TeacherLogin() {
  return (
    <PrincipalLogin
      backgroundImage="src/assets/background.jpeg"
      characterImage="src/assets/Parent.png"
      title ="Parent Login"
      icon={faChalkboardTeacher}
      expectedUsername="student"
      expectedPassword="1234"
      redirectPath="/parent_dashboard"
    />
  );
}