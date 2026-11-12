import Link from "next/link";
import { lanes } from "../site-data";

export function LaneGrid({ exclude, only }: { exclude?: string; only?: string[] }) {
  const list = lanes.filter((lane) => lane.slug !== exclude && (!only || only.includes(lane.slug)));
  return (
    <ul className="lane-grid">
      {list.map((lane) => (
        <li key={lane.slug}>
          <Link href={`/type-beats/${lane.slug}`} className="lane-card">
            <span className="lane-bpm">{lane.bpm.split(" (")[0]}</span>
            <strong>{lane.title}</strong>
            <span className="lane-traits">{lane.traits[0]}</span>
            <span className="lane-go" aria-hidden="true">
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
