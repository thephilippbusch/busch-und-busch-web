import { atom } from "recoil";

// Sidebar Status (open [=true] or closed [=false])
export const sidebarState = atom({
  key: "sidebarState",
  default: false,
});

export const themeState = atom({
  key: "themeState",
  default: "light",
});
