import { Brain, Bell, Settings } from "lucide-react";
import React, { Component } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
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
          <Image
            src="/placeholder.svg"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}
