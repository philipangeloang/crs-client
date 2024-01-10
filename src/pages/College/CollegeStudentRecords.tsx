import React, { useState, useEffect } from "react";
import { IoMdPrint } from "react-icons/io";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import DateTime from "@/components/DateTime";
import { FaEdit, FaTrash } from "react-icons/fa";
import api from "../../api/fetch";
import axios from "axios";
import { ItemIndicator } from "@radix-ui/react-select";

const CollegeStudentRecords = () => {
  const [studentsTerms, setStudentsTerms] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const [colleges, setColleges] = useState<any[]>([]);
  const [program, setProgram] = useState<any[]>([]);

  const openStudentModal = () => {
    setStudentModalOpen(true);
  };

  const closeStudentModal = () => {
    setStudentModalOpen(false);
  };



  const fetchDataFromCollegesEndpoint = async () => {
    try {
      const response = await api.get("api/colleges", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data.data;

      if (data) {
        setColleges(data);
      }
      console.log("API response from api/colleges:", data);
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  const fetchDataFromProgramsEndpoint = async () => {
    try {
      const response = await api.get("api/programs", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data.data;

      if (data) {
        setProgram(data);
      }
      console.log("API response from api/programs:", data);
    } catch (error) {
      console.error("API request error:", error);
    }
  };


  const fetchDataFromStudentsEndpoint = async () => {
    try {
      const response = await api.get("api/students", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data.data;

      if (data) {
        setStudents(data);
      }
      console.log("API response from api/student", data);
    } catch (error) {
      console.error("API request error:", error);
    }
  };


  const fetchDataFromStudentTermsEndpoint = async () => {
    try {
      const response = await api.get("api/student-terms", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data.data;

      if (data) {
        setStudentsTerms(data);
      }
      console.log("API response from api/student-terms:", data);
    } catch (error: any) {
      console.error("API request error:", error);
      console.error("API response error details:", error.response);
    }




  };


  useEffect(() => {

    fetchDataFromStudentsEndpoint();
    fetchDataFromStudentTermsEndpoint();
    fetchDataFromCollegesEndpoint();
    fetchDataFromProgramsEndpoint();
  }, []);




  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat">
      {/* Row 1 */}
      <div className="col-span-12 flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg">
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
        <div className="flex  justify-between mb-4">
          <div className="flex">
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
                {colleges.map(item => (
                  <option key={item.college_id} value={item.college_code}>
                    {item.college_code}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3 ml-3">
              <label htmlFor="selectCode" className="text-sm font-medium">
                Registration Code
              </label>
              <select

                className="w-full border p-2 rounded"
                placeholder="Select"
              >

                {studentsTerms.map(item => (
                  <option key={item.student_id} value={item.term}>
                    {item.term}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3 ml-3">
              <label htmlFor="selectCode" className="text-sm font-medium">
                Student Type
              </label>
              <select
                id="selectCollege"
                className="w-full border p-2 rounded"
                placeholder="Select"
              >

                {studentsTerms.map(item => (
                  <option key={item.student_id} value={item.student_type}>
                    {item.student_type}
                  </option>
                ))}
              </select>
            </div>




          </div>
          {/* Col 2 */}






          <div className="flex items-center">
            <div className="mb-3 ml-3">
              <label htmlFor="selectCode" className="text-sm font-medium">
                AY Term
              </label>
              <select
                id="selectCollege"
                className="w-full border p-2 rounded"
                placeholder="Select"
              >

                {studentsTerms.map(item => (
                  <option key={item.program_id} value={item.academic_year}>
                    {item.academic_year}
                  </option>
                ))}
              </select>
            </div>
            <IoMdPrint className="bg-main-blue text-white p-1 rounded text-[30px] ml-1 mt-3 flex justify-center align-in" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg border">
            <thead>
              <tr className="bg-main-red text-white rounded-lg border ">
                <th className="px-4 py-2">Student No.</th>
                <th className="px-4 py-1">Name</th>
                <th className="px-4 py-2">Program Code</th>
                <th className="px-4 py-2">College Code</th>
                <th className="px-4 py-2">Registration Code</th>
                <th className="px-4 py-2">Student Type</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {students.map((studentItem) => {
                const matchingStudent = studentsTerms.find((studentTermItem) => studentTermItem.student_id === studentItem.student_id);

                if (matchingStudent) {
                  const matchingProgram = program.find((programItem) => programItem.program_id === matchingStudent.program_id);

                  if (matchingProgram) {
                    const matchingCollege = colleges.find((collegeItem) => collegeItem.college_id === matchingStudent.college_id);

                    if (matchingCollege) {
                      return (
                        <tr className="border" key={`${studentItem.student_id}`}>
                          <td className="text-center">{studentItem.student_no}</td>
                          <td className="text-center">{studentItem.last_name}, {studentItem.first_name}, {studentItem.middle_name}</td>
                          <td className="text-center">{matchingProgram.program_code}</td>
                          <td className="text-center">{matchingCollege.college_code}</td>
                          <td className="text-center">{matchingStudent.registration_code}</td>
                          <td className="text-center">{matchingStudent.student_type}</td>
                          <td className="text-center flex justify-center items-center">
                            <FaEdit
                              className="bg-main-blue text-white rounded text-2xl w-7 h-7 p-1 m-1"
                              onClick={() => {
                                openStudentModal();
                                
                              }}
                            />

                            <FaTrash className="bg-main-red text-white rounded text-2xl w-7 h-7 p-1 m-1" />
                          </td>
                        </tr>
                      );
                    } else {
                      console.error(`No matching college found for student ID ${matchingStudent.student_id}`);
                    }
                  } else {
                    console.error(`No matching program found for student ID ${matchingStudent.student_id}`);
                  }
                } else {
                  console.error(`No matching student term found for student ID ${studentItem.student_id}`);
                }

                return (
                  <tr className="border" key={`${studentItem.student_id}`}>
                    {/* Render student data here */}
                  </tr>
                );
              })}
            </tbody>




          </table>
          {studentModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg w-full max-w-lg">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold mb-4">Add Student</h2>
                  <button
                    className="flex bg-main-red items-center text-white p-2"
                    onClick={closeStudentModal}
                  >
                    X
                  </button>
                </div>
                <h2 className="text-xl mb-4 text-main-red">Student Terms Update</h2>

                {/* 1st row */}
                <div className="flex flex-row mb-4">
                  <div className="flex-col mb-4 flex-grow">
                    <label className="mb-1 text-sm" htmlFor="fullName">Full Name</label>
                    <h1 id="fullName" className="text-main-red font-bold">SANTOS, MARIA CLARA REYES</h1>
                  </div>
                  <div className="flex-col mb-4 flex-grow">
                    <label className="mb-1 text-sm" htmlFor="studentID">Student ID</label>
                    <h1 id="studentID" className="font-bold">202012341</h1>
                  </div>
                  <div className="flex-col mb-4 flex-grow">
                    <label className="mb-1 text-sm" htmlFor="enrolled">Enrolled</label>
                    <h1 id="enrolled" className="text-main-red">No</h1>
                  </div>
                </div>

                {/* 2nd row */}
                <div className="flex flex-row mb-4">
                  <div className="flex-col mb-4 w-1/2 mr-2">
                    <div className="mb-2 mt-2">
                      <label className="mb-2 text-sm" htmlFor="firstName">First Name</label><br />
                      <input type="text" id="firstName" className="border rounded p-1 w-full" />
                    </div>
                    <div className="mb-2 mt-2">
                      <label className="mb-2 text-sm" htmlFor="middleName">Middle Name</label><br />
                      <input type="text" id="middleName" className="border rounded p-1 w-full" />
                    </div>
                    <div className="mb-2 mt-2">
                      <label className="mb-2 text-sm" htmlFor="middleInitial">Middle Initial</label>
                      <input type="text" id="middleInitial" className="border rounded p-1 w-full" />
                    </div>
                    <div className="mb-2 mt-2">
                      <label className="mb-2 text-sm" htmlFor="lastName">Last Name</label> <br />
                      <input type="text" id="lastName" className="border rounded p-1 w-full" />
                    </div>
                    <div className="mb-2 mt-2">
                      <label className="mb-2 text-sm" htmlFor="suffix">Suffix</label> <br />
                      <input type="text" id="suffix" className="border rounded p-1 w-full" />
                    </div>
                    <div className="mb-2">
                      <label className="mb-2 text-sm" htmlFor="maiden">Maiden</label> <br />
                      <input type="text" id="maiden" className="border rounded p-1 w-full" />
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

                  <div className="flex-col mb-4 w-1/2">
                    <div className="mb-3">
                      <label className="mb-2 text-sm" htmlFor="studentType">Student Type</label>
                      <select
                        className="border p-1 rounded w-full"
                      >
                        <option>OLD</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 text-sm" htmlFor="programCode">Program Code</label>
                      <select
                        className="border p-1 rounded w-full"
                      >
                        <option>BSCS</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 text-sm" htmlFor="collegeCode">College Code</label>
                      <select
                        className="border p-1 rounded w-full"
                      >
                        <option>CET</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 text-sm" htmlFor="block">Block</label>
                      <select
                        className="border p-1 rounded w-full"
                      >
                        <option>BSCS 4-2</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 text-sm" htmlFor="registrationCode">Registration Code</label>
                      <select
                        className="border p-1 rounded w-full"
                      >
                        <option>Regular</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="mb-2 text-sm" htmlFor="yearLevel">Year Level</label>
                      <select
                        className="border p-1 rounded w-full"
                      >
                        <option>4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button
                  className="bg-main-red text-white p-2 rounded"

                >
                  Save Student
                </button>

                {/* Additional rows can be added similarly */}

              </div>
            </div>
          )}
        </div>

        {/* Row 3 Pagination (right-aligned and smaller) */}
        <div className="col-span-12 sm:col-span-3 mt-20 text-sm ml-auto">
          <div className="flex justify-between items-center space-x-2">
            <ul className="flex space-x-2">
              <li>
                <FiArrowLeft className="border border-gray-500 w-5 h-5 rounded" />
              </li>
              {/* ... (pagination links) */}
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