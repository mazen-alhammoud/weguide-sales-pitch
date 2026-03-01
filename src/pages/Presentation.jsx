import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Presentation.css';
import studiosVideo from '../assets/Studios.mp4';
import platformVideo from '../assets/Platform.mp4';
import imgDrifter from '../assets/The High-Performing Drifter.png';
import imgSlipper from '../assets/The Silent Slipper.png';
import imgDreamer from '../assets/The Borrowed Dreamer.png';
import imgPanicker from '../assets/The October Panicker.png';
import imgPlatform1 from '../assets/weguide-platform.png';
import imgPlatform2 from '../assets/weguide-platform-2.png';
import imgPlatform3 from '../assets/weguide-platform-3.png';
import imgPlatform4 from '../assets/weguide-platform-4.png';
import imgMazen from '../assets/Mazen.png';
import imgGrade7 from '../assets/grade7.png';
import imgGrade8 from '../assets/grade8.png';
import imgGrade9 from '../assets/grade9.png';
import imgGrade10 from '../assets/grade10.png';
import imgGrade11 from '../assets/grade11.png';
import imgGrade12 from '../assets/grade12.png';
import platformVideo2 from '../assets/platform2.mp4';
import imgLyceeLogo from '../assets/lycee-logo-2020-200.png';
import imgWeguideLogo from '../assets/weguide_logo.svg';
import imgDecisionLab from '../assets/decision lab.png';

/* ── Slide data ── */
const SLIDES = [
  function SlidePersonas() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    const personas = [
      {
        num: '01',
        name: 'The High-Performing Drifter',
        tag: 'High achiever, no direction',
        quote: 'Top grades. Strong resume. No internal clarity.',
        desc: 'Performs well but lacks identity-based direction. Success without strategy.',
        img: imgDrifter,
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
          </svg>
        ),
      },
      {
        num: '02',
        name: 'The Silent Slipper',
        tag: 'Falling behind, unnoticed',
        quote: 'Not failing. Just slowly disengaging.',
        desc: 'Motivation fluctuates. Potential exists but is not activated.',
        img: imgSlipper,
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><path d="M12 8v4" /><path d="M12 16h.01" />
          </svg>
        ),
      },
      {
        num: '03',
        name: 'The Borrowed Dreamer',
        tag: 'Parent-driven student',
        quote: 'Ambition outsourced.',
        desc: 'Path shaped by expectations rather than self-awareness.',
        img: imgDreamer,
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
      {
        num: '04',
        name: 'The October Panicker',
        tag: 'Grade 12 crisis student',
        quote: 'University deadlines approaching.',
        desc: 'Decisions made under pressure, not evidence.',
        img: imgPanicker,
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
          </svg>
        ),
      },
    ];

    return (
      <div className="slide slide-personas">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">THE STUDENTS WE SEE EVERY DAY</span>

          <h1 className="slide-headline">
            Four students.{' '}
            <span className="slide-gradient">Same school. Different struggles.</span>
          </h1>

          <p className="slide-subheader">
            These are not edge cases — they represent patterns that exist in every
            school, often unnoticed until it is too late.
          </p>

          <div className="sp-cards">
            {personas.map((p) => (
              <div key={p.num} className="sp-card">
                <div className="sp-img">
                  <span className="sp-img-num">{p.num}</span>
                  <div className="sp-img-icon">{p.icon}</div>
                  <img className="sp-img-photo" src={p.img} alt={p.name} />
                </div>

                <div className="sp-body">
                  <h3 className="sp-name">{p.name}</h3>
                  <span className="sp-tag">{p.tag}</span>
                  <p className="sp-quote">{p.quote}</p>
                  <p className="sp-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="slide-takeaway">
            None of these students need fixing. They need a system designed to develop them.
          </p>
        </div>
      </div>
    );
  },

  function SlideEconomy() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    const tableRows = [
      { school: 'GPA & exam averages', economy: 'Demonstrated skill portfolios' },
      { school: 'University placement rate', economy: 'Career adaptability over 40-year span' },
      { school: 'Curriculum coverage', economy: 'Applied problem-solving in ambiguity' },
      { school: 'Content mastery', economy: 'Systems thinking & AI collaboration' },
      { school: 'Classroom compliance', economy: 'Initiative & self-directed execution' },
      { school: 'Standardized test performance', economy: 'Evidence of impact & project output' },
      { school: 'Short-term achievement', economy: 'Longitudinal skill compounding' },
    ];

    const stats = [
      { value: '40\u201350%', label: 'of current task structures will be automated or AI-augmented' },
      { value: '5\u20137', label: 'career pivots will become the average over a lifetime' },
      { value: 'Proof-of-work', label: 'hiring increasingly evaluates portfolios, projects, and real output' },
      { value: 'Soft skills', label: 'become hard economic currency in every sector' },
    ];

    return (
      <div className="slide slide-economy">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">2035 LABOR MARKET REALITY</span>

          <h1 className="slide-headline">
            Where traditional systems focus vs.{' '}
            <span className="slide-gradient">where the 2035 economy is heading.</span>
          </h1>

          <p className="slide-subheader">
            By 2035, three forces dominate: AI-augmented work, project-based
            and portfolio hiring, and faster skill obsolescence cycles. The
            fastest-growing value drivers are cognitive flexibility, digital
            fluency, and identity-driven decision making.
          </p>

          {/* Comparison table */}
          <div className="se-table-wrap">
            <table className="se-table">
              <thead>
                <tr>
                  <th className="se-th se-th--school">Current System Focus (2026)</th>
                  <th className="se-th se-th--economy">What the 2035 Economy Rewards</th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="se-row">
                    <td className="se-td se-td--school">{row.school}</td>
                    <td className="se-td se-td--economy">{row.economy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Economic stats */}
          <div className="se-stats">
            <span className="se-stats-label">By 2035</span>
            <div className="se-stats-grid">
              {stats.map((s, i) => (
                <div key={i} className="se-stat">
                  <span className="se-stat-value">{s.value}</span>
                  <span className="se-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="slide-source">
            Sources: World Economic Forum, Future of Jobs Report &middot; McKinsey
            &amp; Company &middot; OECD Employment Outlook
          </p>
        </div>
      </div>
    );
  },

  function Slide2() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className="slide slide-2">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">STRATEGIC CONTEXT</span>

          <h1 className="slide-headline">
            The demands on schools have expanded, but{' '}
            <span className="slide-gradient">the structures have not.</span>
          </h1>

          <p className="slide-subheader">
            Students now require capabilities beyond academic mastery to thrive after graduation. Yet most school systems were not designed to
            develop these outcomes systematically, across years, with continuity and evidence.
          </p>

          {/* Triangle of structural gaps */}
          <div className="sg-triangle">
            {/* SVG connector lines */}
            <svg className="sg-lines" viewBox="0 0 800 380" preserveAspectRatio="xMidYMid meet">
              {/* Top to bottom-left */}
              <line x1="400" y1="95" x2="155" y2="270" stroke="rgba(99,102,241,0.15)" strokeWidth="1.5" strokeDasharray="6 4" />
              {/* Top to bottom-right */}
              <line x1="400" y1="95" x2="645" y2="270" stroke="rgba(99,102,241,0.15)" strokeWidth="1.5" strokeDasharray="6 4" />
              {/* Bottom-left to bottom-right */}
              <line x1="195" y1="290" x2="605" y2="290" stroke="rgba(99,102,241,0.15)" strokeWidth="1.5" strokeDasharray="6 4" />
            </svg>

            {/* Top node — Capacity Gap */}
            <div className="sg-node sg-node--top">
              <div className="sg-node-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="sg-node-title">Capacity Gap</h3>
              <span className="sg-node-subtitle">The Guidance Bottleneck</span>
              <ul className="sg-node-list">
                <li>Counselor ratios often 1:400 to 1:800+</li>
                <li>Heavy administrative workload</li>
                <li>Application-season spikes</li>
              </ul>
              <div className="sg-node-outcome">
                <span className="sg-gap-arrow">&rarr;</span>
                Clarity comes under deadline pressure.
              </div>

              {/* Hover overlay */}
              <div className="sg-overlay">
                <span className="sg-overlay-label">Effect</span>
                <ul className="sg-overlay-list">
                  <li>Late-stage conversations</li>
                  <li>Reactive support</li>
                  <li>Limited individual depth</li>
                </ul>
              </div>
            </div>

            {/* Bottom-left node — Continuity Gap */}
            <div className="sg-node sg-node--bl">
              <div className="sg-node-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3 className="sg-node-title">Continuity Gap</h3>
              <span className="sg-node-subtitle">No Longitudinal Development Spine</span>
              <ul className="sg-node-list">
                <li>Academic silos (subject-by-subject)</li>
                <li>Year-to-year fragmentation</li>
                <li>No structured cross-grade progression</li>
              </ul>
              <div className="sg-node-outcome">
                <span className="sg-gap-arrow">&rarr;</span>
                Growth does not systematically build.
              </div>

              {/* Hover overlay */}
              <div className="sg-overlay">
                <span className="sg-overlay-label">Effect</span>
                <ul className="sg-overlay-list">
                  <li>Exposure without integration</li>
                  <li>Reflection without compounding</li>
                  <li>Activities without evidence accumulation</li>
                </ul>
              </div>
            </div>

            {/* Bottom-right node — Evidence Gap */}
            <div className="sg-node sg-node--br">
              <div className="sg-node-icon sg-node-icon--active">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3 className="sg-node-title">Evidence Gap</h3>
              <span className="sg-node-subtitle">No Structured Signal of Identity &amp; Skills</span>
              <ul className="sg-node-list">
                <li>Grades are measured precisely</li>
                <li>Mindset, direction, and skills are not</li>
              </ul>
              <div className="sg-node-outcome">
                <span className="sg-gap-arrow">&rarr;</span>
                Uncertainty, identity confusion, parent-driven choices.
              </div>

              {/* Hover overlay */}
              <div className="sg-overlay">
                <span className="sg-overlay-label">Effect</span>
                <ul className="sg-overlay-list">
                  <li>Decisions rely on interviews &amp; impressions</li>
                  <li>Parents rely on opinion</li>
                  <li>Students lack documented growth trajectory</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="slide-takeaway">
            Schools are optimizing academics well. But identity, skills, and direction lack structured infrastructure.
          </p>
        </div>
      </div>
    );
  },

  function SlideGapPersonas() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    const gaps = [
      {
        id: 'capacity',
        label: 'Capacity Gap',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
      {
        id: 'continuity',
        label: 'Continuity Gap',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        ),
      },
      {
        id: 'evidence',
        label: 'Evidence Gap',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
          </svg>
        ),
      },
    ];

    const personas = [
      {
        name: 'The High-Performing Drifter',
        bornFrom: ['continuity', 'evidence'],
        bornLabel: 'Continuity + Evidence Gap',
        points: [
          'Strong grades.',
          'No longitudinal identity development.',
          'No structured signal of strengths.',
        ],
        outcome: 'Performs well, lacks direction.',
        img: imgDrifter,
      },
      {
        name: 'The Silent Slipper',
        bornFrom: ['capacity', 'continuity'],
        bornLabel: 'Capacity + Continuity Gap',
        points: [
          'Limited individual attention.',
          'Fragmented engagement.',
          'No early activation of potential.',
        ],
        outcome: 'Gradual disengagement, unnoticed.',
        img: imgSlipper,
      },
      {
        name: 'The Borrowed Dreamer',
        bornFrom: ['evidence'],
        bornLabel: 'Evidence Gap',
        points: [
          'No documented growth signal.',
          'No self-awareness infrastructure.',
          'Parents fill the vacuum.',
        ],
        outcome: 'Ambition outsourced.',
        img: imgDreamer,
      },
      {
        name: 'The October Panicker',
        bornFrom: ['capacity', 'evidence'],
        bornLabel: 'Capacity + Evidence Gap',
        points: [
          'Late-stage conversations.',
          'No accumulated portfolio.',
          'Deadlines approaching.',
        ],
        outcome: 'Decisions under pressure.',
        img: imgPanicker,
      },
    ];

    return (
      <div className="slide slide-gap-personas">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        {/* Sticky header */}
        <div className={`sgp-sticky ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">CAUSE AND EFFECT</span>

          <h1 className="slide-headline">
            When structure fails,{' '}
            <span className="slide-gradient">patterns emerge.</span>
          </h1>

          <div className="sgp-gaps">
            {gaps.map((g) => (
              <div key={g.id} className="sgp-gap">
                <div className="sgp-gap-icon">{g.icon}</div>
                <span className="sgp-gap-label">{g.label}</span>
              </div>
            ))}
          </div>

          <div className="sgp-connector">
            <span className="sgp-connector-line" />
            <span className="sgp-connector-text">These constraints shape student behavior.</span>
            <svg className="sgp-connector-arrow" width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 1l6 8 6-8" stroke="rgba(99,102,241,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Scrolling persona cards */}
        <div className={`sgp-scroll ${loaded ? 'loaded' : ''}`}>
          {personas.map((p, idx) => (
            <div key={p.name} className="sgp-card">
              <div className="sgp-card-img">
                <img src={p.img} alt={p.name} />
              </div>
              <div className="sgp-card-body">
                <span className="sgp-card-num">{'0' + (idx + 1)}</span>
                <h3 className="sgp-card-name">{p.name}</h3>
                <span className="sgp-card-born">{p.bornLabel}</span>
                <ul className="sgp-card-list">
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                <div className="sgp-card-outcome">
                  <span className="sgp-card-arrow">&rarr;</span>
                  {p.outcome}
                </div>
              </div>
            </div>
          ))}

          <p className="slide-takeaway sgp-footer">
            The personas are not personality types. They are structural outcomes.
          </p>
        </div>
      </div>
    );
  },

  function SlideSuperpower() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    /* ── LEFT SIDE: 600 dots overwhelmed around 1 counselor ── */
    const leftDots = [];
    const lcx = 200, lcy = 200;
    let lid = 0;
    const leftRings = [
      { r: 36, count: 10 }, { r: 52, count: 16 }, { r: 68, count: 22 },
      { r: 84, count: 28 }, { r: 100, count: 34 }, { r: 116, count: 40 },
      { r: 130, count: 46 }, { r: 144, count: 52 }, { r: 156, count: 56 },
      { r: 168, count: 60 }, { r: 178, count: 64 }, { r: 188, count: 72 },
      { r: 196, count: 100 },
    ];
    leftRings.forEach((ring) => {
      for (let i = 0; i < ring.count; i++) {
        const angle = (i / ring.count) * Math.PI * 2 + (ring.r * 0.1);
        const jR = (Math.random() - 0.5) * 5;
        const jA = (Math.random() - 0.5) * 0.08;
        const x = lcx + (ring.r + jR) * Math.cos(angle + jA);
        const y = lcy + (ring.r + jR) * Math.sin(angle + jA);
        leftDots.push({ id: lid++, x, y, delay: Math.random() * 1.5 });
      }
    });

    /* ── RIGHT SIDE: Platform slideshow state ── */
    const platformImages = [imgPlatform1, imgPlatform2, imgPlatform3, imgPlatform4];
    const [activeImg, setActiveImg] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveImg((prev) => (prev + 1) % platformImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="slide slide-superpower">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner slide-inner--center ${loaded ? 'loaded' : ''}`}>
          <h1 className="slide-headline slide-headline--hero">
            <span className="slide-gradient">What If We Gave Schools Superpowers?</span>
          </h1>

          <div className="ssp-split">
            {/* ── LEFT: Today ── */}
            <div className="ssp-panel ssp-panel--before">
              <span className="ssp-panel-label ssp-label--before">Today</span>
              <svg className="ssp-svg-small" viewBox="0 0 400 400">
                {leftDots.map((d) => (
                  <circle key={d.id} cx={d.x} cy={d.y} r="2" className="ssp-dot"
                    style={{ animationDelay: `${d.delay}s` }} />
                ))}
                <g transform={`translate(${lcx - 14}, ${lcy - 16})`}>
                  <circle cx="14" cy="14" r="24" className="ssp-counselor-bg" />
                  <path d="M17 18v-2a3.5 3.5 0 0 0-3.5-3.5h-7A3.5 3.5 0 0 0 3 16v2"
                    fill="none" stroke="#6366f1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="10" cy="7.5" r="3.5"
                    fill="none" stroke="#6366f1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M25 18v-2a3.5 3.5 0 0 0-2.6-3.4"
                    fill="none" stroke="#6366f1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 2.6a3.5 3.5 0 0 1 0 6.8"
                    fill="none" stroke="#6366f1" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <span className="ssp-ratio">1 : 600</span>
              <span className="ssp-caption">Overwhelmed. Reactive. Students fall through the cracks.</span>
            </div>

            {/* ── ARROW ── */}
            <div className="ssp-arrow">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M8 24h28M30 16l8 8-8 8" stroke="#6366f1" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* ── RIGHT: With WeGuide ── */}
            <div className="ssp-panel ssp-panel--after">
              <span className="ssp-panel-label ssp-label--after">With WeGuide</span>
              <div className="ssp-laptop">
                <div className="ssp-laptop__toolbar">
                  <span className="ssp-tl ssp-tl--red" />
                  <span className="ssp-tl ssp-tl--yellow" />
                  <span className="ssp-tl ssp-tl--green" />
                </div>
                <div className="ssp-laptop__screen">
                  {platformImages.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`WeGuide platform view ${i + 1}`}
                      className={`ssp-laptop__img ${i === activeImg ? 'ssp-laptop__img--active' : ''}`}
                    />
                  ))}
                </div>
              </div>
              <div className="ssp-right-footer">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="ssp-right-icon">
                  <circle cx="16" cy="16" r="15" fill="rgba(16,185,129,0.08)" stroke="rgba(16,185,129,0.25)" strokeWidth="1.2" />
                  <path d="M19 21v-1.5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3V21" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="15" cy="12" r="2.5" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M23 21v-1.5a3 3 0 0 0-2.2-2.9" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 8.1a3 3 0 0 1 0 5.8" stroke="#10b981" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="ssp-right-label">Platform <span style={{color:'#6b7280'}}>+</span> Counselor</span>
              </div>
              <span className="ssp-caption">Every student guided. Every counselor empowered. Every school transformed.</span>
            </div>
          </div>
        </div>
      </div>
    );
  },

  function SlideTimeComparison() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className="slide slide-time">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner stc-inner ${loaded ? 'loaded' : ''}`}>

          {/* ── HERO NUMBERS ── */}
          <div className="stc-hero">
            <div className="stc-side stc-side--left">
              <span className="stc-side-label">Traditional System</span>
              <span className="stc-big-num stc-big-num--red">6</span>
              <span className="stc-big-unit">hours</span>
              <span className="stc-side-sub">720 hrs &divide; 600 students &times; 5 yrs</span>
            </div>

            <div className="stc-vs">
              <span className="stc-vs-text">vs</span>
            </div>

            <div className="stc-side stc-side--right">
              <span className="stc-side-label">WeGuide Model</span>
              <span className="stc-big-num stc-big-num--green">225</span>
              <span className="stc-big-unit">hours</span>
              <span className="stc-side-sub">15 hrs &times; 3 terms &times; 5 yrs</span>
            </div>
          </div>

          {/* ── BAR COMPARISON ── */}
          <div className="stc-bars">
            <div className="stc-bar-track">
              <div className="stc-bar stc-bar--small">
                <span className="stc-bar-inner-label">6 hrs</span>
              </div>
              <div className="stc-bar stc-bar--large">
                <span className="stc-bar-inner-label">225 hrs</span>
              </div>
            </div>
          </div>

          {/* ── 37x HERO ── */}
          <div className="stc-multiplier-wrap">
            <span className="stc-multiplier-num">37&times;</span>
            <span className="stc-multiplier-label">more developmental time</span>
          </div>

          {/* ── CONTRAST LINES ── */}
          <div className="stc-contrasts">
            <div className="stc-contrast-line">
              <span className="stc-cl stc-cl--dim">6 hrs = conversation</span>
              <span className="stc-cl-arrow">&rarr;</span>
              <span className="stc-cl stc-cl--bright">225 hrs = identity formation</span>
            </div>
            <div className="stc-contrast-line">
              <span className="stc-cl stc-cl--dim">6 hrs = advice</span>
              <span className="stc-cl-arrow">&rarr;</span>
              <span className="stc-cl stc-cl--bright">225 hrs = skill compounding</span>
            </div>
            <div className="stc-contrast-line">
              <span className="stc-cl stc-cl--dim">6 hrs = pressure</span>
              <span className="stc-cl-arrow">&rarr;</span>
              <span className="stc-cl stc-cl--bright">225 hrs = gradual clarity</span>
            </div>
          </div>

          {/* ── CLOSING ── */}
          <p className="stc-closing">
            The problem was never motivation. <span className="slide-gradient" style={{ fontWeight: 800, fontSize: '1.25rem' }}>It was time and structure.</span>
          </p>
        </div>
      </div>
    );
  },

  function SlideStatement() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className="slide slide-statement">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />
        <div className={`slide-inner slide-inner--center ${loaded ? 'loaded' : ''}`}>
          <h1 className="sst-headline">
            If the Gap Is <span className="sst-em sst-em--red">Structural</span>,<br />
            the Solution Must Be <span className="sst-em sst-em--green">Infrastructural</span>.
          </h1>
          <p className="sst-sub">WeGuide is the Infrastructure for Human Potential.</p>
        </div>
      </div>
    );
  },

  function SlideWhatIs() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className="slide slide-whatis">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner swi-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">WHAT IS WEGUIDE?</span>

          {/* ── Definition ── */}
          <p className="swi-definition">
            A longitudinal development infrastructure embedded inside schools to build
            <strong> identity</strong>, <strong>skills</strong>, and <strong>direction</strong> from ages 12&ndash;17.
          </p>

          {/* ── 3 Pillars ── */}
          <div className="swi-pillars">
            <div className="swi-pillar">
              <div className="swi-pillar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3 className="swi-pillar-title">Development Engine</h3>
              <p className="swi-pillar-desc">A structured multi-year journey across six human dimensions.</p>
            </div>
            <div className="swi-pillar">
              <div className="swi-pillar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v18h18" /><path d="M7 16l4-8 4 5 5-9" />
                </svg>
              </div>
              <h3 className="swi-pillar-title">Evidence System</h3>
              <p className="swi-pillar-desc">Continuous tracking of student growth, skills, and mindset.</p>
            </div>
            <div className="swi-pillar">
              <div className="swi-pillar-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="swi-pillar-title">Guidance Amplifier</h3>
              <p className="swi-pillar-desc">Equips counselors with longitudinal student intelligence before Grade 12.</p>
            </div>
          </div>

          {/* ── Not / It Is ── */}
          <div className="swi-contrast">
            <div className="swi-contrast-col">
              <span className="swi-contrast-label swi-contrast-label--red">WeGuide is not</span>
              <ul className="swi-list swi-list--red">
                <li>A career test</li>
                <li>A one-time workshop</li>
                <li>A Grade 12 intervention</li>
              </ul>
            </div>
            <div className="swi-contrast-divider" />
            <div className="swi-contrast-col">
              <span className="swi-contrast-label swi-contrast-label--green">WeGuide is</span>
              <ul className="swi-list swi-list--green">
                <li>A 5-year developmental spine</li>
                <li>Embedded in the academic calendar</li>
                <li>Turning growth into measurable intelligence</li>
              </ul>
            </div>
          </div>

          {/* ── Closing ── */}
          <p className="swi-closing">
            We don&rsquo;t wait for students to choose a future.<br />
            <strong>We help them build the capacity to choose well.</strong>
          </p>
        </div>
      </div>
    );
  },

  function SlideJourney() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    const grades = [
      {
        grade: 7,
        phase: 'Exploration & Baseline',
        title: 'Exploration & Baseline',
        objective: 'Expand awareness. Capture early signal.',
        color: '#6366f1',
        img: imgGrade7,
        sections: [
          {
            label: 'What Mazen Experiences',
            items: ['Rotates across all 6 developmental dimensions', 'Hands-on studios (problem-solving, digital builds, team challenges)', 'Structured reflection after every project', 'Portfolio artifacts saved digitally'],
          },
          {
            label: 'What We Capture',
            items: ['Early skill indicators (systems reasoning, digital intuition)', 'Engagement patterns (solo vs team preference)', 'Confidence vs hesitation moments', 'Baseline radar profile generated'],
          },
        ],
        outcome: {
          stats: ['45 hours of structured development', '10+ documented artifacts', 'First growth map', 'Clear emerging analytical signal'],
          shift: { from: 'I like computers', to: 'I think in systems.' },
        },
      },
      {
        grade: 8,
        phase: 'Pattern Recognition & Early Strengths',
        title: 'Pattern Recognition & Early Strengths',
        objective: 'Strengthen signal. Deepen exposure.',
        color: '#818cf8',
        img: imgGrade8,
        sections: [
          {
            label: 'What Mazen Experiences',
            items: ['More complex studios across key dimensions', 'First higher-difficulty systems challenges', 'Digital problem-solving projects', 'Guided peer collaboration tasks', 'Structured growth reviews each term'],
          },
          {
            label: 'What We Capture',
            items: ['Consistency in Systems Thinking performance', 'Acceleration in Digital Fluency', 'Collaboration behavior under pressure', 'Creative risk-taking level', 'Confidence trend across terms'],
          },
        ],
        outcome: {
          stats: ['90 cumulative development hours (Grade 7 + 8)', '20+ documented portfolio artifacts', 'Strong analytical trend emerging', 'Early data-backed strength cluster'],
          shift: { from: 'I think in systems', to: "I'm consistently strong in structured problem-solving." },
        },
      },
      {
        grade: 9,
        phase: 'Skill Building',
        title: 'Skill Building',
        objective: 'Move from exploration to intentional development.',
        color: '#10b981',
        img: imgGrade9,
        sections: [
          {
            label: 'What Mazen Experiences',
            items: ['Selects deeper Systems & Digital studios', 'Algorithmic thinking challenges', 'Applied problem-solving projects', 'Structured teamwork simulations', 'Mid-year growth feedback session'],
          },
          {
            label: 'What We Capture',
            items: ['Performance stability in Systems Thinking', 'Growth velocity in Digital Fluency', 'Execution consistency', 'Independent task completion score', 'Emerging leadership signal'],
          },
        ],
        outcome: {
          stats: ['135 cumulative development hours', '30+ portfolio artifacts', 'Clear analytical dominance', 'Career cluster narrowing begins'],
          shift: { from: 'Broad exploration', to: 'Technical skill compounding.' },
        },
      },
      {
        grade: 10,
        phase: 'Signal Strength & Differentiation',
        title: 'Signal Strength & Differentiation',
        objective: 'Solidify strengths. Build proof.',
        color: '#34d399',
        img: imgGrade10,
        sections: [
          {
            label: 'What Mazen Experiences',
            items: ['Advanced systems modeling studio', 'AI & data logic challenges', 'Cross-dimension integration projects', 'Performance review with dashboard trends'],
          },
          {
            label: 'What We Capture',
            items: ['Percentile ranking across domains', 'Cross-term consistency index', 'Initiative & problem ownership score', 'Collaboration maturity growth'],
          },
        ],
        outcome: {
          stats: ['180 cumulative development hours', 'Strong Systems + Digital dominance', 'Career match engine activated', 'Early high-fit technical pathways identified'],
          shift: { from: 'Strong student', to: 'Profile-backed technical candidate.' },
        },
      },
      {
        grade: 11,
        phase: 'Integration & Alignment',
        title: 'Integration & Alignment',
        objective: 'Connect strengths to real-world pathways.',
        color: '#f59e0b',
        img: imgGrade11,
        sections: [
          {
            label: 'What Mazen Experiences',
            items: ['Integrated bootcamp (Systems + AI + collaboration)', 'Career pathway simulations', 'Mentor-style reflection sessions', 'University ecosystem mapping'],
          },
          {
            label: 'What We Capture',
            items: ['Stability of career fit scores', 'Cognitive complexity index', 'Stress performance indicators', 'Self-direction maturity level'],
          },
        ],
        outcome: {
          stats: ['225 cumulative development hours', 'High alignment with analytical/technical fields', 'Career match scores above 85% in top clusters', 'Reduced uncertainty'],
          shift: { from: 'Skill strength', to: 'Strategic direction.' },
        },
      },
      {
        grade: 12,
        phase: 'Evidence-Based Decision',
        title: 'Evidence-Based Decision',
        objective: 'Choose with confidence.',
        color: '#ef4444',
        img: imgGrade12,
        sections: [
          {
            label: 'What Mazen Experiences',
            items: ['Counselor meeting using 5-year dashboard', 'Career match report finalized', 'University vibe alignment analysis', 'Portfolio packaging support'],
          },
          {
            label: 'What We Capture',
            items: ['Final stability index', 'Strength dominance confirmation', 'Identity coherence score'],
          },
        ],
        outcome: {
          stats: ['91% Computer Science / AI', '86% Systems Engineering', '83% Data Science & Analytics', '80% Mechatronics Engineering'],
          statsLabel: 'Career Matches',
          extra: ['Research-Intensive — High Match', 'Innovation Hub — High Match'],
          extraLabel: 'University Vibes',
          shift: { from: 'Pressure', to: 'Precision.' },
        },
      },
    ];

    const scrollRef = useRef(null);
    const [activeGrade, setActiveGrade] = useState(0);

    useEffect(() => {
      const container = scrollRef.current;
      if (!container) return;
      const onScroll = () => {
        const sections = container.querySelectorAll('.sj-section');
        const containerTop = container.scrollTop + container.offsetHeight * 0.4;
        let active = 0;
        sections.forEach((sec, i) => {
          if (sec.offsetTop <= containerTop) active = i;
        });
        setActiveGrade(active);
      };
      container.addEventListener('scroll', onScroll, { passive: true });
      return () => container.removeEventListener('scroll', onScroll);
    }, []);

    /* Prevent slide-level keyboard nav while scrolling inside this slide */
    const handleWheel = (e) => {
      const el = scrollRef.current;
      if (!el) return;
      const atTop = el.scrollTop === 0 && e.deltaY < 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 2 && e.deltaY > 0;
      if (!atTop && !atBottom) e.stopPropagation();
    };

    return (
      <div className="slide slide-journey" onWheel={handleWheel}>
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />

        <div className={`slide-inner sj-inner ${loaded ? 'loaded' : ''}`}>
          {/* ── Fixed left nav ── */}
          <div className="sj-nav">
            <span className="sj-nav-title">Student Journey</span>
            {grades.map((g, i) => (
              <button
                key={g.grade}
                className={`sj-nav-dot ${i === activeGrade ? 'sj-nav-dot--active' : ''}`}
                style={{ '--dot-color': g.color }}
                onClick={() => {
                  const sec = scrollRef.current?.querySelectorAll('.sj-section')[i];
                  sec?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <span className="sj-nav-dot-circle" />
                <span className="sj-nav-dot-label">Grade {g.grade}</span>
              </button>
            ))}
          </div>

          {/* ── Scrollable journey ── */}
          <div className="sj-scroll" ref={scrollRef}>
            {/* ── Hero intro ── */}
            <div className="sj-section sj-section--hero">
              <div className="sj-hero sj-hero--split">
                <div className="sj-hero-text">
                  <h2 className="sj-hero-title">
                    Meet <span className="sj-hero-name">Mazen</span>
                  </h2>
                  <p className="sj-hero-sub">The Longitudinal Build (Grade 7&ndash;12)</p>
                  <p className="sj-hero-bio">
                    Mazen is 12 years old. A solid student &mdash; not struggling, not extraordinary.
                    Good grades in math and science, average in languages, inconsistent in group projects.
                  </p>
                  <div className="sj-hero-traits">
                    <div className="sj-trait">
                      <span className="sj-trait-label">Outside school</span>
                      <ul className="sj-trait-list">
                        <li>Strategy video games &amp; logic puzzles</li>
                        <li>Builds things &mdash; LEGO sets, Arduino kits</li>
                        <li>Watches how-technology-works videos</li>
                        <li>Prefers structured challenges over open-ended tasks</li>
                      </ul>
                    </div>
                    <div className="sj-trait">
                      <span className="sj-trait-label">In class</span>
                      <ul className="sj-trait-list">
                        <li>Finishes technical assignments quickly</li>
                        <li>Rarely raises his hand unless confident</li>
                        <li>Works better alone than in large groups</li>
                        <li>Teachers say: <em>&ldquo;Capable but quiet.&rdquo;</em></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="sj-hero-avatar">
                  <img src={imgMazen} alt="Mazen" className="sj-hero-img" />
                </div>
              </div>
            </div>

            {grades.map((g, i) => {
              const isEven = i % 2 === 0;
              return (
                <div className="sj-section" key={g.grade}>
                  <div className={`sj-card ${isEven ? 'sj-card--left' : 'sj-card--right'}`}>
                    <div className="sj-card-text">
                      <div className="sj-card-header">
                        <span className="sj-grade-badge" style={{ background: g.color }}>{g.grade}</span>
                        <span className="sj-phase-tag" style={{ color: g.color }}>{g.phase}</span>
                      </div>
                      <h3 className="sj-card-title">{g.title}</h3>

                      {/* Objective line */}
                      {g.objective && <p className="sj-card-objective">{g.objective}</p>}

                      {/* Simple format */}
                      {g.desc && <p className="sj-card-desc">{g.desc}</p>}
                      {g.bullets && (
                        <ul className="sj-card-bullets">
                          {g.bullets.map((b) => (
                            <li key={b} style={{ '--bullet-color': g.color }}>{b}</li>
                          ))}
                        </ul>
                      )}

                      {/* Rich format: multiple sections */}
                      {g.sections && (
                        <div className="sj-card-sections">
                          {g.sections.map((sec) => (
                            <div className="sj-card-sec" key={sec.label}>
                              <span className="sj-card-sec-label" style={{ color: g.color }}>{sec.label}</span>
                              <ul className="sj-card-bullets">
                                {sec.items.map((item) => (
                                  <li key={item} style={{ '--bullet-color': g.color }}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Outcome block */}
                      {g.outcome && (
                        <div className="sj-card-outcome" style={{ borderColor: `${g.color}30` }}>
                          <span className="sj-card-sec-label" style={{ color: g.color }}>
                            {g.outcome.statsLabel || `End of Grade ${g.grade}`}
                          </span>
                          <ul className="sj-card-bullets">
                            {g.outcome.stats.map((s) => (
                              <li key={s} style={{ '--bullet-color': g.color }}>{s}</li>
                            ))}
                          </ul>
                          {g.outcome.extraLabel && (
                            <>
                              <span className="sj-card-sec-label" style={{ color: g.color, marginTop: '0.4rem' }}>
                                {g.outcome.extraLabel}
                              </span>
                              <ul className="sj-card-bullets">
                                {g.outcome.extra.map((e) => (
                                  <li key={e} style={{ '--bullet-color': g.color }}>{e}</li>
                                ))}
                              </ul>
                            </>
                          )}
                          {g.outcome.shift && (
                            <div className="sj-shift">
                              <span className="sj-shift-from">&ldquo;{g.outcome.shift.from}&rdquo;</span>
                              <span className="sj-shift-arrow">&rarr;</span>
                              <span className="sj-shift-to" style={{ color: g.color }}>&ldquo;{g.outcome.shift.to}&rdquo;</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="sj-card-image" style={{ borderColor: g.color }}>
                      {g.img ? (
                        <img src={g.img} alt={`Grade ${g.grade}`} className="sj-card-img" />
                      ) : (
                        <div className="sj-placeholder" style={{ background: `linear-gradient(135deg, ${g.color}15, ${g.color}08)` }}>
                          <span className="sj-placeholder-grade" style={{ color: g.color }}>Grade {g.grade}</span>
                          <span className="sj-placeholder-text">Image Placeholder</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="sj-section sj-section--end">
              <p className="sj-closing">
                Mazen didn&rsquo;t guess his future.<br />
                <strong>He accumulated evidence for it.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  },

  /* ── Slide 10 — The Decision Lab ── */
  function SlideDecisionLab() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    const participants = [
      { icon: '👨‍👩‍👦', label: 'Parents' },
      { icon: '🧭', label: 'Counselors' },
      { icon: '🟣', label: 'WeGuide Team' },
    ];

    const layers = [
      { label: 'Identity Signals', desc: 'Who Mazen is becoming — values, interests, strengths', color: '#6366f1' },
      { label: 'Skill Portfolio', desc: '6 years of studio artifacts, project outcomes, and peer feedback', color: '#8b5cf6' },
      { label: 'Behavioral Patterns', desc: 'Consistency, collaboration style, leadership moments', color: '#a78bfa' },
      { label: 'Career & Academic Alignment', desc: 'Evidence-based matches to university paths and career fields', color: '#c084fc' },
    ];

    return (
      <div className={`slide slide-decision-lab ${loaded ? 'loaded' : ''}`}>
        <div className="sdl-inner">
          <div className="sdl-top">
            <span className="sdl-label">After 6 Years of Structured Growth</span>
            <h1 className="sdl-title">The Decision Lab</h1>
            <p className="sdl-subtitle">
              Where years of accumulated evidence meet the people who matter most.
            </p>
          </div>

          <div className="sdl-content">
            <div className="sdl-left">
              <div className="sdl-participants">
                <div className="sdl-participants-label">Around the table:</div>
                {participants.map((p, i) => (
                  <div className="sdl-participant" key={i} style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
                    <span className="sdl-participant-icon">{p.icon}</span>
                    <span className="sdl-participant-name">{p.label}</span>
                  </div>
                ))}
              </div>

              <div className="sdl-layers">
                <div className="sdl-layers-label">What's on the table:</div>
                {layers.map((l, i) => (
                  <div className="sdl-layer" key={i} style={{ animationDelay: `${0.6 + i * 0.12}s` }}>
                    <div className="sdl-layer-bar" style={{ background: l.color }} />
                    <div className="sdl-layer-text">
                      <span className="sdl-layer-name">{l.label}</span>
                      <span className="sdl-layer-desc">{l.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="sdl-closing">
                Mazen doesn't guess. <strong>He decides with evidence.</strong>
              </p>
            </div>

            <div className="sdl-right">
              <div className="sdl-image-wrap">
                <img src={imgDecisionLab} alt="The Decision Lab" className="sdl-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  function SlideDashboardDemo() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    const views = [
      { label: 'Student View', color: '#6366f1', desc: 'Track your own growth, strengths, and portfolio over time.' },
      { label: 'Parent View', color: '#10b981', desc: 'See your child\u2019s developmental trajectory with real evidence.' },
      { label: 'Counselor View', color: '#f59e0b', desc: 'Access longitudinal student intelligence before Grade 12.' },
      { label: 'School Admin View', color: '#ef4444', desc: 'Monitor cohort-level development trends across the school.' },
    ];

    return (
      <div className="slide slide-dashboard-demo">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner sdd-inner ${loaded ? 'loaded' : ''}`}>
          <div className="sdd-left">
            <span className="slide-label">THE WEGUIDE PLATFORM</span>
            <h1 className="sdd-headline">
              One student. <span className="slide-gradient">Four perspectives.</span>
            </h1>
            <p className="sdd-sub">
              Mazen&rsquo;s journey is visible to everyone who matters &mdash; each with the right level of insight.
            </p>
            <div className="sdd-views">
              {views.map((v) => (
                <div key={v.label} className="sdd-view">
                  <span className="sdd-view-dot" style={{ background: v.color }} />
                  <div className="sdd-view-text">
                    <span className="sdd-view-label" style={{ color: v.color }}>{v.label}</span>
                    <span className="sdd-view-desc">{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="sdd-right">
            <div className="sdd-laptop">
              <div className="sdd-laptop__toolbar">
                <span className="ssp-tl ssp-tl--red" />
                <span className="ssp-tl ssp-tl--yellow" />
                <span className="ssp-tl ssp-tl--green" />
              </div>
              <div className="sdd-laptop__school-bar">
                <img src={imgLyceeLogo} alt="School logo" className="sdd-laptop__school-logo" />
              </div>
              <div className="sdd-laptop__screen">
                <video
                  className="sdd-laptop__video"
                  src={platformVideo2}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              <div className="sdd-laptop__footer">
                <span className="sdd-laptop__footer-text">Powered by</span>
                <img src={imgWeguideLogo} alt="WeGuide" className="sdd-laptop__footer-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  function SlideRadar() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    const dims = [
      { label: 'Creative\nExpression', short: 'Creative Expression', color: '#f472b6' },
      { label: 'Cognitive\nThinking', short: 'Cognitive Thinking', color: '#6366f1' },
      { label: 'Identity\nDevelopment', short: 'Identity Development', color: '#a78bfa' },
      { label: 'Wellbeing', short: 'Wellbeing', color: '#34d399' },
      { label: 'Social\nConnection', short: 'Social Connection', color: '#fbbf24' },
      { label: 'AI & Digital\nFluency', short: 'AI & Digital Fluency', color: '#38bdf8' },
    ];

    const cx = 200, cy = 200, R = 140;
    const rings = [0.25, 0.5, 0.75, 1];
    const angles = dims.map((_, i) => (Math.PI / 2) + (2 * Math.PI * i) / dims.length);
    const pt = (a, r) => [cx + r * Math.cos(a), cy - r * Math.sin(a)];

    // Sample student data (Mazen's profile)
    const values = [0.55, 0.88, 0.62, 0.7, 0.58, 0.82];
    const dataPoints = values.map((v, i) => pt(angles[i], R * v));

    return (
      <div className="slide slide-radar">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner sr-inner ${loaded ? 'loaded' : ''}`}>
          <div className="sr-left">
            <span className="slide-label">THE WEGUIDE FRAMEWORK</span>
            <h1 className="sr-headline">
              <span className="slide-gradient">6 Dimensions.</span> One complete picture.
            </h1>
            <p className="sr-sub">
              Every student is measured across six human dimensions &mdash; not just academics. The radar builds over time, revealing strengths, gaps, and growth trajectories.
            </p>
            <div className="sr-chips">
              {dims.map((d) => (
                <span key={d.short} className="sr-chip" style={{ borderColor: d.color, color: d.color }}>
                  <span className="sr-chip-dot" style={{ background: d.color }} />
                  {d.short}
                </span>
              ))}
            </div>
          </div>

          <div className="sr-right">
            <div className="sr-radar-wrap">
              <svg className="sr-radar-svg" viewBox="0 0 400 400">
                {/* Ring grid */}
                {rings.map((r) => (
                  <polygon
                    key={r}
                    points={angles.map((a) => pt(a, R * r).join(',')).join(' ')}
                    className="sr-ring"
                  />
                ))}
                {/* Axis lines */}
                {angles.map((a, i) => {
                  const [x2, y2] = pt(a, R);
                  return <line key={i} x1={cx} y1={cy} x2={x2} y2={y2} className="sr-axis" />;
                })}
                {/* Data shape */}
                <polygon points={dataPoints.map(p => p.join(',')).join(' ')} className="sr-data" />
                <polygon points={dataPoints.map(p => p.join(',')).join(' ')} className="sr-data-stroke" fill="none" />
                {/* Data points */}
                {dataPoints.map((p, i) => (
                  <circle key={i} cx={p[0]} cy={p[1]} r={4} fill={dims[i].color} className="sr-point" />
                ))}
                {/* Labels */}
                {angles.map((a, i) => {
                  const [lx, ly] = pt(a, R + 32);
                  return (
                    <text
                      key={i}
                      x={lx}
                      y={ly}
                      className="sr-label"
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill={dims[i].color}
                    >
                      {dims[i].label.split('\n').map((line, li) => (
                        <tspan key={li} x={lx} dy={li === 0 ? 0 : '1.15em'}>{line}</tspan>
                      ))}
                    </text>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  },

  function SlideAcademicModel() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    const domains = [
      { name: 'Creative Expression', short: 'CRE', color: '#ec4899' },
      { name: 'Systems & Critical Thinking', short: 'SYS', color: '#6366f1' },
      { name: 'Social Collaboration', short: 'SOC', color: '#f59e0b' },
      { name: 'Identity Development', short: 'ID', color: '#10b981' },
      { name: 'AI & Digital', short: 'AI', color: '#3b82f6' },
      { name: 'Wellbeing', short: 'WELL', color: '#ef4444' },
    ];

    const terms = [
      {
        label: 'Term 1',
        theme: 'Explore & Observe the World',
        core: [
          { domain: 0, code: 'CRE 101', title: 'Redesign Your Dream Room' },
          { domain: 1, code: 'SYS 101', title: 'Crack the Smart Safe' },
          { domain: 2, code: 'SOC 101', title: 'Debate & Dialogue' },
          { domain: 3, code: 'ID 101', title: 'Breaking Down Role Models' },
        ],
        elective: { domain: 4, code: 'AI 101', title: 'Why Does My Feed Know Me?' },
      },
      {
        label: 'Term 2',
        theme: 'Build & Experiment',
        core: [
          { domain: 0, code: 'CRE 102', title: 'Design to Reduce Friction' },
          { domain: 1, code: 'SYS 102', title: 'First on the Scene' },
          { domain: 2, code: 'SOC 102', title: 'Who Decides at the Trivia?' },
          { domain: 5, code: 'WELL 101', title: 'Move Smarter' },
        ],
        elective: { domain: 0, code: 'CRE 203', title: 'Design a Story Experience' },
      },
      {
        label: 'Term 3',
        theme: 'Apply & Integrate',
        core: [
          { domain: 0, code: 'CRE 201', title: 'Design for Someone Else' },
          { domain: 1, code: 'SYS 201', title: 'Build a Tower That Refuses to Fall' },
          { domain: 5, code: 'WELL 102', title: 'Train the Mind' },
          { domain: 3, code: 'ID 102', title: 'Built, Not Born' },
        ],
        elective: { domain: 2, code: 'SOC 201', title: 'Negotiation Lab' },
      },
    ];

    return (
      <div className="slide slide-academic">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner sam-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">THE ACADEMIC MODEL</span>
          <h1 className="slide-headline">
            <span className="slide-gradient">One Year. Three Terms. Fifteen Studios.</span>
          </h1>
          <p className="sam-subtitle">Each studio is a 3-hour workshop producing a tangible portfolio artifact.</p>

          {/* ── Domain legend ── */}
          <div className="sam-legend">
            {domains.map((d) => (
              <span className="sam-legend-item" key={d.short}>
                <span className="sam-legend-dot" style={{ background: d.color }} />
                {d.name}
              </span>
            ))}
          </div>

          {/* ── 3 Terms ── */}
          <div className="sam-terms">
            {terms.map((term, ti) => (
              <div className="sam-term" key={term.label} style={{ animationDelay: `${0.2 + ti * 0.15}s` }}>
                <div className="sam-term-header">
                  <div className="sam-term-header-left">
                    <span className="sam-term-label">{term.label}</span>
                    <span className="sam-term-theme">{term.theme}</span>
                  </div>
                  <span className="sam-term-hours">15 hrs &middot; 5 studios</span>
                </div>

                <div className="sam-studios">
                  <div className="sam-studio-group">
                    <span className="sam-group-label">Core Studios</span>
                    {term.core.map((s, si) => (
                      <div className="sam-studio" key={si} style={{ '--s-color': domains[s.domain].color }}>
                        <span className="sam-studio-badge" style={{ background: domains[s.domain].color }}>
                          {s.code}
                        </span>
                        <span className="sam-studio-title">{s.title}</span>
                        <span className="sam-studio-meta">3 hrs</span>
                      </div>
                    ))}
                  </div>
                  <div className="sam-studio-group sam-studio-group--elective">
                    <span className="sam-group-label">Elective</span>
                    <div className="sam-studio sam-studio--elective" style={{ '--s-color': domains[term.elective.domain].color }}>
                      <span className="sam-studio-badge" style={{ background: domains[term.elective.domain].color }}>
                        {term.elective.code}
                      </span>
                      <span className="sam-studio-title">{term.elective.title}</span>
                      <span className="sam-studio-meta">3 hrs</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Summary strip ── */}
          <div className="sam-summary">
            <div className="sam-stat">
              <span className="sam-stat-num">15</span>
              <span className="sam-stat-label">Studios / Year</span>
            </div>
            <div className="sam-stat-divider" />
            <div className="sam-stat">
              <span className="sam-stat-num">45</span>
              <span className="sam-stat-label">Hours / Year</span>
            </div>
            <div className="sam-stat-divider" />
            <div className="sam-stat">
              <span className="sam-stat-num">15</span>
              <span className="sam-stat-label">Portfolio Artifacts</span>
            </div>
            <div className="sam-stat-divider" />
            <div className="sam-stat">
              <span className="sam-stat-num">6</span>
              <span className="sam-stat-label">Domains Covered</span>
            </div>
          </div>
        </div>
      </div>
    );
  },

  /* ── Slide 13 — Let's Pilot One Term Together ── */
  function SlidePilot() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    const pilotItems = [
      { icon: '🎯', text: 'One age band' },
      { icon: '📐', text: 'Two developmental dimensions' },
      { icon: '🧩', text: 'Five structured studios' },
      { icon: '📅', text: 'One academic term' },
    ];

    const outcomes = [
      'Higher student engagement',
      'Clearer identity signals',
      'Measurable skill development',
      'Actionable insight for counselors',
    ];

    return (
      <div className={`slide slide-pilot ${loaded ? 'loaded' : ''}`}>
        <div className="spl-inner">
          <h1 className="spl-title">Let's Pilot One Term Together</h1>

          <p className="spl-intro">
            Your school is already shaping character, discipline, and academic excellence.<br />
            WeGuide multiplies that impact — <strong>structurally</strong> and <strong>measurably</strong>.
          </p>

          <div className="spl-start-label">Start with:</div>

          <div className="spl-items">
            {pilotItems.map((item, i) => (
              <div className="spl-item" key={i} style={{ animationDelay: `${0.3 + i * 0.12}s` }}>
                <span className="spl-item-icon">{item.icon}</span>
                <span className="spl-item-text">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="spl-promises">
            <span className="spl-promise">No overhaul.</span>
            <span className="spl-promise">No disruption.</span>
            <span className="spl-promise-em">Just a focused pilot embedded into your calendar.</span>
          </div>

          <div className="spl-outcomes">
            <div className="spl-outcomes-label">Within a single term, you will see:</div>
            <div className="spl-outcomes-list">
              {outcomes.map((o, i) => (
                <div className="spl-outcome" key={i} style={{ animationDelay: `${0.6 + i * 0.1}s` }}>
                  <span className="spl-outcome-check">✓</span>
                  <span>{o}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="spl-closing">
            Start small. Measure impact. <strong>Scale with confidence.</strong>
          </p>
        </div>
      </div>
    );
  },

  /* ── Slide 14 — Closing ── */
  function SlideClosing() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className={`slide slide-closing ${loaded ? 'loaded' : ''}`}>
        <div className="scl-inner">
          <h1 className="scl-title">
            Empower Your Students<br />
            <span className="scl-title-em">Before They Reach Uncertainty</span>
          </h1>

          <p className="scl-bridge">
            WeGuide ensures that when students sit for university and career counseling,<br />
            they arrive with <strong>years of structured growth</strong> behind them.
          </p>

          <div className="scl-three">
            <span className="scl-three-item">Identity explored.</span>
            <span className="scl-three-item">Skills built.</span>
            <span className="scl-three-item">Direction informed by evidence.</span>
          </div>

          <div className="scl-cta">
            <p className="scl-cta-line">Let's Multiply the Work Your School Is Already Doing.</p>
          </div>
        </div>
      </div>
    );
  },
];

export default function Presentation() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  const goHome = useCallback(() => navigate('/'), [navigate]);
  const goNext = useCallback(() => setCurrent((i) => Math.min(i + 1, total - 1)), [total]);
  const goPrev = useCallback(() => {
    if (current === 0) goHome();
    else setCurrent((i) => i - 1);
  }, [current, goHome]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') goHome();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, goHome]);

  const SlideComponent = SLIDES[current];
  const progressPct = ((current + 1) / total) * 100;

  return (
    <div className="presentation">
      {/* Progress bar */}
      <div className="pres-progress">
        <div className="pres-progress-fill" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Close button */}
      <button className="pres-close" onClick={goHome} aria-label="Close presentation">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18" /><path d="m6 6 12 12" />
        </svg>
      </button>

      {/* Side arrows */}
      <button className="pres-side-arrow pres-side-arrow--left" onClick={goPrev} aria-label="Previous slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button className="pres-side-arrow pres-side-arrow--right" onClick={goNext} disabled={current === total - 1} aria-label="Next slide">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Slide */}
      <div className="pres-stage">
        <SlideComponent />
      </div>

      {/* Bottom bar */}
      <div className="pres-controls">
        <span className="pres-counter">{current + 1} / {total}</span>
      </div>
    </div>
  );
}