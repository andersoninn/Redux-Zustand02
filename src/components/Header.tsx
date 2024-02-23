import { useAppSelector } from '../store';
import { useCurrentLesson } from '../store/slices/player';

export default function Header() {
   const { currentModule, currentLesson } = useCurrentLesson();
   const isCourseLoading = useAppSelector((state) => state.player.isLoading);

   return (
      <>
         {isCourseLoading ? (
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
