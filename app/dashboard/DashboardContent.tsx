"use client";
import Link from "next/link";
import NavBar from "@/components/dashboard/NavBar";
import { NewProjectModal } from "@/components/dashboard/NewProjectModal";
import { Button } from "@/components/ui/button";
import { DashboardContext } from "../context";
import Footer from "@/components/Footer";
import RecentActivity from "@/components/dashboard/RecentActivity";
import Stats from "@/components/dashboard/Stats";
import Projects from "@/components/dashboard/Projects";

export default function DashboardContent({ user }: { user: any }) {
  return (
    <DashboardContext value={user}>
      <div className="min-h-screen bg-[#1a1d21]">
        {/* Header */}
        <NavBar />

        {/* Main Content */}
        <main className="container px-4 py-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Welcome, {user?.email}
              </h1>
              <p className="text-gray-400">
                Manage and track your evaluation projects
              </p>
            </div>
            <NewProjectModal />
          </div>

          {/* Projects Grid */}
          <Projects />
          {/* Stats Grid */}
          <Stats />
          {/* Recent Activity */}
          <RecentActivity />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </DashboardContext>
  );
}
