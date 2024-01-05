/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";
import { RiEditCircleLine, RiDeleteBin2Line } from "react-icons/ri";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { HiXMark } from "react-icons/hi2";
import DateTime from "@/components/DateTime";
import TempRoleSelector from "../TempRoleSelector";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import toast, { Toaster } from "react-hot-toast";
import api from "../../api/fetch";
import moment from "moment";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  activity: z.string().min(1, {
    message: "Please Choose Activity",
  }),
  academicYear: z.string().min(1, {
    message: "Please Enter Academic Year",
  }),
  term: z.string().min(1, {
    message: "Please Enter Term",
  }),
  startDate: z.string().min(1, {
    message: "Please Enter Date",
  }),
  startTime: z.string().min(1, {
    message: "Please Enter Time",
  }),
  endDate: z.string().min(1, {
    message: "Please Enter Date",
  }),
  endTime: z.string().min(1, {
    message: "Please Enter Time",
  }),
});

function ActivityName({ activityTypes, activity }) {
  // Finding the Name equivalent to the ID and rendering it based on the matched value
  const name = activityTypes.find(
    (item: { activity_type_id: any }) =>
      item.activity_type_id === activity.activity_type_id
  );
  return name.activity_type_name;
}

const AdminScheduleOfActivities = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      activity: "",
      academicYear: "",
      term: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
    },
  });

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response1 = await api.get("/api/activity-types", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true /* Necessary for storing cookies */,
        });

        const response2 = await api.get("/api/activities", {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true /* Necessary for storing cookies */,
        });

        const data1 = await response1.data.data;
        const data2 = await response2.data;

        if (data1) {
          setActivityTypes(data1);
        }

        if (data2) {
          setActivities(data2.data);
        }

        console.log("API response:", data1);
        return data1;
      } catch (error) {
        console.error("API request error:", error);
      }
    };

    fetchActivities();
  }, []);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const responsePost = await api.post(
        "/api/activities",
        {
          activity_type_id: values.activity,
          academic_year: values.academicYear,
          term: values.term,
          start_date: values.startDate + " " + values.startTime + ":00",
          end_date: values.endDate + " " + values.endTime + ":00",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true /* Necessary for storing cookies */,
        }
      );

      const dataPost = await responsePost.data;
      console.log("API response:", dataPost);

      if (dataPost) {
        toast.success("Successfully Created!");
      } else {
        toast.error("Error Creating Instance");
      }
      return dataPost;
    } catch (error) {
      console.error("API request error:", error);
    }
  };

  const [activityModalOpen, setActivityModalOpen] = useState(false);
  const [activityTypes, setActivityTypes] = useState<any[]>([]);
  const [activities, setActivities] = useState<any[]>([]);

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
            <div className="font-bold bg-main-red rounded-tl-lg text-white p-3 col-span-2 text-center">
              Activity Type Name
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              Academic Year
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              Term
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              Schedule Start
            </div>
            <div className="font-bold bg-main-red text-white p-3 col-span-2 text-center">
              Schedule End
            </div>
            <div className="font-bold bg-main-red rounded-tr-lg text-white p-3 col-span-2 text-center">
              Action
            </div>

            {/* Table Contents */}
            {activities.map((item) => (
              <>
                <div
                  className="col-span-2 px-2 py-3 border-l border-b border-main-gray text-center"
                  key={item.activity_id}
                >
                  <ActivityName activityTypes={activityTypes} activity={item} />
                </div>
                <div className="text-center col-span-2 px-2 py-3 border-b border-main-gray">
                  <p className="px-4 py-1 border border-main-gray w-24 mx-auto rounded-lg">
                    {item.academic_year}
                  </p>
                </div>
                <div className="text-center col-span-2 px-2 py-3 border-b border-main-gray">
                  <p className="px-4 py-1 border border-main-gray w-24 mx-auto rounded-lg">
                    {item.term}
                  </p>
                </div>
                <div className="text-center col-span-2 px-2 py-3 flex flex-col border-b border-main-gray">
                  <p className="px-7 py-1 border border-main-gray w-48 mx-auto rounded-lg flex gap-2 justify-between items-center">
                    {item.start_date.split(" ")[0]}

                    <span>
                      <AiOutlineCalendar size="20" />
                    </span>
                  </p>
                  <p className="px-7 py-1 border border-main-gray w-48 mx-auto rounded-lg flex gap-2 justify-between items-center mt-3">
                    {moment(item.start_date.split(" ")[1], "HH:mm:ss").format(
                      "h:mm:ss A"
                    )}
                    <span>
                      <AiOutlineClockCircle size="20" />
                    </span>
                  </p>
                </div>
                <div className="text-center col-span-2 px-2 py-3 flex flex-col border-b border-main-gray">
                  <p className="px-7 py-1 border border-main-gray w-48 mx-auto rounded-lg flex gap-2 justify-between items-center">
                    {item.end_date.split(" ")[0]}
                    <span>
                      <AiOutlineCalendar size="20" />
                    </span>
                  </p>
                  <p className="px-7 py-1 border border-main-gray w-48 mx-auto rounded-lg flex gap-2 justify-between items-center mt-3">
                    {moment(item.end_date.split(" ")[1], "HH:mm:ss").format(
                      "h:mm:ss A"
                    )}
                    <span>
                      <AiOutlineClockCircle size="20" />
                    </span>
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
            <li className="border border-main-gray p-1 rounded-lg cursor-pointer">
              <FiArrowLeft size="20" />
            </li>
            <li className="border border-main-gray p-1 rounded-lg w-8 flex justify-center cursor-pointer">
              <a>1</a>
            </li>

            <li className="border border-main-gray p-1 rounded-lg cursor-pointer">
              <FiArrowRight size="20" />
            </li>
            <li>
              <p>
                {1} out of {2}
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

            <Form {...form}>
              <form
                className="px-14"
                onSubmit={form.handleSubmit(handleSubmit)}
              >
                <div className="mb-3">
                  <FormField
                    control={form.control}
                    name="activity"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormLabel>Activity Name</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Activity Name" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Name</SelectLabel>
                                {activityTypes.map((data) => (
                                  <SelectItem
                                    key={data.activity_type_id}
                                    value={data.activity_type_id.toString()}
                                  >
                                    {data.activity_type_name}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  ></FormField>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full mb-3">
                  <div className="col-span-6">
                    <FormField
                      control={form.control}
                      name="academicYear"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Academic Year</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="ex. 2023"
                                type="number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    ></FormField>
                  </div>

                  <div className="col-span-6">
                    <FormField
                      control={form.control}
                      name="term"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Term</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="ex. 1"
                                type="number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    ></FormField>
                  </div>
                </div>

                <div className="grid grid-cols-12 gap-4 w-full">
                  <div className="col-span-6 flex flex-col gap-2">
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>Start Date</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="yy/mm/dd"
                                type="date"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    ></FormField>

                    <FormField
                      control={form.control}
                      name="startTime"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input type="time" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    ></FormField>
                  </div>

                  <div className="col-span-6 flex flex-col gap-2">
                    <FormField
                      control={form.control}
                      name="endDate"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormLabel>End Date</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="yy/mm/dd"
                                type="date"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    ></FormField>

                    <FormField
                      control={form.control}
                      name="endTime"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FormControl>
                              <Input type="time" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    ></FormField>
                  </div>
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

export default AdminScheduleOfActivities;
