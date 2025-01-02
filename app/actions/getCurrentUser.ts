"use server";
import { User } from "@supabase/supabase-js";

export default async function getCurrentUser(): Promise<User | null> {
  const response = await fetch("http://localhost:3000/api/getcurrentuser");
  console.log(response);
  const data = await response.json();
  return data?.user || null;
}
