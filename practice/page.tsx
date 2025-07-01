import Link from "next/link";
import DdddddExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-md text-amber-900 p-4 shadow-lg w-full z-50 border-b border-amber-200/30">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-orange-600 transition-colors duration-300 tracking-wider">
          济州岛编程之旅
        </Link>
        <div className="space-x-6 text-lg">
          <Link href="/" className="hover:text-orange-600 transition-colors duration-300">首页</Link>
          <Link href="/archive" className="hover:text-orange-600 transition-colors duration-300">回忆录</Link>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 text-amber-900 items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-amber-200/[0.08] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] opacity-10 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-300 via-yellow-200 to-transparent rounded-full blur-3xl"></div>
      
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-12 pt-28 w-full z-10">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-amber-800 via-orange-600 to-yellow-600 mb-6 drop-shadow-lg">
            苦尽柑来遇见你
          </h1>
          <p className="text-lg md:text-xl text-amber-700 max-w-3xl mx-auto tracking-wide mb-4">
            跟随爱纯和宽植的脚步，在1950年代的济州岛学习前端开发
          </p>
          <p className="text-sm text-amber-600 max-w-2xl mx-auto">
            从海女的坚韧到柑橘的甘甜，每一行代码都承载着成长的故事
          </p>
        </header>

        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercisesData.map((exercise: ExerciseCardProps) => (
              <DdddddExerciseCard
                key={exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                imageUrl={exercise.imageUrl}
                link={exercise.link}
                tags={exercise.tags}
              />
            ))}
          </div>
        </section>
      </main>

      <WakaTimeStats />
    </div>
  );
}
