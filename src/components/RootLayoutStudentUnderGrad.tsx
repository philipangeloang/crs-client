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

const RootLayoutStudentUndergrad = () => {
  const [nstpOpen, setNstpOpen] = useState(false);
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
              <a
                className={nstpOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setNstpOpen(!nstpOpen);

                  if (nstpOpen === false) {
                    setEnrollmentOpen(false);
                    setStudentDropdownOpen(false);
                    setGradesOpen(false);
                  }
                }}
              >
                NSTP Enlistment
                <span className="float-right mr-2">
                  {nstpOpen ? (
                    <FontAwesomeIcon icon="angle-up" />
                  ) : (
                    <FontAwesomeIcon icon="angle-down" />
                  )}
                </span>
              </a>
              {nstpOpen && (
                <ul>
                  <li>
                    <Link
                      to="/home/service1"
                      className="text-black block py-2 mt-2"
                    >
                      NSTP Module
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <a
                className={enrollmentOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setEnrollmentOpen(!enrollmentOpen);
                  if (enrollmentOpen === false) {
                    setNstpOpen(false);
                    setStudentDropdownOpen(false);
                    setGradesOpen(false);
                  }
                }}
              >
                Enrollment
                <span className="float-right mr-2">
                  {enrollmentOpen ? (
                    <FontAwesomeIcon icon="angle-up" />
                  ) : (
                    <FontAwesomeIcon icon="angle-down" />
                  )}
                </span>
              </a>
              {enrollmentOpen && (
                <ul>
                  {/* Dropdown items for Class Management */}
                  <li>
                    <Link to="/service1" className="text-black block py-2 mt-2">
                      Step 1 Class Schedule
                    </Link>
                  </li>
                  <li>
                    <Link to="/service1" className="text-black block py-2">
                      Step 2 Assessment
                    </Link>
                  </li>
                  <li>
                    <Link to="/service1" className="text-black block py-2">
                      Step 3 Class Start Date
                    </Link>
                  </li>
                  <li>
                    <Link to="/service1" className="text-black block py-2">
                      Step 4 Download SER
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <Link
                to="/home"
                className={gradesOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setGradesOpen(!gradesOpen);
                  if (gradesOpen === false) {
                    setNstpOpen(false);
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
                    setNstpOpen(false);
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
                    <Link to="/service1" className="text-black block py-2 mt-2">
                      View Information
                    </Link>
                  </li>
                  <li>
                    <Link to="/service1" className="text-black block py-2">
                      Change Password
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          <div>
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

export default RootLayoutStudentUndergrad;
