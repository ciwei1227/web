import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

export default function DdddddExerciseCard({ title, description, imageUrl, link, tags }: ExerciseCardProps) {
  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title || 'Exercise image'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-amber-900/0 to-amber-900/0"></div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-amber-800 mb-3">{title}</h3>
        <p className="text-amber-700 text-sm mb-4 h-20 overflow-y-auto flex-grow">{description}</p>
        {tags && tags.length > 0 && (
          <div className="mb-5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-amber-200 text-amber-800 text-xs font-medium mr-2 mb-1 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-auto">
           <div className="font-medium text-orange-600 group-hover:text-amber-800 transition-colors duration-300">
             探索这个故事 &rarr;
           </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="relative group">
       <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
        <div className="relative bg-white/80 backdrop-blur-md rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-amber-500/30 group-hover:shadow-2xl border border-amber-200">
          {link ? (
            <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">
              {cardContent}
            </Link>
          ) : (
            <div className="flex flex-col h-full">{cardContent}</div>
          )}
        </div>
    </div>
  );
} 