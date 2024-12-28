import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="light:bg-zinc-100 dark:bg-[#0d0d0e] h-screen flex flex-col items-center justify-center">
      {/* <h1 className="md:text-[20px] text-8xl font-light text-center light:text-black dark:text-white">
        WELCOME TO
      </h1> */}
      <h1 className="md:text-[200px] text-8xl font-thin text-center light:text-black dark:text-[#E3B5A4]">
        EMAILIA
      </h1>

      <div className="md:flex md:gap-x-12 mt-10 text-lg text-left md:text-center items-center justify-center">
        <p className="mb-2 md:mb-0">
          The next generation of email marketing.
        </p>
      </div>
      <div className="md:flex md:gap-x-2 mt-10 text-lg text-left md:text-center items-center justify-center">
        <Button className="bg-[#E3B5A4] hover:bg-[#d39e8a] text-black">
          LEARN MORE
        </Button>
      </div>
    </div>
    </>
  );
}
