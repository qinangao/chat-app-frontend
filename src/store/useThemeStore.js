import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chatter-theme") || "light",

  setTheme: (theme) => {
    localStorage.setItem("chatter-theme", theme);
    set({ theme });
  },
}));
