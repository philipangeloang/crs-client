import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route
          path="dashboard"
          element={
            <>
              <Sidebar />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
