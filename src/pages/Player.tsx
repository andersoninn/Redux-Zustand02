import { MessageCircle } from 'lucide-react';

import Header from '../components/Header';
import Video from '../components/Video';
import Module from '../components/Module';

import { useEffect } from 'react';
import { useCurrentLesson, useStore } from '../zustand-store';

export default function Player() {
   const { course, load, isLoading } = useStore((store) => {
      return {
         course: store.course,
         load: store.load,
         isLoading: store.isLoading,
      };
   });

   const { currentLesson } = useCurrentLesson();

   useEffect(() => {
      load();
   }, []);

   useEffect(() => {
      if (currentLesson) {
         document.title = `Assistindo ${currentLesson?.title}`;
      }
   }, [currentLesson]);

   return (
      <>
         <section className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
            <section className="flex w-[1100px] flex-col gap-6">
               <article className="flex items-center justify-between">
                  <Header />
                  <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
                     <MessageCircle className="w-4 h-4" />
                     Deixar feedback
                  </button>
               </article>
               <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 shadow pr-80">
                  <section className="flex-1">
                     <Video />
                  </section>

                  {isLoading ? (
                     <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 animate-pulse"></aside>
                  ) : (
                     <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
                        {course?.modules &&
                           course?.modules.map((module, index) => {
                              return (
                                 <Module
                                    key={module.id}
                                    moduleIndex={index}
                                    title={module.title}
                                    amountOfLessons={module.lessons.length}
                                 />
                              );
                           })}
                     </aside>
                  )}
               </main>
            </section>
         </section>
      </>
   );
}
