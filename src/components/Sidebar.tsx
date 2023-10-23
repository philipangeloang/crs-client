import React, { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleUp,
  faAngleDown,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

// Add the imported icons to the library
library.add(faAngleUp, faAngleDown, faDoorOpen);

const Sidebar = () => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [classDropdownOpen, setClassDropdownOpen] = useState(false);
  const [collegeDropdownOpen, setCollegeDropdownOpen] = useState(false);
  const [studentDropdownOpen, setStudentDropdownOpen] = useState(false);

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  const toggleClassDropdown = () => {
    setClassDropdownOpen(!classDropdownOpen);
  };

  const toggleCollegeDropdown = () => {
    setCollegeDropdownOpen(!collegeDropdownOpen);
  };

  const toggleStudentDropdown = () => {
    setStudentDropdownOpen(!studentDropdownOpen);
  };

  return (
    <div className="sidebar py-4 fixed left-0 top-0 bottom-0 w-72 flex flex-col justify-between">
      <ul className="space-y-4">
        <li>
          <a href="/" className="text-black block px-4 py-2">
            <img src="/logo.png" alt="Logo" />
          </a>
        </li>

        <li>
          <a href="/services" className="text-black block px-4 py-2">
            Schedule of Activities
          </a>
        </li>

        <li>
          <a
            className="text-black block px-4 py-2"
            onClick={toggleUserDropdown}
          >
            User Management
            <span className="dropdown-icon">
              {userDropdownOpen ? (
                <FontAwesomeIcon icon="angle-up" />
              ) : (
                <FontAwesomeIcon icon="angle-down" />
              )}
            </span>
          </a>
          {userDropdownOpen && (
            <ul className="pl-4">
              <li>
                <Link to="/service1" className="text-black block py-2">
                  Service 1
                </Link>
              </li>
              <li>
                <a href="/service2" className="text-black block py-2">
                  Service 2
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a
            className="text-black block px-4 py-2"
            onClick={toggleClassDropdown}
          >
            Class Management
            <span className="dropdown-icon">
              {classDropdownOpen ? (
                <FontAwesomeIcon icon="angle-up" />
              ) : (
                <FontAwesomeIcon icon="angle-down" />
              )}
            </span>
          </a>
          {classDropdownOpen && (
            <ul className="pl-4">
              {/* Dropdown items for Class Management */}
              <li>
                <a href="/service1" className="text-black block py-2">
                  Class 1
                </a>
              </li>
              <li>
                <a href="/service2" className="text-black block py-2">
                  Class 2
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a
            className="text-black block px-4 py-2"
            onClick={toggleCollegeDropdown}
          >
            College Management
            <span className="dropdown-icon">
              {collegeDropdownOpen ? (
                <FontAwesomeIcon icon="angle-up" />
              ) : (
                <FontAwesomeIcon icon="angle-down" />
              )}
            </span>
          </a>
          {collegeDropdownOpen && (
            <ul className="pl-4">
              {/* Dropdown items for College Management */}
              <li>
                <a href="/service1" className="text-black block py-2">
                  College 1
                </a>
              </li>
              <li>
                <a href="/service2" className="text-black block py-2">
                  College 2
                </a>
              </li>
            </ul>
          )}
        </li>

        <li>
          <a
            className="text-black block px-4 py-2"
            onClick={toggleStudentDropdown}
          >
            Student Management
            <span className="dropdown-icon">
              {studentDropdownOpen ? (
                <FontAwesomeIcon icon="angle-up" />
              ) : (
                <FontAwesomeIcon icon="angle-down" />
              )}
            </span>
          </a>
          {studentDropdownOpen && (
            <ul className="pl-4">
              {/* Dropdown items for Student Management */}
              <li>
                <a href="/service1" className="text-black block py-2">
                  Student 1
                </a>
              </li>
              <li>
                <a href="/service2" className="text-black block py-2">
                  Student 2
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>

      <div>
        <li className="Logout flex items-center">
          <img className="Logout-icon" src="/Logout.svg" alt="Logo" />
          <a href="/services" className="text-black block px-4 py-2">
            Logout
          </a>
          {/* You can add more elements here if needed */}
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
