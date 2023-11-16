import { LuPrinter } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { BiCalendarEvent } from "react-icons/bi";
import { FaClock } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import DateTime from "../../../components/DateTime";
import TempRoleSelector from "../../TempRoleSelector";

const StudentGradClassSchedule = () => {
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
            Schedule
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-bold">DELA CRUZ, JUAN PEPITO</h1>
            <p className="text-xs ">
              Logged as: <TempRoleSelector />
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-12 mt-12">
          <table className="border text-xs w-full">
            <thead>
              <tr className="bg-main-red text-white text-center">
                <th className="w-1/12 p-2">Section</th>
                <th className="w-3/12 p-2">Class</th>
                <th className="w-1/12 p-2">Credits</th>
                <th className="w-4/12 p-2">Schedule / Room</th>
                <th className="w-2/12 p-2">Instructor</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-center">
                <td className="p-2">GEIT 838 - 1</td>
                <td className="p-2">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                  <BiCalendarEvent /> Monday
                  <FaClock /> 6:00 PM - 9:00 PM
                  <MdGroups size={16} /> F2F - FIELD
                </td>
                <td className="p-2">Abdul Salsalani</td>
              </tr>

              <tr className="border-b text-center">
                <td className="p-2">GEIT 838 - 1</td>
                <td className="p-2">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                  <BiCalendarEvent /> Monday
                  <FaClock /> 6:00 PM - 9:00 PM
                  <MdGroups size={16} /> F2F - FIELD
                </td>
                <td className="p-2">Abdul Salsalani</td>
              </tr>

              <tr className="border-b text-center">
                <td className="p-2">GEIT 838 - 1</td>
                <td className="p-2">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                  <BiCalendarEvent /> Monday
                  <FaClock /> 6:00 PM - 9:00 PM
                  <MdGroups size={16} /> F2F - FIELD
                </td>
                <td className="p-2">Abdul Salsalani</td>
              </tr>

              <tr className="border-b text-center">
                <td className="p-2">GEIT 838 - 1</td>
                <td className="p-2">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                  <BiCalendarEvent /> Monday
                  <FaClock /> 6:00 PM - 9:00 PM
                  <MdGroups size={16} /> F2F - FIELD
                </td>
                <td className="p-2">Abdul Salsalani</td>
              </tr>

              <tr className="border-b text-center">
                <td className="p-2">GEIT 838 - 1</td>
                <td className="p-2">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                  <BiCalendarEvent /> Monday
                  <FaClock /> 6:00 PM - 9:00 PM
                  <MdGroups size={16} /> F2F - FIELD
                </td>
                <td className="p-2">Abdul Salsalani</td>
              </tr>

              <tr className="border-b text-center">
                <td className="p-2">GEIT 838 - 1</td>
                <td className="p-2">NETWORK DESIGN AND MANAGEMENT</td>
                <td className="p-2">3</td>
                <td className="p-2 flex flex-wrap gap-1 items-center space-x-1 justify-center">
                  <BiCalendarEvent /> Monday
                  <FaClock /> 6:00 PM - 9:00 PM
                  <MdGroups size={16} /> F2F - FIELD
                </td>
                <td className="p-2">Abdul Salsalani</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Row 3 */}
        <div className="col-span-12 flex justify-between items-end mt-8 text-[#434343] text-sm">
          <div className="col-span-12 flex items-center gap-2 mt-2 fixed bottom-16">
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
            <span className="text-xs">Download a copy of your Class Schedule.</span>
          </div>

          <div className="col-span-12 fixed bottom-4 right-16 mt-8 text-right text-sm">
            <DateTime />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentGradClassSchedule;
