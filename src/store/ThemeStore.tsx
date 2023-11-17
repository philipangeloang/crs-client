import { create } from "zustand";

interface UserRole {
  role: string;
  roleName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setRole: (role: any) => void;
}

interface roleNameDictionary {
  [key: string]: string;
}

const roleNameKey: roleNameDictionary = {
  'administrator': 'Administrator',
  'college': 'College',
  'faculty': 'Faculty',
  'student u': 'Undergraduate Student',
  'student g': 'Graduate Student',
  'cashier': 'Cashier',
}

const useRoleStore = create<UserRole>((set) => {
  // Try to get role from localStorage
  const storedRole = localStorage.getItem("userRole") || "administrator";

  const initialState: UserRole = {
    role: storedRole || "administrator",
    roleName: roleNameKey[storedRole] || roleNameKey['administrator'],
    setRole: (role: string) => {
      // Set the new role in the state
      set({ role });

      // Store the role in localStorage
      localStorage.setItem("userRole", role);
      localStorage.setItem("userRoleName", roleNameKey[role]);
    },
  };

  // Set initial state
  set(initialState);

  // Return the initial state
  return initialState;
});

// const useThemeStore = create(
//   persist(themeStore, {
//     name: "theme",
//   })
// );

export default useRoleStore;
