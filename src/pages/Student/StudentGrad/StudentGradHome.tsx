import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import DateTime from "@/components/DateTime";
import TempRoleSelector from "../../TempRoleSelector";

const StudentGradHome = () => {
  return (
    <>
      <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
        {/* Row 1 */}
        <div className="col-span-12 flex justify-between items-center">
          <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
            Student Grad Home
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
            <p className="text-xs ">
              Logged as: <TempRoleSelector />
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-12 mt-20">
          <h1 className="text-3xl font-normal mb-2">
            Welcome to the Official CRS Website of
          </h1>
          <h1 className="text-3xl font-bold text-main-red">
            Pamantasan ng Lungsod ng Maynila
          </h1>
          <h1 className="font-bold text-[#434343] text-2xl mt-8">
            Important Events
          </h1>

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
            <DateTime />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentGradHome;
