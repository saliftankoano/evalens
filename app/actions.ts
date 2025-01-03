"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function handleAuth(formData: FormData) {
  // Here you would typically:
  // 1. Validate the form data
  // 2. Authenticate with your backend
  // 3. Set session/cookies

  // Now redirecting to the new dashboard
  redirect("/dashboard");
}

export async function login(formData: FormData) {
  const supabase = await createClient();

  // Add validation later
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/dashboard");
}

export async function signUp(formData: FormData) {
  const supabase = await createClient();
  console.log("signing up...");
  const { data, error } = await supabase.auth.signUp({
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      emailRedirectTo: "http://localhost:3000/dashboard",
    },
  });
  console.log("signing up... done");
  if (error) {
    console.log("error signing up: ", error);
    redirect("/error");
  }
  revalidatePath("/", "layout");
  redirect("/confirm");
}

export async function signIn(formData: FormData) {
  const supabase = await createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  await supabase.auth.signInWithPassword(data);
  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
