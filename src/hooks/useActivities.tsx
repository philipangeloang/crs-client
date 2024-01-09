/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "react-query";
import api from "../api/fetch";

// Functions
const fetchActivities = (page: any, search: any) => {
  return api.get(`/api/activities?perPage=5&page=${page}&search=${search}`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true /* Necessary for storing cookies */,
  });
};

const addActivities = (activity: any) => {
  return api.post("/api/activities", activity, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true /* Necessary for storing cookies */,
  });
};

const deleteActivities = (id: any) => {
  return api.delete(`/api/activities/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true /* Necessary for storing cookies */,
  });
};

const updateActivities = (activity: any) => {
  return api.put(
    `/api/activities/${activity.activity_id}`,
    {
      activity_type_id: activity.activity_type_id,
      academic_year: activity.academic_year,
      term: activity.term,
      start_date: activity.start_date,
      end_date: activity.end_date,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true /* Necessary for storing cookies */,
    }
  );
};

// Exports
export const useActivities = (
  page: number,
  search: string,
  onSuccess: any,
  onError: any
) => {
  return useQuery(
    "activities",

    () => {
      return fetchActivities(page, search);
    },
    {
      onSuccess,
      onError,
      refetchInterval: 2000, //To update UI - underhanded method
    }
  );
};

export const useAddActivities = (onSuccess: any, onError: any) => {
  return useMutation(addActivities, {
    onSuccess,
    onError,
  });
};

export const useDeleteActivities = (onSuccess: any, onError: any) => {
  return useMutation(deleteActivities, {
    onSuccess,
    onError,
  });
};

export const useUpdateActivities = (onSuccess: any, onError: any) => {
  return useMutation(updateActivities, {
    onSuccess,
    onError,
  });
};
