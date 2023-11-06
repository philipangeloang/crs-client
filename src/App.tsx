import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import RootLayoutAdmin from "./pages/Admin/RootLayoutAdmin";
import RootLayoutCollege from "./pages/College/RootLayoutCollege";
import RootLayoutFaculty from "./pages/Faculty/RootLayoutFaculty";
import RootLayoutStudentUndergrad from "./pages/Student/StudentUndergrad/RootLayoutStudentUnderGrad";
import RootLayoutStudentGrad from "./pages/Student/StudentGrad/RootLayoutStudentGrad";
import RootLayoutCashier from "./pages/Cashier/RootLayoutCashier";
import AdminHome from "./pages/Admin/AdminHome";

// For now eto muna ang ating way to transfer from different views since wala pa tayong backend
// Just toggle 1 sa gusto niyong mag appear. Hindi pwedeng may dalawang 1, isa lang always.
// Default na 1 lagi si userAdmin. Make sure before pushing changes userAdmin ang 1.
const userAdmin = 0;
const userCollege = 0;
const userFaculty = 0;
const userStudentUnderGrad = 0;
const userStudentGrad = 0;
const userCashier = 1;

function App() {
  return (
    <>
      <Routes>
        {userAdmin && (
          <>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<RootLayoutAdmin />}>
              <Route index element={<AdminHome />} />
              <Route path="schedule-activities" element={<AdminHome />} />
              <Route path="encode-user-type" element={<AdminHome />} />
              <Route path="user-module" element={<AdminHome />} />
              <Route path="encode-room" element={<AdminHome />} />
              <Route path="encode-meeting-type" element={<AdminHome />} />
              <Route path="encode-blocks" element={<AdminHome />} />
              <Route path="room-plot" element={<AdminHome />} />
              <Route path="college-module" element={<AdminHome />} />
              <Route path="program-module" element={<AdminHome />} />
              <Route path="email-blast" element={<AdminHome />} />
              <Route path="student-type" element={<AdminHome />} />
            </Route>
          </>
        )}
        {userCollege && (
          <>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<RootLayoutCollege />}>
              <Route index element={<AdminHome />} />
              <Route path="activities" element={<AdminHome />} />
              <Route path="students" element={<AdminHome />} />
              <Route path="faculty" element={<AdminHome />} />
              <Route path="sections" element={<AdminHome />} />
              <Route path="classes" element={<AdminHome />} />
              <Route path="subjects" element={<AdminHome />} />
              <Route path="curriculum" element={<AdminHome />} />
              <Route path="add-drop" element={<AdminHome />} />
              <Route path="teaching-assignment" element={<AdminHome />} />
              <Route path="encode-blocks" element={<AdminHome />} />
            </Route>
          </>
        )}
        {userFaculty && (
          <>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<RootLayoutFaculty />}>
              <Route index element={<AdminHome />} />
              <Route path="profile" element={<AdminHome />} />
              <Route path="change-password" element={<AdminHome />} />
              <Route path="class-assignment" element={<AdminHome />} />
              <Route path="encode-grades" element={<AdminHome />} />
              <Route path="change-grades" element={<AdminHome />} />
              <Route path="teaching-assignment" element={<AdminHome />} />
            </Route>
          </>
        )}
        {userStudentUnderGrad && (
          <>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<RootLayoutStudentUndergrad />}>
              <Route index element={<AdminHome />} />
              <Route path="nstp" element={<AdminHome />} />
              <Route path="enrollment" element={<AdminHome />} />
              <Route path="view-grades" element={<AdminHome />} />
              <Route path="view-information" element={<AdminHome />} />
              <Route path="class-schedule" element={<AdminHome />} />
              <Route path="change-password" element={<AdminHome />} />
            </Route>
          </>
        )}
        {userStudentGrad && (
          <>
            <Route path="/" element={<Signin />} />
            <Route path="/home" element={<RootLayoutStudentGrad />}>
              <Route index element={<AdminHome />} />
              <Route path="enrollment" element={<AdminHome />} />
              <Route path="view-grades" element={<AdminHome />} />
              <Route path="view-information" element={<AdminHome />} />
              <Route path="class-schedule" element={<AdminHome />} />
              <Route path="change-password" element={<AdminHome />} />
              <Route path="cashier" element={<AdminHome />} />
            </Route>
          </>
        )}
        {userCashier && (
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
