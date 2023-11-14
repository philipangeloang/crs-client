import DateTime from "@/components/DateTime";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiCalendarEvent } from "react-icons/bi";
import { AiFillClockCircle } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { MdCastForEducation }  from "react-icons/md";
import { AiOutlineWarning } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";


const Enrollment1 = () => 
{
    return (
        <>
            <div className="p-10 px-16 grid grid-cols-12 font-montserrat
                            bg-cover bg-center min-h-screen items-center
                            bg-no-repeat" 
                style = {{ 
                backgroundImage: 'url(./gradient.png), url(./plm_bg.png)'
                }}
                >
                {/* Row 1 */}
                <div className="col-span-12 flex justify-between items-center">
                    <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
                    Enrollment
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
                        <p className="text-xs ">
                            Undergraduate Student: <span className="text-main-red">2020-10000</span>
                        </p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-row  col-span-12 justify-between items-center mt-8">
                    <div className="text-3xl font-bold text-main-red">Step&nbsp;1:</div>
                    <div className="text-2xl text-main-red mr-80">View Schedule</div>
                    <div className="flex flex-row">
                        <button className="px-6 py-1 bg-main-red text-white rounded-lg flex items-center">
                            <BiSolidLeftArrow size={15}></BiSolidLeftArrow>Back
                        </button>
                        <button className="ml-2 px-6 py-1 bg-main-red text-white rounded-lg flex items-center">
                            Next<BiSolidRightArrow size={15}></BiSolidRightArrow>
                        </button>
                    </div>
                </div>
                <div>
                    <ol className="flex items-center w-full mt-4 ">
                        <li className="ml-10 flex items-center text-white dark:text-red-500 after:content-[''] after:w-72 after:h-1 after:border-b after:border-red-100 after:border-4 after:inline-block dark:after:border-red-800">
                            <span className="flex items-center justify-center w-10 h-10 bg-main-red rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                1
                            </span>
                        </li>
                        <li className="flex items-center after:content-[''] after:w-72 after:h-1 after:border-b after:border-red-100 after:border-4 after:inline-block dark:after:border-red-800">
                            <span className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                2
                            </span>
                        </li>
                        <li className="flex items-center after:content-[''] after:w-72 after:h-1 after:border-b after:border-red-100 after:border-4 after:inline-block dark:after:border-red-700">
                            <span className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                3
                            </span>
                        </li>
                        <li className="flex items-center w-full">
                            <span className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                <svg className="w-3.5 h-3.5 text-red-600 lg:w-4 lg:h-4 dark:text-red-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                            </span>
                        </li>
                    </ol>
                    <table className=" table-fixed mt-4 ml-2 text-center rounded-full text-sm border border-black">
                        <thead>
                            <tr className="bg-main-red text-white items-center">
                                <th className="px-3">Class&nbsp;Code</th>
                                <th className="px-20">Class&nbsp;Name</th>
                                <th className="px-1">Section</th>
                                <th className="px-48">Schedule</th>
                                <th className="px-10">Room</th>
                                <th className="px-10">Credits</th>
                            </tr>
                        </thead>
                        <tbody className="border-black divide-y divide-slate-500">
                            <tr>
                                <td>CSC 0411</td>
                                <td>CS Thesis Writing 1</td>
                                <td>3</td>
                                <td className="flex flex-row ml-6 items-center">
                                    <BiCalendarEvent size={30} className="px-2"/>Monday
                                    <AiFillClockCircle size={30} className="px-2"/>6:00 PM - 9:00 PM
                                    <RiTeamFill size={50} className="px-4"/>F2F
                                </td>
                                <td>GCA 307</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>CSC 0412</td>
                                <td>Networks and Communication (lec)</td>
                                <td>3</td>
                                <td className="flex flex-row ml-6 items-center">
                                    <BiCalendarEvent size={30} className="px-2"/>Monday
                                    <AiFillClockCircle size={30} className="px-2"/>6:00 PM - 9:00 PM
                                    <RiTeamFill size={50} className="px-4"/>F2F
                                </td>
                                <td className="flex flex-row ml-6 items-center">
                                    <BiCalendarEvent size={30} className="px-2"/>Monday
                                    <AiFillClockCircle size={30} className="px-2"/>6:00 PM - 9:00 PM
                                    <RiTeamFill size={50} className="px-4"/>F2F
                                </td>
                                <td>
                                    FIELD
                                    <br/><br/>
                                    GCA 306
                                </td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>CSC 0412.1</td>
                                <td>Networks and Communication (lab)</td>
                                <td>3</td>
                                <td className="flex flex-row ml-6 items-center">
                                    <BiCalendarEvent size={30} className="px-2"/>Monday
                                    <AiFillClockCircle size={30} className="px-2"/>6:00 PM - 9:00 PM
                                    <RiTeamFill size={50} className="px-4"/>F2F
                                </td>
                                <td>COMP LAB 2</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>CSC 0413</td>
                                <td>CS Elective 2 (lec)</td>
                                <td>3</td>
                                <td className="flex flex-row ml-6 items-center">
                                    <BiCalendarEvent size={30} className="px-2"/>Monday
                                    <AiFillClockCircle size={30} className="px-2"/>6:00 PM - 9:00 PM
                                    <RiTeamFill size={50} className="px-4"/>F2F
                                </td>
                                <td>COMP LAB 3</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>CSC 0413.1</td>
                                <td>CS Elective 2 (lab)</td>
                                <td>3</td>
                                <td className="flex flex-row ml-6 items-center">
                                    <BiCalendarEvent size={30} className="px-2"/>Monday
                                    <AiFillClockCircle size={30} className="px-2"/>6:00 PM - 9:00 PM
                                    <RiTeamFill size={50} className="px-4"/>F2F
                                </td>
                                <td>COMP LAB 3</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>CSC 0414</td>
                                <td>CS Elective 3 (lec)</td>
                                <td>3</td>
                                <td className="flex flex-row ml-6 items-center">
                                    <BiCalendarEvent size={30} className="px-2"/>Monday
                                    <AiFillClockCircle size={30} className="px-2"/>6:00 PM - 9:00 PM
                                    <MdCastForEducation size={50} className="px-4"/>LecSyncOnline
                                </td>
                                <td className="flex flex-row ml-6 items-center">
                                    <BiCalendarEvent size={30} className="px-2"/>Monday
                                    <AiFillClockCircle size={30} className="px-2"/>6:00 PM - 9:00 PM
                                    <RiTeamFill size={50} className="px-4"/>F2F
                                </td>
                                <td>
                                    FIELD
                                    <br/><br/>
                                    COMP LAB 2
                                </td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>CSC 0414.1</td>
                                <td>CS Elective 3 (lab)</td>
                                <td>3</td>
                                <td className="flex flex-row ml-6 items-center">
                                    <BiCalendarEvent size={30} className="px-2"/>Monday
                                    <AiFillClockCircle size={30} className="px-2"/>6:00 PM - 9:00 PM
                                    <RiTeamFill size={50} className="px-4"/>F2F
                                </td>
                                <td>GV 307</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <div className="p-2 ml-4 mt-36 col-span-12 justify-end flex flex-row rounded-lg border bg-red-200 text-main-red w-96">
                    <AiOutlineWarning size={40}/>
                    <p className="text-sm mb-2 ml-1 ">
                        For First Year and Second Year Students please choose and enroll to a PE Subject.
                    </p>
                </div>

                <div className ="justify-end col-span-12 ml-4 py-2 mt-38 ">
                    <button className="px-5 py-2 bg-main-red text-white text-l rounded-lg flex items-center">
                            PE ENLISTMENT
                    </button>
                </div>
                
                

                {/* Row 3 */}
                <div className="col-span-12 flex flex-row justify-end mt-24 text-[#434343]">
                    <button className=" ml-4 py-2 w-40 mr-96 flex flex-row bg-main-red text-white text-bold text-l col-span-12 rounded-lg items-center">
                        <BiDownload size={25} className="ml-2 mr-2"/>Save a Copy
                    </button>
                    <div className="ml-auto">
                        <p><DateTime></DateTime></p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Enrollment1;