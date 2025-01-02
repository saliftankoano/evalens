"use client";
import Link from "next/link";
import NavBar from "@/components/dashboard/NavBar";
import { NewProjectModal } from "@/components/dashboard/NewProjectModal";
import { Button } from "@/components/ui/button";
import {
  MoreVertical,
  Timer,
  Brain,
  BarChart2,
  Plus,
  Users,
  Bot,
} from "lucide-react";
import { DashboardContext } from "../context";
import Footer from "@/components/Footer";

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

const stats = [
  {
    icon: BarChart2,
    label: "This Month",
    value: "246",
    subLabel: "Total Evaluations",
    change: { value: "12.5%", type: "increase", period: "vs last month" },
  },
  {
    icon: Bot,
    label: "Active",
    value: "8",
    subLabel: "AI Models",
    change: { value: "2", type: "new", period: "this week" },
  },
  {
    icon: Users,
    label: "Total",
    value: "12",
    subLabel: "Team Members",
    change: { value: "3", type: "new", period: "this month" },
  },
  {
    icon: Timer,
    label: "Average",
    value: "1.8h",
    subLabel: "Response Time",
    change: { value: "30min", type: "improvement", period: "improvement" },
  },
];

const activities = [
  {
    type: "model",
    action: "New model added to",
    project: "Website Copy Evaluation",
    time: "2 hours ago",
    user: "Alex Morgan",
  },
  {
    type: "evaluation",
    action: "Evaluation completed for",
    project: "Product Description AI",
    time: "5 hours ago",
    user: "Sarah Chen",
  },
  {
    type: "member",
    action: "New team member added to",
    project: "Customer Support Bot",
    time: "1 day ago",
    user: "John Smith",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#22262b] rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-[#2b3035]">
                    <stat.icon className="w-5 h-5 text-purple-500" />
                  </div>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.subLabel}</div>
                  <div
                    className={`text-sm ${
                      stat.change.type === "increase"
                        ? "text-green-500"
                        : stat.change.type === "improvement"
                          ? "text-green-500"
                          : "text-purple-500"
                    }`}
                  >
                    {stat.change.type === "new"
                      ? `+ ${stat.change.value} new`
                      : stat.change.type === "increase"
                        ? `↑ ${stat.change.value}`
                        : `↓ ${stat.change.value}`}{" "}
                    {stat.change.period}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">Recent Activity</h2>
              <Button
                variant="link"
                className="text-purple-500 hover:text-purple-400"
              >
                View All
              </Button>
            </div>
            <div className="bg-[#22262b] rounded-lg divide-y divide-gray-800">
              {activities.map((activity, i) => (
                <div key={i} className="p-4 flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-[#2b3035]">
                    {activity.type === "model" ? (
                      <Plus className="w-5 h-5 text-purple-500" />
                    ) : activity.type === "evaluation" ? (
                      <BarChart2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <Users className="w-5 h-5 text-blue-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-300">
                      {activity.action}{" "}
                      <Link
                        href={`/projects/${activity.project}`}
                        className="text-purple-500 hover:text-purple-400"
                      >
                        {activity.project}
                      </Link>
                    </p>
                    <p className="text-sm text-gray-400">
                      {activity.time} by {activity.user}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </DashboardContext>
  );
}
