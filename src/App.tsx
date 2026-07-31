import { useEffect, useRef, useState } from 'react';
import { ALL_LESSONS, findLesson } from './data/curriculum';
import Sidebar from './components/Sidebar';
import LessonView from './components/LessonView';

const FIRST = ALL_LESSONS[0].lesson.id;

/** Read the lesson id out of the hash, falling back to the first lesson. */
function idFromHash(): string {
  const id = decodeURIComponent(window.location.hash.replace(/^#\/?/, ''));
  return findLesson(id) ? id : FIRST;
}

export default function App() {
  const [id, setId] = useState(idFromHash);
  const mainRef = useRef<HTMLElement | null>(null);

  /* Back/forward buttons work because the hash is the source of truth. */
  useEffect(() => {
    const onHash = () => setId(idFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => {
    if (decodeURIComponent(window.location.hash.replace(/^#\/?/, '')) !== id) {
      window.location.hash = `/${id}`;
    }
    mainRef.current?.scrollTo({ top: 0 });
  }, [id]);

  const entry = findLesson(id) ?? ALL_LESSONS[0];

  return (
    <div className="app">
      <Sidebar currentId={entry.lesson.id} onSelect={setId} />
      <main className="main" ref={mainRef}>
        <LessonView lesson={entry.lesson} track={entry.track} onNavigate={setId} />
      </main>
    </div>
  );
}
