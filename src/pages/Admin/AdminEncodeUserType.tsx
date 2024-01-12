import DateTime from "@/components/DateTime";
import TempRoleSelector from "../TempRoleSelector";

import { RiEditCircleLine, RiDeleteBin2Line } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";

import { Input } from "@/components/ui/input";
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

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { useState } from "react";

import {
  useAddRoles,
  useDeleteRoles,
  useRoles,
  useUpdateRoles,
} from "@/hooks/useRoles";

// Form Schema
const formSchema = z.object({
  roleName: z.string().min(1, {
    message: "Please Enter Role Name",
  }),
});

const AdminEncodeUserType = () => {
  const [userTypeModalOpen, setUserTypeModalOpen] = useState(false);
  const [updateUserTypeModelOpen, setUpdateUserTypeModelOpen] = useState(false);
  const [roleID, setRoleID] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [startSearch, setStartSearch] = useState("");

  // Form Hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roleName: "",
    },
  });

  // Search on Enter
  function StartSearch() {
    setStartSearch(search);
  }

  // React-Query Values
  const onSuccess = (data: any) => {
    console.log("Success ", data);
  };

  const onError = (error: any) => {
    console.log("Error ", error);
  };

  const {
    data: roles,
    //refetch
  } = useRoles(page, startSearch, onSuccess, onError);

  const { mutate: addRoles, isError: addRolesSuccess } = useAddRoles(
    onSuccess,
    onError
  );

  const { mutate: deleteRoles, isError: deleteRolesSuccess } = useDeleteRoles(
    onSuccess,
    onError
  );

  const { mutate: updateRoles, isError: updateRolesSuccess } = useUpdateRoles(
    onSuccess,
    onError
  );

  // Dynamic Pages
  const pages = [];
  for (let i = 0; i < roles?.data.last_page; i++) {
    pages.push(i + 1);
  }
  // if page num exceeds total allowable page - no more increasing of page may happen

  if (pages.length < page) {
    setPage(pages.length);
  }

  // POST
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const role = {
      role_name: values.roleName,
    };

    addRoles(role);

    if (!addRolesSuccess) {
      form.reset();
      setUserTypeModalOpen(!userTypeModalOpen);
      toast.success("Successfully Added");
    } else {
      toast.error("Failed Adding Activity");
    }
  };

  // UPDATE
  const handleUpdate = async (values: z.infer<typeof formSchema>) => {
    const role = {
      role_id: roleID,
      role_name: values.roleName,
    };

    updateRoles(role);
    if (!updateRolesSuccess) {
      form.reset();
      setUpdateUserTypeModelOpen(!updateUserTypeModelOpen);
      toast.success("Successfully Updated");
    } else {
      toast.error("Failed Updating Activity");
    }
  };

  // DELETE
  const handleDelete = async (role_id: string) => {
    deleteRoles(role_id);

    if (!deleteRolesSuccess) {
      toast.success("Successfully Deleted");
    } else {
      toast.error("Failed Deleting Activity");
    }
  };

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
                  setSearch(e.target.value);
                }}
              />
              <div className="border border-main-gray p-2 rounded-lg">
                <FiArrowRight
                  className="cursor-pointer"
                  onClick={() => {
                    StartSearch();
                  }}
                />
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
            {roles?.data.data.map((item) => (
              <>
                <div
                  className="col-span-4 px-2 py-3 border-l border-b border-main-gray text-center pr-32 flex flex-col justify-center"
                  key={item.role_id}
                >
                  {item.role_id}
                </div>
                <div className="text-center col-span-4 px-2 py-3 border-b border-main-gray flex flex-col justify-center">
                  <p className=" w-36 mx-auto rounded-lg">
                    {item.role_name
                      .split("_")
                      .filter((x: string) => x.length > 0)
                      .map(
                        (x: string) => x.charAt(0).toUpperCase() + x.slice(1)
                      )
                      .join(" ")}
                  </p>
                </div>

                <div className="col-span-4 px-2 py-4 flex justify-center items-center border-b border-r border-main-gray ">
                  <div className="flex gap-2">
                    <div className="bg-main-blue text-white rounded-lg h-10 w-10 flex justify-center items-center mx-auto">
                      <RiEditCircleLine
                        size="30"
                        className="cursor-pointer"
                        onClick={() => {
                          setUpdateUserTypeModelOpen(!updateUserTypeModelOpen);
                          setRoleID(item.role_id);
                        }}
                      />
                    </div>
                    <div className="bg-main-red text-white rounded-lg h-10 w-10 flex justify-center items-center mx-auto">
                      <RiDeleteBin2Line
                        className="cursor-pointer"
                        size="30"
                        onClick={() => {
                          handleDelete(item.role_id);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <Toaster />
              </>
            ))}
          </div>
        </div>
      </div>

      {/*Row 3 Pagination (right-aligned and smaller) */}
      <div className="mt-20 text-sm">
        <div className="flex justify-between items-center space-x-2">
          <ul className="flex space-x-2 justify-center items-center">
            <li className="border border-main-gray p-1 rounded-lg cursor-pointer">
              <FiArrowLeft
                onClick={() => {
                  if (page === 1) {
                    setPage(1);
                  } else {
                    setPage(page - 1);
                  }
                }}
                size="20"
              />
            </li>
            {pages.map((item) => (
              <li
                className={
                  item === page
                    ? "border border-main-gray p-1 rounded-lg w-8 flex justify-center cursor-pointer bg-main-red text-white"
                    : "border border-main-gray p-1 rounded-lg w-8 flex justify-center cursor-pointer"
                }
              >
                <a
                  onClick={() => {
                    setPage(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}

            <li className="border border-main-gray p-1 rounded-lg cursor-pointer">
              <FiArrowRight
                onClick={() => {
                  if (page === roles?.data.last_page) {
                    setPage(roles?.data.last_page);
                  } else {
                    setPage(page + 1);
                  }
                }}
                size="20"
              />
            </li>
            <li>
              <p>
                {pages[0]} out of {roles?.data.last_page}
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

            <Form {...form}>
              <form
                className="px-14"
                onSubmit={form.handleSubmit(handleSubmit)}
              >
                <div className="mb-3">
                  <FormField
                    control={form.control}
                    name="roleName"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Role Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="ADMINISTRATOR"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  ></FormField>
                </div>
                <div className="mt-8 text-center ">
                  <Button
                    type="submit"
                    className="bg-main-red hover:bg-red-600"
                  >
                    Save
                  </Button>
                  <Toaster />
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}

      {updateUserTypeModelOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full py-4 max-w-lg">
            <div className="flex justify-between items-center p-4 px-14">
              <h2 className="text-xl text-main-red">User Type Information</h2>
              <button
                className="flex items-center justify-center text-gray-700 border border-gray-700 rounded-full h-6 w-6"
                onClick={() => {
                  setUpdateUserTypeModelOpen(!updateUserTypeModelOpen);
                }}
              >
                <HiXMark />
              </button>
            </div>
            <hr className="w-full mb-3 " />

            <Form {...form}>
              <form
                className="px-14"
                onSubmit={form.handleSubmit(handleUpdate)}
              >
                <div className="mb-3">
                  <FormField
                    control={form.control}
                    name="roleName"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Role Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="ADMINISTRATOR"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  ></FormField>
                </div>
                <div className="mt-8 text-center ">
                  <Button
                    type="submit"
                    className="bg-main-red hover:bg-red-600"
                  >
                    Save
                  </Button>
                  <Toaster />
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminEncodeUserType;
