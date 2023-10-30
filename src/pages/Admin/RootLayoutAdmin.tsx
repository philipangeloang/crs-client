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

const RootLayoutAdmin = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const [scheduleActivitiesOpen, setScheduleActivitiesOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [classDropdownOpen, setClassDropdownOpen] = useState(false);
  const [collegeDropdownOpen, setCollegeDropdownOpen] = useState(false);
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);

  return (
    <>
      <div className="flex w-screen">
        <div className="sidebar p-6 fixed left-0 top-0 bottom-0 w-[19rem] flex flex-col justify-between">
          <ul className="space-y-4">
            <li className="mb-14 mt-2">
              <img src="/logo.png" alt="Logo" className="" />
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <Link
                to="/home"
                className={homeOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setHomeOpen(!homeOpen);
                  if (homeOpen === false) {
                    setScheduleActivitiesOpen(false);
                    setUserDropdownOpen(false);
                    setClassDropdownOpen(false);
                    setCollegeDropdownOpen(false);
                    setStudentDropdownOpen(false);
                  }
                }}
              >
                Home
              </Link>
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <Link
                to="/home/schedule-activities"
                className={
                  scheduleActivitiesOpen ? "text-main-red font-bold " : ""
                }
                onClick={() => {
                  setScheduleActivitiesOpen(!scheduleActivitiesOpen);
                  if (scheduleActivitiesOpen === false) {
                    setUserDropdownOpen(false);
                    setClassDropdownOpen(false);
                    setCollegeDropdownOpen(false);
                    setStudentDropdownOpen(false);
                    setHomeOpen(false);
                  }
                }}
              >
                Schedule of Activities
              </Link>
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <a
                className={userDropdownOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setUserDropdownOpen(!userDropdownOpen);

                  if (userDropdownOpen === false) {
                    setClassDropdownOpen(false);
                    setCollegeDropdownOpen(false);
                    setStudentDropdownOpen(false);
                    setScheduleActivitiesOpen(false);
                    setHomeOpen(false);
                  }
                }}
              >
                User Management
                <span className="float-right mr-2">
                  {userDropdownOpen ? (
                    <FontAwesomeIcon icon="angle-up" />
                  ) : (
                    <FontAwesomeIcon icon="angle-down" />
                  )}
                </span>
              </a>
              {userDropdownOpen && (
                <ul>
                  <li>
                    <Link
                      to="/home/encode-user-type"
                      className="text-black block py-2 mt-2"
                    >
                      Encode User Type
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home/user-module"
                      className="text-black block py-2"
                    >
                      User Module
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <a
                className={classDropdownOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setClassDropdownOpen(!classDropdownOpen);
                  if (classDropdownOpen === false) {
                    setUserDropdownOpen(false);
                    setCollegeDropdownOpen(false);
                    setStudentDropdownOpen(false);
                    setScheduleActivitiesOpen(false);
                    setHomeOpen(false);
                  }
                }}
              >
                Class Management
                <span className="float-right mr-2">
                  {classDropdownOpen ? (
                    <FontAwesomeIcon icon="angle-up" />
                  ) : (
                    <FontAwesomeIcon icon="angle-down" />
                  )}
                </span>
              </a>
              {classDropdownOpen && (
                <ul>
                  {/* Dropdown items for Class Management */}
                  <li>
                    <Link
                      to="/home/encode-room"
                      className="text-black block py-2 mt-2"
                    >
                      Encoding of Room
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home/encode-meeting-type"
                      className="text-black block py-2"
                    >
                      Encoding of Meeting Type
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
                  <li>
                    <Link
                      to="/home/room-plot"
                      className="text-black block py-2"
                    >
                      Room Plotting
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <a
                className={
                  collegeDropdownOpen ? "text-main-red font-bold " : ""
                }
                onClick={() => {
                  setCollegeDropdownOpen(!collegeDropdownOpen);
                  if (collegeDropdownOpen === false) {
                    setClassDropdownOpen(false);
                    setUserDropdownOpen(false);
                    setStudentDropdownOpen(false);
                    setScheduleActivitiesOpen(false);
                    setHomeOpen(false);
                  }
                }}
              >
                College Management
                <span className="float-right mr-2">
                  {collegeDropdownOpen ? (
                    <FontAwesomeIcon icon="angle-up" />
                  ) : (
                    <FontAwesomeIcon icon="angle-down" />
                  )}
                </span>
              </a>
              {collegeDropdownOpen && (
                <ul>
                  {/* Dropdown items for College Management */}
                  <li>
                    <Link
                      to="/home/college-module"
                      className="text-black block py-2 mt-2"
                    >
                      College Module
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home/program-module"
                      className="text-black block py-2"
                    >
                      Program Module
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <a
                className={
                  studentDropdownOpen ? "text-main-red font-bold " : ""
                }
                onClick={() => {
                  setStudentDropdownOpen(!studentDropdownOpen);

                  if (studentDropdownOpen === false) {
                    setClassDropdownOpen(false);
                    setCollegeDropdownOpen(false);
                    setUserDropdownOpen(false);
                    setScheduleActivitiesOpen(false);
                    setHomeOpen(false);
                  }
                }}
              >
                Student Management
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
                      to="/home/email-blast"
                      className="text-black block py-2 mt-2"
                    >
                      Email Blast
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home/student-type"
                      className="text-black block py-2"
                    >
                      Student Type
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

export default RootLayoutAdmin;
