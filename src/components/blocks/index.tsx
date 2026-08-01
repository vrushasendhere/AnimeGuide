import { useState } from 'react';
import type { Block } from '../../data/types';
import { Demo } from '../demos';
import DrawCanvas from '../practice/DrawCanvas';

/**
 * Remounting the demo is how "replay" works — every demo animation is
 * `forwards` from a clean mount, so a new key restarts it exactly.
 */
function Replayable({ name, className }: { name: string; className?: string }) {
  const [n, setN] = useState(0);
  return (
    <div className={className} onClick={() => setN((v) => v + 1)} style={{ width: '100%', cursor: 'pointer' }}>
      <Demo key={n} name={name} />
    </div>
  );
}

function ReplayButton({ onClick }: { onClick: () => void }) {
  return (
    <button className="replay" onClick={onClick}>
      ↻ Replay
    </button>
  );
}

function Hero({ demo, caption }: { demo: string; caption: string }) {
  const [n, setN] = useState(0);
  return (
    <div className="block">
      <div className="hero">
        <div className="hero__stage" onClick={() => setN((v) => v + 1)} style={{ cursor: 'pointer' }}>
          <Demo key={n} name={demo} />
        </div>
        <div className="hero__caption">{caption}</div>
      </div>
    </div>
  );
}

function Steps({
  title,
  steps,
}: {
  title: string;
  steps: { label: string; demo?: string; note?: string }[];
}) {
  // Software procedures carry no figures; they get a denser text-only layout.
  const textOnly = steps.every((s) => !s.demo);
  return (
    <div className="block">
      <h3 className="block__title">{title}</h3>
      <div className={textOnly ? 'steps steps--text' : 'steps'}>
        {steps.map((s, i) => (
          <article className={textOnly ? 'stepcard stepcard--text' : 'stepcard'} key={i}>
            <div className="stepcard__n">{i + 1}</div>
            {s.demo && (
              <div className="stepcard__art">
                <Replayable name={s.demo} />
              </div>
            )}
            <div className="stepcard__body">
              <div className="stepcard__label">{s.label}</div>
              {s.note && <div className="stepcard__note">{s.note}</div>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Reference({
  title,
  columns,
  rows,
}: {
  title: string;
  columns?: [string, string];
  rows: Array<{ k: string; v: string; note?: string }>;
}) {
  return (
    <div className="block">
      <h3 className="block__title">{title}</h3>
      <div className="reftable">
        {columns && (
          <div className="reftable__row reftable__row--head">
            <span>{columns[0]}</span>
            <span>{columns[1]}</span>
          </div>
        )}
        {rows.map((r, i) => (
          <div className="reftable__row" key={i}>
            <span className="reftable__k">{r.k}</span>
            <span className="reftable__v">
              {r.v}
              {r.note && <em className="reftable__note">{r.note}</em>}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DemoPanel({ title, demo, caption }: { title: string; demo: string; caption?: string }) {
  const [n, setN] = useState(0);
  return (
    <div className="block">
      <h3 className="block__title">{title}</h3>
      <div className="panel">
        <div className="panel__stage">
          <Demo key={n} name={demo} />
        </div>
        <div className="panel__foot">
          <span>{caption}</span>
          <ReplayButton onClick={() => setN((v) => v + 1)} />
        </div>
      </div>
    </div>
  );
}

function Compare({
  title,
  badDemo,
  goodDemo,
  badLabel,
  goodLabel,
}: {
  title: string;
  badDemo: string;
  goodDemo: string;
  badLabel: string;
  goodLabel: string;
}) {
  return (
    <div className="block">
      <h3 className="block__title">{title}</h3>
      <div className="compare">
        <div className="compare__side bad">
          <div className="compare__art">
            <Replayable name={badDemo} />
          </div>
          <div className="compare__tag">✕ {badLabel}</div>
        </div>
        <div className="compare__side good">
          <div className="compare__art">
            <Replayable name={goodDemo} />
          </div>
          <div className="compare__tag">✓ {goodLabel}</div>
        </div>
      </div>
    </div>
  );
}

/**
 * Videos load on click. Twelve autoplaying iframes on a lesson page would
 * make the whole app crawl, so the poster stands in until asked.
 */
function Video({ title, id, channel, why }: { title: string; id: string; channel: string; why: string }) {
  const [live, setLive] = useState(false);
  return (
    <div className="block">
      <div className="video">
        <div className="video__frame">
          {live ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              className="video__poster"
              style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}
              onClick={() => setLive(true)}
              aria-label={`Play ${title}`}
            >
              <span className="video__play">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          )}
        </div>
        <div className="video__meta">
          <div>
            <h4>{title}</h4>
            <div className="video__why">
              {channel} — {why}
            </div>
          </div>
          <a
            className="video__out"
            href={`https://www.youtube.com/watch?v=${id}`}
            target="_blank"
            rel="noreferrer"
          >
            open ↗
          </a>
        </div>
      </div>
    </div>
  );
}

function Practice({ title, exercise, goal }: { title: string; exercise: string; goal: string }) {
  return (
    <div className="block">
      <h3 className="block__title">{title}</h3>
      <DrawCanvas exerciseId={exercise} />
      <p className="practice__goal">{goal}</p>
    </div>
  );
}

function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="block">
      <h3 className="block__title">{title}</h3>
      <ul className="checklist">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

export function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'hero':
      return <Hero demo={block.demo} caption={block.caption} />;
    case 'steps':
      return <Steps title={block.title} steps={block.steps} />;
    case 'demo':
      return <DemoPanel title={block.title} demo={block.demo} caption={block.caption} />;
    case 'compare':
      return (
        <Compare
          title={block.title}
          badDemo={block.badDemo}
          goodDemo={block.goodDemo}
          badLabel={block.badLabel}
          goodLabel={block.goodLabel}
        />
      );
    case 'video':
      return <Video title={block.title} id={block.id} channel={block.channel} why={block.why} />;
    case 'practice':
      return <Practice title={block.title} exercise={block.exercise} goal={block.goal} />;
    case 'checklist':
      return <Checklist title={block.title} items={block.items} />;
    case 'reference':
      return <Reference title={block.title} columns={block.columns} rows={block.rows} />;
  }
}
