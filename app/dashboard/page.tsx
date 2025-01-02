"use server";
import DashboardContent from "./DashboardContent";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  // This is now server-side and secure
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return <DashboardContent user={user} />;
}
