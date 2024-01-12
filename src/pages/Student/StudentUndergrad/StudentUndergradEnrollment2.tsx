import DateTime from "@/components/DateTime";
import { useNavigate } from 'react-router-dom';
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiDownload } from "react-icons/bi";


const Enrollment2 = () => 
{
    const navigate = useNavigate();

    const handleBackClick= () => {
        console.log('Button clicked!');
            navigate('/home/enrollment1');
    };

    const handleNextClick= () => {
        console.log('Button clicked!');
            navigate('/home/enrollment3');
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
                    <div className="text-3xl font-bold text-main-red">Step&nbsp;2:</div>
                    <div className="text-2xl text-main-red mr-80">View Assessment</div>
                    <div className="flex flex-row">
                        <button className="px-6 py-1 bg-main-red text-white rounded-lg flex items-center" onClick={handleBackClick}>
                            <BiSolidLeftArrow size={15}></BiSolidLeftArrow>Back
                        </button>
                        <button className="ml-2 px-6 py-1 bg-main-red text-white rounded-lg flex items-center" onClick={handleNextClick}>
                            Next<BiSolidRightArrow size={15}></BiSolidRightArrow>
                        </button>
                    </div>
                </div>
                <div>
                    <ol className="flex items-center w-full mt-2 ">
                        <li className="ml-10 flex items-center text-white dark:text-red-500 after:content-[''] after:w-72 after:h-1 after:border-b after:border-main-red after:border-4 after:inline-block dark:after:border-red-800">
                            <span className="flex items-center justify-center w-10 h-10 bg-main-red rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                1
                            </span>
                        </li>
                        <li className="flex items-center text-white after:content-[''] after:w-72 after:h-1 after:border-b after:border-red-100 after:border-4 after:inline-block dark:after:border-red-800">
                            <span className="flex items-center justify-center w-10 h-10 bg-main-red rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
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
                </div>
                <div className="flex flex-row  col-span-12 ml-2 mt-6">
                    <div className="flex flex-col text-sm mr-2">
                        <p className="text-l font-extrabold">
                            TUITION FEE
                        </p>
                        <div className="text-sm underline flex flex-row">
                            <p className="ml-6 mr-72">
                                Description
                            </p>
                            <p>
                                Amount
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-52">
                                Tuition Fee (12.00 units)
                            </p>
                            <p>
                                14,400.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="text-sm font-extrabold ml-96 px-2 flex flex-row">
                                14,400.00
                            </p>
                        </div>
                        <p className="text-l font-extrabold">
                            MISCELLANEOUS FEE
                        </p>
                        <div className="text-sm underline flex flex-row">
                            <p className="ml-6 mr-72">
                                Description
                            </p>
                            <p>
                                Amount
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-64">
                                Cultural Activity
                            </p>
                            <p className="ml-3">
                                74.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-72">
                                Library Fee
                            </p>
                            <p className="ml-3">
                                732.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-60">
                                Medical/Dental Fee
                            </p>
                            <p>
                                293.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-64">
                                Guidance Fee
                            </p>
                            <p className="ml-6">
                                146.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-52">
                                Athletic Fee without PE
                            </p>
                            <p>
                                117.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-64">
                                Student Welfare
                            </p>
                            <p className="ml-2">
                                74.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-44">
                                Registration Fee (12.00 units)
                            </p>
                            <p>
                                74.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="text-sm font-extrabold ml-96 px-2 flex flex-row">
                                1,510.00
                            </p>
                        </div>
                        <p className="text-l font-extrabold">
                            LABORATORY FEE
                        </p>
                        <div className="text-sm underline flex flex-row">
                            <p className="ml-6 mr-72">
                                Description
                            </p>
                            <p>
                                Amount
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-52">
                                Category 3 Laboratory
                            </p>
                            <p>
                                1,800.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="text-sm font-extrabold ml-96 px-2 flex flex-row">
                                1,800.00
                            </p>
                        </div>
                        <p className="text-l font-extrabold">
                            OTHER FEE
                        </p>
                        <div className="text-sm underline flex flex-row">
                            <p className="ml-6 mr-72">
                                Description
                            </p>
                            <p>
                                Amount
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-60">
                                Development Fund
                            </p>
                            <p>
                                146.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-56">
                                Ang Pamantasan Fee
                            </p>
                            <p>
                                50.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="ml-6 mr-50">
                                Supreme Student Council
                            </p>
                            <p>
                                50.00
                            </p>
                        </div>
                        <div className="text-sm flex flex-row">
                            <p className="text-sm font-extrabold ml-96 px-2 flex flex-row">
                                246.00
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col ml-10 mt-4 ">
                        <div className="p-4 rounded-lg border  flex flex-row justify-center">
                            <p className="text-xxl font-extrabold mr-60">
                                TOTAL PAYMENT
                            </p>
                            <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
                                17,956.00 PHP
                            </div>
                        </div>
                        <div className="p-4 rounded-lg border flex flex-col justify-center mt-4">
                            <div className="flex flex-row justify-center">
                                <p className="text-xxl font-extrabold mr-60">
                                    TOTAL PAYMENT
                                </p>
                                <div className="px-5 py-1 bg-yellow-300 font-extrabold rounded-lg ">
                                    FULLY PAID
                                </div>
                            </div>
                            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                            <div className="flex flex-row ">
                                <p className="text-xxl font-extrabold ml-2 mr-72">
                                    AMOUNT&nbsp;PAID
                                </p>
                                <p className="text-base">
                                    17,956.00&nbsp;PHP
                                </p>
                            </div>
                            <div className="flex flex-row ">
                                <p className="text-xxl font-extrabold ml-2 mr-96">
                                    PAID&nbsp;BY
                                </p>
                                <p className="text-base">
                                    CHED
                                </p>
                            </div>
                            <div className="flex flex-row ">
                                <p className="text-xxl font-extrabold ml-2 mr-72">
                                    THROUGH
                                </p>
                                <p className="text-base">
                                    Unifast (RA 10931)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="col-span-12 flex flex-row justify-end mt-24 items-center text-[#434343]">
                    <button className=" ml-4 py-1 text-sm w-40 mr-4 flex flex-row bg-main-red text-white text-bold text-l col-span-12 rounded-lg items-center">
                        <BiDownload size={25} className="ml-4 mr-2"/>Save a Copy
                    </button>
                    <p className="text-l text-slate-600 mr-96">Download a copy of the assessment to proceed.</p>
                    <div className="ml-auto">
                        <p><DateTime></DateTime></p>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Enrollment2;