import { AiOutlineMail } from "react-icons/ai";
import { FiFacebook, FiTwitter } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import DateTime from "@/components/DateTime";
import { Link } from "react-router-dom";

// Faculty Details
let personalDetails = {
  employeeNumber: "2019-81725",
  lastName: "DELA CRUZ",
  firstName: "JUAN",
  middleName: "PEPITO",
  nameExtension: "",
  maidenName: "",
  pedigree: "None",
  birthDate: "1987-05-03",
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

const FacultyProfileEdit = () => {
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
          <div className="col-span-12 gap-5 w-full flex justify-end items-center">
            <div className="px-4 py-2 bg-main-red text-white rounded-lg cursor-pointer">
              <Link
                to="/home/profile"
              >
                Save Details
              </Link>
            </div>
          </div>

          <h1 className="font-bold text-[#434343] text-1xl mt-4">
            Personal Details
          </h1>
          <form id="facultyProfileEditForm">
            <div className="col-span-12 flex justify-start text-sm items-center">
              <div className="p-4 mt-4 gap-4 rounded-lg border border-black w-full flex flex-col justify-center">
                <div className="w-full flex flex-row justify-start">
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Employee No. :</span>
                    <span className="w-2/3 text-left font-bold">{personalDetails.employeeNumber}</span>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-start">
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Last Name :</span>
                    <input type="text" name="lastName" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.lastName}/>
                  </div>
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">First Name :</span>
                    <input type="text" name="firstName" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.firstName}/>
                  </div>
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Middle Name :</span>
                    <input type="text" name="middleName" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.middleName} placeholder="Leave blank if not applicable"/>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-start">
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Name Extension :</span>
                    <input type="text" name="nameExtension" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.nameExtension} placeholder="ex. (Sr., Jr., III, IV)"/>
                  </div>
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Maiden Name :</span>
                    <input type="text" name="maidenName" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.maidenName} placeholder="Leave blank if not applicable"/>
                  </div>
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Pedigree :</span>
                    <select name="pedigree" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.pedigree}>
                      <option value="None" selected>None</option>
                    </select>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-start">
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Birth Date :</span>
                    <input type="date" name="birthDate" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.birthDate}/>
                  </div>
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Birth Place :</span>
                    <input type="text" name="birthPlace" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.birthPlace}/>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-start">
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Gender :</span>
                    <select name="gender" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.gender}>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Civil Status :</span>
                    <select name="civilStatus" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.civilStatus}>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Widowed">Widowed</option>
                      <option value="Legally Separated">Legally Separated</option>
                    </select>
                  </div>
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Citizenship :</span>
                    <input type="text" name="citizenship" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.citizenship}/>
                  </div>
                </div>
                <div className="w-full flex flex-row justify-start">
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Mobile No. :</span>
                    <input type="text" name="mobileNumber" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.mobileNumber} placeholder="09XXXXXXXXX"/>
                  </div>
                  <div className="w-1/3 flex flex-row justify-start items-center">
                    <span className="w-1/3 text-left">Email Address :</span>
                    <input type="text" name="emailAddress" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={personalDetails.emailAddress} placeholder="example@domain.com"/>
                  </div>
                </div>
              </div>
            </div>
          </form>
          
          <h1 className="font-bold text-[#434343] text-1xl mt-4">
            Employment Details
          </h1>
          <div className="col-span-12 flex justify-start text-sm items-center">
            <div className="p-4 mt-4 gap-4 rounded-lg border border-black w-full flex flex-col justify-center">
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">TIN :</span>
                  <input type="text" name="tin" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={employmentDetails.tin} placeholder="XXX-XXX-XXX-XXX"/>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">GSIS No. :</span>
                  <input type="text" name="gsisNumber" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={employmentDetails.gsisNumber} placeholder="XXXX-XXXX-XXXX-XXXX"/>
                </div>
                <div className="w-1/3 flex flex-row justify-start items-center">
                  <span className="w-1/3 text-left">Instructor Code :</span>
                  <span className="w-2/3 text-left font-bold">{employmentDetails.instructorCode}</span>
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="font-bold text-[#434343] text-1xl mt-4">
            Current Address
          </h1>
          <div className="col-span-12 flex justify-start text-sm items-center">
            <div className="p-4 mt-4 gap-4 rounded-lg border border-black w-full flex flex-col justify-center">
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/2 flex flex-row justify-start items-center">
                  <span className="w-1/4 text-left">Address :</span>
                  <input type="text" name="address" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={currentAddress.address}/>
                </div>
              </div>
              <div className="w-full flex flex-row justify-start">
                <div className="w-1/2 flex flex-row justify-start items-center">
                  <span className="w-1/4 text-left">Phone No. :</span>
                  <input type="text" name="phoneNumber" className="w-full rounded-sm mx-4 py-2 px-4 border text-left font-bold" defaultValue={currentAddress.phoneNumber}/>
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

export default FacultyProfileEdit;
