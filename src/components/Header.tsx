import { useCurrentLesson, useStore } from '../zustand-store';

export default function Header() {
   const { currentModule, currentLesson } = useCurrentLesson();

   const isLoading = useStore((store) => store.isLoading);

   return (
      <>
         {isLoading ? (
            <div>
               <article className="flex flex-col gap-1">
                  <h1 className="text-2xl font-bold bg-zinc-800 w-[146px] h-8 animate-pulse"></h1>
                  <span className="text-sm text-zinc-400 w-[146px] bg-zinc-800 h-5 animate-pulse"></span>
               </article>
            </div>
         ) : (
            <article className="flex flex-col gap-1">
               <h1 className="text-2xl font-bold">{currentLesson?.title}</h1>
               <span className="text-sm text-zinc-400">
                  {currentModule?.title}
               </span>
            </article>
         )}
      </>
   );
}
