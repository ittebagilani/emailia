import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="mx-auto max-w-7xl min-h-screen md:p-10 p-4">
      <div className="mt-10 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 mt-10 font-black text-5xl">My Lists</h1>

        {/* Replace button with CreateListDialog */}
        <div className="items-center flex mt-10">
          <Link href={`/create-list`}>
            <Button>
              <PlusIcon size={24} />
              Create List
            </Button>
          </Link>
        </div>
      </div>

      {/* Display all user files */}
    </main>
  );
}
