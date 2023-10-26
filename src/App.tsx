import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import RootLayoutAdmin from "./components/RootLayoutAdmin";
import RootLayoutCollege from "./components/RootLayoutCollege";
import RootLayoutFaculty from "./components/RootLayoutFaculty";
import RootLayoutStudentUndergrad from "./components/RootLayoutStudentUnderGrad";
import RootLayoutStudentGrad from "./components/RootLayoutStudentGrad";
import RootLayoutCashier from "./components/RootLayoutCashier";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<RootLayoutCashier />}>
          <Route index element={<Home />} />
          <Route path="service1" element={<Home />} />
          <Route path="service2" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
