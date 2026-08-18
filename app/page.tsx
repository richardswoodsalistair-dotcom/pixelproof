"use client";

import { useEffect, useState } from "react";

type IconName = "arrow" | "check" | "code" | "download" | "eye" | "filter" | "history" | "layers" | "lock" | "search" | "spark" | "target" | "zap";

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    code: <><path d="m9 18-6-6 6-6"/><path d="m15 6 6 6-6 6"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    filter: <path d="M4 5h16l-6 7v5l-4 2v-7L4 5Z"/>,
    history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    spark: <><path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z"/><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z"/></>,
    target: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3V1M21 12h2M12 21v2M3 12H1"/></>,
    zap: <path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>,
  };
  return <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

function Logo({ compact = false }: { compact?: boolean }) {
  return <span className="brand-lockup" aria-label="PixelProof"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 36 36" fill="none"><rect x="1" y="1" width="34" height="34" rx="10" fill="url(#markGradient)"/><path d="M8.5 18h4l2.3-7 4.6 14 2.4-7h5.7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/><path d="m25.4 10.2 1.3 1.3 2.8-3" stroke="#C9FFEA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="markGradient" x1="4" y1="3" x2="32" y2="34" gradientUnits="userSpaceOnUse"><stop stopColor="#6E6CFF"/><stop offset="1" stopColor="#A83CF6"/></linearGradient></defs></svg></span>{!compact && <span className="brand-name">Pixel<span>Proof</span></span>}</span>;
}

const issues = [
  { title: "Hero heading", count: 6, score: 43, level: "high" },
  { title: "Feature grid", count: 4, score: 63, level: "medium" },
  { title: "Pricing CTA", count: 2, score: 78, level: "low" },
  { title: "Navigation", count: 0, score: 100, level: "pass" },
];

const inspectorContent = {
  diff: { label: "Visual difference", value: "18 px", note: "Top spacing exceeds the approved design." },
  specs: { label: "Typography", value: "48 / 56", note: "Expected 52 / 60 · weight 700." },
  report: { label: "Recommendation", value: "High", note: "Align spacing token with the Figma frame." },
};

function ProductMockup() {
  const [tab, setTab] = useState<keyof typeof inspectorContent>("diff");
  const content = inspectorContent[tab];
  return <div className="product-window" id="product" aria-label="PixelProof analysis workspace preview">
    <div className="window-topbar"><div className="mini-brand"><Logo compact/><span>PixelProof</span></div><div className="scan-status"><span className="status-dot"/> Scan complete</div><div className="scan-summary"><strong>101</strong> issues <span>•</span> <b>71%</b> match</div></div>
    <div className="workspace-grid">
      <aside className="issue-panel"><div className="panel-kicker"><span>1</span> Issue list</div><h3>Component scans</h3><div className="mock-search"><Icon name="search" size={14}/> Search components</div><div className="filter-row"><span>Failed <b>20</b></span><span>Passed <b>4</b></span></div><div className="issue-stack">{issues.map(issue => <div className="issue-row" key={issue.title}><span className={`severity ${issue.level}`}/><span className="issue-name">{issue.title}</span><small>{issue.count ? `${issue.count} issues` : "Passed"}</small><b>{issue.score}%</b></div>)}</div></aside>
      <section className="canvas-panel"><div className="panel-kicker blue"><span>2</span> Visual canvas</div><div className="canvas-tools"><button type="button">Fit</button><button type="button">−</button><span>42%</span><button type="button">+</button><div className="heatmap"><span/> Heatmap</div></div><div className="canvas-stage"><div className="page-preview"><div className="preview-nav"><i/><i/><i/></div><div className="preview-copy"><span>DESIGN SYSTEM REPORT</span><strong>Build with confidence.</strong><small>One source of truth for every pixel.</small><button type="button">Learn more</button></div><div className="difference-box"><span>18 px</span></div></div><div className="canvas-legend"><span><i className="severity high"/> High</span><span><i className="severity medium"/> Medium</span><span><i className="severity pass"/> Passed</span></div></div></section>
      <aside className="inspector-panel"><div className="panel-kicker"><span>3</span> Inspector</div><div className="selected-node"><div className="node-thumb"/><div><strong>Hero heading</strong><small>FRAME · High priority</small></div></div><div className="inspector-tabs" role="tablist" aria-label="Inspector views">{(["diff", "specs", "report"] as const).map(item => <button key={item} role="tab" aria-selected={tab === item} className={tab === item ? "active" : ""} onClick={() => setTab(item)} type="button">{item === "diff" ? "Diff" : item === "specs" ? "Specs" : "Fix"}</button>)}</div><div className="inspector-result"><div className="result-icon"><Icon name={tab === "diff" ? "eye" : tab === "specs" ? "code" : "spark"}/></div><span>{content.label}</span><strong>{content.value}</strong><p>{content.note}</p></div><button className="locate-button" type="button"><Icon name="target" size={15}/> Locate on canvas</button></aside>
    </div>
  </div>;
}

function CompareDemo() {
  const [position, setPosition] = useState(56);
  return <div className="compare-demo"><div className="compare-label design">Figma design</div><div className="compare-label build">Live build</div><div className="compare-base"><div className="demo-nav"><span className="demo-logo"/><span/><span/><span/></div><div className="demo-hero"><small>SHIP WITH CONFIDENCE</small><strong>Design integrity,<br/>automatically checked.</strong><p>Catch the details that manual review misses.</p><button type="button">Get started</button></div></div><div className="compare-overlay" style={{ width: `${position}%` }}><div className="overlay-inner"><div className="demo-nav"><span className="demo-logo"/><span/><span/><span/></div><div className="demo-hero shifted"><small>SHIP WITH CONFIDENCE</small><strong>Design integrity,<br/>automatically checked.</strong><p>Catch the details that manual review misses.</p><button type="button">Get started</button></div></div></div><div className="compare-line" style={{ left: `${position}%` }}><span><Icon name="layers" size={16}/></span></div><label className="sr-only" htmlFor="comparison-position">Adjust comparison position</label><input id="comparison-position" className="compare-range" type="range" min="15" max="85" value={position} onChange={event => setPosition(Number(event.target.value))}/></div>;
}

const featureCards = [
  { icon: "filter" as IconName, title: "Prioritize what matters", text: "Search, group, and filter discrepancies by severity, status, and type—so critical failures move first." },
  { icon: "code" as IconName, title: "Design meets DOM", text: "Inspect Figma specifications beside DOM values and raw comparison data without switching tools." },
  { icon: "download" as IconName, title: "Turn findings into action", text: "Export clear PDF reports for stakeholders or structured JSON for technical workflows." },
  { icon: "lock" as IconName, title: "Check protected staging", text: "Compare public pages or authenticated staging environments before anything reaches a client." },
  { icon: "history" as IconName, title: "Track quality over time", text: "Rerun scans after fixes and use quality history to demonstrate measurable implementation progress." },
  { icon: "target" as IconName, title: "Locate every mismatch", text: "Jump from an issue directly to its position on the canvas and review it in visual context." },
];

const faqs = [
  ["What does PixelProof compare?", "PixelProof compares a Figma design with a live production or staging page, then surfaces differences in layout, spacing, typography, and missing visual elements."],
  ["Does it replace manual QA?", "It removes much of the repetitive pixel-checking and gives reviewers a prioritized starting point. Final product judgment still belongs to your design and QA team."],
  ["Can it review password-protected staging pages?", "Yes. The comparison workflow includes optional Basic Authentication fields for protected review environments."],
  ["What is a Design Match score?", "It is a concise representation of how closely the implemented page aligns with the approved design, supported by node-level affinity and issue details."],
  ["Can results be shared with clients or developers?", "Yes. Completed audits can be exported as stakeholder-friendly PDF reports or structured JSON results."],
  ["Can we verify fixes after development changes?", "Yes. Teams can rerun the scan, compare the updated result, and track quality improvement across review cycles."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleSmoothScroll = (event: globalThis.MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      const href = anchor?.getAttribute("href");
      if (!href || href === "#") return;

      const section = document.querySelector<HTMLElement>(href);
      if (!section) return;

      event.preventDefault();
      section.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
        block: "start",
      });
      window.history.replaceState(null, "", href);
    };

    document.addEventListener("click", handleSmoothScroll);
    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return <>
    {showLoader && <div className="site-loader" role="status" aria-live="polite" aria-label="Loading PixelProof" onAnimationEnd={event => {
      if (event.currentTarget === event.target) setShowLoader(false);
    }}><div className="loader-brand"><Logo/><span>Preparing your visual QA workspace</span><i/></div></div>}
    <main>
    <header className="site-header"><a className="brand-link" href="#top"><Logo/></a><nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation"><a href="#outcomes" onClick={() => setMenuOpen(false)}>Benefits</a><a href="#workflow" onClick={() => setMenuOpen(false)}>How it works</a><a href="#features" onClick={() => setMenuOpen(false)}>Features</a><a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a></nav><a className="header-cta" href="#demo">See it in action <Icon name="arrow" size={15}/></a><button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} type="button"><span/><span/></button></header>
    <section className="hero section-shell" id="top"><div className="hero-glow glow-one"/><div className="hero-glow glow-two"/><div className="hero-copy"><div className="eyebrow"><span/> Figma-to-production visual QA</div><h1>Ship every page closer to the <em>approved design.</em></h1><p>PixelProof compares Figma with your live build, catches visual drift, and turns every mismatch into clear, actionable evidence—before the client review.</p><div className="hero-actions"><a className="button primary" href="#demo">Explore the workflow <Icon name="arrow"/></a><a className="button secondary" href="#features"><Icon name="layers"/> See every feature</a></div><div className="hero-proof"><span><Icon name="check" size={15}/> No manual pixel hunt</span><span><Icon name="check" size={15}/> Clear severity ranking</span><span><Icon name="check" size={15}/> Shareable reports</span></div></div><ProductMockup/></section>
    <section className="metrics-strip section-shell" aria-label="Example audit outputs"><div className="metric-intro"><span>Example audit</span><strong>From uncertainty to a measurable QA baseline.</strong></div><div className="metric"><strong>71%</strong><span>Design match</span></div><div className="metric"><strong>101</strong><span>Issues surfaced</span></div><div className="metric"><strong>20</strong><span>Critical failures</span></div><div className="metric"><strong>29.2s</strong><span>Audit completed</span></div></section>
    <section className="problem-section section-shell" id="outcomes"><div className="section-heading split-heading"><div><span className="section-label">The hidden cost of visual drift</span><h2>Client review should not be your first QA pass.</h2></div><p>Small implementation differences create large delivery costs: repeated feedback, slower approvals, and avoidable tension between design and development.</p></div><div className="problem-grid"><article><span className="problem-number">01</span><h3>Manual review is slow</h3><p>Side-by-side checking turns skilled designers and developers into pixel detectives.</p><div className="problem-tag">Hours of repetitive work</div></article><article><span className="problem-number">02</span><h3>Feedback arrives too late</h3><p>Layout and typography problems surface during stakeholder review instead of development.</p><div className="problem-tag">More revision cycles</div></article><article className="solution-card"><span className="problem-number">03</span><h3>PixelProof creates alignment</h3><p>One visual workspace gives every team the same prioritized, measurable source of truth.</p><div className="problem-tag"><Icon name="spark" size={15}/> Faster, calmer handoff</div></article></div></section>
    <section className="workflow-section" id="workflow"><div className="section-shell"><div className="section-heading centered"><span className="section-label">How it works</span><h2>Three inputs. One shared truth.</h2><p>Go from approved design to actionable QA report without assembling a manual review process.</p></div><div className="steps-grid"><article><span className="step-index">01</span><div className="step-icon figma-icon"><span/><span/><span/><span/><span/></div><h3>Connect the design</h3><p>Add the Figma URL or file key and securely provide the access required for analysis.</p></article><article><span className="step-index">02</span><div className="step-icon"><Icon name="code" size={25}/></div><h3>Point to the live build</h3><p>Enter a production or staging URL, including optional credentials for protected environments.</p></article><article><span className="step-index">03</span><div className="step-icon"><Icon name="target" size={25}/></div><h3>Resolve what matters</h3><p>Review scores, inspect discrepancies, export evidence, and rerun after the fixes land.</p></article></div></div></section>
    <section className="feature-showcase section-shell" id="demo"><div className="feature-copy"><span className="section-label">Visual comparison, made obvious</span><h2>See the gap.<br/>Understand the cause.</h2><p>Move between the approved Figma design and the implemented page. Overlay views, adjustable opacity, heatmaps, and direct canvas location make subtle differences immediately understandable.</p><ul><li><Icon name="check"/> Overlay and side-by-side comparison</li><li><Icon name="check"/> Adjustable opacity and zoom</li><li><Icon name="check"/> Contextual mismatch indicators</li></ul><span className="interaction-note"><Icon name="layers" size={15}/> Drag the comparison handle</span></div><CompareDemo/></section>
    <section className="features-section section-shell" id="features"><div className="section-heading centered"><span className="section-label">Built for the entire review loop</span><h2>Everything needed to move from finding to fix.</h2><p>PixelProof brings discovery, diagnosis, prioritization, and reporting into one focused QA workspace.</p></div><div className="features-grid">{featureCards.map(feature => <article key={feature.title}><div className="feature-icon"><Icon name={feature.icon}/></div><h3>{feature.title}</h3><p>{feature.text}</p><span className="card-line"/></article>)}</div></section>
    <section className="value-section" id="results"><div className="section-shell value-grid"><div className="value-copy"><span className="section-label">Business value, not more noise</span><h2>Less review friction.<br/>More delivery confidence.</h2><p>PixelProof translates visual quality into a workflow every stakeholder can understand—from a developer fixing spacing to a client approving the final build.</p><a className="text-link" href="#use-cases">See who it helps <Icon name="arrow"/></a></div><div className="value-list"><article><span><Icon name="zap"/></span><div><h3>Shorten QA cycles</h3><p>Replace repetitive inspection with an automated, prioritized review starting point.</p></div></article><article><span><Icon name="layers"/></span><div><h3>Align design and development</h3><p>Discuss visible evidence and exact specifications instead of subjective impressions.</p></div></article><article><span><Icon name="eye"/></span><div><h3>Protect the client experience</h3><p>Catch inconsistencies internally before they become feedback in a presentation.</p></div></article><article><span><Icon name="history"/></span><div><h3>Prove improvement</h3><p>Rerun audits and show measurable progress after each round of fixes.</p></div></article></div></div></section>
    <section className="audience-section section-shell" id="use-cases"><div className="section-heading split-heading"><div><span className="section-label">One quality language</span><h2>Designed for every team responsible for the final pixel.</h2></div><p>Whether quality is your craft, your code, or your client promise, PixelProof makes it visible and actionable.</p></div><div className="audience-grid"><article><span>DESIGN</span><h3>UI/UX teams</h3><p>Protect the intent of approved designs without reviewing every screen by hand.</p><b>Design integrity</b></article><article><span>BUILD</span><h3>Frontend teams</h3><p>Find the exact components and specifications behind visual discrepancies.</p><b>Faster fixes</b></article><article><span>VERIFY</span><h3>QA teams</h3><p>Add measurable visual coverage to functional testing and release reviews.</p><b>Clear prioritization</b></article><article><span>DELIVER</span><h3>Agencies</h3><p>Reduce client revision rounds and present a more confident final delivery.</p><b>Stronger handoffs</b></article></div></section>
    <section className="trust-section section-shell"><div className="trust-icon"><Icon name="lock" size={28}/></div><div><span className="section-label">Built for real delivery environments</span><h2>Review the page your client will actually see.</h2><p>Use live production URLs or protected staging environments. Tokens remain masked in the interface, and authentication is requested only when the target page requires it.</p></div><div className="trust-points"><span><Icon name="check"/> Masked token input</span><span><Icon name="check"/> Optional protected-page access</span><span><Icon name="check"/> Clear source URLs in every audit</span></div></section>
    <section className="faq-section section-shell" id="faq"><div className="section-heading centered"><span className="section-label">Frequently asked questions</span><h2>The practical details.</h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={openFaq === index}><summary onClick={event => { event.preventDefault(); setOpenFaq(openFaq === index ? null : index); }} aria-expanded={openFaq === index}>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>
    <section className="final-cta section-shell"><div className="cta-glow"/><Logo compact/><span className="section-label">The final pixel deserves a final check</span><h2>Stop finding design problems<br/>during client review.</h2><p>Give design, development, and QA one measurable view of implementation quality.</p><a className="button primary" href="#top">See PixelProof in action <Icon name="arrow"/></a></section>
    <footer className="site-footer section-shell"><div><Logo/><p>Design QA, without guesswork.</p></div><div className="footer-links"><a href="#outcomes">Benefits</a><a href="#workflow">How it works</a><a href="#features">Features</a><a href="#faq">FAQs</a></div><p className="copyright">© 2026 PixelProof by Computan</p></footer>
  </main>
  </>;
}
