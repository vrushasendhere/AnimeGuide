import { useEffect, useRef, useState } from 'react';
import { ALL_LESSONS, findLesson } from './data/curriculum';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';
import Journal from './components/Journal';

const FIRST = ALL_LESSONS[0].lesson.id;
export const JOURNAL_ROUTE = 'journal';

/** Read the route out of the hash. Either a lesson id or the journal. */
function routeFromHash(): string {
  const id = decodeURIComponent(window.location.hash.replace(/^#\/?/, ''));
  if (id === JOURNAL_ROUTE) return id;
  return findLesson(id) ? id : FIRST;
}

export default function App() {
  const [route, setRoute] = useState(routeFromHash);
  const mainRef = useRef<HTMLElement | null>(null);

  /* Back/forward buttons work because the hash is the source of truth. */
  useEffect(() => {
    const onHash = () => setRoute(routeFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    if (decodeURIComponent(window.location.hash.replace(/^#\/?/, '')) !== route) {
      window.location.hash = `/${route}`;
    }
    mainRef.current?.scrollTo({ top: 0 });
  }, [route]);

  const isJournal = route === JOURNAL_ROUTE;
  const entry = findLesson(route) ?? ALL_LESSONS[0];

  return (
    <div className="app">
      <Sidebar
        currentId={isJournal ? JOURNAL_ROUTE : entry.lesson.id}
        onSelect={setRoute}
      />
      <main className="main" ref={mainRef}>
        {isJournal ? (
          <Journal onNavigate={setRoute} />
        ) : (
          <LessonView lesson={entry.lesson} track={entry.track} onNavigate={setRoute} />
        )}
      </main>
    </div>
  );
}
