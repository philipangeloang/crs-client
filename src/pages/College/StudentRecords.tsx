<<<<<<< Updated upstream:src/pages/College/StudentRecords.tsx
import React, { useState } from 'react';
import { IoMdPrint } from 'react-icons/io';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import DateTime from '@/components/DateTime';
import { FaEdit } from 'react-icons/fa';


// Dummy data
const tableData = [
  { id: 1, identity: '202011511', name: 'Mike Miguel Gomez', program: 'BSCS', registeredAs: 'CET', college: 'Old Student' },
  { id: 2, identity: '20205256', name: 'Philip Ang', program: 'BSCS', registeredAs: 'CET', college: 'Old Student' },
  { id: 3, identity: '20201245', name: 'Yuanah Cruz', program: 'BSCS', registeredAs: 'CET', college: 'Old Student' },
  { id: 4, identity: '20212122', name: "Schrodinger's cat", program: 'BSCS', registeredAs: 'CET', college: 'Old Student' },
  { id: 5, identity: '20232351', name: 'Taylor Swift', program: 'BSCS', registeredAs: 'CET', college: 'New Student' },
  { id: 6, identity: '20216751', name: 'Francis Santoyo', program: 'BSCS', registeredAs: 'CET', college: 'Old Student' },
  { id: 7, identity: '20232133', name: 'Ma U. Reed', program: 'BSCS', registeredAs: 'CET', college: 'New Student' },
=======
import { useState } from "react";
import { IoMdPrint } from "react-icons/io";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import DateTime from "@/components/DateTime";
import { FaEdit, FaTrash } from "react-icons/fa";

// Dummy data
const tableData = [
  {
    id: 1,
    identity: "202011511",
    name: "Santos Maria Clara Reyes",
    program: "BSCS",
    registeredAs: "Regular",
    college: "CET",
    studentType: "Old Student"
  },
>>>>>>> Stashed changes:src/pages/College/CollegeStudentRecords.tsx
  // Add more data as needed
];


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
  

  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat" >
      {/* Row 1 */}
      <div className="col-span-12 flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
          Student
        </div>
        <div className="flex flex-col items-end">
          <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
          <p className="text-xs ">
            Logged as: <span className="text-main-red">Administrator</span>
          </p>
        </div>
      </div>

      {/* Row 2 Table */}
      <div className="col-span-12 mt-20">
        <div className="flex justify-between mb-4">
          <div className="flex ">
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
            <div className="mb-3 ml-3">
              <label htmlFor="selectCollege" className="text-sm font-medium">
                College Code
              </label>
              <select
                id="selectCollege"
                className="w-full border p-2 rounded"
                placeholder="Select"
              >
                <option>College</option>
                <option>CHASS</option>
                <option>CED</option>
              </select>
            </div>
            <div className="mb-3 ml-3">
              <label htmlFor="selectCollege" className="text-sm font-medium">
                Registration Code
              </label>
              <select
                id="selectCollege"
                className="w-full border p-2 rounded"
                placeholder="Select"
              >
                <option>Regular</option>
                <option>Non regular</option>
              </select>
            </div>
            <div className="mb-3 ml-3">
              <label htmlFor="selectCollege" className="text-sm font-medium">
                Student Type
              </label>
              <select
                id="selectCollege"
                className="w-full border p-2 rounded"
                placeholder="Select"
              >
                <option>Old</option>
                <option>New</option>
              </select>
            </div>


          </div>


          <div className="flex items-center">
<<<<<<< Updated upstream:src/pages/College/StudentRecords.tsx

            <button className=" bg-main-red text-white rounded-lg p-2 ml-3" onClick={openStudentModal}>
              Add Student
            </button>
=======
            <div className="mb-3 ml-3">
              <label htmlFor="selectCollege" className="text-sm font-medium">
                AY Term
              </label>
              <select
                id="selectCollege"
                className="w-full border p-2 rounded"
                placeholder="Select"
              >
                <option>2023-2024, 1st</option>
              </select>
            </div>
            <IoMdPrint className="bg-main-blue text-white p-1 rounded text-[30px] ml-1 mt-3 flex justify-center align-in" />
>>>>>>> Stashed changes:src/pages/College/CollegeStudentRecords.tsx
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg border shadow">
            <thead>
              <tr className="bg-main-red text-white rounded-lg border ">
                <th className="px-4 py-2">Student #</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Program Code</th>
                <th className="px-4 py-2">College Code</th>
                <th className="px-4 py-2">Registered As</th>
                <th className="px-4 py-2">Student Type</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-center border">
              {tableData.map((item) => (
                <tr className="border" key={item.id}>
                  <td className="px-4 py-2">{item.identity}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.program}</td>
                  <td className="px-4 py-2">{item.college}</td>
                  <td className="px-4 py-2">{item.registeredAs}</td>
                  <td className="px-4 py-2">{item.studentType}</td>
                  <td className="px-4 py-2 flex items-center justify-center">
                    <button>
<<<<<<< Updated upstream:src/pages/College/StudentRecords.tsx
                    <FaEdit className="bg-main-blue text-white text-lg m-2 p-1 w-7 h-7 rounded" />
                     
                    </button>
                    <button >
                    <IoMdPrint className="bg-main-blue text-white text-lg m-2 p-1 w-7 h-7 rounded" />
=======
                      <FaEdit className="bg-main-blue text-white text-lg m-2 p-1 w-7 h-7 rounded" onClick={openStudentModal} />
                    </button>
                    <button>
                      <FaTrash className="bg-main-red text-white text-lg m-2 p-1 w-7 h-7 rounded" />
>>>>>>> Stashed changes:src/pages/College/CollegeStudentRecords.tsx
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
<<<<<<< Updated upstream:src/pages/College/StudentRecords.tsx
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
=======
                  <h2 className="text-xl  mb-4 text-main-red">Student Terms Update</h2>
                  <button
                    className="flex bg-main-red items-center text-white p-2"
                    onClick={closeStudentModal}
                  >
                    X
                  </button>
                </div>
                <div className="mt-3">
                  {/* 1st row  */}
                  <div className="flex flex-row w-full">
                    <div className="flex-col mb-4 flex-grow">
                      <label className="mb-1" htmlFor="fullName">Full Name</label>
                      <h1 id="fullName" className="text-main-red font-bold">SANTOS, MARIA CLARA REYES</h1>
                    </div>
                    <div className="flex-col mb-4 flex-grow">
                      <label className="mb-1" htmlFor="studentID">Student ID</label>
                      <h1 id="studentID" className="font-bold">202012341</h1>
                    </div>
                    <div className="flex-col mb-4 flex-grow">
                      <label className="mb-1" htmlFor="enrolled">Enrolled</label>
                      <h1 id="enrolled" className="text-main-red">No</h1>
                    </div>
                  </div>

                  {/* 2nd row */}
                  <div className="flex flex-row">
                    <div className="flex-col mb-4 width-[20%]">
                      <div className="mb-2 mt-2">
                        <label className="mb-2 text-sm" htmlFor="firstName">First Name</label><br />
                        <input type="text" id="firstName" className="border rounded p-1" />
                      </div>
                      <div className="mb-2 mt-2">
                        <label className="mb-2 text-sm" htmlFor="middleName">Middle Name</label><br />
                        <input type="text" id="middleName" className="border rounded p-1" />
                      </div>
                      <div className="mb-2 mt-2">
                        <label className="mb-2 text-sm" htmlFor="middleInitial">Middle Initial</label>
                        <input type="text" id="middleInitial" className="border rounded p-1" />
                      </div>
                      <div className="mb-2 mt-2">
                        <label className="mb-2 text-sm" htmlFor="lastName">Last Name</label> <br />
                        <input type="text" id="lastName" className="border rounded p-1" />
                      </div>
                      <div className="mb-2 mt-2">
                        <label className="mb-2 text-sm" htmlFor="suffix">Suffix</label> <br />
                        <input type="text" id="suffix" className="border rounded p-1" />
                      </div>
                      <div className="mb-2">
                        <label className="mb-2 text-sm" htmlFor="maiden">Maiden</label> <br />
                        <input type="text" id="maiden" className="border rounded p-1" />
                      </div>
                      <div className="mb-2 flex">
                        <label className="mb-2 text-sm" htmlFor="graduatingStudent">Graduating Student?</label>
                        <div className="flex items-center ml-1 mb-2">
                          <input type="checkbox" id="graduatingStudentYes" className="border rounded p-1" />
                          <label htmlFor="graduatingStudentYes" className="ml-1">Yes</label>
                        </div>
                        <div className="flex items-center ml-2 mb-2">
                          <input type="checkbox" id="graduatingStudentNo" className="border rounded p-1" />
                          <label htmlFor="graduatingStudentNo" className="ml-1">No</label>
                        </div>
                      </div>
                    </div>

                    <div className="flex-col mb-5 width-[50%]">
                      <div className="mb-3">
                        <label className="mb-2 text-sm" htmlFor="studentType">Student Type</label>
                        <select
                          className="border p-1 rounded w-full"
                        >
                          <option>OLD</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="mb-2 text-sm" htmlFor="studentType">Program Code</label>
                        <select
                          className="border p-1 rounded w-full"
                        >
                          <option>BSCS</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="mb-2 text-sm" htmlFor="studentType">College Code</label>
                        <select
                          className="border p-1 rounded w-full"
                        >
                          <option>CET</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="mb-2 text-sm" htmlFor="studentType">Block</label>
                        <select
                          className="border p-1 rounded w-full"
                        >
                          <option>BSCS 4-2</option>
                        </select>
                      </div>
                   
                      <div className="mb-3">
                        <label className="mb-2 text-sm" htmlFor="studentType">Registration Code</label>
                        <select
                          className="border p-1 rounded w-full"
                        >
                          <option>Regular</option>
                        </select>
                      </div>
                   
                   
                      <div className="mb-3">
                        <label className="mb-2 text-sm" htmlFor="studentType">Year Level</label>
                        <select
                          className="border p-1 rounded w-full"
                        >
                          <option>4</option>
                        </select>
                      </div>
                   
                    </div>
>>>>>>> Stashed changes:src/pages/College/CollegeStudentRecords.tsx
                  </div>

<<<<<<< Updated upstream:src/pages/College/StudentRecords.tsx
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
=======
>>>>>>> Stashed changes:src/pages/College/CollegeStudentRecords.tsx






                </div>
                <button className="bg-main-red text-white rounded-lg p-2 mt-4 flex justify-center">
                  Save
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
                <a href="#" className="text-gray-500 border border-gray-500 px-2 rounded hover:text-gray-700 hover:border-gray-700">1</a>
              </li>
              <li>
                <a href="#" className="text-gray-500 border border-gray-500 px-2 rounded hover:text-gray-700 hover:border-gray-700">2</a>
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

  )
}

export default StudentRecords