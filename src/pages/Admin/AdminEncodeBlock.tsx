import { RiEditCircleLine, RiDeleteBin2Line } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import DateTime from "@/components/DateTime";
import TempRoleSelector from "../TempRoleSelector";
import { Input } from "@/components/ui/input";
import { tableEncodeBlock } from "./TestData";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdminEncodeBlock = () => {
  return (
    <div className="h-screen w-full p-10 px-16 flex flex-col justify-between font-montserrat overflow-x-hidden">
      {/* Row 1 */}
      <div className="flex justify-between items-center">
        <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
          Encode Block
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
              className="border border-main-gray  w-60"
              placeholder="Search"
            />
            <div className="border border-main-gray p-2 rounded-lg">
              <FiArrowRight />
            </div>
            <Select>
              <SelectTrigger className="">
                <SelectValue placeholder="Choose" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>College</SelectLabel>
                  <SelectItem value="cet">CET</SelectItem>
                  <SelectItem value="ceb">CEB</SelectItem>
                  <SelectItem value="cer">CER</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="cursor-pointer px-5 py-1 flex justify-center items-center bg-main-red text-white rounded-lg ">
            Add New
          </div>
        </div>

        <div className="grid grid-cols-12 mt-5 ">
          {/* Table Header */}
          <div className="font-bold bg-main-red rounded-tl-lg text-white p-3 col-span-1 text-center">
            Block ID
          </div>
          <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
            Block
          </div>
          <div className="font-bold bg-main-red text-white p-3 col-span-1 text-center">
            College ID
          </div>
          <div className="font-bold bg-main-red text-white p-3 col-span-1 text-center">
            Year Standing
          </div>
          <div className="font-bold bg-main-red  text-white p-3 col-span-1 text-center">
            Slots
          </div>
          <div className="font-bold bg-main-red  text-white p-3 col-span-1 text-center">
            Enlisted
          </div>
          <div className="font-bold bg-main-red  text-white p-3 col-span-3 text-center">
            Date Created
          </div>
          <div className="font-bold bg-main-red rounded-tr-lg text-white p-3 col-span-2 text-center">
            Action
          </div>

          {/* Table Contents */}
          {tableEncodeBlock.map((item) => (
            <>
              <div
                className="col-span-1 px-2 py-3 border-l border-b border-main-gray flex flex-col justify-center text-center"
                key={item.id}
              >
                {item.blockID}
              </div>
              <div className="text-center col-span-2 py-3 border-b border-main-gray flex flex-col justify-center">
                <p className="px-7 py-1 mx-auto rounded-lg">{item.block}</p>
              </div>
              <div className="text-center col-span-1 py-3 flex border-b border-main-gray">
                <p className="px-7 py-1  mx-auto rounded-lg flex gap-2 justify-between items-center">
                  {item.collegeID}
                </p>
              </div>
              <div className="text-center col-span-1 py-3 flex border-b border-main-gray">
                <p className="px-7 py-1  mx-auto rounded-lg flex gap-2 justify-between items-center">
                  {item.yearStanding}
                </p>
              </div>
              <div className="text-center col-span-1 py-3 flex border-b border-main-gray">
                <p className="px-7 py-1 mx-auto rounded-lg flex gap-2 justify-between items-center">
                  {item.slots}
                </p>
              </div>

              <div className="text-center col-span-1 px-2 py-3 flex border-b border-main-gray">
                <p className="px-7 py-1 mx-auto rounded-lg flex gap-2 justify-between items-center">
                  {item.enlisted}
                </p>
              </div>
              <div className="text-center col-span-3 px-2 py-3 flex border-b border-main-gray">
                <p className="px-7 py-1 mx-auto rounded-lg flex gap-2 justify-between items-center">
                  {item.dateCreated}
                </p>
              </div>
              <div className="col-span-2 px-2 py-4 flex justify-center items-center border-b border-r border-main-gray ">
                <div className="flex gap-2">
                  <div className="bg-main-blue text-white rounded-lg h-10 w-10 flex justify-center items-center mx-auto">
                    <RiEditCircleLine size="30" />
                  </div>
                  <div className="bg-main-red text-white rounded-lg h-10 w-10 flex justify-center items-center mx-auto">
                    <RiDeleteBin2Line size="30" />
                  </div>
                </div>
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
  );
};

export default AdminEncodeBlock;
