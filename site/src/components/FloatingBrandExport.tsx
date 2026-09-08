import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

export function FloatingBrandExport() {
  const [printing, setPrinting] = useState(false);
  useEffect(() => {
    const reset = () => setPrinting(false);
    window.addEventListener('afterprint', reset);
    return () => window.removeEventListener('afterprint', reset);
  }, []);
  async function exportPDF() {
    setPrinting(true);
    try {
      await document.fonts.ready;
      await Promise.all(Array.from(document.images, img => img.decode().catch(() => undefined)));
      window.print();
    } finally { setPrinting(false); }
  }
  return <aside className="floating-brand-export" aria-label="Page export">
    <span className="brand-credit"><img src={`${import.meta.env.BASE_URL}brand/lingju-huijing-logo.svg`} width="20" height="20" alt="" />Lingju Huijing</span>
    <button type="button" onClick={exportPDF} disabled={printing} aria-label="Open print dialog to save this page as PDF"><Download size={14} aria-hidden="true" />{printing ? 'Preparing…' : 'Export PDF'}</button>
  </aside>;
}
