import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import RootLayoutAdmin from "./pages/Admin/RootLayoutAdmin";
import RootLayoutCollege from "./pages/College/RootLayoutCollege";
import RootLayoutFaculty from "./pages/Faculty/RootLayoutFaculty";
import RootLayoutStudentUndergrad from "./pages/Student/StudentUndergrad/RootLayoutStudentUnderGrad";
import RootLayoutStudentGrad from "./pages/Student/StudentGrad/RootLayoutStudentGrad";
import RootLayoutCashier from "./pages/Cashier/RootLayoutCashier";
import AdminHome from "./pages/Admin/AdminHome";
import CollegeFaculty from "./pages/College/CollegeFaculty";
import CollegeStudentRecords from "./pages/College/CollegeStudentRecords";
import AdminScheduleOfActivities from "./pages/Admin/AdminScheduleOfActivities";
import useRoleStore from "./store/ThemeStore";
import CollegeHome from "./pages/College/CollegeHome";
import FacultyHome from "./pages/Faculty/FacultyHome";
import StudentUndergradHome from "./pages/Student/StudentUndergrad/StudentUndergradHome";
import StudentUndergradNSTP1 from "./pages/Student/StudentUndergrad/StudentUndergradNSTP1";
import StudentUndergradNSTP2 from "./pages/Student/StudentUndergrad/StudentUndergradNSTP2";
import StudentUndergradNSTP3 from "./pages/Student/StudentUndergrad/StudentUndergradNSTP3";
import StudentUndergradNSTP4 from "./pages/Student/StudentUndergrad/StudentUndergradNSTP4";
import StudentGradHome from "./pages/Student/StudentGrad/StudentGradHome";
import AdminEncodeUserType from "./pages/Admin/AdminEncodeUserType";
import AdminUserModule from "./pages/Admin/AdminUserModule";
import AdminEncodeRoom from "./pages/Admin/AdminEncodeRoom";
import AdminEncomeMeet from "./pages/Admin/AdminEncomeMeet";
import AdminEncodeBlock from "./pages/Admin/AdminEncodeBlock";

function App() {
  const { role } = useRoleStore();

  return (
    <>
      <Routes>
        {role === "administrator" && (
          <>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<RootLayoutAdmin />}>
              <Route index element={<AdminHome />} />
              <Route
                path="schedule-activities"
                element={<AdminScheduleOfActivities />}
              />
              <Route
                path="encode-user-type"
                element={<AdminEncodeUserType />}
              />
              <Route path="user-module" element={<AdminUserModule />} />
              <Route path="encode-room" element={<AdminEncodeRoom />} />
              <Route path="encode-meeting-type" element={<AdminEncomeMeet />} />
              <Route path="encode-blocks" element={<AdminEncodeBlock />} />
              <Route path="room-plot" element={<AdminHome />} />
              <Route path="college-module" element={<AdminHome />} />
              <Route path="program-module" element={<AdminHome />} />
              <Route path="email-blast" element={<AdminHome />} />
              <Route path="student-type" element={<AdminHome />} />
            </Route>
          </>
        )}
        {role === "college" && (
          <>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<RootLayoutCollege />}>
              <Route index element={<CollegeHome />} />
              <Route path="activities" element={<CollegeHome />} />
              <Route path="students" element={<CollegeStudentRecords />} />
              <Route path="faculty" element={<CollegeFaculty />} />
              <Route path="sections" element={<CollegeHome />} />
              <Route path="classes" element={<CollegeHome />} />
              <Route path="subjects" element={<CollegeHome />} />
              <Route path="curriculum" element={<CollegeHome />} />
              <Route path="add-drop" element={<CollegeHome />} />
              <Route path="teaching-assignment" element={<CollegeHome />} />
              <Route path="encode-blocks" element={<CollegeHome />} />
            </Route>
          </>
        )}
        {role === "faculty" && (
          <>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<RootLayoutFaculty />}>
              <Route index element={<FacultyHome />} />
              <Route path="profile" element={<FacultyHome />} />
              <Route path="change-password" element={<FacultyHome />} />
              <Route path="class-assignment" element={<FacultyHome />} />
              <Route path="encode-grades" element={<FacultyHome />} />
              <Route path="change-grades" element={<FacultyHome />} />
              <Route path="teaching-assignment" element={<FacultyHome />} />
            </Route>
          </>
        )}
        {role === "student u" && (
          <>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<RootLayoutStudentUndergrad />}>
              <Route index element={<StudentUndergradHome />} />
              <Route path="nstp1" element={<StudentUndergradNSTP1 />} />
              <Route path="nstp2" element={<StudentUndergradNSTP2 />} />
              <Route path="nstp3" element={<StudentUndergradNSTP3 />} />
              <Route path="nstp4" element={<StudentUndergradNSTP4 />} />
              <Route path="enrollment" element={<StudentUndergradHome />} />
              <Route path="view-grades" element={<StudentUndergradHome />} />
              <Route
                path="view-information"
                element={<StudentUndergradHome />}
              />
              <Route path="class-schedule" element={<StudentUndergradHome />} />
              <Route
                path="change-password"
                element={<StudentUndergradHome />}
              />
            </Route>
          </>
        )}
        {role === "student g" && (
          <>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<RootLayoutStudentGrad />}>
              <Route index element={<StudentGradHome />} />
              <Route path="enrollment" element={<StudentGradHome />} />
              <Route path="view-grades" element={<StudentGradHome />} />
              <Route path="view-information" element={<StudentGradHome />} />
              <Route path="class-schedule" element={<StudentGradHome />} />
              <Route path="change-password" element={<StudentGradHome />} />
              <Route path="cashier" element={<StudentGradHome />} />
            </Route>
          </>
        )}
        {role === "cashier" && (
          <>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<RootLayoutCashier />}>
              <Route index element={<AdminHome />} />
              <Route path="search-student" element={<AdminHome />} />
            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
