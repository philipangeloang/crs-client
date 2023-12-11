import { create } from "zustand";
import axios from "axios";

interface UserRole {
  name: string;
  roleName: string;
  setRole: (role: string) => void;
}

interface roleNameDictionary {
  [key: string]: string;
}

interface UserInfo {
  roles: UserRole[];
}

const roleNameKey: roleNameDictionary = {
  'NONE': 'None',
  'MULTIPLE': 'Multiple',
  'ADMIN': 'Administrator',
  'COLLEGE': 'College',
  'FACULTY': 'Faculty',
  'STUDENT_UNDERGRADUATE': 'Undergraduate Student',
  'STUDENT_GRADUATE': 'Graduate Student',
  'CASHIER': 'Cashier',
}

async function getUserData(): Promise<UserInfo> {
  const apiUrl = 'https://13.229.75.4/api/me';
  try {
    const response = await axios.get(apiUrl, {
      headers: {
          'Content-Type': 'application/json',
      },
      withCredentials: true /* Necessary for storing cookies */
    });
    return response.data as UserInfo;
  } catch (error) {
    console.error('API request error:', error);
  }
}

const useRoleStore = create<UserRole>((set) => {
  // Try to get role from localStorage
  let storedRole = localStorage.getItem("userRole") || "NONE";

  if (storedRole === undefined) {
    try {
      getUserData().then((data) => {
        if (data.roles.length === 1) {
          storedRole = data.roles[0]['name'];
          localStorage.setItem("userRole", data.roles[0]['name']);
        } else {
          storedRole = "MULTIPLE";
          localStorage.setItem("userRole", "MULTIPLE");
        }
        if (location.pathname === "/") window.location.assign("/home");
      }).catch((error) => {
        console.error(error);
      });
    } catch (error) {
      console.error('Error loading user roles:', error);
    }
  }

  const initialState: UserRole = {
    name: storedRole || 'NONE',
    roleName: roleNameKey[storedRole] || roleNameKey['NONE'],
    setRole: (name: string) => {
      set({ name });

      // Store the role in localStorage
      localStorage.setItem("userRole", name);
      localStorage.setItem("userRoleName", roleNameKey[name]);
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
