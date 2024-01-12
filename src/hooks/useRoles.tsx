/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "react-query";
import api from "../api/fetch";

// Functions
const fetchRoles = (page: any, search: any) => {
  return api.get(`/api/roles?perPage=6&page=${page}&search=${search}`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true /* Necessary for storing cookies */,
  });
};

const addRoles = (role: any) => {
  return api.post("/api/roles", role, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true /* Necessary for storing cookies */,
  });
};

const deleteRoles = (id: any) => {
  return api.delete(`/api/roles/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true /* Necessary for storing cookies */,
  });
};

const updateRoles = (role: any) => {
  return api.put(
    `/api/roles/${role.role_id}`,
    {
      role_name: role.role_name,
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
export const useRoles = (
  page: number,
  search: string,
  onSuccess: any,
  onError: any
) => {
  return useQuery(
    "roles",

    () => {
      return fetchRoles(page, search);
    },
    {
      onSuccess,
      onError,
      refetchInterval: 2000, //To update UI - underhanded method
    }
  );
};

export const useAddRoles = (onSuccess: any, onError: any) => {
  return useMutation(addRoles, {
    onSuccess,
    onError,
  });
};

export const useDeleteRoles = (onSuccess: any, onError: any) => {
  return useMutation(deleteRoles, {
    onSuccess,
    onError,
  });
};

export const useUpdateRoles = (onSuccess: any, onError: any) => {
  return useMutation(updateRoles, {
    onSuccess,
    onError,
  });
};
