import DateTime from "@/components/DateTime";
import TempRoleSelector from "../../TempRoleSelector";
import { mockData } from './mockData';

const ViewSchedule = () => 
{   
    const tableData = [
        {
            Section: "CSC 0413",
            Title: "Strategic Management of Technology Management",
            Credits: "2",
            Sched: "Sat 11:00AM - 2:30 PM at Open Field",
            Instructor: "Juan Dela Cruz",
        },
        {
            Section: "CSC 0413",
            Title: "Strategic Management of Technology Management",
            Credits: "2",
            Sched: "Sat 11:00AM - 2:30 PM at Open Field",
            Instructor: "Juan Dela Cruz",
        },
        {
            Section: "CSC 0413",
            Title: "Strategic Management of Technology Management",
            Credits: "2",
            Sched: "Sat 11:00AM - 2:30 PM at Open Field",
            Instructor: "Juan Dela Cruz",
        },
        {
            Section: "CSC 0413",
            Title: "Strategic Management of Technology Management",
            Credits: "2",
            Sched: "Sat 11:00AM - 2:30 PM at Open Field",
            Instructor: "Juan Dela Cruz",
        },
        {
            Section: "CSC 0413",
            Title: "Strategic Management of Technology Management",
            Credits: "2",
            Sched: "Sat 11:00AM - 2:30 PM at Open Field",
            Instructor: "Juan Dela Cruz",
        },
        {
            Section: "CSC 0413",
            Title: "Strategic Management of Technology Management",
            Credits: "2",
            Sched: "Sat 11:00AM - 2:30 PM at Open Field",
            Instructor: "Juan Dela Cruz",
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
                        Information
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="font-bold">DELA CRUZ, JUAN PEPITO</h1>
                        <p className="text-xs ">
                            Logged as: <TempRoleSelector />
                        </p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col  col-span-12 justify-between">
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

                    <div className="flex flex-row">
                        
                    </div>

                    <table className="mt-10 min-w-full table-auto  bg-white shadow-md rounded-lg">
                        <thead>
                            <tr className="bg-main-red text-white rounded-lg border">
                                <th>Subject Code - Section</th>
                                <th>Subject Title</th>
                                <th>Credits</th>
                                <th>Schedule / Room</th>
                                <th>Instructor</th>
                            </tr>
                        </thead>
                        <tbody className="text-center border text-xs">
                            {tableData.map((item) => (
                                <tr className="border" key={item.Section}>
                                    <td className="px-4 py-2">{item.Section}</td>
                                    <td className="px-4 py-2">{item.Title}</td>
                                    <td className="px-4 py-2">{item.Credits}</td>
                                    <td className="px-4 py-2">{item.Sched}</td>
                                    <td className="px-4 py-2">{item.Instructor}</td>           
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

export default ViewSchedule;