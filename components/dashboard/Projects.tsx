import { MoreVertical, Timer, Brain, BarChart2 } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
export default function Projects() {
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

  return (
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
              <Button variant="ghost" size="icon" className="text-gray-400">
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
                  {project.modelsSelected} Experiments
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-purple-500">
              <Link
                href={`/projects/${project.id}`}
                className="text-sm text-white hover:text-purple-500"
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
  );
}
