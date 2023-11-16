import { LuPrinter } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { mockData } from "./mockData";
import DateTime from "../../../components/DateTime";
import TempRoleSelector from "../../TempRoleSelector";
import { FaArrowRight } from "react-icons/fa6";
import { useState, ChangeEvent } from 'react';

const StudentGradViewGrades = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log('Search Term:', searchTerm);
    // You can update the state or perform any action based on the search term
  };

  const handlePrintClick = () => {
    console.log("Button clicked!");
    // Add logic here
  };

  const handleDownloadClick = () => {
    console.log("Button clicked!");
    // Add logic here
  };

  return (
    <>
      <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
        {/* Row 1 */}
        <div className="col-span-12 flex justify-between items-center">
          <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
            Grade
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-bold">DELA CRUZ, JUAN PEPITO</h1>
            <p className="text-xs ">
              Logged as: <TempRoleSelector />
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-12 mt-12 flex flex-wrap justify-between">
          {/* Student Information Card */}
          <div className="w-full md:w-3/5 lg:w-3/5">
            <h1 className="font-bold text-main-red text-lg">
              Student Information
            </h1>

            <div className="grid grid-cols-7 gap-2 p-3 mt-3 mr-3 rounded-lg border border-black text-xs">
              {/* Student Number */}
              <div className="col-span-2">
                <span className="text-[#676C72]">Student Number :</span>
              </div>
              <div className="col-span-5">{mockData.studentNumber}</div>

              {/* Student Name */}
              <div className="col-span-2">
                <span className="text-[#676C72]">Student Name :</span>
              </div>
              <div className="col-span-5">
                {mockData.studentFirstName} {mockData.studentLastName}
              </div>

              {/* Student Graduate School */}
              <div className="col-span-2">
                <span className="text-[#676C72]">Graduate School :</span>
              </div>
              <div className="col-span-5">{mockData.studentGradSchool}</div>

              {/* Student Graduate Program */}
              <div className="col-span-2">
                <span className="text-[#676C72]">Program :</span>
              </div>
              <div className="col-span-5">{mockData.studentProgram}</div>

              {/* Student Current Year / Term */}
              <div className="col-span-2">
                <span className="text-[#676C72]">
                  Current School Year / Term :
                </span>
              </div>
              <div className="col-span-5">{mockData.studentSchoolYearTerm}</div>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="text-xs mt-8 text-[#676C72]">AYSEM</div>
        <div className="col-span-12 flex justify-between items-center">
          <div className="flex items-center text-xs">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-md border-[#676C72] p-2"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button
              onClick={handleSearch}
              className="border rounded-md border-[#676C72] text-[#676C72] p-2 ml-1"
            >
              <FaArrowRight size={16}/>
            </button>
          </div>
          <div className="space-x-1">
            <button
              className="icon-container text-white bg-main-blue p-2 rounded"
              onClick={handlePrintClick}
            >
              <LuPrinter />
            </button>
            <button
              className="icon-container text-white bg-main-red p-2 rounded"
              onClick={handleDownloadClick}
            >
              <FiDownload />
            </button>
          </div>
        </div>


        {/* Row 4 */}
        <div className="col-span-12 mt-2">
          <table className="border text-xs w-full">
            <thead>
              <tr className="bg-main-red text-white text-center">
                <th className="w-2/12 p-2 text-left">Subject Code - Section</th>
                <th className="w-3/12 p-2 text-left">Subject Title</th>
                <th className="w-1/12 p-2">Credits</th>
                <th className="w-1/12 p-2">Grade</th>
                <th className="w-2/12 p-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-center">
                <td className="p-2 text-left">GEIT 838 - 1</td>
                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2">1.00</td>
                <td className="p-2">PASSED</td>
              </tr>

              <tr className="border-b text-center">
                <td className="p-2 text-left">GEIT 838 - 1</td>
                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2">1.00</td>
                <td className="p-2">PASSED</td>
              </tr>

              <tr className="border-b text-center">
                <td className="p-2 text-left">GEIT 838 - 1</td>
                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2">1.00</td>
                <td className="p-2">PASSED</td>
              </tr>

              <tr className="border-b text-center">
                <td className="p-2 text-left">GEIT 838 - 1</td>
                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2">1.00</td>
                <td className="p-2">PASSED</td>
              </tr>

              <tr className="border-b text-center">
                <td className="p-2 text-left">GEIT 838 - 1</td>
                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2">1.00</td>
                <td className="p-2">PASSED</td>
              </tr>

              <tr className="border-b text-center">
                <td className="p-2 text-left">GEIT 838 - 1</td>
                <td className="p-2 text-left">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2">1.00</td>
                <td className="p-2">PASSED</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Row 5 */}
        <div className="col-span-12 fixed bottom-4 right-16 mt-8 text-right text-sm">
          <DateTime />
        </div>
      </div>
    </>
  );
};

export default StudentGradViewGrades;
