import { create } from "zustand";

interface UserRole {
  role: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRole: (role: any) => void;
}

const useRoleStore = create<UserRole>()((set) => ({
  role: "administrator",
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRole: (role: any) => set({ role }),
}));

// const useThemeStore = create(
//   persist(themeStore, {
//     name: "theme",
//   })
// );

export default useRoleStore;
