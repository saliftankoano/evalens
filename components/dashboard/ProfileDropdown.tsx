import { LogOut, User } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { DashboardContext } from "@/app/context";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";

export default function ProfileDropdown() {
  const router = useRouter();
  const user = useContext(DashboardContext);
  const handleProfileClick = () => {
    router.push("/profile");
  };

  const logOut = async () => {
    const supabase = createClient();
    let { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(`Log out Error! Check this message: ${error}`);
    }
    // console.log(`User log out successful!`);
    router.push("/auth");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="hover:cursor-pointer h-8 w-8">
          {/* <AvatarImage src={user.picture || "/dawg.png"} /> */}
          <AvatarFallback>{user?.email?.slice(0, 1) || "G"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <button
              onClick={handleProfileClick}
              className="w-full flex items-center gap-2"
            >
              <User />
              <span>Profile</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuItem asChild>
          <div className="w-full flex items-center gap-2" onClick={logOut}>
            <LogOut />
            <span>Log out</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
