import { Plus, BarChart2, Users, Link } from "lucide-react";
import { Button } from "../ui/button";

export default function RecentActivity() {
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
  return (
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
  );
}
