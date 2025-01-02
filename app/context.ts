"use client";
import { User } from "@supabase/supabase-js";
import { createContext } from "react";

export const DashboardContext = createContext<User | null>(null);
