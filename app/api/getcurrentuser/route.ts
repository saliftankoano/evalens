import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createServerComponentClient({ cookies });

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();
    if (error) throw error;
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching user" }, { status: 401 });
  }
}
