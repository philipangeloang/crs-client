import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import DateTime from "@/components/DateTime";
import TempRoleSelector from "../TempRoleSelector";
import { tableStudentReg } from "./TestData";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const AdminStudentType = () => {
  return (
    <>
      <div className="h-screen w-full p-10 px-16 flex flex-col justify-between font-montserrat overflow-x-hidden">
        {/* Row 1 */}
        <div className="flex justify-between items-center">
          <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
            Student
          </div>
          <div className="flex flex-col items-end">
            <h1 className="font-bold">DELA CRUZ. JUAN PEPITO</h1>
            <p className="text-xs ">
              Logged as: <TempRoleSelector />
            </p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="mt-10 font-open-sans flex flex-col">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Input
                className="border border-main-gray w-60"
                placeholder="Search"
              />
              <div className="border border-main-gray p-2 rounded-lg">
                <FiArrowRight />
              </div>
            </div>
            <div className="cursor-pointer px-5 py-1 flex justify-center items-center bg-main-red text-white rounded-lg ">
              Send Email
            </div>
          </div>

          <div className="grid grid-cols-12 mt-5 ">
            {/* Table Header */}
            <div className="font-bold bg-main-red rounded-tl-lg text-white p-3 col-span-1 flex items-center space-x-2">
              <Checkbox className="border border-white text-white" />
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              Student No.
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              Student Name
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-1 text-center">
              Year Level
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              Program
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-1 text-center">
              College
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              AY Sem
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-1 text-center">
              Status
            </div>

            {/* Table Contents */}
            {tableStudentReg.map((item) => (
              <>
                <div
                  className="col-span-1 px-2 py-3 border-l border-b border-main-gray flex flex-col justify-center text-center"
                  key={item.id}
                >
                  <Checkbox className="border border-black " />
                </div>
                <div className="text-center col-span-2 py-3 border-b border-main-gray flex flex-col justify-center">
                  <p className="px-7 py-1 mx-auto rounded-lg">
                    {item.studentNumber}
                  </p>
                </div>

                <div className="text-center col-span-2 py-3 border-b border-main-gray flex flex-col justify-center">
                  <p className="px-7 py-1 mx-auto rounded-lg">
                    {item.studentName}
                  </p>
                </div>
                <div className="text-center col-span-1 py-3 border-b border-main-gray flex flex-col justify-center">
                  <p className="px-7 py-1 mx-auto rounded-lg">
                    {item.yearLevel}
                  </p>
                </div>
                <div className="text-center col-span-2 py-3 flex border-b border-main-gray">
                  <p className="px-7 py-1  mx-auto rounded-lg flex gap-2 justify-between items-center">
                    {item.program}
                  </p>
                </div>
                <div className="text-center col-span-1 py-3 flex border-b border-main-gray">
                  <p className="px-7 py-1  mx-auto rounded-lg flex gap-2 justify-between items-center">
                    {item.college}
                  </p>
                </div>
                <div className="text-center col-span-2 py-3 flex border-b border-main-gray">
                  <p className="px-7 py-1  mx-auto rounded-lg flex gap-2 justify-between items-center">
                    {item.sem}
                  </p>
                </div>
                <div className="text-center col-span-1 py-3 flex border-b border-r border-main-gray">
                  <p className="px-7 py-1  mx-auto rounded-lg flex gap-2 justify-between items-center">
                    {item.status}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>

        {/*Row 3 Pagination (right-aligned and smaller) */}
        <div className="mt-20 text-sm">
          <div className="flex justify-between items-center space-x-2">
            <ul className="flex space-x-2 justify-center items-center">
              <li className="border border-main-gray p-1 rounded-lg">
                <FiArrowLeft size="20" />
              </li>
              <li className="border border-main-gray p-1 rounded-lg w-8 flex justify-center">
                <a href="#">1</a>
              </li>
              <li className="border border-main-gray p-1 rounded-lg w-8 flex justify-center">
                <a href="#">2</a>
              </li>
              <li className="border border-main-gray p-1 rounded-lg">
                <FiArrowRight size="20" />
              </li>
              <li>
                <p>7 out of 12 rows</p>
              </li>
            </ul>
            <DateTime />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminStudentType;
