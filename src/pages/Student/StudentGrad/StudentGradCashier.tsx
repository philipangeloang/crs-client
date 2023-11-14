import DateTime from '../../../components/DateTime';
import TempRoleSelector from "../../TempRoleSelector";

const StudentGradCashier = () => {
    return (
        <>
            <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
                {/* Row 1 */}
                <div className="col-span-12 flex justify-between items-center">
                    <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
                        Cashier
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
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

                        <div className="grid grid-cols-7 gap-2 p-3 mt-3 mr-3 rounded-lg border border-black bg-[#F1F5F9] text-xs">
                            {/* Student Name */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Student Name :</span>
                            </div>
                            <div className="col-span-5">
                                JUAN PEPITO DELA CRUZ
                            </div>

                            {/* Student Graduate School */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Graduate School :</span>
                            </div>
                            <div className="col-span-5">
                                COLLEGE OF ENGINEERING AND TECHNOLOGY - GRADUATE PROGRAM
                            </div>

                            {/* Student Graduate Program */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Program :</span>
                            </div>
                            <div className="col-span-5">
                                MASTER OF INFORMATION TECHNOLOGY
                            </div>

                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="col-span-12 mt-12 flex flex-wrap justify-between">
                    {/* Student Assessments Card */}
                    <div className="w-full">
                        <h1 className="font-bold text-main-red text-lg">Student Assessments</h1>

                        <div className="grid grid-cols-9 gap-2 p-3 mt-3 mr-3 rounded-lg border border-black text-xs">
                            {/* Year / Term */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Year / Term :</span>
                            </div>
                            <div className="col-span-2">
                                2023 | 1st Trimester
                            </div>

                            <div className="col-span-1"></div>

                            {/* Status */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Status :</span>
                            </div>
                            <div className="col-span-2">
                                Partial Paid
                            </div>

                            {/* Terms of Payment */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Terms of Payment :</span>
                            </div>
                            <div className="col-span-2 text-main-blue font-bold">
                                Partial Payment
                            </div>

                            <div className="col-span-1"></div>

                            {/* Assessment */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Assessment :</span>
                            </div>
                            <div className="col-span-2">
                                Active Assessment
                            </div>

                        </div>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="col-span-12 mt-12 text-right text-sm">
                    <DateTime />
                </div>
            </div >
        </>
    );
};

export default StudentGradCashier;
