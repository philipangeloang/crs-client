import DateTime from "@/components/DateTime";
import { LuDownload } from "react-icons/lu";
import { FiArrowRight, } from "react-icons/fi";
import { AiOutlinePrinter } from "react-icons/ai";
import { mockData } from './mockData';
import TempRoleSelector from "../../TempRoleSelector";

const ViewGrades = () => 
{   
    const tableData = [
        {
            Section: "GEIT 838 - 1",
            Title: "NETWORK DESIGN AND MANAGEMENT",
            Credits: "3",
            Grade: "1.00",
            Remarks: "PASSED",
        },
        {
            Section: "GEIT 838 - 1",
            Title: "NETWORK DESIGN AND MANAGEMENT",
            Credits: "3",
            Grade: "1.00",
            Remarks: "PASSED",
        },
        {
            Section: "GEIT 838 - 1",
            Title: "NETWORK DESIGN AND MANAGEMENT",
            Credits: "3",
            Grade: "1.00",
            Remarks: "PASSED",
        },
        {
            Section: "GEIT 838 - 1",
            Title: "NETWORK DESIGN AND MANAGEMENT",
            Credits: "3",
            Grade: "1.00",
            Remarks: "PASSED",
        },
        {
            Section: "GEIT 838 - 1",
            Title: "NETWORK DESIGN AND MANAGEMENT",
            Credits: "3",
            Grade: "1.00",
            Remarks: "PASSED",
        },
        {
            Section: "GEIT 838 - 1",
            Title: "NETWORK DESIGN AND MANAGEMENT",
            Credits: "3",
            Grade: "1.00",
            Remarks: "PASSED",
        },
        // Add more data as needed
      ];
    return (
        <>
            <div    className="p-10 px-16 grid grid-cols-12 font-montserrat
                            bg-cover bg-center min-h-screen items-center
                            bg-no-repeat" 
                    style = {{ 
                                backgroundImage: 'url(/gradient.png), url(/plm_bg.png)'
                            }}
                >
                {/* Row 1 */}
                <div className="col-span-12 flex justify-between items-center">
                    <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
                        Student Undergrad Home
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
                        <p className="text-xs ">
                            Logged as: <TempRoleSelector />
                        </p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col  col-span-12 justify-between mt-10">
                    <div className="w-full md:w-3/5 lg:w-fit">
                        <h1 className="font-bold text-main-red text-lg">Student Information</h1>
                        <div className="grid grid-cols-7 col-span-8 p-3 mt-3 mr-3 rounded-lg border border-black h-full text-xs">
                            {/* Student Number */}
                            <div className="col-span-2 ">
                                <span className="text-[#676C72]">Student Number:</span>
                                
                            </div>
                            <div className="col-span-5 px-2">
                                {mockData.studentNumber}
                            </div>

                            {/* Student Name */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Student Name :</span>
                            </div>
                            <div className="col-span-5 px-2">
                                {mockData.studentFirstName} {mockData.studentLastName}
                            </div>

                            {/* Student UnderGraduate Program */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Program :</span>
                            </div>
                            <div className="col-span-5 px-2">
                                {mockData.studentProgram}
                            </div>

                            {/* Student Current Year / Term */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Current School Year/Term :</span>
                            </div>
                            <div className="col-span-5 px-2">
                                {mockData.studentSchoolYearTerm}
                            </div>
                        </div>
                    </div>
                    <p className="mt-10 text-gray-500">AYSEM</p>
                    <div className="flex flex-row">
                        <div className="flex items-center mr-96 mb-2">
                            <input
                                type="text"
                                placeholder="2021"
                                className="border p-2 rounded"
                            />
                            <button className="ml-2">
                                <FiArrowRight className="border text-2xl h-10" />
                            </button>
                            <div className= "ml-96 flex">
                                <button className="ml-96 py-1 px-1 flex items-center bg-blue-500 hover:bg-blue-700 text-white h-8 w-8 font-bold rounded">
                                    <AiOutlinePrinter size={25} />
                                </button>
                                <button className="ml-2 px-1 py-1 bg-main-red text-white rounded flex h-8 w-8">
                                    <LuDownload size={25}/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <table className="min-w-full table-auto  bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-main-red text-white rounded-lg border ">
                  <th>Subject Code - Section</th>
                  <th>Subject Title</th>
                  <th>Credits</th>
                  <th>Grade</th>
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody className="text-center border text-xs">
                {tableData.map((item) => (
                  <tr className="border" key={item.Section}>
                    <td className="px-4 py-2">{item.Section}</td>
                    <td className="px-4 py-2">{item.Title}</td>
                    <td className="px-4 py-2">{item.Credits}</td>
                    <td className="px-4 py-2">{item.Grade}</td>
                    <td className="px-4 py-2">{item.Remarks}</td>           
                  </tr>
                ))}
              </tbody>
            </table>

                </div>
 
                {/* Row 3 */}
                <div className="col-span-12 flex justify-end mt-24 text-[#434343] text-sm">
                    <div>
                        <p><DateTime></DateTime></p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ViewGrades;