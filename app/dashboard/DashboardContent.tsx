"use client";
import Link from "next/link";
import NavBar from "@/components/dashboard/NavBar";
import { NewProjectModal } from "@/components/dashboard/NewProjectModal";
import { Button } from "@/components/ui/button";
import { MoreVertical, Timer, Brain, BarChart2 } from "lucide-react";
import { DashboardContext } from "../context";
import Footer from "@/components/Footer";
import RecentActivity from "@/components/dashboard/RecentActivity";
import Stats from "@/components/dashboard/Stats";

const projects = [
  {
    id: "1",
    name: "Website Copy Evaluation",
    lastUpdated: "2 hours ago",
    modelsSelected: 3,
    prompts: 24,
    team: ["/brain.png", "/brain.png", "/brain.png"],
  },
  {
    id: "2",
    name: "Product Description AI",
    lastUpdated: "5 days ago",
    modelsSelected: 2,
    prompts: 18,
    team: ["/brain.png", "/brain.png"],
  },
  {
    id: "3",
    name: "Customer Support Bot",
    lastUpdated: "1 week ago",
    modelsSelected: 4,
    prompts: 32,
    team: ["/brain.png", "/brain.png", "/brain.png"],
  },
];

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects ? (
              projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#22262b] rounded-lg p-4 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-lg font-medium text-white hover:text-purple-500"
                    >
                      {project.name}
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-400"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <Timer className="w-4 h-4 mr-2" />
                      Last updated {project.lastUpdated}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        {project.modelsSelected} Models Selected
                      </div>
                      <div className="flex items-center">
                        <BarChart2 className="w-4 h-4 mr-2" />
                        {project.prompts} Prompts
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <Link
                      href={`/projects/${project.id}`}
                      className="text-sm text-purple-500 hover:text-purple-400"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center text-2xl">
                No projects created yet.
              </div>
            )}
          </div>

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
