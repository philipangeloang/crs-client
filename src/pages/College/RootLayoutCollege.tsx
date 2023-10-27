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

const RootLayoutCollege = () => {
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);
  const [managementOpen, setManagementOpen] = useState(false);
  const [transactionOpen, setTransactionOpen] = useState(false);

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
                to="/home/activities"
                className={activitiesOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setActivitiesOpen(!activitiesOpen);
                  if (activitiesOpen === false) {
                    setManagementOpen(false);
                    setTransactionOpen(false);
                    setStudentDropdownOpen(false);
                  }
                }}
              >
                Activities
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
                    setTransactionOpen(false);
                    setManagementOpen(false);
                    setActivitiesOpen(false);
                  }
                }}
              >
                Students
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
                      to="/home/student-records"
                      className="text-black block py-2 mt-2"
                    >
                      Student Records
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <a
                className={managementOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setManagementOpen(!managementOpen);

                  if (managementOpen === false) {
                    setTransactionOpen(false);
                    setStudentDropdownOpen(false);
                    setActivitiesOpen(false);
                  }
                }}
              >
                Management
                <span className="float-right mr-2">
                  {managementOpen ? (
                    <FontAwesomeIcon icon="angle-up" />
                  ) : (
                    <FontAwesomeIcon icon="angle-down" />
                  )}
                </span>
              </a>
              {managementOpen && (
                <ul>
                  <li>
                    <Link
                      to="/home/faculty"
                      className="text-black block py-2 mt-2"
                    >
                      Faculty
                    </Link>
                  </li>
                  <li>
                    <Link to="/home/sections" className="text-black block py-2">
                      Sections
                    </Link>
                  </li>
                  <li>
                    <Link to="/home/classes" className="text-black block py-2">
                      Classes
                    </Link>
                  </li>
                  <li>
                    <Link to="/home/subjects" className="text-black block py-2">
                      Subjects
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home/curriculum"
                      className="text-black block py-2"
                    >
                      Curriculum
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <a
                className={transactionOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setTransactionOpen(!transactionOpen);
                  if (transactionOpen === false) {
                    setManagementOpen(false);
                    setStudentDropdownOpen(false);
                    setActivitiesOpen(false);
                  }
                }}
              >
                Class Management
                <span className="float-right mr-2">
                  {transactionOpen ? (
                    <FontAwesomeIcon icon="angle-up" />
                  ) : (
                    <FontAwesomeIcon icon="angle-down" />
                  )}
                </span>
              </a>
              {transactionOpen && (
                <ul>
                  {/* Dropdown items for Class Management */}
                  <li>
                    <Link
                      to="/home/add-drop"
                      className="text-black block py-2 mt-2"
                    >
                      Add/Drop Request
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home/teaching-assignment"
                      className="text-black block py-2"
                    >
                      Teaching Assignment
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home/encode-blocks"
                      className="text-black block py-2"
                    >
                      Encoding of Blocks
                    </Link>
                  </li>
                </ul>
              )}
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

export default RootLayoutCollege;
