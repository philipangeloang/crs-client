import DateTime from '@/components/DateTime';
import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { FaEdit, FaEye, FaTrash, FaMinusCircle, FaExchangeAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import api from "../../api/fetch";



const AddDropReq = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentsTerms, setStudentsTerms] = useState<any[]>([]);
  const [students, setStudents] = useState<any[]>([]);
  const [studentModalOpen, setStudentModalOpen] = useState(false);
  const [colleges, setColleges] = useState<any[]>([]);
  const [program, setProgram] = useState<any[]>([]);
  const [addDrop, setAddDrop] = useState<any[]>([]);

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
  const fetchDataFromAddDropEndpoint = async () => {
    try {
      const response = await api.get("api/add-drop-requests", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data.data;

      if (data) {
        setAddDrop(data);
      }
      console.log("API response from api/add-drop-requests:", data);
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


  const openModal = () => {
    setIsModalOpen(true);
  };


  useEffect(() => {
    fetchDataFromStudentsEndpoint();
    fetchDataFromStudentTermsEndpoint();
    fetchDataFromCollegesEndpoint();
    fetchDataFromProgramsEndpoint();
    fetchDataFromAddDropEndpoint();
  }, []);








  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };




  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat" >
      {/* Row 1 */}
      <div className="col-span-12 flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
          Add/Drop Requests
        </div>
        <div className="flex flex-col items-end">
          <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
          <p className="text-xs ">
            Logged as: <span className="text-main-red">Administrator</span>
          </p>
        </div>
      </div>

      {/* Row 2 */}
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
        </div>

        {/* Table */}

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-main-red text-white rounded-lg border ">
                <th>Actions</th>
                <th>Student ID</th>
                <th>Name</th>
                <th>Program</th>
                <th>College</th>
                <th>Request Date</th>
                <th>Status</th>
                <th>Checked By</th>
                <th>Checked Date</th>
              </tr>
            </thead>

            {/* Change Table */}
            <tbody>
              {addDrop.map((studentAddItem) => {
                const matchingStudent = students.find((studentItem) => studentItem.student_id === studentAddItem.student_id);
                const matchingStudentTerms = studentsTerms.find((studentTermItem) => studentTermItem.student_id === matchingStudent.student_id);
                const matchingProgram = program.find((programItem) => programItem.program_id === matchingStudentTerms.program_id);
                const matchingCollege = colleges.find((collegeItem) => collegeItem.college_id === matchingStudentTerms.college_id);





                return (
                  <tr className="border" key={`${studentAddItem.student_id}`}>
                    <td className="text-center flex justify-center items-center m-auto">
                      <button
                        onClick={() => openModal()}
                        className="focus:outline-none"
                      >
                        <FaEye className="bg-main-blue text-white rounded text-2xl w-7 h-7 p-1 m-1" />
                      </button>
                    </td>
                    <td className="text-center">{studentAddItem.student_id}</td>
                    <td className="text-center">{matchingStudent.last_name}, {matchingStudent.first_name}, {matchingStudent.middle_name}</td>
                    <td className="text-center">{matchingProgram.program_code}</td>
                    <td className="text-center">{matchingCollege.college_code}</td>
                    <td className="text-center">{studentAddItem.request_date}</td>
                    <td className="text-center">{studentAddItem.status}</td>
                    <td className="text-center">{studentAddItem.approved_by}</td>
                    <td className={`text-center ${studentAddItem.approved_date ? 'text-green-700 font-bold' : 'text-gray-500'}`}>
                      {studentAddItem.approved_date ? studentAddItem.approved_date : 'Not yet approved'}
                    </td>
                  </tr>
                );



                // Only student has this student_id
                return (
                  <tr className="border" key={`${studentAddItem.student_id}`}>
                    {/* Render student data here */}
                  </tr>
                );
              })}
            </tbody>





          </table>
        </div>





        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg w-full max-w-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-xl text-main-red p-1">View Details</h2>
                <button
                  className="bg-main-red text-white p-1 rounded"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
              <hr />
              <div>
                {/* Display the selected data here */}
                {addDrop.map((studentAddItem) => {
                  const matchingStudent = students.find((studentItem) => studentItem.student_id === studentAddItem.student_id);
                  const matchingStudentTerms = studentsTerms.find((studentTermItem) => studentTermItem.student_id === matchingStudent.student_id);
                  const matchingProgram = program.find((programItem) => programItem.program_id === matchingStudentTerms.program_id);
                  const matchingCollege = colleges.find((collegeItem) => collegeItem.college_id === matchingStudentTerms.college_id);


                  return (
                    <div key={studentAddItem.student_id} className="flex justify-between border p-1 shadow rounded">
                      <div className="flex flex-col">
                        <p>Student ID: {studentAddItem.student_id}</p>
                        <p>Student Name: {matchingStudent ? `${matchingStudent.last_name}, ${matchingStudent.first_name}, ${matchingStudent.middle_name}` : 'N/A'}</p>
                        <p>Program: {matchingProgram ? matchingProgram.program_code : 'N/A'}</p>
                        <p>College: {matchingCollege ? matchingCollege.college_code : 'N/A'}</p>
                      </div>
                      <div className="flex flex-col">
                        <p>Request Date: {studentAddItem.request_date}</p>
                        <p>Total units after approved: {studentAddItem.total_units} </p>
                        <p>Reason: {studentAddItem.reason}</p>
                        <p>Status: {studentAddItem.status}</p>
                        <p>Approved by: {studentAddItem.approved_by}</p>
                        <p>Approved date: {studentAddItem.approved_date || 'Not yet approved'}</p>
                      </div>
                    </div>
                  );
                })}

                {/* Display Dropped Classes */}
                <div className="overflow-x-auto mt-5 mb-2 h-[200px]">
                  <h2 className="text-xl font-bold text-main-red mb-2">Dropped Classes</h2>
                  <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                    <thead>
                      <tr className="bg-main-red text-white rounded-lg border">
                        <th>Class ID</th>
                        <th>Subject Code / Section</th>
                        <th>Date Created</th>
                      </tr>
                    </thead>
                    <tbody className="text-center border">
                      {/* Add your dropped classes data here */}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>




      {/*Row 3 Pagination (right-aligned and smaller) */}
      <div className="col-span-12 mt-20 text-sm">
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

          <div>
            <DateTime />
          </div>

        </div>
      </div>

    </div>
  )
}

export default AddDropReq