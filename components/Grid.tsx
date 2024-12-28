"use client";

// components/Grid.tsx
import Link from "next/link";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const gridItems = [
  {
    src: "/ig.png", // Replace with your actual image paths
    link: "https://ittebagilani.live/",
    title: "Itteba Gilani",
    date: "2023",
  },
  {
    src: "/aye-ai.png",
    link: "https://aye-ai.vercel.app/",
    title: "Aye AI",
    date: "2024",
  },
  {
    src: "/meds.png",
    link: "/link2",
    title: "iPhone 15 Pro",
    date: "View in your space",
  },
  {
    src: "/moutnain.png",
    link: "/link2",
    title: "iPhone 15 Pro",
    date: "View in your space",
  },
  // Add more items as needed
];

const Grid = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 pt-[120px] px-20">
      {gridItems.map((item, index) => (
        <GridItem key={index} item={item} />
      ))}
    </div>
  );
};

const GridItem = ({ item }: { item: any }) => {
  return (
    <Link href={item.link} rel="noopener noreferrer" target="_blank">
      <div className="relative block w-full h-96 cursor-pointer overflow-hidden rounded-lg">
        <div className="absolute inset-0 overflow-hidden">
          <DirectionAwareHover imageUrl={item.src}>
            <div className="absolute inset-0 bg-black opacity-0" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white opacity-100">
              <div className="text-2xl font-black text-center">{item.title}</div>
              <div className="text-lg text-center mt-2">{item.date}</div>
            </div>
          </DirectionAwareHover>
        </div>
      </div>
    </Link>
  );
};

export default Grid;
