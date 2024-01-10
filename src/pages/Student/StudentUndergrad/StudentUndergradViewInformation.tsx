import { PiWarningBold } from "react-icons/pi";
import { mockData } from './mockData';
import DateTime from '../../../components/DateTime';
import TempRoleSelector from "../../TempRoleSelector";
import { useNavigate } from 'react-router-dom';

const ViewInformation = () => {
    const navigate = useNavigate();

    const handleChangePasswordClick= () => {
        console.log('Button clicked!');
            navigate('/home/change-password');
    };

    const handleViewScheduleClick= () => {
        console.log('Button clicked!');
            navigate('/home/class-schedule');
     };

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
                <div className="col-span-12 mt-12 flex flex-wrap justify-between">
                    {/* Student Information Card */}
                    <div className="w-full md:w-3/5 lg:w-3/5">
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

                            {/* View Current Schedule */}
                            <div className="col-span-2">
                                <button className="text-main-red font-bold underline" onClick={handleViewScheduleClick} >View Current Schedule</button>
                            </div>
                        </div>
                        
                    </div>

                  
                </div>

                {/* Row 3 */}
                <div className="col-span-12 mt-16 flex flex-wrap justify-between">
                    {/* Student Details */}
                    <div className="w-full md:w-3/5 lg:w-3/5 ">
                        <h1 className="font-bold text-main-red text-lg mb-2">Student Details</h1>

                        <table className="text-xs">
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-2">Email:</td>
                                    <td className="p-2">jpdelacruz@plm.edu.ph</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-2">Password:</td>
                                    <td className="p-2">**********</td>
                                    <td className="p-2">
                                        <button className="icon-container text-white bg-main-blue p-2 rounded" onClick={handleChangePasswordClick}>
                                            Change Password
                                        </button>
                                    </td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-2">Full Name:</td>
                                    <td className="p-2">Juan Pepito Dela Cruz</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-2">Mobile:</td>
                                    <td className="p-2">+639876543210</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-2">Sex:</td>
                                    <td className="p-2">Male</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-2">Address:</td>
                                    <td className="p-2">123 Ibarra Street, Metro Manila</td>
                                </tr>

                                <tr className="border-b">
                                    <td className="p-2">Birth Date:</td>
                                    <td className="p-2">December 30, 1987</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Account Status */}
                    <div className="w-full md:w-2/5 lg:w-2/5">
                        <h1 className="font-bold text-main-red text-lg">Account Status</h1>

                        <div className=" p-3 mt-3 rounded-lg bg-[#FFCDCF] text-xs">
                            <div className="flex items-center gap-3 text-main-red">
                                <PiWarningBold size={35} />
                                <span>Payment is covered by</span><span className ="font-bold">CHED Unifast (RA 10931)</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-7 gap-3 mt-3 text-xs">

                            <div className="col-span-3">
                                <span className="text-[#676C72]">Payment For : </span>
                            </div>
                            <div className="col-span-4 text-main-blue">
                                {mockData.studentSchoolYearTerm}
                            </div>

                            <div className="col-span-3">
                                <span className="text-[#676C72]">Payment Type/Term :</span>
                            </div>
                            <div className="col-span-4">
                                {mockData.studentSchoolYearTerm}
                            </div>

                            <div className="col-span-3">
                                <span className="text-[#676C72]">Total Amount (Current YR) :</span>
                            </div>
                            <div className="col-span-4">
                                Php 17, 956.00
                            </div>

                            <div className="col-span-3">
                                <span className="text-main-red text-sm">Overall Balance :</span>
                            </div>
                            <div className="col-span-4 font-bold text-sm">
                                Php 0.00
                            </div>

                        </div>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="col-span-12 mt-8 text-right text-sm">
                    <DateTime />
                </div>
            </div >
        </>
    );
};

export default ViewInformation;