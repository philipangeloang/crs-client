import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleUp,
  faAngleDown,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";
import { logout } from "@/lib/logout";

// Add the imported icons to the library
library.add(faAngleUp, faAngleDown, faDoorOpen);

const RootLayoutFaculty = () => {
  const [homeOpen, setHomeOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [classDropdownOpen, setClassDropdownOpen] = useState(false);

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
                    setUserDropdownOpen(false);
                    setClassDropdownOpen(false);
                  }
                }}
              >
                Home
              </Link>
            </li>

            <li className="px-4 py-2 cursor-pointer">
              <a
                className={userDropdownOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setUserDropdownOpen(!userDropdownOpen);

                  if (userDropdownOpen === false) {
                    setClassDropdownOpen(false);
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
                      to="/home/profile"
                      className="text-black block py-2 mt-2"
                    >
                      Profile
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
              <a
                className={classDropdownOpen ? "text-main-red font-bold " : ""}
                onClick={() => {
                  setClassDropdownOpen(!classDropdownOpen);
                  if (classDropdownOpen === false) {
                    setUserDropdownOpen(false);
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
                      to="/home/class-assignments"
                      className="text-black block py-2 mt-2"
                    >
                      Class Assignments
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home/encode-grades"
                      className="text-black block py-2"
                    >
                      Encoding of Grades
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home/change-grades"
                      className="text-black block py-2"
                    >
                      Change of Grades
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/home/teaching-assignments"
                      className="text-black block py-2"
                    >
                      Teaching Assignments
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
                onClick={logout}
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

export default RootLayoutFaculty;
