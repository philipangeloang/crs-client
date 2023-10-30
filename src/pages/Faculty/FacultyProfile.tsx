import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import DateTime from "@/components/DateTime";

// Faculty Details
let personalDetails = {
  employeeNumber: "2019-81725",
  lastName: "DELA CRUZ",
  firstName: "JUAN",
  middleName: "PEPITO",
  nameExtension: "",
  maidenName: "",
  pedigree: "None",
  birthDate: "May 3, 1987",
  birthPlace: "NCR - Manila",
  gender: "Male",
  civilStatus: "Single",
  citizenship: "Filipino",
  mobileNumber: "09987654321",
  emailAddress: "juan.delacruz@gmail.com"
};

let employmentDetails = {
  tin: "xxx-xxx-xxx-xxx",
  gsisNumber: "xxxx-xxxx-xxxx-xxxx",
  instructorCode: "DELACRUZJP"
};

let currentAddress = {
  address: "5317 Muralla St., Intramuros, Manila, Philippines 1002",
  phoneNumber: "(02) 8643 2500",
};

const FacultyProfile = () => {
  return (
    <>
      <div className="p-10 px-16 grid grid-cols-12 font-montserrat ">
        {/* Row 1 */}
        <div className="col-span-12 flex justify-between items-center">
          <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
            Profile
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
            <p className="text-xs ">
              Logged as: <span className="text-main-red">Administrator</span>
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-12 mt-12">
          <div className="col-span-12 gap-5 flex flex-start items-center">
            <div className="px-4 py-2 bg-main-blue text-white rounded-lg ">
              View Details
            </div>
            <div className="px-4 py-2 bg-main-red text-white rounded-lg cursor-pointer">
              Edit Details
            </div>
          </div>

          <h1 className="font-bold text-[#434343] text-1xl mt-4">
            Personal Details
          </h1>
          <div className="col-span-12 flex flex-start text-sm items-center">
            <div className="p-4 mt-4 gap-4 rounded-lg border border-black w-full flex flex-col justify-center">
              <div className="w-full flex flex-row flex-start">
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">Employee No. :</span>
                  <span className="w-2/3 text-left font-bold">{personalDetails.employeeNumber}</span>
                </div>
              </div>
              <div className="w-full flex flex-row flex-start">
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">Full Name :</span>
                  <span className="w-2/3 text-left font-bold">{personalDetails.firstName} {personalDetails.middleName} {personalDetails.lastName} {personalDetails.nameExtension}</span>
                </div>
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">Pedigree :</span>
                  <span className="w-2/3 text-left font-bold">{personalDetails.pedigree}</span>
                </div>
              </div>
              <div className="w-full flex flex-row flex-start">
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">Birth Date :</span>
                  <span className="w-2/3 text-left font-bold">{personalDetails.birthDate}</span>
                </div>
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">Birth Place :</span>
                  <span className="w-2/3 text-left font-bold">{personalDetails.birthPlace}</span>
                </div>
              </div>
              <div className="w-full flex flex-row flex-start">
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">Gender :</span>
                  <span className="w-2/3 text-left font-bold">{personalDetails.gender}</span>
                </div>
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">Civil Status :</span>
                  <span className="w-2/3 text-left font-bold">{personalDetails.civilStatus}</span>
                </div>
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">Citizenship :</span>
                  <span className="w-2/3 text-left font-bold">{personalDetails.citizenship}</span>
                </div>
              </div>
              <div className="w-full flex flex-row flex-start">
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">Mobile No. :</span>
                  <span className="w-2/3 text-left font-bold">{personalDetails.mobileNumber}</span>
                </div>
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">Email Address :</span>
                  <span className="w-2/3 text-left font-bold">{personalDetails.emailAddress}</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="font-bold text-[#434343] text-1xl mt-4">
            Employment Details
          </h1>
          <div className="col-span-12 flex flex-start text-sm items-center">
            <div className="p-4 mt-4 gap-4 rounded-lg border border-black w-full flex flex-col justify-center">
              <div className="w-full flex flex-row flex-start">
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">TIN :</span>
                  <span className="w-2/3 text-left font-bold">{employmentDetails.tin}</span>
                </div>
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">GSIS No. :</span>
                  <span className="w-2/3 text-left font-bold">{employmentDetails.gsisNumber}</span>
                </div>
                <div className="w-1/3 flex flex-row flex-start">
                  <span className="w-1/3 text-left">Instructor Code :</span>
                  <span className="w-2/3 text-left font-bold">{employmentDetails.instructorCode}</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="font-bold text-[#434343] text-1xl mt-4">
            Current Address
          </h1>
          <div className="col-span-12 flex flex-start text-sm items-center">
            <div className="p-4 mt-4 gap-4 rounded-lg border border-black w-full flex flex-col justify-center">
              <div className="w-full flex flex-row flex-start">
                <div className="w-1/2 flex flex-row flex-start">
                  <span className="w-1/4 text-left">Address :</span>
                  <span className="w-full text-left font-bold">{currentAddress.address}</span>
                </div>
              </div>
              <div className="w-full flex flex-row flex-start">
                <div className="w-1/2 flex flex-row flex-start">
                  <span className="w-1/4 text-left">Phone No. :</span>
                  <span className="w-full text-left font-bold">{currentAddress.phoneNumber}</span>
                </div>
              </div>
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

          <DateTime />
        </div>
      </div>
    </>
  );
};

export default FacultyProfile;
