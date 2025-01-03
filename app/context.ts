"use client";
import { User } from "@supabase/supabase-js";
import { createContext, useContext } from "react";

export const DashboardContext = createContext<User | null>(null);

export function useDashboardContext() {
  const user = useContext(DashboardContext);

  if (user == null) {
    throw new Error("Error! Dashboard provider must be used");
  }
  return user;
}
