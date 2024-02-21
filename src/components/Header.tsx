import { useCurrentLesson } from '../store/slices/player';

export default function Header() {
   const { currentModule, currentLesson } = useCurrentLesson();
   return (
      <>
         <article className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
            <span className="text-sm text-zinc-400">{currentModule.title}</span>
         </article>
      </>
   );
}
