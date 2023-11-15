import DateTime from "@/components/DateTime";
import React from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaTrash, FaPrint } from "react-icons/fa";

const ListOfTeaching = () => {
  // Dummy data
  const tableData = [
    {
      subjectid: "GEP 824-1",
      subjTitle: "ADVANCED SOFTWARE ENGINEERING",
      units: "3",
      schedule: "07:00 PM - 10:30 PM | Sat | OPEN FIELD| ASYNC",
      numStudents: "50",
      creds: "3",
      college: "CET-GP",
    },
    {
      subjectid: "GEP 824-1",
      subjTitle: "ADVANCED SOFTWARE ENGINEERING",
      units: "3",
      schedule: "07:00 PM - 10:30 PM | Sat | OPEN FIELD| ASYNC",
      numStudents: "50",
      creds: "3",
      college: "CET-GP",
    },
    {
      subjectid: "GEP 824-1",
      subjTitle: "ADVANCED SOFTWARE ENGINEERING",
      units: "3",
      schedule: "07:00 PM - 10:30 PM | Sat | OPEN FIELD| ASYNC",
      numStudents: "50",
      creds: "3",
      college: "CET-GP",
    },
    {
      subjectid: "GEP 824-1",
      subjTitle: "ADVANCED SOFTWARE ENGINEERING",
      units: "3",
      schedule: "07:00 PM - 10:30 PM | Sat | OPEN FIELD| ASYNC",
      numStudents: "50",
      creds: "3",
      college: "CET-GP",
    },
  ];
  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat">
      {/* Row 1 */}
      <div className="col-span-12 flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
          List of Teaching Assignments
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
          <div className="flex justify-between mb-4 ">
            <div className="flex items-center w-[240px]">
              <select className="w-full border p-2 rounded">
                <option value="male">SANTOS, MARIA THERESA CRUZ</option>
                <option value="female">FERNANDO, POE JR.</option>
              </select>
              <button className="ml-2">
                <FiArrowRight className="border text-2xl h-10" />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button className=" bg-main-red text-white rounded-lg p-2 mr-3">
                Save
              </button>
              <FaPrint className="bg-main-blue text-white rounded w-7 p-1 h-7" />
            </div>
          </div>
        </div>

        {/* Table  */}

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-md rounded-lg border">
            <thead>
              <tr className="bg-main-red text-white rounded-lg border ">
                <th className="px-4 py-2">Subject Code & Section</th>
                <th className="px-4 py-2">Subject Title</th>
                <th className="px-4 py-2">Units</th>
                <th className="px-4 py-2">Schedule</th>
                <th className="px-4 py-2">No. of Students</th>
                <th className="px-4 py-2">Credited Units/Hours</th>
                <th className="px-4 py-2">College</th>
              </tr>
            </thead>
            <tbody className="text-center border">
              {tableData.map((item) => (
                <tr className="border" key={item.subjectid}>
                  <td className="px-4 py-2">{item.subjectid}</td>
                  <td className="px-4 py-2">{item.subjTitle}</td>
                  <td className="px-4 py-2">{item.units}</td>
                  <td className="px-4 py-2">{item.schedule}</td>
                  <td className="px-4 py-2">{item.numStudents}</td>
                  <td className="px-4 py-2">{item.creds}</td>
                  <td className="px-4 py-2">{item.college}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="col-span-12 mt-10 flex w-full justify-around">
        <div className="col-span-6">
          <div className="flex flex-col w-[150px] mb-5">
            <label htmlFor="">Effective Date</label>
            <input className="border" type="date" />
          </div>

          <div className="flex justify-between">
            <h1 className="text-main-red font-bold mb-5 text-2xl">
              CONSULTATION HOURS
            </h1>
            <button className="bg-main-red text-white p-1 text-lg font-bold rounded mb-5">
              Add
            </button>
          </div>

          <div className="">
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg border">
              <thead>
                <tr className="bg-main-red text-white rounded-lg border ">
                  <th className="px-4 py-2">Day</th>
                  <th className="px-4 py-2">Start Time</th>
                  <th className="px-4 py-2">End Time</th>
                  <th className="px-4 py-2">No. of Hours</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody className="text-center border">
                <tr className="border">
                  <td className="px-4 py-2">
                    <select className="border w-[60px]" name="" id="">
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                  </td>
                  <td className="px-4 py-2">
                    <input type="time" />
                  </td>
                  <td className="px-4 py-2">
                    <input type="time" />
                  </td>
                  <td className="px-4 py-2">-</td>
                  <td className="px-4 py-2">
                    <FaTrash className="bg-main-red text-white w-7 h-7 p-1 rounded" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="col-span-6">
          <div className="">
            <h1 className="text-main-red font-bold mb-5 text-2xl">
              Summary of Teaching Load
            </h1>

            <div className="">
              <table className="min-w-full table-auto bg-white shadow-md rounded-lg border p-2">
                <thead>
                  <tr className="bg-main-red text-white rounded-lg border text-center">
                    <th className="px-8 py-2 text-center">Teaching Load</th>
                    <th className="px-8 py-2"></th>
                  </tr>
                </thead>
                <tbody className="border text-left">
                  <tr className="border">
                    <td className="px-4 py-2">Regular Teaching Load (RL):</td>
                    <td className="px-4 py-2">0</td>
                  </tr>
                  <tr className="border">
                    <td className="px-4 py-2">Regular Teaching Load (RL):</td>
                    <td className="px-4 py-2">0</td>
                  </tr>
                  <tr className="border">
                    <td className="px-4 py-2">Regular Teaching Load (RL):</td>
                    <td className="px-4 py-2">0</td>
                  </tr>
                  <tr className="border">
                    <td className="px-4 py-1">Regular Teaching Load (RL):</td>
                    <td className="px-4 py-2">0</td>
                  </tr>
                  <tr className="text-center text-main-red font-bold">
                    <p>Total No. of Loads: 0</p>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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

export default ListOfTeaching;
