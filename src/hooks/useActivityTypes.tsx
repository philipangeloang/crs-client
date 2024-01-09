/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";
import api from "../api/fetch";

const fetchActivityTypes = () => {
  return api.get("/api/activity-types", {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true /* Necessary for storing cookies */,
  });
};

export const useActivityTypes = (onSuccess: any, onError: any) => {
  return useQuery("activity-types", fetchActivityTypes, {
    onSuccess,
    onError,
  });
};
