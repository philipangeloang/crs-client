/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import DateTime from "@/components/DateTime";
import { useState, useEffect } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { IoMdPrint } from "react-icons/io";
import api from "../../api/fetch";
import { FaEdit } from "react-icons/fa";

const Subjects = () => {
  // Dummy data
  const tableData = [
    {
      class: "ARE 101",
      section: "2",
      subjectTitle: "Theory of Structures",
      schedule: "M 4:00-5:30PM LecSyncOL FIELD  Th 4:00-5:30PM F2F GCA 303",
      instructor: "Jamillah S. Guialil",
      slots: "50",
      unit: "30",
      enroll: "40",
      students: "50",
    },
  ];

  const [subject, setSubject] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);

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

  useEffect(() => {
    fetchDataFromClassEndpoint();
    fetchDataFromSubjectEndpoint();
  }, []);

  const [subjectModalOpen, setSubjectModalOpen] = useState(false);
  // Function to open the faculty modal
  const openSubjectModal = () => {
    setSubjectModalOpen(true);
  };

  // Function to close the faculty modal
  const closeSubjectModal = () => {
    setSubjectModalOpen(false);
  };

  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat">
      {/* Row 1 */}
      <div className="col-span-12 flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
          Subjects
        </div>
        <div className="flex flex-col items-end">
          <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
          <p className="text-xs ">
            Logged as: <span className="text-main-red">Administrator</span>
          </p>
        </div>
      </div>

      <div className="col-span-12 mt-20">
        <div className="mb-5 ml-3">
          <label htmlFor="selectCollege" className="text-sm font-medium">
            AY Sem
          </label>
          <select
            id="selectCollege"
            className="w-[200px] ml-2 border p-2 rounded"
            placeholder="Select"
          >
            <option>1st: 2023-2024</option>
            <option>2nd: 2025-2026</option>
          </select>
        </div>

        <div className="flex items-center justify-end">
          <button
            className=" bg-main-red text-white rounded-lg p-2 ml-3"
            onClick={openSubjectModal}
          >
            Add Subject
          </button>
          <button>
            <IoMdPrint className="bg-main-blue text-white text-lg m-2 p-1 w-10 h-10 rounded" />
          </button>
        </div>

        <br />

        <div className="flex">
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg border">
            <thead>
              <tr className="bg-main-red text-white rounded-lg border ">
                <th className="px-4 py-2">Class</th>
                <th className="px-4 py-2">Section</th>
                <th className="px-4 py-2">Subject Title</th>
                <th className="px-4 py-2">Schedule</th>
                <th className="px-4 py-2">Instructor</th>
                <th className="px-4 py-2">Slots</th>
                <th className="px-4 py-2">Students</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-center border">
              {tableData.map((item) => (
                <tr className="border" key={item.class}>
                  <td className="px-4 py-2">{item.class}</td>
                  <td className="px-4 py-2">{item.section}</td>
                  <td className="px-4 py-2">{item.subjectTitle}</td>
                  <td className="px-4 py-2">{item.schedule}</td>
                  <td className="px-4 py-2">{item.instructor}</td>
                  <td className="px-4 py-2">{item.slots}</td>
                  <td className="px-4 py-2">{item.students}</td>
                  <td className="flex items-center justify-center">
                    <button>
                      <FaEdit className="bg-main-blue text-white text-lg m-2 p-1 w-7 h-7 rounded" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for Adding */}
        {subjectModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg w-full max-w-lg">
              <div className="flex justify-between">
                <h2 className="text-xl text-main-red mb-4">
                  Subject Information
                </h2>
                <button
                  className="flex bg-main-red items-center text-white p-2"
                  onClick={closeSubjectModal}
                >
                  X
                </button>
              </div>
              <hr />
              <div className="mt-5">
                <div className="flex flex-row">
                  <div className="flex flex-col">
                    <label className="mt-1 mb-2" htmlFor="">
                      Subject Code
                    </label>
                    <input
                      className="border p-1 rounded"
                      type="text"
                      placeholder="ex. CSC 0413"
                    />
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white  rounded-lg border shadow">
                      <thead>
                        <tr className="bg-main-red text-white rounded-lg border ">
                          <th className="px-4 py-2">Subject Code</th>
                          <th className="px-4 py-2">Section</th>
                          <th className="px-4 py-2">Subject Title</th>
                          <th className="px-4 py-2">Schedule</th>
                          <th className="px-4 py-2">Instructor</th>
                          <th className="px-4 py-2">Units</th>
                          <th className="px-4 py-2">Slots</th>
                          <th className="px-4 py-2">Enrolled</th>
                          <th className="px-4 py-2">Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        {subject.map((subjectItem) => {
                          const matchingClass = classes.find(
                            (classItem) => classItem.subject_id
                          );

                          if (matchingClass) {
                            return (
                              <tr
                                className="border"
                                key={`${subjectItem.subject_id}`}
                              >
                                <td className="text-center">
                                  {subjectItem.subject_code}
                                </td>
                                <td className="text-center">
                                  {subjectItem.subject_title}
                                </td>
                                <td className="text-center">
                                  {subjectItem.subject_type}
                                </td>
                                <td className="text-center">-</td>
                                <td className="text-center">-</td>
                                <td className="text-center">
                                  {subjectItem.units}
                                </td>
                                <td className="text-center">
                                  {matchingClass.slots}
                                </td>
                                <td className="text-center">-</td>
                                <td className="flex items-center justify-center">
                                  <button>
                                    <FaEdit className="bg-main-blue text-white text-lg m-2 p-1 w-7 h-7 rounded" />
                                  </button>
                                </td>
                              </tr>
                            );
                          } else {
                            // Only faculty has this staff_id
                            return (
                              <tr
                                className="border"
                                key={`${subjectItem.subject_id}`}
                              >
                                {/* Render faculty data here */}
                              </tr>
                            );
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                  <br />
                </div>

                <div>
                  <div className="w-full flex flex-col mt-2 mb-2">
                    <label className="mt-1 mb-2" htmlFor="">
                      Subject Name
                    </label>
                    <input
                      className="border p-2 rounded"
                      type="text"
                      placeholder="ex. CS ELECTIVE 2"
                    />
                  </div>
                </div>

                <div>
                  <div className="w-full  flex justify-center items-center flex-col mt-5 mb-5">
                    <button className="border w-[200px] bg-main-red text-white p-2">
                      Save
                    </button>
                  </div>
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

          <div>
            <DateTime />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
