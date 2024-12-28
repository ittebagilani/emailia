import { ArrowRight, X } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="light:bg-zinc-100 dark:bg-[#0d0d0e] h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl md:px-10">
        <div className="light:text-black dark:text-white text-center md:text-left">
          <h1 className="font-thin text-6xl md:text-8xl flex items-center mt-12">
            FEATURES
            {/* <ArrowRight className="w-10 h-10 ml-2" /> */}
          </h1>
          <div className="font-thin text-lg md:text-2xl ml-1 text-left">
          </div>
        </div>
      </div>
    </div>
  );
}
