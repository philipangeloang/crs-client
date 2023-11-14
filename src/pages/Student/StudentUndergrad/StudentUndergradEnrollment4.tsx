import DateTime from "@/components/DateTime";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";


const Enrollment4 = () => 
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
                    <div className="text-3xl font-bold text-main-red">Finish!</div>
                    <div className="text-2xl text-main-red mr-80">Officially Enrolled!</div>
                    <div className="flex flex-row">
                        <button className="px-6 py-1 bg-main-red text-white rounded-lg flex items-center">
                            <BiSolidLeftArrow size={15}></BiSolidLeftArrow>Back
                        </button>
                        <button className="ml-2 px-6 py-1 bg-main-red text-white rounded-lg flex items-center">
                            Home<BiSolidRightArrow size={15}></BiSolidRightArrow>
                        </button>
                    </div>
                </div>

                <div>
                <ol className="flex items-center w-full mt-4 ">
                        <li className="ml-10 flex items-center text-white dark:text-red-500 after:content-[''] after:w-72 after:h-1 after:border-b after:border-main-red after:border-4 after:inline-block dark:after:border-red-800">
                            <span className="flex items-center justify-center w-10 h-10 bg-main-red rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                1
                            </span>
                        </li>
                        <li className="flex items-center text-white after:content-[''] after:w-72 after:h-1 after:border-b after:border-main-red after:border-4 after:inline-block dark:after:border-red-700">
                            <span className="flex items-center justify-center w-10 h-10 bg-main-red rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                2
                            </span>
                        </li>
                        <li className="flex items-center text-white after:content-[''] after:w-72 after:h-1 after:border-b after:border-main-red after:border-4 after:inline-block dark:after:border-red-700">
                            <span className="flex items-center justify-center w-10 h-10 bg-main-red rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                3
                            </span>
                        </li>
                        <li className="flex items-center w-full">
                            <span className="flex items-center justify-center w-10 h-10 bg-main-red rounded-full lg:h-12 lg:w-12 dark:bg-red-700 shrink-0">
                                <svg className="w-3.5 h-3.5 text-white lg:w-4 lg:h-4 dark:text-red-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                                </svg>
                            </span>
                        </li>
                    </ol>


                    <div className="ml-32 mt-40 mb-40">
                        <div className="flex flex-row ml-4 items-center text-2xl text-main-red">
                            <div className="flex-1 ">You&nbsp;are&nbsp;</div> 
                            <div className="flex-1 underline flex-row ">Officially&nbsp;Enrolled!</div>
                            <div className="flex-1">You&nbsp;will&nbsp;be&nbsp;added&nbsp;to&nbsp;your&nbsp;subjects’&nbsp;MS&nbsp;Teams.</div> 
                        </div>
                        <div className="flex flex-row ml-4 items-center text-2xl text-main-red">
                            <div className="ml-36 flex-1 text-2xl text-main-red">The</div>
                            <div className="flex-1 text-2xl font-bold text-main-red">&nbsp;Start&nbsp;of&nbsp;classes</div>
                            <div className="flex-1 text-2xl text-main-red">&nbsp;will&nbsp;be&nbsp;on</div>
                            <div className="flex-1 text-2xl font-bold text-main-red">&nbsp;August&nbsp;29,&nbsp;2023.</div>
                        </div>
                    </div>


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

export default Enrollment4;