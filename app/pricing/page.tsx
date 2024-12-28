import { projects } from "@/constants";

export default function Home() {
  return (
    <div className="light:bg-zinc-100 dark:bg-[#0d0d0e] h-screen flex flex-col items-center justify-start">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10 md:mt-[100px] mt-[20px]">
        {projects.map((project, index) => (
          <div key={index} className="relative group">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover shadow-2xl drop-shadow-2xl transition-transform duration-300 hover:translate-y-[-10px]"
            />
            <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-start p-8">
              <div className="text-left">
                <h3 className="text-white text-2xl font-thin mb-10">{project.description}</h3>
                <p className="text-white text-4xl absolute bottom-14 left-8">{project.title}</p>
                <p className="text-white/70 text-lg absolute bottom-8 left-8">{project.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
