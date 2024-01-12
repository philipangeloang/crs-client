/* eslint-disable @typescript-eslint/no-explicit-any */
import DateTime from "@/components/DateTime";
import { useState, useEffect } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../../api/fetch";

const Classes = () => {
  const [classes, setClasses] = useState<any[]>([]);
  const [subject, setSubject] = useState<any[]>([]);

  // Dummy data
  // const tableData = [
  //   {
  //     id: 2121231,
  //     subjectCode: "CSC 0413-1",
  //     subjectName: "ENGINEERING RESEARCH AND DEVELOPMENT",
  //     course: "ME-CE, ME-SE, MEM-CM, MEM-MM, MIT, MS-ICT, MSMANENG",
  //     professor: "PANGAYAO, DENVERT C.",
  //     slot: "40",
  //     start: "N/A",
  //     end: "N/A",
  //   },
  // ];

  const fetchDataFromClassEndpoint = async () => {
    try {
      const response = await api.get("api/classes", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data.data;

      if (data) {
        setClasses(data);
      }
      console.log("API response from api/classes", data);
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  const fetchDataFromSubjectEndpoint = async () => {
    try {
      const response = await api.get("api/subjects", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      const data = await response.data.data;

      if (data) {
        setSubject(data);
      }
      console.log("API response from api/subjects", data);
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  useEffect(() => {
    fetchDataFromClassEndpoint();
    fetchDataFromSubjectEndpoint();
  }, []);

  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat">
      {/* Row 1 */}
      <div className="col-span-12 flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
          Classes
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
        <div>
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
              <div className="mb-5 ml-3">
                <label htmlFor="selectCollege" className="text-sm font-medium">
                  College
                </label>
                <select
                  id="selectCollege"
                  className="w-full border p-2 rounded"
                  placeholder="Select"
                >
                  <option>College of Engineering and Technology</option>
                  <option>College of Engineering and Technology</option>
                  <option>College of Engineering and Technology</option>
                </select>
              </div>
              <div className="mb-5 ml-3">
                <label htmlFor="selectCollege" className="text-sm font-medium">
                  AY Sem
                </label>
                <select
                  id="selectCollege"
                  className="w-full border p-2 rounded"
                  placeholder="Select"
                >
                  <option>2031</option>
                  <option>2322</option>
                  <option>2134</option>
                </select>
              </div>
            </div>
            <div className="flex items-center">
              <Link to="/home/classes-add">
                <button className=" bg-main-red text-white rounded-lg p-2 ml-3">
                  Add Classes
                </button>
              </Link>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-main-red text-white rounded-lg border ">
                  <th>Actions</th>
                  <th>Class ID</th>
                  <th>Subject Code</th>
                  <th>Subject Title</th>
                  <th>Program(s)</th>
                  <th>Profesor</th>
                  <th>Slots</th>
                  <th>Enrolled</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>

              <tbody>
                {classes.map((classItem) => {
                  const matchingSubject = subject.find(
                    (subjectItem) => subjectItem.subject_id
                  );

                  if (matchingSubject) {
                    return (
                      <tr className="border" key={`${classItem.subject_id}`}>
                        <td className="text-center flex justify-center items-center">
                          <Link to="/home/classes-edit">
                            <FaEdit className="bg-main-blue text-white rounded text-2xl w-7 h-7 p-1 m-1" />
                          </Link>
                          <FaTrash className="bg-main-red text-white rounded text-2xl w-7 h-7 p-1 m-1" />
                        </td>
                        <td className="text-center">{classItem.class_id}</td>
                        <td className="text-center">
                          {matchingSubject.subject_code}
                        </td>
                        <td className="text-center">
                          {matchingSubject.subject_title}
                        </td>
                        <td className="text-center">
                          {matchingSubject.subject_type}
                        </td>
                        <td className="text-center">-</td>
                        <td className="text-center">{classItem.slots}</td>
                        <td className="text-center">-</td>
                        <td className="text-center">{classItem.start_date}</td>
                        <td className="text-center">{classItem.end_date}</td>
                      </tr>
                    );
                  } else {
                    // Only faculty has this staff_id
                    return (
                      <tr className="border" key={`${classItem.subject_id}`}>
                        {/* Render faculty data here */}
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Row 3 Pagination (right-aligned and smaller) */}
      <div className="col-span-12 mt-20">
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
          <div className="flex items-end">
            <DateTime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
