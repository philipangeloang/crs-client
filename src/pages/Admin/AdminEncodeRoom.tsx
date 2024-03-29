import { RiEditCircleLine, RiDeleteBin2Line } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import DateTime from "@/components/DateTime";
import TempRoleSelector from "../TempRoleSelector";
import { tableEncodeRoom, tableEncodeRoomBuilding } from "./TestData";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { CgArrowsExchange } from "react-icons/cg";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { HiXMark } from "react-icons/hi2";
import { Label } from "@/components/ui/label";

const AdminEncodeRoom = () => {
  const [buildingListView, setBuildingListView] = useState(false);

  // State for Opening and Closing Modal
  const [roomInformationOpen, setRoomInformationOpen] = useState(false);

  // State for Searching and Filtering

  // State for Moving Along Pages
  const [schedActivities] = useState(tableEncodeRoomBuilding);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(7);

  // Logic to get the accurage number of pages
  const indexOfLastAct = currentPage * postPerPage;
  const indexOfFirstAct = indexOfLastAct - postPerPage;
  const currentAct = schedActivities.slice(indexOfFirstAct, indexOfLastAct);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(schedActivities.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {buildingListView && (
        <div className="h-screen w-full p-10 px-16 flex flex-col justify-between font-montserrat overflow-x-hidden">
          {/* Row 1 and Row 2 */}
          <div>
            {/* Row 1 */}
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <div
                  onClick={() => {
                    setBuildingListView(false);
                  }}
                  className="px-5 py-1 bg-main-red text-white rounded-lg "
                >
                  Encode Room
                </div>
                <div className="px-5 py-1 border border-[#434343] rounded-lg text-main-red">
                  Building List View
                </div>
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
                </div>
                <div
                  onClick={() => {
                    setRoomInformationOpen(!roomInformationOpen);
                  }}
                  className="cursor-pointer px-5 py-1 flex justify-center items-center bg-main-red text-white rounded-lg "
                >
                  Add New
                </div>
              </div>

              <div className="grid grid-cols-12 mt-5 ">
                {/* Table Header */}
                <div className="font-bold bg-main-red rounded-tl-lg text-white p-3 col-span-3 text-center">
                  Building ID
                </div>
                <div className="font-bold bg-main-red text-white p-3 col-span-3 text-center">
                  Building Name
                </div>
                <div className="font-bold bg-main-red text-white p-3 col-span-3 text-center">
                  Created Date
                </div>
                <div className="font-bold bg-main-red rounded-tr-lg text-white p-3 col-span-3 text-center">
                  Action
                </div>

                {/* Table Contents */}
                {currentAct.map((item) => (
                  <>
                    <div
                      className="col-span-3 px-2 py-3 border-l border-b border-main-gray text-center flex flex-col justify-center"
                      key={item.id}
                    >
                      {item.buildingID}
                    </div>
                    <div className="text-center col-span-3 py-3 border-b border-main-gray flex flex-col justify-center">
                      <p className="px-7 py-1 mx-auto rounded-lg">
                        {item.buildingName}
                      </p>
                    </div>
                    <div className="text-center col-span-3 py-3 flex border-b border-main-gray">
                      <p className="px-7 py-1  mx-auto rounded-lg flex gap-2 justify-between items-center">
                        {item.createdDate}
                      </p>
                    </div>
                    <div className="col-span-3 px-2 py-4 flex justify-center items-center border-b border-r border-main-gray ">
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
          </div>

          {/*Row 3 Pagination (right-aligned and smaller) */}
          <div className="mt-20 text-sm">
            <div className="flex justify-between items-center space-x-2">
              <ul className="flex space-x-2 justify-center items-center">
                <li
                  className="border border-main-gray p-1 rounded-lg cursor-pointer"
                  onClick={() => {
                    setCurrentPage(
                      currentPage === 1 ? currentPage : currentPage - 1
                    );
                  }}
                >
                  <FiArrowLeft size="20" />
                </li>
                {pageNumbers.map((number) => (
                  <li
                    key={number}
                    className="border border-main-gray p-1 rounded-lg w-8 flex justify-center cursor-pointer"
                    onClick={() => {
                      setCurrentPage(number);
                    }}
                  >
                    <a>{number}</a>
                  </li>
                ))}

                <li
                  className="border border-main-gray p-1 rounded-lg cursor-pointer"
                  onClick={() => {
                    setCurrentPage(
                      currentPage === pageNumbers.length
                        ? currentPage
                        : currentPage + 1
                    );
                  }}
                >
                  <FiArrowRight size="20" />
                </li>
                <li>
                  <p>
                    {currentPage} out of {pageNumbers.length}
                  </p>
                </li>
              </ul>
              <DateTime />
            </div>
          </div>

          {roomInformationOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg w-full py-4 max-w-lg">
                <div className="flex justify-between items-center p-4 px-14">
                  <h2 className="text-xl text-main-red">
                    User Type Information
                  </h2>
                  <button
                    className="flex items-center justify-center text-gray-700 border border-gray-700 rounded-full h-6 w-6"
                    // onClick={() => {
                    //   setUserTypeModalOpen(!userTypeModalOpen);
                    // }}
                  >
                    <HiXMark />
                  </button>
                </div>
                <hr className="w-full mb-3 " />

                <div className="px-14">
                  <div className="mb-3">
                    <Label className="font-normal mb-1">Role ID</Label>
                    <Input placeholder="ex. AGRAD01" />
                  </div>

                  <div className="mb-4">
                    <Label className="font-normal mb-1">Role Name</Label>
                    <Input placeholder="ex. Administrator" />
                  </div>
                </div>
                <div className="mt-8 text-center ">
                  <Button className="bg-main-red hover:bg-red-600">
                    {" "}
                    Save{" "}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {buildingListView === false && (
        <div className="h-screen w-full p-10 px-16 flex flex-col justify-between font-montserrat overflow-x-hidden">
          {/* Row 1 */}
          <div className="flex justify-between items-center">
            <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
              Encode Room
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
                <Select>
                  <SelectTrigger className="w-44">
                    <SelectValue placeholder="Select a Building" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>User</SelectLabel>
                      <SelectItem value="college">College</SelectItem>
                      <SelectItem value="faculty">Faculty</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Button
                  className="bg-main-red"
                  onClick={() => {
                    setBuildingListView(true);
                  }}
                >
                  <span>
                    <CgArrowsExchange size="30" className="font-thin" />
                  </span>
                  Building List
                </Button>
              </div>
              <div className="cursor-pointer px-5 py-1 flex justify-center items-center bg-main-red text-white rounded-lg ">
                Add New
              </div>
            </div>

            <div className="grid grid-cols-12 mt-5 ">
              {/* Table Header */}
              <div className="font-bold bg-main-red rounded-tl-lg text-white p-3 col-span-3 text-center ">
                Room ID
              </div>
              <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
                Room Name
              </div>
              <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
                Building
              </div>
              <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
                Created Date
              </div>
              <div className="font-bold bg-main-red rounded-tr-lg text-white p-3 col-span-3 text-center">
                Action
              </div>

              {/* Table Contents */}
              {tableEncodeRoom.map((item) => (
                <>
                  <div
                    className="col-span-3 px-2 py-3 border-l border-b border-main-gray text-center flex flex-col justify-center"
                    key={item.id}
                  >
                    {item.roomID}
                  </div>
                  <div className="text-center col-span-2 py-3 border-b border-main-gray flex flex-col justify-center">
                    <p className="px-7 py-1 mx-auto rounded-lg">
                      {item.roomName}
                    </p>
                  </div>
                  <div className="text-center col-span-2 py-3 flex border-b border-main-gray">
                    <p className="px-7 py-1  mx-auto rounded-lg flex gap-2 justify-between items-center">
                      {item.building}
                    </p>
                  </div>
                  <div className="text-center col-span-2 py-3 flex border-b border-main-gray">
                    <p className="px-7 py-1  mx-auto rounded-lg flex gap-2 justify-between items-center">
                      {item.createdDate}
                    </p>
                  </div>

                  <div className="col-span-3 px-2 py-4 flex justify-center items-center border-b border-r border-main-gray ">
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
      )}
    </>
  );
};

export default AdminEncodeRoom;
