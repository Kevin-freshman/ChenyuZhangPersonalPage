import { useEffect, useState } from 'react';
import { MotionConfig, motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { profile, research } from './data/profile';
import { ResearchPlate } from './components/ResearchPlate';
import { FloatingBrandExport } from './components/FloatingBrandExport';

const links = [['research', 'Research'], ['projects', 'Projects'], ['background', 'Background'], ['contact', 'Contact']];

export default function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('research');
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenu(false); };
    window.addEventListener('keydown', onEscape);
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.getAttribute('data-nav') || entry.target.id);
    }, { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('section[data-nav]').forEach(section => observer.observe(section));
    return () => { observer.disconnect(); window.removeEventListener('keydown', onEscape); };
  }, []);
  return <MotionConfig reducedMotion="user">
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="masthead shell" id="top">
      <a href="#top" className="wordmark" aria-label="Chenyu Kevin Zhang, home"><span className="monogram">CZ</span><span className="wordmark-name">Kevin</span></a>
      <p className="masthead-role">{profile.role}</p>
      <p className="masthead-location">Hong Kong</p>
      <button className="mobile-toggle" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close navigation' : 'Open navigation'} aria-expanded={menu} aria-controls="mobile-menu">{menu ? <X /> : <Menu />}</button>
      {menu && <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}</nav>}
    </header>
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title" data-nav="research">
        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow rust">Field notes / Robotics</p>
            <h1 id="hero-title">Chenyu<br />Zhang<span className="name-stop">.</span></h1>
            <span className="small-rule" aria-hidden="true" />
            <h2>Robotics &<br />embodied AI</h2>
            <p className="hero-description">{profile.summary}</p>
            <p className="hero-note">Dexterous manipulation.<br />Robots that interact with people.</p>
          </div>
          <motion.div className="hero-plates" initial={{ y: 8 }} animate={{ y: 0 }} transition={{ duration: 0.65, ease: 'easeOut' }}>
            <ResearchPlate kind="teleoperation" title="Hand teleoperation" number="01" compact />
            <ResearchPlate kind="interaction" title="Human–robot turn-taking" number="02" compact />
          </motion.div>
        </div>
        <div className="hero-bottom">
          <nav className="desktop-nav" aria-label="Main navigation">{links.map(([id, label]) => <a className={active === id ? 'active' : ''} key={id} href={`#${id}`}>{label}</a>)}</nav>
          <div className="hero-actions"><a className="outline-button" href="#research">Explore research <ArrowRight size={18} aria-hidden="true" /></a><a className="text-link" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={17} aria-hidden="true" /></a></div>
        </div>
      </section>
      <div className="chapter-bar shell" id="research"><span><em>01</em> / Selected research</span><ArrowDown size={19} aria-hidden="true" /></div>
      {research.map(item => <section key={item.id} id={item.id} className="research-section panel shell" data-nav="research" aria-labelledby={`${item.id}-title`}>
        <div className="section-meta"><span className="eyebrow">Research / {item.number}</span><span className="eyebrow">{item.category}</span></div>
        <div className="research-layout">
          <div className="research-heading"><h2 id={`${item.id}-title`}>{item.question}</h2><p className="section-description">{item.description}</p><div className="tool-line">{item.tools.map(tool => <span key={tool}>{tool}</span>)}</div><a className="text-link" href={`mailto:${profile.email}?subject=${encodeURIComponent(item.title)}`}>Discuss this work <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          <div className="research-evidence"><ResearchPlate kind={item.id} title={item.title} number={item.number} /><dl className="research-notes">{item.notes.map(note => <div key={note.label}><dt>{note.label}</dt><dd>{note.text}</dd></div>)}</dl></div>
        </div>
        <p className="image-disclosure">Image: AI-generated concept illustration. Project details are described in the text.</p>
      </section>)}
      <section id="projects" className="projects-section panel" data-nav="projects" aria-labelledby="projects-title">
        <div className="shell">
          <div className="section-meta"><span className="eyebrow">02 / Projects</span><span className="eyebrow">Code & experiments</span></div>
          <div className="project-intro"><h2 id="projects-title">Beyond the<br /><i>robotics bench.</i></h2><p>Additional work in computer vision and quantitative analysis.</p></div>
          <article className="project-row quant-project">
            <span className="project-row-number">01</span><div><p className="eyebrow rust">Quant / Prediction markets</p><h3>Polymarket analytics</h3><p>A Blockspace project studying prediction-market trading behavior. I work with on-chain activity and account-level trading data to examine performance and trading patterns.</p><div className="tool-line"><span>Python</span><span>Data pipelines</span><span>On-chain analysis</span></div></div><a href={profile.quant} className="project-repo" target="_blank" rel="noopener noreferrer">View project <ArrowUpRight size={19} aria-hidden="true" /></a>
          </article>
          <article className="project-row">
            <span className="project-row-number">02</span><div><p className="eyebrow">Robotics / Computer vision</p><h3>RoboMaster · ColorCapture</h3><p>Computer-vision work for an HKUST robotics competition, using Python and OpenCV for color detection and object tracking.</p><div className="tool-line"><span>Python</span><span>OpenCV</span><span>Robot integration</span></div></div><span className="project-context">Team project<br />HKUST</span>
          </article>
          <a href={profile.github} className="text-link projects-github" target="_blank" rel="noopener noreferrer">More on GitHub <ArrowUpRight size={18} aria-hidden="true" /></a>
        </div>
      </section>
      <section id="background" className="background-section panel shell" data-nav="background" aria-labelledby="background-title">
        <div className="section-meta"><span className="eyebrow">03 / Background</span><span className="eyebrow">Education & toolkit</span></div>
        <div className="background-layout"><div><h2 id="background-title">Learning through<br /><i>building.</i></h2><p className="section-description">I’m an undergraduate in Computer Science and Engineering at HKUST, with an Extended Major in Artificial Intelligence. My interests center on robotics, especially dexterous manipulation and human–robot interaction.</p><p className="section-description">I’m looking to deepen my research experience in a robotics lab.</p></div>
          <div className="background-details"><div className="education-primary"><p className="eyebrow rust">Undergraduate studies</p><h3>Hong Kong University of<br />Science and Technology</h3><p>Computer Science and Engineering<br />Extended Major in Artificial Intelligence</p></div><p className="summer-session"><span>Additional coursework</span>UC Berkeley · Summer Session, 2026<br /><small>CS 188 — Artificial Intelligence · CS 61BL — Data Structures</small></p><dl className="toolkit">{profile.skills.map(skill => <div key={skill.label}><dt>{skill.label}</dt><dd>{skill.text}</dd></div>)}</dl></div></div>
      </section>
      <section id="contact" className="contact-section panel" data-nav="contact" aria-labelledby="contact-title"><div className="shell contact-inner"><div className="section-meta"><span className="eyebrow">04 / Contact</span><span className="eyebrow">Hong Kong</span></div><div className="contact-body"><p className="eyebrow rust">Robotics research opportunities</p><h2 id="contact-title">Let’s start with<br /><i>a research question.</i></h2><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight aria-hidden="true" /></a><div className="social-links"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={17} aria-hidden="true" /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a></div></div><footer><span>© {new Date().getFullYear()} Chenyu “Kevin” Zhang</span><a href="#top">Back to top ↑</a></footer></div></section>
    </main>
    <FloatingBrandExport />
  </MotionConfig>;
}
