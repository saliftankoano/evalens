import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useState } from "react";

export function NewProjectModal() {
  const [projectName, setProjectName] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const handleNewProject = () => {
    setOpenDialog(false);
  };
  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild className="">
        <Button
          className="bg-purple-500 hover:bg-purple-600"
          onClick={() => {
            setOpenDialog(true);
          }}
        >
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Project</DialogTitle>
          <DialogDescription>Add a new Project</DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleNewProject}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="projectName"
              onChange={(e) => setProjectName(e.target.value)}
              value={projectName}
              className="col-span-3"
            />
          </div>
        </form>
        <DialogFooter>
          <Button type="submit">Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
