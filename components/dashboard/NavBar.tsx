import { Brain, Bell, Settings } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import ProfileDropdown from "./ProfileDropdown";

export default function NavBar() {
  return (
    <header className="border-b border-gray-800 bg-[#22262b]">
      <div className="container flex items-center justify-between h-14 px-4">
        <div className="flex items-center gap-2">
          <Brain className="w-8 h-8 text-purple-500" />
          <span className="text-white text-xl font-semibold">Evalens</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Settings className="w-5 h-5" />
          </Button>
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}
