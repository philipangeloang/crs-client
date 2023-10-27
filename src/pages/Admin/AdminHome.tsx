import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";

const AdminHome = () => {
  return (
    <>
      <div className="p-10 px-16 grid grid-cols-12 font-montserrat">
        {/* Row 1 */}
        <div className="col-span-12 flex justify-between items-center">
          <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
            Home
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
            <p className="text-xs ">
              Logged as: <span className="text-main-red">Administrator</span>
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
        <div className="col-span-12 flex justify-between items-center">
          <div className="flex">
            <div>Contacts</div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <p className="flex">
                  <AiOutlineMail /> info@plm.edu.ph
                </p>
                <p className="flex">
                  <FiFacebook /> @PLM.Haribon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
