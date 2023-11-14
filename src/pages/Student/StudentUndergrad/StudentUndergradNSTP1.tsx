import DateTime from "@/components/DateTime";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";


const NSTP1 = () => 
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
                    NSTP Enlistment
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
                    <div className="text-2xl text-main-red mr-80">Choose ROTC or CWTS</div>
                    <div className="flex flex-row">
                        <button className="px-6 py-1 bg-main-red text-white rounded-lg flex items-center">
                            <BiSolidLeftArrow size={15}></BiSolidLeftArrow>Home
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
                        <li className="flex items-center after:content-[''] after:w-72 after:h-1 after:border-b after:border-red-100 after:border-4 after:inline-block dark:after:border-red-700">
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
                    <table className="table-fixed mt-4 ml-2 text-center rounded-lg text-sm border border-black">
                        <thead>
                            <tr className="bg-main-red text-white items-center">
                                <th className="px-10">Class&nbsp;Code</th>
                                <th className="px-20">Class&nbsp;Name</th>
                                <th className="px-10">Selection</th>
                                <th className="pl-60 pr-60">Definition</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-20">ROTC 0111</td>
                                <td>Reserve Officers' Training Corps</td>
                                <div>
                                    <input type="checkbox" id="some_id" className="
                                        mr-2 mt-16 peer shrink-0 rounded-full
                                        appearance-none w-10 h-10 border-2 border-black-200 bg-white
                                        checked:bg-white checked:border-red-500 checked:border-2"
                                    />
                                    <svg
                                    className="ml-14 mt-[-2.5rem] text-red-500 w-8 h-8 hidden peer-checked:block pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <td>ROTC (Reserve Officers' Training Corps) is a program that offers college students military training and education, with the aim of developing them into potential reserve officers for the Armed Forces of the Philippines.</td>
                            </tr>
                            <tr>
                                <td className="py-20">CWTS 0112</td>
                                <td>Civic Welfare Training Service</td>
                                <div>
                                    <input type="checkbox" id="some_id" className="
                                        mr-2 mt-16 peer shrink-0 rounded-full
                                        appearance-none w-10 h-10 border-2 border-black-200 bg-white
                                        checked:bg-white checked:border-red-500 checked:border-2"
                                    />
                                    <svg
                                    className="ml-14 mt-[-2.5rem] text-red-500 w-8 h-8 hidden peer-checked:block pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <td>CWTS (Citizenship and Leadership Training Service) is a program that focuses on enhancing students' civic awareness and leadership skills through community service and social engagement.</td>
                            </tr>
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

export default NSTP1;