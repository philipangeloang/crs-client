import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import { PiWarningBold } from "react-icons/pi";
import { LuPrinter } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { mockData } from "./mockData";
import DateTime from "../../../components/DateTime";
import TempRoleSelector from "../../TempRoleSelector";

const StudentGradHome = () => {
  const handlePrintClick = () => {
    console.log("Button clicked!");
    // Add logic here
  };

  const handleDownloadClick = () => {
    console.log("Button clicked!");
    // Add logic here
  };

  const handleMSTeamsClick = () => {
    console.log("Button clicked!");
    // Add logic here
  };

  return (
    <>
      <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
        {/* Row 1 */}
        <div className="col-span-12 flex justify-between items-center">
          <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
            Student Grad Home
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
            <p className="text-xs ">
              Logged as: <TempRoleSelector />
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-12 mt-10">
          <h1 className="text-3xl font-normal mb-2">
            Welcome to the Official CRS Website of
          </h1>
          <h1 className="text-3xl font-bold text-main-red">
            Pamantasan ng Lungsod ng Maynila !
          </h1>
        </div>

        {/* Row 3 */}
        <div className="col-span-12 mt-12 flex flex-wrap justify-between">
          {/* Student Information Card */}
          <div className="w-full md:w-3/5 lg:w-3/5">
            <h1 className="font-bold text-main-red text-lg">
              Student Information
            </h1>

            <div className="grid grid-cols-7 gap-2 p-3 mt-3 mr-3 rounded-lg border border-black h-full text-xs">
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

          {/* Student Status Card */}
          <div className="w-full md:w-2/5 lg:w-2/5 ">
            <h1 className="font-bold text-main-red text-lg">
              Student Status Message
            </h1>

            <div className="p-3 mt-3 rounded-lg bg-[#FFCDCF] text-main-red h-full flex flex-col justify-between">
              {/* Enrollment Status*/}
              <div>
                <span className="font-bold">
                  You are not yet Officially Enrolled for this term.
                </span>
              </div>

              {/* Blockers */}
              <div className="text-sm">
                <span>
                  Please settle your SFE (Student-Faculty Evaluation) before
                  proceeding to enrollment.
                </span>
              </div>

              {/* Payment */}
              <div className="text-sm">
                <span>Please see and settle your remaining balance.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4 */}
        <div className="col-span-12 mt-16 flex flex-wrap justify-between">
          {/* Account Status */}
          <div className="w-full md:w-2/5 lg:w-2/5">
            <h1 className="font-bold text-main-red text-lg">Account Status</h1>

            <div className=" p-3 mt-3 mr-12 rounded-lg bg-[#FFCDCF] text-xs">
              <div className="flex items-center gap-3 text-main-red">
                <PiWarningBold size={35} />
                <span>
                  Please choose your Type of Payment in Enrollment Page for PLM
                  Cashier Assessment
                </span>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-3 mt-3 mr-10 text-xs">
              <div className="col-span-3">
                <span className="text-[#676C72]">Payment For : </span>
              </div>
              <div className="col-span-4 text-main-blue">
                {mockData.studentSchoolYearTerm}
              </div>

              <div className="col-span-3">
                <span className="text-[#676C72]">Payment Type/Term :</span>
              </div>
              <div className="col-span-4">{mockData.studentSchoolYearTerm}</div>

              <div className="col-span-3">
                <span className="text-[#676C72]">
                  Total Amount (Current YR) :
                </span>
              </div>
              <div className="col-span-4">Php 11, 974.50</div>

              <div className="col-span-3">
                <span className="text-[#676C72]">Amount to be paid :</span>
                <span className="text-[#676C72] block">(for 2nd Payment)</span>
              </div>
              <div className="col-span-4">Php 2, 289.90</div>

              <div className="col-span-3">
                <span className="text-main-red text-sm">Overall Balance :</span>
              </div>
              <div className="col-span-4 font-bold text-sm">Php 6, 764.10</div>
            </div>
          </div>

          {/* Enlisted Classes Table */}
          <div className="w-full md:w-3/5 lg:w-3/5 ">
            <h1 className="font-bold text-main-red text-lg">
              Enlisted Classes
            </h1>

            <div className="rounded-lg">
              <table className="border  text-xs">
                <thead>
                  <tr className="bg-main-red text-white text-left">
                    <th className="w-1/6 p-2">Class / Section</th>
                    <th className="w-2/6 p-2">Class Title</th>
                    <th className="w-2/6 p-2">Schedule / Room</th>
                    <th className="w-1/6 p-2">Instructor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2">CSC 0413</td>
                    <td className="p-2">
                      Strategic Management of Technology Management
                    </td>
                    <td className="p-2">Sat 11:00AM - 2:30 PM at Open Field</td>
                    <td className="p-2">Juan Dela Cruz</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-2">CSC 0413</td>
                    <td className="p-2">
                      Strategic Management of Technology Management
                    </td>
                    <td className="p-2">Sat 11:00AM - 2:30 PM at Open Field</td>
                    <td className="p-2">Juan Dela Cruz</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-2">CSC 0413</td>
                    <td className="p-2">
                      Strategic Management of Technology Management
                    </td>
                    <td className="p-2">Sat 11:00AM - 2:30 PM at Open Field</td>
                    <td className="p-2">Juan Dela Cruz</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-2">CSC 0413</td>
                    <td className="p-2">
                      Strategic Management of Technology Management
                    </td>
                    <td className="p-2">Sat 11:00AM - 2:30 PM at Open Field</td>
                    <td className="p-2">Juan Dela Cruz</td>
                  </tr>

                  <tr className="border-b">
                    <td className="p-2">CSC 0413</td>
                    <td className="p-2">
                      Strategic Management of Technology Management
                    </td>
                    <td className="p-2">Sat 11:00AM - 2:30 PM at Open Field</td>
                    <td className="p-2">Juan Dela Cruz</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-span-12 flex justify-end gap-2 mt-2">
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
          <button
            className="icon-container text-white bg-main-red p-2 rounded"
            onClick={handleMSTeamsClick}
          >
            <FiDownload />
          </button>
        </div>

        {/* Row 5 */}
        <div className="col-span-12 flex justify-between items-end mt-8 text-[#434343] text-sm">
          <div className="flex gap-10">
            <div>Contacts:</div>
            <div className="flex flex-col">
              <div className="grid grid-cols-12 gap-8 mb-4">
                <p className="flex gap-3 col-span-6">
                  <AiOutlineMail size={25} /> info@plm.edu.ph
                </p>
                <p className="flex gap-3 col-span-6">
                  <FiFacebook size={25} /> @PLM.Haribon
                </p>
              </div>

              <div className="grid grid-cols-12 gap-8 mb-4">
                <p className="flex gap-3 col-span-6">
                  <BsGlobe2 size={25} /> plm.edu.ph
                </p>
                <p className="flex gap-3 col-span-6">
                  <FiTwitter size={25} /> @PLM_Manila
                </p>
              </div>

              <div className="grid grid-cols-12 gap-8">
                <p className="flex gap-3 col-span-6">
                  <BiUserPin size={25} /> Campus Directory
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-12 mt-8 text-right text-sm">
            <DateTime />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentGradHome;
