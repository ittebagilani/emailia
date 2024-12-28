import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, PlusIcon, X } from "lucide-react";
import Image from "next/image";

export default function NewList() {
  return (
    <main className="mx-auto max-w-7xl min-h-screen md:p-10 p-4">
      <div className="mt-10 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 mt-10 font-black text-5xl">Create List</h1>
      </div>
      <div className="mt-10">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" placeholder="List name here..." />
        </div>
      </div>
      {/* display all user files */}
    </main>
  );
}
