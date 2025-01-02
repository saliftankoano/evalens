"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell, Brain, Settings, ThumbsUp, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";

export default function DashboardPage() {
  const [selectedModels, setSelectedModels] = useState(["gpt4"]);

  return (
    <div className="min-h-screen bg-[#1a1d21] flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 bg-[#22262b]">
        <div className="container flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-purple-500" />
            <span className="text-white text-xl font-semibold">Evalens</span>
          </div>
          <div className="text-gray-400">Your Prompt, Their Responses</div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <Bell className="w-5 h-5" />
            </Button>
            <Image
              src="/brain.png"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container px-4 py-6 grid grid-cols-[400px,1fr] gap-6">
        {/* Left Panel */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-white text-lg">Input Prompt</h2>
              <Button size="icon" className="bg-purple-500 hover:bg-purple-600">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
            <Textarea
              placeholder="Enter your prompt here..."
              className="min-h-[200px] bg-[#22262b] border-0 text-gray-200 placeholder:text-gray-500"
            />
            <Select defaultValue="gpt4">
              <SelectTrigger className="bg-[#22262b] border-0 text-gray-200">
                <SelectValue placeholder="Select Evaluator LLM" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt4">GPT-4 (Recommended)</SelectItem>
                <SelectItem value="uxpilot">UX Pilot 2</SelectItem>
                <SelectItem value="palm">PaLM</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full bg-purple-500 hover:bg-purple-600">
              Submit
            </Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-white text-lg">Load Dataset</h2>
              <Button size="sm" variant="ghost" className="text-purple-500">
                Help
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 bg-[#22262b] border-0 text-gray-200"
              >
                Choose File
              </Button>
              <Button size="icon" className="bg-purple-500 hover:bg-purple-600">
                <Upload className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-500">
              Supported formats: .csv, .json, .xlsx
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-white text-lg">Compare LLMs</h2>
              <Button variant="ghost" size="sm" className="text-purple-500">
                Select All
              </Button>
            </div>
            <div className="space-y-2">
              {[
                { id: "gpt4", name: "GPT-4", type: "Advanced" },
                { id: "uxpilot", name: "UX Pilot 2", type: "Balanced" },
                { id: "palm", name: "PaLM", type: "Fast" },
              ].map((model) => (
                <div
                  key={model.id}
                  className="flex items-center justify-between p-3 rounded bg-[#22262b]"
                >
                  <div className="flex items-center gap-2">
                    <Checkbox
                      checked={selectedModels.includes(model.id)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSelectedModels([...selectedModels, model.id]);
                        } else {
                          setSelectedModels(
                            selectedModels.filter((id) => id !== model.id)
                          );
                        }
                      }}
                    />
                    <Brain className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-200">{model.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{model.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          {["gpt4", "uxpilot"].map((model) => (
            <div key={model} className="p-6 rounded-lg bg-[#22262b] space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Brain className="w-6 h-6 text-purple-500" />
                  <span className="text-white font-medium">
                    {model === "gpt4" ? "GPT-4" : "UX Pilot 2"}
                  </span>
                  <span className="px-2 py-1 text-sm rounded bg-purple-500/20 text-purple-500">
                    {model === "gpt4" ? "Evaluator" : ""}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Settings className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Textarea
                readOnly
                value="Output will appear here..."
                className="min-h-[200px] bg-[#1a1d21] border-0 text-gray-400"
              />

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Coherence", value: model === "gpt4" ? 9.5 : 9.1 },
                  { label: "Creativity", value: model === "gpt4" ? 8.7 : 8.9 },
                  { label: "Relevance", value: model === "gpt4" ? 9.2 : 9.4 },
                ].map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">{metric.label}</span>
                      <span className="text-white">{metric.value}/10</span>
                    </div>
                    <Progress
                      value={metric.value * 10}
                      className="bg-purple-500/20"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="container flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link href="#" className="hover:text-gray-300">
              Documentation
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Support
            </Link>
            <Link href="#" className="hover:text-gray-300">
              Privacy Policy
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Evalens. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
