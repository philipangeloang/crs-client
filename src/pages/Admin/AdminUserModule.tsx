import { RiEditCircleLine, RiDeleteBin2Line } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import DateTime from "@/components/DateTime";
import TempRoleSelector from "../TempRoleSelector";
import { Input } from "@/components/ui/input";
import { tableUserModule } from "./TestData";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";

const AdminUserModule = () => {
  // State for Opening and Closing Modal
  const [userInformationOpen, setUserInformationOpen] = useState(false);

  // State for Searching and Filtering
  const [search, setSearch] = useState("");
  const [userType, setUserType] = useState("");

  // State for Moving Along Pages
  const [schedActivities, setSchedActivities] = useState(tableUserModule);
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(7);

  // Logic to get the accurage number of pages
  const indexOfLastAct = currentPage * postPerPage;
  const indexOfFirstAct = indexOfLastAct - postPerPage;
  const currentAct =
    search === ""
      ? schedActivities.slice(indexOfFirstAct, indexOfLastAct)
      : schedActivities.filter((item) => {
          return search.toLowerCase() === " "
            ? item
            : item.name.toLowerCase().includes(search);
        });
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(schedActivities.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="h-screen w-full p-10 px-16 flex flex-col justify-between font-montserrat overflow-x-hidden">
      {/* Row 1 and Row 2 */}
      <div>
        {/* Row 1 */}
        <div className="flex justify-between items-center">
          <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
            User Module
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
                onChange={(e) => {
                  setSearch(e.target.value.toLowerCase());
                }}
                className="border border-main-gray  w-60"
                placeholder="Search"
              />
              <div className="border border-main-gray p-2 rounded-lg">
                <FiArrowRight />
              </div>
              <Select
                onValueChange={(e) => {
                  setUserType(e);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>User</SelectLabel>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="college">College</SelectItem>
                    <SelectItem value="faculty">Faculty</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="cashier">Cashier</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div
              onClick={() => {
                setUserInformationOpen(!userInformationOpen);
              }}
              className="cursor-pointer px-5 py-1 flex justify-center items-center bg-main-red text-white rounded-lg "
            >
              Add New
            </div>
          </div>

          <div className="grid grid-cols-12 mt-5 ">
            {/* Table Header */}
            <div className="font-bold bg-main-red rounded-tl-lg text-white p-3 col-span-1 text-center">
              Staff ID
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-1 text-center">
              User ID
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              User Type
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              Name
            </div>
            <div className="font-bold bg-main-red  text-white p-3 col-span-2 text-center">
              Email
            </div>
            <div className="font-bold bg-main-red  text-white p-3 col-span-2 text-center">
              Account Expiration
            </div>
            <div className="font-bold bg-main-red rounded-tr-lg text-white p-3 col-span-2 text-center">
              Action
            </div>

            {/* Table Contents */}
            {currentAct
              .filter((item) => {
                return search.toLowerCase() === " "
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .map((item) => (
                <>
                  <div
                    className="col-span-1 px-2 py-3 border-l border-b border-main-gray flex flex-col justify-center text-center"
                    key={item.id}
                  >
                    {item.staffID}
                  </div>
                  <div className="text-center col-span-1 py-3 border-b border-main-gray flex flex-col justify-center">
                    <p className="px-7 py-1 mx-auto rounded-lg">
                      {item.userID}
                    </p>
                  </div>
                  <div className="text-center col-span-2 py-3 flex border-b border-main-gray">
                    <p className="px-7 py-1  mx-auto rounded-lg flex gap-2 justify-between items-center">
                      {item.userType}
                    </p>
                  </div>
                  <div className="text-center col-span-2 py-3 flex border-b border-main-gray">
                    <p className="px-7 py-1  mx-auto rounded-lg flex gap-2 justify-between items-center">
                      {item.name}
                    </p>
                  </div>
                  <div className="text-center col-span-2 py-3 flex border-b border-main-gray">
                    <p className="px-7 py-1 mx-auto rounded-lg flex gap-2 justify-between items-center">
                      {item.email}
                    </p>
                  </div>

                  <div className="text-center col-span-2 px-2 py-3 flex border-b border-main-gray">
                    <p className="px-7 py-1 mx-auto rounded-lg flex gap-2 justify-between items-center">
                      {item.accountExpiration}
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

      {userInformationOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full py-4 max-w-lg">
            <div className="flex justify-between items-center p-4 px-14">
              <h2 className="text-xl text-main-red">User Information</h2>
              <button
                className="flex items-center justify-center text-gray-700 border border-gray-700 rounded-full h-6 w-6"
                onClick={() => {
                  setUserInformationOpen(!userInformationOpen);
                }}
              >
                <HiXMark />
              </button>
            </div>
            <hr className="w-full mb-3 " />

            <div className="px-14 grid grid-cols-12 gap-4 w-full mb-3">
              <div className="flex flex-col col-span-7">
                <Label className="font-normal mb-1">User ID</Label>
                <Input type="text" placeholder="ex. 20231" />
              </div>
              <div className="flex flex-col col-span-5">
                <Label className="font-normal mb-1">User Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="- Select -" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="college">College</SelectItem>
                      <SelectItem value="faculty">Faculty</SelectItem>
                      <SelectItem value="student-grad">Student Grad</SelectItem>
                      <SelectItem value="student-undergrad">
                        Student Undergrad
                      </SelectItem>
                      <SelectItem value="cashier">Cashier</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="px-14 grid grid-cols-12 gap-4 w-full mb-3">
              <div className="flex flex-col col-span-7">
                <Label className="font-normal mb-1">Name</Label>
                <Input type="text" placeholder="Juan Dela Cruz" />
              </div>
              <div className="flex flex-col col-span-5">
                <Label className="font-normal mb-1">Assigned College</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="- Select -" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="medicine">Medicine</SelectItem>
                      <SelectItem value="nursing">Nursing</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="law">Law</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="px-14 grid grid-cols-12 gap-4 w-full mb-3">
              <div className="flex flex-col col-span-7">
                <Label className="font-normal mb-1">Email</Label>
                <Input type="email" placeholder="jdlecaruz@plm.edu.ph" />
              </div>
              <div className="flex flex-col col-span-5">
                <Label className="font-normal mb-1">Unit</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="- Select -" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="medicine">Medicine</SelectItem>
                      <SelectItem value="nursing">Nursing</SelectItem>
                      <SelectItem value="science">Science</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="law">Law</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="px-14 grid grid-cols-12 gap-4 w-full mb-3">
              <div className="flex flex-col col-span-7">
                <Label className="font-normal mb-1">Password</Label>
                <Input type="password" placeholder="" />
              </div>
              <div className="flex flex-col col-span-5">
                <Label className="font-normal mb-1">Expiration Date</Label>
                <Input type="date" placeholder="dd/mm/yy" />
              </div>
            </div>

            <div className="px-14 grid grid-cols-12 gap-4 w-full mb-3">
              <div className="flex flex-col col-span-7">
                <Label className="font-normal mb-1">Confirm Password</Label>
                <Input type="password" placeholder="" />
              </div>
              <div className="flex flex-col justify-end mb-2 col-span-5">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" className="rounded-full" />
                  <Label
                    htmlFor="terms"
                    className="text-xs text-main-red font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Send Login Credentials
                  </Label>
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

export default AdminUserModule;
