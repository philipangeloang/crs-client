import DateTime from "@/components/DateTime";
import TempRoleSelector from "../TempRoleSelector";

import { RiEditCircleLine, RiDeleteBin2Line } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import toast, { Toaster } from "react-hot-toast";
import moment from "moment";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useState } from "react";

import { tableUserType } from "./TestData";

// Form Schema
const formSchema = z.object({
  roleID: z.string().min(1, {
    message: "Please Enter Role ID",
  }),
  roleName: z.string().min(1, {
    message: "Please Enter Role Name",
  }),
});

const AdminEncodeUserType = () => {
  const [userTypeModalOpen, setUserTypeModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Form Hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roleID: "",
      roleName: "",
    },
  });

  return (
    <div className="h-screen w-full p-10 px-16 flex flex-col justify-between font-montserrat overflow-x-hidden">
      {/* Row 1 and Row 2 */}
      <div>
        {/* Row 1 */}
        <div className="flex justify-between items-center">
          <div className="px-5 py-1 bg-main-red text-white rounded-lg ">
            Encode User Type
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
                setUserTypeModalOpen(!userTypeModalOpen);
              }}
              className="cursor-pointer px-5 py-1 flex justify-center items-center bg-main-red text-white rounded-lg "
            >
              Add New
            </div>
          </div>

          <div className="grid grid-cols-12 mt-5 ">
            {/* Table Header */}
            <div className="font-bold bg-main-red rounded-tl-lg text-white p-3 col-span-4 text-center pr-32">
              Role ID
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-4 text-center">
              Role Name
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-4 text-center">
              Action
            </div>

            {/* Table Contents */}
            {currentAct
              .filter((item) => {
                return search.toLowerCase() === "" ? item : item.roleId;
              })
              .map((item) => (
                <>
                  <div
                    className="col-span-4 px-2 py-3 border-l border-b border-main-gray text-center pr-32 flex flex-col justify-center"
                    key={item.id}
                  >
                    {item.roleId}
                  </div>
                  <div className="text-center col-span-4 px-2 py-3 border-b border-main-gray flex flex-col justify-center">
                    <p className=" w-36 mx-auto rounded-lg">{item.roleName}</p>
                  </div>

                  <div className="col-span-4 px-2 py-4 flex justify-center items-center border-b border-r border-main-gray ">
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

      {userTypeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full py-4 max-w-lg">
            <div className="flex justify-between items-center p-4 px-14">
              <h2 className="text-xl text-main-red">User Type Information</h2>
              <button
                className="flex items-center justify-center text-gray-700 border border-gray-700 rounded-full h-6 w-6"
                onClick={() => {
                  setUserTypeModalOpen(!userTypeModalOpen);
                }}
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
              <Button className="bg-main-red hover:bg-red-600"> Save </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEncodeUserType;
