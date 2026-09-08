import { ArrowUpRight } from 'lucide-react';
import { generatedAssets } from '../data/generatedAssets';

export function ResearchPlate({ kind, title, number, compact = false }: { kind: keyof typeof generatedAssets; title: string; number: string; compact?: boolean }) {
  const asset = generatedAssets[kind];
  return <figure className={`research-plate ${compact ? 'compact' : ''}`}>
    <a className="plate-link" href={`#${kind}`} aria-label={`Read about ${title}`}>
      <img src={asset.src} alt={asset.alt} width="1536" height="640" loading={compact ? 'eager' : 'lazy'} decoding="async" />
      <span className="concept-label">Concept visual</span>
      <span className="plate-arrow"><ArrowUpRight size={21} aria-hidden="true" /></span>
    </a>
    <figcaption><span className="plate-number">{number}</span><span>{title}</span><span className="plate-caption">Illustrative study</span></figcaption>
  </figure>;
}
