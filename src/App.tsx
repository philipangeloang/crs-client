import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Signin from "./pages/Signin";
import RoleSelector from "./pages/RoleSelector";
import useRoleStore from "./store/ThemeStore";
import RootLayoutAdmin from "./pages/Admin/RootLayoutAdmin";
import RootLayoutCollege from "./pages/College/RootLayoutCollege";
import RootLayoutFaculty from "./pages/Faculty/RootLayoutFaculty";
import RootLayoutStudentUndergrad from "./pages/Student/StudentUndergrad/RootLayoutStudentUnderGrad";
import RootLayoutStudentGrad from "./pages/Student/StudentGrad/RootLayoutStudentGrad";
import RootLayoutCashier from "./pages/Cashier/RootLayoutCashier";
import AdminHome from "./pages/Admin/AdminHome";
import CollegeStudentRecords from "./pages/College/CollegeStudentRecords";
import AdminScheduleOfActivities from "./pages/Admin/AdminScheduleOfActivities";
import CollegeHome from "./pages/College/CollegeHome";
import FacultyHome from "./pages/Faculty/FacultyHome";
import FacultyProfile from "./pages/Faculty/FacultyProfile";
import FacultyProfileEdit from "./pages/Faculty/FacultyProfileEdit";
import FacultyChangePassword from "./pages/Faculty/FacultyChangePassword";
import FacultyClassAssignments from "./pages/Faculty/FacultyClassAssignments";
import FacultyEncodingOfGrades from "./pages/Faculty/FacultyEncodingOfGrades";
import FacultyChangeGrades from "./pages/Faculty/FacultyChangeGrades";
import FacultyReportOfGrades from "./pages/Faculty/FacultyReportOfGrades";
import FacultyTeachingAssignments from "./pages/Faculty/FacultyTeachingAssignments";
import StudentUndergradHome from "./pages/Student/StudentUndergrad/StudentUndergradHome";
import NSTP1 from "./pages/Student/StudentUndergrad/StudentUndergradNSTP1";
import NSTP2 from "./pages/Student/StudentUndergrad/StudentUndergradNSTP2";
import NSTP3 from "./pages/Student/StudentUndergrad/StudentUndergradNSTP3";
import NSTP4 from "./pages/Student/StudentUndergrad/StudentUndergradNSTP4";
import Enrollment1 from "./pages/Student/StudentUndergrad/StudentUndergradEnrollment1";
import Enrollment2 from "./pages/Student/StudentUndergrad/StudentUndergradEnrollment2";
import Enrollment3 from "./pages/Student/StudentUndergrad/StudentUndergradEnrollment3";
import Enrollment4 from "./pages/Student/StudentUndergrad/StudentUndergradEnrollment4";
import StudentGradHome from "./pages/Student/StudentGrad/StudentGradHome";
import AdminEncodeUserType from "./pages/Admin/AdminEncodeUserType";
import AdminUserModule from "./pages/Admin/AdminUserModule";
import AdminEncodeRoom from "./pages/Admin/AdminEncodeRoom";
import AdminEncomeMeet from "./pages/Admin/AdminEncomeMeet";
import AdminEncodeBlock from "./pages/Admin/AdminEncodeBlock";
import AdminCollegeModule from "./pages/Admin/AdminCollegeModule";
import AdminProgramModule from "./pages/Admin/AdminProgramModule";
import AdminEmailBlast from "./pages/Admin/AdminEmailBlast";
import AdminStudentType from "./pages/Admin/AdminStudentType";
import Faculty from "./pages/College/Faculty";
import Sections from "./pages/College/Sections";
import Classes from "./pages/College/Classes";
import ClassesAdd from "./pages/College/ClassesAddandEdit/ClassesAdd";
import ClassesEdit from "./pages/College/ClassesAddandEdit/ClassesEdit";
import Subjects from "./pages/College/Subjects";
import Curriculum from "./pages/College/Curriculum";
import AddDropReq from "./pages/College/AddDropReq";
import ListOfTeaching from "./pages/College/ListOfTeaching";
import StudentGradViewInformation from "./pages/Student/StudentGrad/StudentGradViewInformation";
import StudentGradClassSchedule from "./pages/Student/StudentGrad/StudentGradClassSchedule";
import StudentGradCashier from "./pages/Student/StudentGrad/StudentGradCashier";

interface UserRole {
  id: number;
  name: string;
}

interface UserInfo {
  roles: UserRole[];
}

async function getUserData(): Promise<UserInfo> {
  const apiUrl = 'https://13.229.75.4/api/me';
  try {
    const response = await axios.get(apiUrl, {
      headers: {
          'Content-Type': 'application/json',
      },
      withCredentials: true /* Necessary for storing cookies */
    });
    return response.data as UserInfo;
  } catch (error) {
    console.error('API request error:', error);
  }
}

function App() {
  const { setRole } = useRoleStore();
  const role = localStorage.getItem("userRole") || "NONE";

  if (role === "NONE") {
    try {
      getUserData().then((data) => {
        if (data.roles.length === 1) {
          setRole(data.roles[0]['name']);
          localStorage.setItem("userRole", data.roles[0]['name']);
        } else {
          setRole("MULTIPLE");
          localStorage.setItem("userRole", "MULTIPLE");
        }
        if (location.pathname === "/") window.location.assign("/home");
      }).catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error('Error loading user roles:', error);
    }
  }

  return (
    <>
      <Routes>
        {(
          <Route path="/" element={<Signin />}/>
        )}
        {role === 'MULTIPLE' && (
          <Route path="/home" element={<RoleSelector roles={async () => {
              const data = await getUserData();
              return data.roles;
            }}/>}
          />
        )}
        {role === 'ADMIN' && (
          <>
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
              <Route path="college-module" element={<AdminCollegeModule />} />
              <Route path="program-module" element={<AdminProgramModule />} />
              <Route path="email-blast" element={<AdminEmailBlast />} />
              <Route path="student-type" element={<AdminStudentType />} />
            </Route>
          </>
        )}
        {role === 'COLLEGE' && (
          <>
            <Route path="/home" element={<RootLayoutCollege />}>
              <Route index element={<CollegeHome />} />
              <Route path="activities" element={<AdminHome />} />
              <Route path="students" element={<CollegeStudentRecords />} />
              <Route path="faculty" element={<Faculty />} />
              <Route path="sections" element={<Sections />} />
              <Route path="classes" element={<Classes />} />
              <Route path="classes" element={<ClassesAdd />} />
              <Route path="classes" element={<ClassesEdit />} />
              <Route path="subjects" element={<Subjects />} />
              <Route path="curriculum" element={<Curriculum />} />
              <Route path="add-drop" element={<AddDropReq />} />
              <Route path="teaching-assignment" element={<ListOfTeaching />} />
            </Route>
          </>
        )}
        {role === 'FACULTY' && (
          <>
            <Route path="/home" element={<RootLayoutFaculty />}>
              <Route index element={<FacultyHome />} />
              <Route path="profile" element={<FacultyProfile />} />
              <Route path="profile/edit" element={<FacultyProfileEdit />} />
              <Route
                path="change-password"
                element={<FacultyChangePassword />}
              />
              <Route
                path="class-assignments"
                element={<FacultyClassAssignments />}
              />
              <Route
                path="encode-grades"
                element={<FacultyEncodingOfGrades />}
              />
              <Route
                path="encode-grades/report-grades"
                element={<FacultyReportOfGrades />}
              />
              <Route path="change-grades" element={<FacultyChangeGrades />} />
              <Route
                path="teaching-assignments"
                element={<FacultyTeachingAssignments />}
              />
            </Route>
          </>
        )}
        {role === 'STUDENT_UNDERGRADUATE' && (
          <>
            <Route path="/home" element={<RootLayoutStudentUndergrad />}>
              <Route index element={<StudentUndergradHome />} />
              <Route path="nstp" element={<StudentUndergradHome />} />
              <Route path="nstp1" element={<NSTP1 />} />
              <Route path="nstp2" element={<NSTP2 />} />
              <Route path="nstp3" element={<NSTP3 />} />
              <Route path="nstp4" element={<NSTP4 />} />
              <Route path="enrollment1" element={<Enrollment1 />} />
              <Route path="enrollment2" element={<Enrollment2 />} />
              <Route path="enrollment3" element={<Enrollment3 />} />
              <Route path="enrollment4" element={<Enrollment4 />} />
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
        {role === 'STUDENT_GRADUATE' && (
          <>
            <Route path="/home" element={<RootLayoutStudentGrad />}>
              <Route index element={<StudentGradHome />} />
              <Route path="enrollment" element={<StudentGradHome />} />
              <Route path="view-grades" element={<StudentGradHome />} />
              <Route
                path="view-information"
                element={<StudentGradViewInformation />}
              />
              <Route
                path="class-schedule"
                element={<StudentGradClassSchedule />}
              />
              <Route path="change-password" element={<StudentGradHome />} />
              <Route path="cashier" element={<StudentGradCashier />} />
            </Route>
          </>
        )}
        {role === 'CASHIER' && (
          <>
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
