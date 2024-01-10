import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsMicrosoftTeams } from "react-icons/bs";
import DateTime from "@/components/DateTime";


const UndergradHome = () => 
{
    return (
        <>
            <div className="p-10 px-16 grid grid-cols-12 font-montserrat
                            bg-cover bg-center min-h-screen items-center
                            bg-no-repeat" 
                style = {{ 
                backgroundImage: 'url(/public/gradient.png), url(/public/plm_bg.png)'
                }}
                >
                {/* Row 1 */}
                <div className="col-span-12 flex justify-between items-center">
                    <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
                    Home
                    </div>
                    <div className="flex flex-col items-end">
                        <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
                        <p className="text-xs ">
                            Undergraduate Student: <span className="text-main-red">2020-10000</span>
                        </p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="col-span-12 mt-20 ">
                    <h1 className="text-3xl font-normal mb-2">
                        Welcome to the Official CRS Website of
                    </h1>
                    <h1 className="text-3xl font-bold text-main-red">
                        Pamantasan ng Lungsod ng Maynila
                    </h1>
                    <div className="flex flex-row">
                        <h1 className="font-bold text-[#434343] text-2xl mt-8 flex-1">
                            Important Events
                        </h1>
                        <h1 className="font-bold text-[#A42A28] text-2xl mt-8 mr-20 flex-1">
                            Student Class Schedule
                        </h1>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white mt-8 h-8 w-8 font-bold py-1 px-1 rounded">
                            <AiOutlinePrinter size={25} />
                        </button>
                    </div>
                    <div className="flex">
                        <div>
                            <div className="p-4 mt-4 rounded-lg border border-black w-80 flex flex-col justify-center">
                                <p className="text-sm mb-2">
                                October 23 (M) - October 30 (Su), 2023
                                </p>
                                <p className="font-bold text-main-red">Midterms</p>
                            </div>
                            <div className="p-4 mt-2 rounded-lg border border-black w-80 flex flex-col justify-center">
                                <p className="text-sm mb-2">
                                    October 23 (M) - October 30 (Su), 2023
                                </p>
                                <p className="font-bold text-main-red">Midterms</p>
                            </div>
                            <div className="p-4 mt-2 rounded-lg border border-black w-80 flex flex-col justify-center">
                                <p className="text-sm mb-2">
                                    October 23 (M) - October 30 (Su), 2023
                                </p>
                                <p className="font-bold text-main-red">Midterms</p>
                            </div>
                            <div className="p-4 mt-2 rounded-lg border border-black w-80 flex flex-col justify-center">
                                <p className="text-sm mb-2">
                                    October 23 (M) - October 30 (Su), 2023
                                </p>
                                <p className="font-bold text-main-red">Midterms</p>
                            </div>
                        </div>

                        <div className="ml-40 p-4">
                            <table className="table-auto text-center text-xs justify-center border border-black rounded">
                                <thead>
                                    <tr className="bg-main-red text-white">
                                        <th className="w-1/3">Class</th>
                                        <th className="w-1/4">Section</th>
                                        <th className="w-1/4">Schedule/Room</th>
                                        <th className="w-1/4">Credits</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="w-1/3">CS Thesis Writing 1 - CSC 0411</td>
                                        <td className="w-1/4">1</td>
                                        <td className="w-1/3" flex-col>
                                            T 8:30AM-10:00AM F2F - GCA 307 
                                            F 8:30AM-10:00AM F2F - GV 306</td>
                                        <td className="w-1/4">3</td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/3">CS Thesis Writing 1 - CSC 0411</td>
                                        <td className="w-1/4">1</td>
                                        <td className="w-1/3" flex-col>
                                            T 8:30AM-10:00AM F2F - GCA 307 
                                            F 8:30AM-10:00AM F2F - GV 306</td>
                                        <td className="w-1/4">3</td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/3">CS Thesis Writing 1 - CSC 0411</td>
                                        <td className="w-1/4">1</td>
                                        <td className="w-1/3" flex-col>
                                            T 8:30AM-10:00AM F2F - GCA 307 
                                            F 8:30AM-10:00AM F2F - GV 306</td>
                                        <td className="w-1/4">3</td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/3">CS Thesis Writing 1 - CSC 0411</td>
                                        <td className="w-1/4">1</td>
                                        <td className="w-1/3" flex-col>
                                            T 8:30AM-10:00AM F2F - GCA 307 
                                            F 8:30AM-10:00AM F2F - GV 306</td>
                                        <td className="w-1/4">3</td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/3">CS Thesis Writing 1 - CSC 0411</td>
                                        <td className="w-1/4">1</td>
                                        <td className="w-1/3" flex-col>
                                            T 8:30AM-10:00AM F2F - GCA 307 
                                            F 8:30AM-10:00AM F2F - GV 306</td>
                                        <td className="w-1/4">3</td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/3">CS Thesis Writing 1 - CSC 0411</td>
                                        <td className="w-1/4">1</td>
                                        <td className="w-1/3" flex-col>
                                            T 8:30AM-10:00AM F2F - GCA 307 
                                            F 8:30AM-10:00AM F2F - GV 306</td>
                                        <td className="w-1/4">3</td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/3">CS Thesis Writing 1 - CSC 0411</td>
                                        <td className="w-1/4">1</td>
                                        <td className="w-1/3" flex-col>
                                            T 8:30AM-10:00AM F2F - GCA 307 
                                            F 8:30AM-10:00AM F2F - GV 306</td>
                                        <td className="w-1/4">3</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="bg-red-600 hover:bg-red-700 text-white text-sm mt-2 h-8 font-bold py-1 px-1 rounded flex flex-row">
                                Virtual Classroom<BsMicrosoftTeams size={20} color ="#7B83EB"/>
                            </button>
                        </div>
                    </div>
                    
                </div>

                {/* Row 3 */}
                <div className="col-span-12 flex justify-between items-end mt-24 text-[#434343] text-sm">
                    <div className="flex gap-10">
                        <div>Contacts</div>
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

                    <div className="flex flex-col items-end">
                        <p><DateTime></DateTime></p>
                    </div>
                </div>
            </div>
        </>
    )
};

export default UndergradHome;