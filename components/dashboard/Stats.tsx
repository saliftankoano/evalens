import { BarChart2, Timer, Users, Bot } from "lucide-react";
export default function Stats() {
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
  return (
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
            <div className="text-2xl font-bold text-white">{stat.value}</div>
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
  );
}
