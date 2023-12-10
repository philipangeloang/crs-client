import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { RiEditCircleLine, RiDeleteBin2Line } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import DateTime from "@/components/DateTime";
import TempRoleSelector from "../TempRoleSelector";
import { Input } from "@/components/ui/input";
import { tableSchedActivities } from "./TestData";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const AdminScheduleOfActivities = () => {
  // State for Opening and Closing Modal
  const [activityModalOpen, setActivityModalOpen] = useState(false);

  // State for Searching and Filtering
  const [search, setSearch] = useState("");

  // State for Moving Along Pages
  const [schedActivities, setSchedActivities] = useState(tableSchedActivities);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(5);

  // Logic to get the accurage number of pages
  const indexOfLastAct = currentPage * postPerPage;
  const indexOfFirstAct = indexOfLastAct - postPerPage;
  const currentAct =
    search === ""
      ? schedActivities.slice(indexOfFirstAct, indexOfLastAct)
      : schedActivities.filter((item) => {
          return search.toLowerCase() === " "
            ? item
            : item.activity.toLowerCase().includes(search);
        });
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(schedActivities.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="h-screen w-full p-10 px-16 flex flex-col justify-between font-montserrat overflow-x-hidden">
      {/* Row 1 and 2 */}
      <div>
        {/* Row 1 */}
        <div className="flex justify-between items-center">
          <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
            Schedule of Activities
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
                onChange={(e) => {
                  setSearch(e.target.value.toLowerCase());
                }}
              />
              <div className="border border-main-gray p-2 rounded-lg">
                <FiArrowRight />
              </div>
            </div>
            <div
              onClick={() => {
                setActivityModalOpen(!activityModalOpen);
              }}
              className="cursor-pointer px-5 py-1 flex justify-center items-center bg-main-red text-white rounded-lg "
            >
              Add New
            </div>
          </div>

          <div className="grid grid-cols-12 mt-5 ">
            {/* Table Header */}
            <div className="font-bold bg-main-red rounded-tl-lg text-white p-3 col-span-2">
              Activity
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-3 text-center">
              AY Sem
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              Schedule Start
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              Schedule End
            </div>
            <div className="font-bold bg-main-red rounded-tr-lg text-white p-3 col-span-3 text-center">
              Action
            </div>

            {/* Table Contents */}
            {currentAct
              .filter((item) => {
                return search.toLowerCase() === " "
                  ? item
                  : item.activity.toLowerCase().includes(search);
              })
              .map((item) => (
                <>
                  <div
                    className="col-span-2 px-2 py-3 border-l border-b border-main-gray"
                    key={item.id}
                  >
                    {item.activity}
                  </div>
                  <div className="text-center col-span-3 px-2 py-3 border-b border-main-gray">
                    <p className="px-7 py-1 border border-main-gray w-36 mx-auto rounded-lg">
                      {item.semester}
                    </p>
                  </div>
                  <div className="text-center col-span-2 px-2 py-3 flex flex-col border-b border-main-gray">
                    <p className="px-7 py-1 border border-main-gray w-44 mx-auto rounded-lg flex gap-2 justify-between items-center">
                      {item.startDate}
                      <span>
                        <AiOutlineCalendar size="20" />
                      </span>
                    </p>
                    <p className="px-7 py-1 border border-main-gray w-44 mx-auto rounded-lg flex gap-2 justify-between items-center mt-3">
                      {item.startTime}
                      <span>
                        <AiOutlineClockCircle size="20" />
                      </span>
                    </p>
                  </div>
                  <div className="text-center col-span-2 px-2 py-3 flex flex-col border-b border-main-gray">
                    <p className="px-7 py-1 border border-main-gray w-44 mx-auto rounded-lg flex gap-2 justify-between items-center">
                      {item.endDate}
                      <span>
                        <AiOutlineCalendar size="20" />
                      </span>
                    </p>
                    <p className="px-7 py-1 border border-main-gray w-44 mx-auto rounded-lg flex gap-2 justify-between items-center mt-3">
                      {item.endTime}
                      <span>
                        <AiOutlineClockCircle size="20" />
                      </span>
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

      {activityModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full py-4 max-w-lg">
            <div className="flex justify-between items-center p-4 px-14">
              <h2 className="text-xl text-main-red">Activity Information</h2>
              <button
                className="flex items-center justify-center text-gray-700 border border-gray-700 rounded-full h-6 w-6"
                onClick={() => {
                  setActivityModalOpen(!activityModalOpen);
                }}
              >
                <HiXMark />
              </button>
            </div>
            <hr className="w-full mb-3 " />

            <div className="px-14">
              <div className="mb-3">
                <Label className="font-normal mb-1">Name of Activity</Label>
                <Input placeholder="Name" />
              </div>

              <div className="mb-4">
                <Label className="font-normal mb-1">
                  Academic Year and Semester
                </Label>
                <Input placeholder="ex. 20231" />
              </div>

              <div className="grid grid-cols-12 gap-4 w-full">
                <div className="flex flex-col col-span-6">
                  <Label className="font-normal mb-1">Schedule Start</Label>
                  <Input type="date" placeholder="dd/mm/yy" className="mb-3" />
                  <Input type="time" />
                </div>
                <div className="flex flex-col col-span-6">
                  <Label className="font-normal mb-1">Schedule End</Label>
                  <Input type="date" placeholder="dd/mm/yy" className="mb-3" />
                  <Input type="time" />
                </div>
              </div>
            </div>
            <div className="mt-8 text-center ">
              <Button className="bg-main-red hover:bg-red-600"> Save </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminScheduleOfActivities;
