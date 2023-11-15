import DateTime from "@/components/DateTime";
import { useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

const AddDropReq = () => {
  type TableData = {
    id: number;
    name: string;
    program: string;
    college: string;
    reqDate: string;
    status: string;
  };

  // Dummy data
  const tableData = [
    {
      id: 202361003,
      name: "FERNANDEZ, JOSE LUIS GARCIA",
      program: "MSMANENG",
      college: "CET-GP",
      reqDate: "2023-09-20 12:58:20",
      status: "Approved",
    },
    {
      id: 202361003,
      name: "FERNANDEZ, JOSE LUIS GARCIA",
      program: "MSMANENG",
      college: "CET-GP",
      reqDate: "2023-09-20 12:58:20",
      status: "Approved",
    },
    {
      id: 202361003,
      name: "FERNANDEZ, JOSE LUIS GARCIA",
      program: "MSMANENG",
      college: "CET-GP",
      reqDate: "2023-09-20 12:58:20",
      status: "Approved",
    },
    {
      id: 202361003,
      name: "FERNANDEZ, JOSE LUIS GARCIA",
      program: "MSMANENG",
      college: "CET-GP",
      reqDate: "2023-09-20 12:58:20",
      status: "Approved",
    },
    {
      id: 202361003,
      name: "FERNANDEZ, JOSE LUIS GARCIA",
      program: "MSMANENG",
      college: "CET-GP",
      reqDate: "2023-09-20 12:58:20",
      status: "Approved",
    },
    {
      id: 202361003,
      name: "FERNANDEZ, JOSE LUIS GARCIA",
      program: "MSMANENG",
      college: "CET-GP",
      reqDate: "2023-09-20 12:58:20",
      status: "Approved",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<TableData | null>(null);

  // ... (your existing data and components)

  // Function to open the modal and set the selected data
  const openModal = (data: TableData) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedData(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat">
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
              </tr>
            </thead>
            <tbody className="text-center border">
              {tableData.map((item) => (
                <tr className="border" key={item.id}>
                  <td
                    className="text-center flex justify-center items-center m-auto"
                    onClick={() => openModal(item)}
                  >
                    <FaEye className="bg-main-blue text-white rounded text-2xl w-7 h-7 p-1 m-1" />
                  </td>
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.program}</td>
                  <td className="px-4 py-2">{item.college}</td>
                  <td className="px-4 py-2">{item.reqDate}</td>
                  <td className="px-4 py-2 text-main-green">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-white p-4 rounded-lg w-full max-w-2xl">
              <div className="flex justify-between items-center">
                <h2 className="text-xl text-main-red p-1 ">View Details</h2>

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
                {selectedData && (
                  <div className="flex justify-between  border p-1 shadow rounded">
                    <div className="flex flex-col ">
                      <p>Student ID: {selectedData.id}</p>
                      <p>Student Name: {selectedData.name}</p>
                      <p>Program: {selectedData.program}</p>
                      <p>College: {selectedData.college}</p>
                    </div>

                    <div className="flex flex-col">
                      <p>Request Date: {selectedData.reqDate}</p>
                      <p>
                        Total units after approved:{" "}
                        {/* Add the appropriate data */}
                      </p>
                      <p>Reason: {/* Add the appropriate data */}</p>
                      <p>Status: {selectedData.status}</p>
                      <p>Approved by: ICTOCET</p>
                      <p>
                        Approved date:{" "}
                        {/* Add the appropriate data (e.g., today's date) */}
                      </p>
                    </div>
                  </div>
                )}

                {/* Second div with a table of Dropped classes */}
                <div className="overflow-x-auto  mt-5 mb-2 h-[200px]">
                  <h2 className="text-xl font-bold text-main-red mb-2">
                    Dropped Classes
                  </h2>
                  <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
                    <thead>
                      <tr className="bg-main-red text-white rounded-lg border ">
                        <th>Section ID</th>
                        <th>Section</th>
                        <th>Date Created</th>
                      </tr>
                    </thead>
                    <tbody className="text-center border">
                      <td className="px-4 py-2">2023104131</td>
                      <td className="px-4 py-2">CSC 0413 - 1</td>
                      <td className="px-4 py-2">2023-09-20</td>
                    </tbody>
                  </table>

                  {/* Third div with a table of Dropped classes */}
                  <h2 className="text-xl font-bold text-main-red mb-2 mt-5">
                    Dropped Classes
                  </h2>
                  <table className="min-w-full table-auto bg-white shadow-md rounded-lg h-[100px]">
                    <thead>
                      <tr className="bg-main-red text-white rounded-lg border ">
                        <th>Section ID</th>
                        <th>Section</th>
                        <th>Date Created</th>
                      </tr>
                    </thead>
                    <tbody className="text-center border"></tbody>
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

export default AddDropReq;
