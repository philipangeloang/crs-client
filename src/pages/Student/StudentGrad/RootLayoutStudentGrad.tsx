import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleUp,
  faAngleDown,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";

// Add the imported icons to the library
library.add(faAngleUp, faAngleDown, faDoorOpen);

const RootLayoutStudentGrad = () => {
  const [cashierOpen, setCashierOpen] = useState(false);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [gradesOpen, setGradesOpen] = useState(false);
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);

  return (
    <>
      <div className="flex w-screen">
        <div className="sidebar p-6 fixed left-0 top-0 bottom-0 w-[19rem] flex flex-col justify-between">
          <ul className="space-y-4">
            <li className="mb-14 mt-2">
              <a
                href="/home"
                className="text-black block px-4 py-2 cursor-pointer"
              >
                <img src="/logo.png" alt="Logo" className="" />
              </a>
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <Link
                to="/home/enrollment"
                className={enrollmentOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setEnrollmentOpen(!enrollmentOpen);
                  if (enrollmentOpen === false) {
                    setCashierOpen(false);
                    setStudentDropdownOpen(false);
                    setGradesOpen(false);
                  }
                }}
              >
                Enrollment
              </Link>
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <Link
                to="/home/view-grades"
                className={gradesOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setGradesOpen(!gradesOpen);
                  if (gradesOpen === false) {
                    setCashierOpen(false);
                    setEnrollmentOpen(false);
                    setStudentDropdownOpen(false);
                  }
                }}
              >
                View Grades
              </Link>
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <a
                className={
                  studentDropdownOpen ? "text-main-red font-bold " : ""
                }
                onClick={() => {
                  setStudentDropdownOpen(!studentDropdownOpen);

                  if (studentDropdownOpen === false) {
                    setEnrollmentOpen(false);
                    setCashierOpen(false);
                    setGradesOpen(false);
                  }
                }}
              >
                Student Information
                <span className="float-right mr-2">
                  {studentDropdownOpen ? (
                    <FontAwesomeIcon icon="angle-up" />
                  ) : (
                    <FontAwesomeIcon icon="angle-down" />
                  )}
                </span>
              </a>
              {studentDropdownOpen && (
                <ul>
                  {/* Dropdown items for Student Management */}
                  <li>
                    <Link
                      to="/home/view-information"
                      className="text-black block py-2 mt-2"
                    >
                      View Information
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home/change-password"
                      className="text-black block py-2"
                    >
                      Change Password
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="px-4 py-2 cursor-pointer">
              <Link
                to="/home/cashier"
                className={cashierOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setCashierOpen(!cashierOpen);

                  if (cashierOpen === false) {
                    setEnrollmentOpen(false);
                    setStudentDropdownOpen(false);
                    setGradesOpen(false);
                  }
                }}
              >
                Cashier
              </Link>
            </li>
          </ul>

          <div className="mb-20">
            <hr className="mb-3  border-black" />
            <li className="flex items-center px-4 py-2 cursor-pointer">
              <img className="Logout-icon" src="/Logout.svg" alt="Logo" />
              <a
                href="/services"
                className="text-black block px-4 py-2 cursor-pointer"
              >
                Logout
              </a>
              {/* You can add more elements here if needed */}
            </li>
          </div>
        </div>
        <div className="w-[calc(100%-288px)] ml-72">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default RootLayoutStudentGrad;
