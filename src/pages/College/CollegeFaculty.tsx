import DateTime from "@/components/DateTime";
import { useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";

const CollegeFaculty = () => {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [facultyModalOpen, setFacultyModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<{
    id: number;
    identity: string;
    name: string;
    designation: string;
    college: string;
  } | null>(null);

  // Dummy data
  const tableData = [
    {
      id: 1,
      identity: "010101",
      name: "System Administrator",
      designation: "Graduate Program Head",
      college: "CET",
    },
    {
      id: 2,
      identity: "020202",
      name: "ictocet",
      designation: "Graduate Program Head",
      college: "CET",
    },
    {
      id: 3,
      identity: "020202",
      name: "ictocet",
      designation: "Graduate Program Head",
      college: "CET",
    },
    {
      id: 4,
      identity: "020202",
      name: "ictocet",
      designation: "Graduate Program Head",
      college: "CET",
    },
    {
      id: 5,
      identity: "020202",
      name: "ictocet",
      designation: "Graduate Program Head",
      college: "CET",
    },
    {
      id: 6,
      identity: "020202",
      name: "Jane Doe",
      designation: "Graduate Program Head",
      college: "CET",
    },
    // Add more data as needed
  ];

  // Function to open the faculty modal
  const openFacultyModal = () => {
    setFacultyModalOpen(true);
  };

  // Function to close the faculty modal
  const closeFacultyModal = () => {
    setFacultyModalOpen(false);
  };

  // Function to open the "Edit" modal
  const openEditModal = () => {
    console.log("Open button clicked"); // Add this line
    setEditModalOpen(true);
  };

  // Function to close the "Edit" modal
  const closeEditModal = () => {
    console.log("Close button clicked");
    setEditModalOpen(false);
  };

  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat">
      {/* Row 1 */}
      <div className="col-span-12 flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
          Faculty
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
            </div>
            <div className="flex items-center">
              <button
                className=" bg-main-red text-white rounded-lg p-2 ml-3"
                onClick={openFacultyModal}
              >
                Add Faculty
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-main-red text-white rounded-lg border ">
                  <th>#</th>
                  <th>Identity #</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>College</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className="text-center border">
                {tableData.map((item) => (
                  <tr className="border" key={item.id}>
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">{item.identity}</td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.designation}</td>
                    <td className="px-4 py-2">{item.college}</td>
                    <td>
                      <button className="bg-green-500 text-white p-2 rounded mr-2">
                        Active
                      </button>
                    </td>
                    <td className="text-center flex justify-center items-center">
                      <FaEdit
                        className="bg-main-blue text-white rounded text-2xl h-10 p-1"
                        onClick={() => {
                          setSelectedFaculty(item);
                          openEditModal();
                        }}
                      />
                      <button className="bg-main-red text-white rounded text-2xl h-10 p-1 ml-1">
                        X
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {facultyModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg w-full max-w-lg">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold mb-4">Add Faculty</h2>
                  <button
                    className="flex bg-main-red items-center text-white p-2"
                    onClick={closeFacultyModal}
                  >
                    X
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Column */}
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="middleName"
                        className="text-sm font-medium"
                      >
                        Middle Name
                      </label>
                      <input
                        type="text"
                        id="middleName"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="middleInitial"
                        className="text-sm font-medium"
                      >
                        Middle Initial
                      </label>
                      <input
                        type="text"
                        id="middleInitial"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="suffix" className="text-sm font-medium">
                        Suffix
                      </label>
                      <input
                        type="text"
                        id="suffix"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="maiden" className="text-sm font-medium">
                        Maiden
                      </label>
                      <input
                        type="text"
                        id="maiden"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                  </div>

                  {/* Second Column */}
                  <div>
                    <div className="mb-4">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="contactNumber"
                        className="text-sm font-medium"
                      >
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="sex" className="text-sm font-medium">
                        Sex
                      </label>
                      <select id="sex" className="w-full border p-2 rounded">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="address" className="text-sm font-medium">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="birthdate"
                        className="text-sm font-medium"
                      >
                        Birthdate
                      </label>
                      <input
                        type="date"
                        id="birthdate"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                  </div>
                </div>
                <button className="bg-main-red text-white rounded-lg p-2 mt-4 ml-auto flex ">
                  Add Faculty
                </button>
              </div>
            </div>
          )}

          {/* Edit/Update Button  */}
          {editModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg w-full max-w-xl">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold mb-4">Edit Faculty</h2>
                  <button
                    className="flex bg-main-red items-center text-white p-2"
                    onClick={closeEditModal}
                  >
                    X
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="mb-6">
                    <label className="text-sm font-light">Full Name</label>
                    <h1 className="text-sm font-bold">
                      {selectedFaculty && selectedFaculty.name}
                    </h1>
                  </div>
                  <div className="mb-3">
                    <label className="text-sm font-light">Faculty ID</label>
                    <h1 className="text-sm">
                      {selectedFaculty && selectedFaculty.identity}
                    </h1>
                  </div>
                  <div className="mb-3">
                    <label className="text-sm font-light">Status</label>
                    <h1 className="text-sm font-light">Active</h1>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Column */}
                  <div>
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="middleName"
                        className="text-sm font-medium"
                      >
                        Middle Name
                      </label>
                      <input
                        type="text"
                        id="middleName"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="middleInitial"
                        className="text-sm font-medium"
                      >
                        Middle Initial
                      </label>
                      <input
                        type="text"
                        id="middleInitial"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="suffix" className="text-sm font-medium">
                        Suffix
                      </label>
                      <input
                        type="text"
                        id="suffix"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="maiden" className="text-sm font-medium">
                        Maiden
                      </label>
                      <input
                        type="text"
                        id="maiden"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                  </div>

                  {/* Second Column */}
                  <div>
                    <div className="mb-4">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="contactNumber"
                        className="text-sm font-medium"
                      >
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="contactNumber"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="sex" className="text-sm font-medium">
                        Sex
                      </label>
                      <select id="sex" className="w-full border p-2 rounded">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="address" className="text-sm font-medium">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="birthdate"
                        className="text-sm font-medium"
                      >
                        Birthdate
                      </label>
                      <input
                        type="date"
                        id="birthdate"
                        className="w-full border p-2 rounded"
                      />
                    </div>
                  </div>
                </div>
                <button className="bg-main-red text-white rounded-lg p-2 mt-4 ml-auto flex ">
                  Add Faculty
                </button>
              </div>
            </div>
          )}
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
              <p>7 out of 12 rows</p>
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

export default CollegeFaculty;
