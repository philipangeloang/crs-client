import DateTime from '../../../components/DateTime';
import TempRoleSelector from "../../TempRoleSelector";
import { LuPrinter } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";

const StudentGradCashier = () => {
    const handlePrintClick = () => {
        console.log('Button clicked!');
        // Add logic here
    };

    const handleDownloadClick = () => {
        console.log('Button clicked!');
        // Add logic here
    };
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
                <div className="col-span-12 mt-8 flex flex-wrap justify-between">
                    {/* Student Information Card */}
                    <div className="w-full md:w-3/5 lg:w-3/5">
                        <h1 className="font-bold text-main-red text-md">Student Information</h1>

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
                <div className="col-span-12 mt-8 flex flex-wrap justify-between">
                    {/* Student Assessments Card */}
                    <div className="w-full">
                        <div className="flex flex-wrap justify-between ">
                            <h1 className="font-bold text-main-red text-md">Student Assessments</h1>
                            <div className="flex gap-2">
                                <button className="icon-container text-white bg-main-red p-2 rounded" onClick={handlePrintClick}>
                                    <LuPrinter />
                                </button>
                                <button className="icon-container text-white bg-main-blue p-2 rounded" onClick={handleDownloadClick}>
                                    <FiDownload />
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-9 gap-2 p-3 mt-2 rounded-lg border border-black text-xs">
                            {/* Year / Term */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Year / Term :</span>
                            </div>
                            <div className="col-span-2">
                                <span>2023 | 1st Trimester</span>
                            </div>

                            <div className="col-span-1"></div>

                            {/* Status */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Status :</span>
                            </div>
                            <div className="col-span-2">
                                <span>Partial Paid</span>
                            </div>

                            {/* Terms of Payment */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Terms of Payment :</span>
                            </div>
                            <div className="col-span-2 text-main-blue font-bold">
                                <span>Partial Payment</span>
                            </div>

                            <div className="col-span-1"></div>

                            {/* Assessment */}
                            <div className="col-span-2">
                                <span className="text-[#676C72]">Assessment :</span>
                            </div>
                            <div className="col-span-2">
                                <span>Active Assessment</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Row 4 */}
                <div className="col-span-12 flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2 lg:w-1/2">
                        <div className="grid grid-cols-6 gap-2 p-3 mt-3 rounded-lg border border-black h-full text-xs">

                            <div className="col-span-2">
                                <span className="text-[#676C72]">Tuition Fee (Per Unit) :</span>
                            </div>
                            <div className="col-span-2">
                                <span>₱ 1,271.00</span>
                            </div>
                            <div className="text-[#676C72] col-span-1">
                                <span>Unit/s :</span>
                            </div>
                            <div className="col-span-1">
                                <span>6.00 unit/s</span>
                            </div>

                            <div className="col-span-2 text-[#676C72]">
                                <div>Miscellaneous Fees :</div>
                                <div className="ml-2 mt-1 text-[10px]">Guidance Fee :</div>
                                <div className="ml-2 mt-1 text-[10px]">Medical/Dental Fee :</div>
                                <div className="ml-2 mt-1 text-[10px]">Registration Fee :</div>
                                <div className="ml-2 mt-1 text-[10px]">Publication Fee :</div>
                                <div className="ml-2 mt-1 text-[10px]">Library Fee :</div>
                            </div>

                            <div className="col-span-4">
                                <div className="mt-1">&nbsp;</div>
                                <div className="mt-1">₱ 247.50</div>
                                <div className="mt-1">₱ 330.00</div>
                                <div className="mt-1">₱ 396.00</div>
                                <div className="mt-1">₱ 825.00</div>
                                <div className="mt-1">₱ 1,650.00</div>
                            </div>

                            <div className="col-span-2 text-[#676C72]">
                                <div>Other Fees :</div>
                                <div className="ml-2 text-[10px]">Development Fund :</div>
                            </div>
                            <div className="col-span-4">
                                <div>&nbsp;</div>
                                <div>₱ 900.00</div>
                            </div>

                            <div className="col-span-2 text-[#676C72]">
                                <div>Total Amount :</div>
                                <div className="text-[10px]">Current Term</div>
                            </div>
                            <div className="col-span-4">
                                <div>₱ 11,974.50</div>
                            </div>

                            <div className="col-span-2 text-[#676C72]">
                                <div>Paid Amount :</div>
                                <div className="text-[10px]">Current Term</div>
                            </div>
                            <div className="col-span-4">
                                <div>₱ 2,500.00</div>
                            </div>

                            <div className="col-span-2 text-[#676C72]">
                                <div>Overall Paid :</div>
                            </div>
                            <div className="col-span-4">
                                <div>₱ 23,785.90</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 lg:w-1/2 ">
                        <div className="grid grid-cols-5 gap-2 p-3 mt-3 ml-3 rounded-lg bg-[#F1F5F9] h-full text-xs">
                            <div className="col-span-2">
                                <div className="text-[#676C72]">Tuition Fee (Per Unit) :</div>
                            </div>
                            <div className="col-span-3">
                                <div className="text-main-red font-bold">₱ 7,626.00</div>
                            </div>

                            <div className="col-span-5 text-[#676C72]">
                                <div className="mt-28 border-b border-dotted border-black"></div>
                            </div>

                            <div className="col-span-2 text-[#676C72]">
                                <div>Overall Balance :</div>
                                <div className="mt-1 text-[10px]">Previous Balance (existing)</div>
                                <div className="mt-1 text-[10px]">+ Current Balance</div>
                            </div>

                            <div className="col-span-3">
                                <div>₱ 6,764.10</div>
                            </div>

                            <div className="col-span-2 text-[#676C72] mt-4">
                                <div>Amount to be Paid :</div>
                            </div>

                            <div className="col-span-3 mt-4">
                                <div className="font-bold text-main-red">For 2023 | 1st Trimester</div>
                                <div className="font-bold  mt-2">₱ 6,764.10</div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Row 5 */}
                <div className="col-span-12 mt-8 text-right text-sm">
                    <DateTime />
                </div>

            </div >
        </>
    );
};

export default StudentGradCashier;
