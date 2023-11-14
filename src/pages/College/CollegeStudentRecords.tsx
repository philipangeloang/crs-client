<<<<<<< HEAD:src/pages/College/StudentRecords.tsx
import React, { useState } from 'react';
import { IoMdPrint } from 'react-icons/io';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import DateTime from '@/components/DateTime';
import { FaEdit } from 'react-icons/fa';

=======
import React from "react";
import { IoMdPrint } from "react-icons/io";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import DateTime from "@/components/DateTime";
>>>>>>> main:src/pages/College/CollegeStudentRecords.tsx

// Dummy data
const tableData = [
  {
    id: 1,
    identity: "202011511",
    name: "Mike Miguel Gomez",
    program: "BSCS",
    registeredAs: "CET",
    college: "Old Student",
  },
  {
    id: 2,
    identity: "20205256",
    name: "Philip Ang",
    program: "BSCS",
    registeredAs: "CET",
    college: "Old Student",
  },
  {
    id: 3,
    identity: "20201245",
    name: "Yuanah Cruz",
    program: "BSCS",
    registeredAs: "CET",
    college: "Old Student",
  },
  {
    id: 4,
    identity: "20212122",
    name: "Schrodinger's cat",
    program: "BSCS",
    registeredAs: "CET",
    college: "Old Student",
  },
  {
    id: 5,
    identity: "20232351",
    name: "Taylor Swift",
    program: "BSCS",
    registeredAs: "CET",
    college: "New Student",
  },
  {
    id: 6,
    identity: "20216751",
    name: "Francis Santoyo",
    program: "BSCS",
    registeredAs: "CET",
    college: "Old Student",
  },
  {
    id: 7,
    identity: "20232133",
    name: "Ma U. Reed",
    program: "BSCS",
    registeredAs: "CET",
    college: "New Student",
  },
  // Add more data as needed
];

<<<<<<< HEAD:src/pages/College/StudentRecords.tsx

const StudentRecords = () => {

  const [studentModalOpen, setStudentModalOpen] = useState(false);
  // Function to open the faculty modal
  const openStudentModal = () => {
    setStudentModalOpen(true);
  };

  // Function to close the faculty modal
  const closeStudentModal = () => {
    setStudentModalOpen(false);
  };
  

=======
const CollegeStudentRecords = () => {
>>>>>>> main:src/pages/College/CollegeStudentRecords.tsx
  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat">
      {/* Row 1 */}
      <div className="col-span-12 flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
          Students
        </div>
        <div className="flex flex-col items-end">
          <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
          <p className="text-xs ">
            Logged as: <span className="text-main-red">Administrator</span>
          </p>
        </div>
      </div>

      {/* Row 2 Table */}
<<<<<<< HEAD:src/pages/College/StudentRecords.tsx
      <div className="col-span-12 mt-20">
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search"
              className="border p-2 rounded"
            />
            <button className="ml-2">
              <FiArrowRight className="border text-2xl h-10" />
            </button>
          </div>
          <div className="flex items-center">

            <button className=" bg-main-red text-white rounded-lg p-2 ml-3" onClick={openStudentModal}>
              Add Student
            </button>
          </div>
        </div>
=======
      <div className="col-span-12 mt-20 font-open-sans">
>>>>>>> main:src/pages/College/CollegeStudentRecords.tsx
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg border">
            <thead>
              <tr className="bg-main-red text-white rounded-lg border ">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Identity #</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Program</th>
                <th className="px-4 py-2">Registered As</th>
                <th className="px-4 py-2">College</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-center border">
              {tableData.map((item) => (
                <tr className="border" key={item.id}>
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.identity}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.program}</td>
                  <td className="px-4 py-2">{item.registeredAs}</td>
                  <td className="px-4 py-2">{item.college}</td>
                  <td className="px-4 py-2 flex items-center justify-center">
                    <button>
                    <FaEdit className="bg-main-blue text-white text-lg m-2 p-1 w-7 h-7 rounded" />
                     
                    </button>
                    <button >
                    <IoMdPrint className="bg-main-blue text-white text-lg m-2 p-1 w-7 h-7 rounded" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {studentModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg w-full max-w-lg">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold mb-4">Add Student</h2>
                  <button className="flex bg-main-red items-center text-white p-2" onClick={closeStudentModal}>
                    X
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label htmlFor="selectCollege" className="text-sm font-medium">
                      Select College
                    </label>
                    <select
                      id="selectCollege"
                      className="w-full border p-2 rounded"
                      placeholder="Select"
                    >
                      <option value="CET">CET</option>
                      <option value="CHASS">CHASS</option>
                      <option value="CED">CED</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="selectProgram" className="text-sm font-medium">
                      Select a Program
                    </label>
                    <select
                      id="selectProgram"
                      className="w-full border p-2 rounded"
                      placeholder="Select"
                    >
                      <option value="CET">Mechanical Engineering</option>
                      <option value="CHASS">Computer Engineering</option>
                      <option value="CED">Computer Science</option>
                      {/* Add program options for the selected college */}
                    </select>
                  </div>
                </div>

                {/* Fields for Student Number and Student Name on separate lines */}
                <div className="mb-4">
                  <label htmlFor="studentNumber" className="text-sm font-medium">
                    Student Number
                  </label>
                  <input
                    type="text"
                    id="studentNumber"
                    className="w-full border p-2 rounded"
                    placeholder="e.g. 2020-15243"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="studentName" className="text-sm font-medium">
                    Student Name
                  </label>
                  <input
                    type="text"
                    id="studentName"
                    className="w-full border p-2 rounded"
                    placeholder="e.g. Mike Miguel Gomez"
                  />
                </div>

                <button className="bg-main-red text-white rounded-lg p-2 mt-4 ml-auto flex">
                  Add Student
                </button>
              </div>
            </div>
          )}

        </div>

        {/*Row 3 Pagination (right-aligned and smaller) */}
        <div className="col-span-12 sm:col-span-3 mt-20 text-sm ml-auto">
          <div className="flex justify-between items-center space-x-2">
            <ul className="flex space-x-2">
              <li>
                <FiArrowLeft className="border border-gray-500 w-5 h-5 rounded" />
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 border border-gray-500 px-2 rounded hover:text-gray-700 hover:border-gray-700"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 border border-gray-500 px-2 rounded hover:text-gray-700 hover:border-gray-700"
                >
                  2
                </a>
              </li>
              <li>
                <FiArrowRight className="border border-gray-500 w-5 h-5 rounded" />
              </li>
              <li>
                <p>1 out of 12 rows</p>
              </li>
            </ul>
            <DateTime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeStudentRecords;
