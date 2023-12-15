import { create } from "zustand";

interface UserRole {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  role: string;
  accessToken: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  availRoles: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAvailRoles: (availRoles: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRole: (role: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAccessToken: (accessToken: any) => void;
}

const useRoleStore = create<UserRole>()((set) => ({
  accessToken: "",
  role: "",
  availRoles: [],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAvailRoles: (availRoles: any) => set({ availRoles }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRole: (role: any) => set({ role }),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setAccessToken: (accessToken: any) => set({ accessToken }),
}));

// const useThemeStore = create(
//   persist(themeStore, {
//     name: "theme",
//   })
// );

export default useRoleStore;
