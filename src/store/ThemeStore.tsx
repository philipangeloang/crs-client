/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

interface UserRole {
  role: string;
  availRoles: any;
  accessToken: string;
  setAvailRoles: (availRoles: any) => void;
  setRole: (role: any) => void;
  setAccessToken: (accessToken: any) => void;
}

const useRoleStore = create<UserRole>()((set) => ({
  role: "",
  availRoles: [],
  accessToken: "",
  setAvailRoles: (availRoles: any) => set({ availRoles }),
  setRole: (role: any) => set({ role }),
  setAccessToken: (accessToken: any) => set({ accessToken }),
}));

// const useThemeStore = create(
//   persist(themeStore, {
//     name: "theme",
//   })
// );

export default useRoleStore;
