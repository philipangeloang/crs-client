import DateTime from "@/components/DateTime";
import React, { useState } from "react";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { FaEdit, FaTrash, FaMinusCircle, FaExchangeAlt } from "react-icons/fa";

const Curriculum = () => {
  const [selectedCurriculum, setSelectedCurriculum] =
    useState<Curriculum | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showRow2, setShowRow2] = useState(true); // State variable to show/hide Row 2
  const [showRow2Affect, setShowRow2Affect] = useState(false); // State variable to show/hide Row 2
  const [editModalOpen, setEditModalOpen] = useState(false);
  // const [selectedEditItem, setSelectedEditItem] = useState<{
  //   program: string;
  //   programName: string;
  //   curriculum: string;
  // } | null>(null);

  interface Curriculum {
    id: number;
    name: string;
  }

  const curriculums = [
    { id: 1, name: "MEM-SM1997" },
    { id: 2, name: "MEM-SM2009" },
    { id: 3, name: "MIT 1997" },
    { id: 4, name: "MIT2012" },
    { id: 5, name: "MIT2013" },
    { id: 6, name: "MIT2014" },
    { id: 7, name: "MIT2015" },
    { id: 8, name: "MIT2016" },
    { id: 9, name: "MIT2017" },
    { id: 10, name: "MIT2017" },
    { id: 11, name: "MIT2017" },
    { id: 12, name: "MIT2017" },
  ];

  // Dummy data
  const tableData = [
    {
      courseCode: "GEIT 822",
      couseTitle: "ADVANCED DATABASE SYSTEMS",
      preresequite: "---",
    },
    {
      courseCode: "GEIT 822",
      couseTitle: "ADVANCED DATABASE SYSTEMS",
      preresequite: "---",
    },
    {
      courseCode: "GEIT 822",
      couseTitle: "ADVANCED DATABASE SYSTEMS",
      preresequite: "---",
    },
    {
      courseCode: "GEIT 822",
      couseTitle: "ADVANCED DATABASE SYSTEMS",
      preresequite: "---",
    },
    {
      courseCode: "GEIT 822",
      couseTitle: "ADVANCED DATABASE SYSTEMS",
      preresequite: "---",
    },
  ];
  // Dummy data for curriculum list
  const tableCurriculum = [
    {
      program: "ME-CE",
      programName:
        "Master of Engineering with Specialization in Computer Engineering",
      curriculum: "ME-CE2016",
    },
    {
      program: "ME-CE",
      programName:
        "Master of Engineering with Specialization in Computer Engineering",
      curriculum: "ME-CE2016",
    },
    {
      program: "ME-CE",
      programName:
        "Master of Engineering with Specialization in Computer Engineering",
      curriculum: "ME-CE2016",
    },
    {
      program: "ME-CE",
      programName:
        "Master of Engineering with Specialization in Computer Engineering",
      curriculum: "ME-CE2016",
    },
  ];

  const handleCurriculumClick = (curriculum: Curriculum) => {
    setSelectedCurriculum(curriculum);
  };

  // Modal functions
  const [curriculumModalOpen, setCurriculumModalOpen] = useState(false);
  // Function to open the Curriculum modal
  const openCurriculumModal = () => {
    setCurriculumModalOpen(true);
  };

  // Function to close the Curriculum modal
  const closeCurriculumModal = () => {
    setCurriculumModalOpen(false);
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleRemoveOption = () => {
    setSelectedOption(null);
  };

  // Function to toggle the visibility of Row 2
  const toggleRow2Visibility = () => {
    setShowRow2(!showRow2);
    setShowRow2Affect(!showRow2Affect);
  };
  // Function to toggle the visibility of Row 2
  // const toggleRow2AffectVisibility = () => {
  //   setShowRow2Affect(!showRow2Affect);
  // };

  // Edit modal
  // const openEditModal = (editItem: {
  //   program: string;
  //   programName: string;
  //   curriculum: string;
  // }) => {
  //   // setSelectedEditItem(editItem);
  //   setEditModalOpen(true);
  // };

  const closeEditModal = () => {
    // setSelectedEditItem(null);
    setEditModalOpen(false);
  };

  return (
    <div className="p-10 px-16 grid grid-cols-12 font-montserrat">
      {/* Row 1 */}
      <div className="col-span-12 flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg">
          Curriculums
        </div>
        <div className="flex flex-col items-end">
          <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
          <p className="text-xs ">
            Logged as: <span className="text-main-red">Administrator</span>
          </p>
        </div>
      </div>

      {/* Row 2 */}

      {showRow2 && (
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
              <div className="ml-3 flex flex-row justify-center items-center bg-main-red text-white rounded-lg p-2">
                <FaExchangeAlt />
                <button onClick={toggleRow2Visibility} className="pl-1">
                  Affected Programs
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-row mt-10 ">
            <ul className="border max-h-[300px] w-[200px] overflow-y-auto shadow p-2">
              <h2 className="bg-main-red text-white font-bold p-1">
                Curriculums List
              </h2>
              {curriculums.map((curriculum) => (
                <li className="border p-2" key={curriculum.id}>
                  <a href="#" onClick={() => handleCurriculumClick(curriculum)}>
                    {curriculum.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="ml-2 flex justify-between border w-full">
              {selectedCurriculum && (
                <div className=" border w-full">
                  <div className="flex justify-between mt-1 p-2">
                    <div className="flex ">
                      <h2 className="text-main-red text-2xl font-bold">
                        {selectedCurriculum.name}
                      </h2>
                    </div>

                    <div className="flex items-center ">
                      <button
                        className=" bg-main-red text-white rounded-lg p-2 ml-3"
                        onClick={openCurriculumModal}
                      >
                        Add Subject
                      </button>
                      <FaEdit className="w-7 h-7 bg-main-blue text-white rounded-lg p-1 ml-1" />
                      <FaTrash className="w-7 h-7 bg-main-red text-white rounded-lg p-1 ml-1" />
                    </div>
                  </div>
                  {/* Display additional information about the selected curriculum here */}
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto bg-white shadow-md rounded-lg border">
                      <thead>
                        <tr className="bg-main-red text-white rounded-lg border ">
                          <th className="px-4 py-2">Course Code</th>
                          <th className="px-4 py-2">Course Title</th>
                          <th className="px-4 py-2">Prerequisite/s</th>
                        </tr>
                      </thead>
                      <tbody className="text-center border">
                        {tableData.map((item) => (
                          <tr className="border" key={item.courseCode}>
                            <td className="px-4 py-2">{item.courseCode}</td>
                            <td className="px-4 py-2">{item.couseTitle}</td>
                            <td className="px-4 py-2">{item.preresequite}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* Modal for Adding */}
                  {curriculumModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <div className="bg-white p-4 rounded-lg w-full max-w-lg">
                        <div className="flex justify-between">
                          <h2 className="text-xl text-main-red mb-4">
                            {selectedCurriculum.name}
                          </h2>
                          <button
                            className="flex bg-main-red items-center text-white p-2 rounded"
                            onClick={closeCurriculumModal}
                          >
                            X
                          </button>
                        </div>
                        <hr />

                        <div className="w-full mt-5 mb-5">
                          <div className="w-full">
                            {selectedOption && (
                              <div className="flex justify-between border p-2 mb-2">
                                <p>{selectedOption}</p>
                                <button
                                  className="bg-main-red text-white p-1 rounded"
                                  onClick={handleRemoveOption}
                                >
                                  <FaMinusCircle />
                                </button>
                              </div>
                            )}
                            <label htmlFor="subjectCode">By Subject Code</label>
                            <select
                              id="subjectCode"
                              className="w-full border p-2 rounded"
                              onChange={handleOptionChange}
                              value={selectedOption || ""}
                            >
                              <option value="">Select Subject Code</option>
                              <option value="CSC 0413">CSC 0413</option>
                              <option value="CSC 0414">CSC 0414</option>
                            </select>
                          </div>
                          <div className="w-full mt-5 mb-5">
                            <label htmlFor="subjectName">By Subject Name</label>
                            <select
                              id="subjectName"
                              className="w-full border p-2 rounded"
                            >
                              <option value="">Select Subject Name</option>
                              <option value="CS Elective">CS Elective</option>
                              <option value="CSC Software Engineering">
                                CSC Software Engineering
                              </option>
                            </select>
                          </div>

                          <div className="w-full flex justify-center mt-5">
                            <button className="w-[200px] bg-main-red text-white p-2">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Row 2 Affected Programs Div */}
      {showRow2Affect && (
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
              <div className="ml-3 flex flex-row justify-center items-center bg-main-red text-white rounded-lg p-2">
                <FaExchangeAlt />
                <button onClick={toggleRow2Visibility} className="pl-1">
                  Curriculum List
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto bg-white shadow-md rounded-lg border">
              <thead>
                <tr className="bg-main-red text-white rounded-lg border ">
                  <th className="px-4 py-2">Program</th>
                  <th className="px-4 py-2">Program Name</th>
                  <th className="px-4 py-2">Curriculum</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody className="text-center border">
                {tableCurriculum.map((item) => (
                  <tr className="border" key={item.program}>
                    <td className="px-4 py-2">{item.program}</td>
                    <td className="px-4 py-2">{item.programName}</td>
                    <td className="px-4 py-2">{item.curriculum}</td>
                    <td className="flex items-center justify-center m">
                      <button>
                        {/* onClick={() => openEditModal(item)}*/}
                        <FaEdit className="bg-main-blue text-white text-lg m-2 p-1 w-7 h-7 rounded" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Modal for Editing */}
          {editModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-4 rounded-lg w-full max-w-lg">
                <div className="flex justify-between">
                  <h2 className="text-xl text-main-red mb-4">
                    Change Curriculum of Program
                  </h2>
                  <button
                    className="flex bg-main-red items-center text-white p-2 rounded"
                    onClick={closeEditModal}
                  >
                    X
                  </button>
                </div>
                <hr />
                <div className="mt-5">
                  <label className="">
                    Change Change Curriculum of ME-CE to:
                  </label>
                  <select className="w-full border p-2 mb-2 mt-2 rounded">
                    <option value="">ex. MEM-MM2009</option>
                    <option value="">MEM-MM2009</option>
                    <option value="">MEM-MM2009</option>
                  </select>
                </div>

                <div className="w-full  flex justify-center items-center flex-col mt-1 rounded mb-5">
                  <button className="border w-[200px] bg-main-red text-white p-2 rounded">
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

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

export default Curriculum;
