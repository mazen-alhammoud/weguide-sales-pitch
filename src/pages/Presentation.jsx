import { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Presentation.css';
import studiosVideo from '../assets/Studios.mp4';
import platformVideo from '../assets/Platform.mp4';

/* ── Slide data ── */
const SLIDES = [
  function Slide1() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className="slide slide-1">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner slide-inner--split ${loaded ? 'loaded' : ''}`}>
          {/* Left — Text */}
          <div className="slide-split-left">
            <span className="slide-label">A SHARED COMMITMENT</span>

            <h1 className="slide-headline">
              Every student deserves to graduate with{' '}
              <span className="slide-gradient">clarity, capability, and direction.</span>
            </h1>

            <p className="slide-subheader">
              Our vision is simple: no student should face a life-defining
              decision without the mindset, skills, and agency to navigate
              it with confidence.
            </p>
          </div>

          {/* Right — Graphic */}
          <div className="slide-split-right">
            <div className="converge converge--vertical">
              {/* Three stakeholder cards with connectors */}
              <div className="converge-spokes converge-spokes--vertical">
                <div className="converge-spoke converge-spoke--1">
                  <div className="converge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="converge-title">Families</h4>
                    <p className="converge-desc">Want clarity on their child&rsquo;s direction, strengths, and readiness for what comes next</p>
                  </div>
                </div>

                <div className="converge-connector" aria-hidden="true">
                  <span className="converge-connector-dot" />
                  <span className="converge-connector-line" />
                  <span className="converge-connector-dot" />
                </div>

                <div className="converge-spoke converge-spoke--2">
                  <div className="converge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="converge-title">Educators</h4>
                    <p className="converge-desc">Need structured ways to develop the whole student beyond academic outcomes</p>
                  </div>
                </div>

                <div className="converge-connector" aria-hidden="true">
                  <span className="converge-connector-dot" />
                  <span className="converge-connector-line" />
                  <span className="converge-connector-dot" />
                </div>

                <div className="converge-spoke converge-spoke--3">
                  <div className="converge-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="converge-title">Communities</h4>
                    <p className="converge-desc">Depend on graduates who are adaptable, skilled, and prepared to contribute meaningfully</p>
                  </div>
                </div>
              </div>

              {/* Connector to hub */}
              <div className="converge-to-hub" aria-hidden="true">
                <span className="converge-connector-dot" />
                <span className="converge-connector-line converge-connector-line--long" />
                <svg className="converge-arrow" width="14" height="10" viewBox="0 0 14 10" fill="none">
                  <path d="M1 1l6 8 6-8" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Center hub */}
              <div className="converge-hub-wrap">
                <div className="converge-hub">
                  <div className="converge-hub-ring" />
                  <div className="converge-hub-core">
                    <span className="converge-hub-label">Student</span>
                    <span className="converge-hub-sub">The future each student is capable of building.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            As economies evolve, the role of education{' '}
            <span className="slide-gradient">evolves with them.</span>
          </h1>

          <p className="slide-subheader">
            Each major economic era has reshaped what schools prepare students
            to know, to do, and to become.
          </p>

          {/* Historical timeline — 4 eras */}
          <div className="slide-timeline">
            {/* Row labels */}
            <div className="tl-labels">
              <div className="tl-labels-spacer" />
              <div className="tl-row-label">Economy</div>
              <div className="tl-row-label">Education</div>
              <div className="tl-row-label">Learner</div>
            </div>

            {/* Era 1 */}
            <div className="tl-era">
              <div className="tl-era-header">
                <span className="tl-era-num">01</span>
                <h4 className="tl-era-title">Industrial Revolution</h4>
                <span className="tl-era-period">Late 18th – Early 20th C.</span>
              </div>
              <div className="tl-era-cell">Mechanization, steam &amp; electricity</div>
              <div className="tl-era-cell">Mass literacy, elite access</div>
              <div className="tl-era-cell">Basic literacy, generalist workforce</div>
            </div>

            {/* Era 2 */}
            <div className="tl-era">
              <div className="tl-era-header">
                <span className="tl-era-num">02</span>
                <h4 className="tl-era-title">Specialization Era</h4>
                <span className="tl-era-period">Mid 20th Century</span>
              </div>
              <div className="tl-era-cell">Division of labor, process automation</div>
              <div className="tl-era-cell">Mass secondary, professional preparation</div>
              <div className="tl-era-cell">Subject-specialized, linear career paths</div>
            </div>

            {/* Era 3 */}
            <div className="tl-era">
              <div className="tl-era-header">
                <span className="tl-era-num">03</span>
                <h4 className="tl-era-title">Digital Era</h4>
                <span className="tl-era-period">Late 20th – Early 21st C.</span>
              </div>
              <div className="tl-era-cell">Digitization, globalization</div>
              <div className="tl-era-cell">Credentialing, competitive placement</div>
              <div className="tl-era-cell">High-performing academic achiever</div>
            </div>

            {/* Era 4 — highlighted */}
            <div className="tl-era tl-era--active">
              <div className="tl-era-header">
                <span className="tl-era-num tl-era-num--active">04</span>
                <h4 className="tl-era-title tl-era-title--active">AI &amp; Acceleration</h4>
                <span className="tl-era-period">Today &rarr; Tomorrow</span>
              </div>
              <div className="tl-era-cell tl-era-cell--active">AI automation, rapid skill half-life, nonlinear careers</div>
              <div className="tl-era-cell tl-era-cell--active">Skills-based, self-directed, lifelong learning</div>
              <div className="tl-era-cell tl-era-cell--active">Adaptable, identity-aware, capable of continuous reinvention</div>
              <div className="tl-weguide">
                <span className="tl-weguide-label">WeGuide</span>
                <span className="tl-weguide-desc">Institutionalizing development for the skills-based era</span>
              </div>
            </div>
          </div>

          <p className="slide-source">
            Source: Boston Consulting Group, <em>The Power of Disruption in K-12 Education</em>, December 16, 2024.
          </p>
        </div>
      </div>
    );
  },

  function Slide3() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className="slide slide-3">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">THE DESIGN IMPERATIVE</span>

          <h1 className="slide-headline">
            The skills-based era requires{' '}
            <span className="slide-gradient">intentional developmental design.</span>
          </h1>

          <p className="slide-subheader">
            Academic programs and extracurricular offerings were built to support
            achievement and enrichment. Today&rsquo;s environment demands a structured
            system that develops identity, adaptability, and informed direction
            over time.
          </p>

          {/* Three pillars */}
          <div className="s3-pillars">
            {/* Pillar 1 — neutral */}
            <div className="s3-pillar">
              <div className="s3-pillar-header">
                <span className="s3-pillar-num">01</span>
                <div className="s3-pillar-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
              <h3 className="s3-pillar-title">Academic Systems Optimize for Performance</h3>
              <p className="s3-pillar-desc">Schools are highly effective at delivering:</p>
              <ul className="s3-pillar-list">
                <li>Subject mastery</li>
                <li>Assessment rigor</li>
                <li>Competitive university placement</li>
              </ul>
            </div>

            {/* Pillar 2 — transitional */}
            <div className="s3-pillar s3-pillar--mid">
              <div className="s3-pillar-header">
                <span className="s3-pillar-num">02</span>
                <div className="s3-pillar-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
                  </svg>
                </div>
              </div>
              <h3 className="s3-pillar-title">The New Era Optimizes for Adaptability</h3>
              <p className="s3-pillar-desc">Today&rsquo;s learners must develop:</p>
              <ul className="s3-pillar-list">
                <li>Self-awareness and direction</li>
                <li>Transferable capabilities</li>
                <li>Career adaptability</li>
                <li>Long-term resilience</li>
              </ul>
            </div>

            {/* Pillar 3 — highlighted */}
            <div className="s3-pillar s3-pillar--active">
              <div className="s3-pillar-header">
                <span className="s3-pillar-num s3-pillar-num--active">03</span>
                <div className="s3-pillar-icon s3-pillar-icon--active">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    <line x1="2" y1="8" x2="22" y2="8" />
                    <line x1="8" y1="2" x2="8" y2="22" />
                  </svg>
                </div>
              </div>
              <h3 className="s3-pillar-title s3-pillar-title--active">Development Requires Design</h3>
              <p className="s3-pillar-desc">
                Adaptability and direction do not emerge incidentally. They require
                structured progression, reflection, and longitudinal guidance.
              </p>
              <span className="s3-inflection">This is the inflection point.</span>
            </div>
          </div>

          <p className="slide-takeaway">
            This is not an addition to existing systems &mdash; it is a complementary
            developmental architecture designed for the emerging era.
          </p>
        </div>
      </div>
    );
  },

  function Slide4() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    /* Radar chart geometry — 6 dimensions on a hexagonal grid */
    const cx = 220, cy = 155, outerR = 105;
    const dims = [
      { label: 'Cognitive Thinking', pct: 0.85 },
      { label: 'Creative Expression', pct: 0.72 },
      { label: 'Social Connection', pct: 0.78 },
      { label: 'Self-Awareness', pct: 0.88 },
      { label: 'Digital Fluency', pct: 0.68 },
      { label: 'Physical Wellbeing', pct: 0.80 },
    ];

    const pt = (angle, r) => {
      const rad = (angle - 90) * (Math.PI / 180);
      return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
    };

    const hexPoints = (r) =>
      [0, 60, 120, 180, 240, 300].map((a) => pt(a, r).join(',')).join(' ');

    const filledPoints = dims
      .map((d, i) => pt(i * 60, outerR * d.pct).join(','))
      .join(' ');

    /* Label positions — pushed outward from hex vertices */
    const labelOffset = outerR + 28;
    const labelPositions = [0, 60, 120, 180, 240, 300].map((a) => {
      const [x, y] = pt(a, labelOffset);
      let anchor = 'middle';
      if (a === 60 || a === 120) anchor = 'start';
      if (a === 240 || a === 300) anchor = 'end';
      return { x, y: a === 180 ? y + 4 : a === 0 ? y - 2 : y + 2, anchor };
    });

    return (
      <div className="slide slide-4">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">THE WEGUIDE FRAMEWORK</span>

          <h1 className="slide-headline">
            WeGuide is a structured, multi-year architecture for{' '}
            <span className="slide-gradient">student development.</span>
          </h1>

          <p className="slide-subheader">
            A longitudinal framework that develops identity, capability, and
            direction from early adolescence through graduation.
          </p>

          {/* Two graphics side-by-side */}
          <div className="s4-graphics">
            {/* Left — Radar chart */}
            <div className="s4-radar">
              <h3 className="s4-section-title">The 6 Dimensions of Human Development&trade;</h3>
              <svg
                className="s4-radar-svg"
                viewBox="0 0 440 320"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Grid rings */}
                <polygon points={hexPoints(outerR)} className="s4-hex-ring" />
                <polygon points={hexPoints(outerR * 0.66)} className="s4-hex-ring" />
                <polygon points={hexPoints(outerR * 0.33)} className="s4-hex-ring" />

                {/* Axis lines from center to each vertex */}
                {[0, 60, 120, 180, 240, 300].map((a) => {
                  const [x2, y2] = pt(a, outerR);
                  return (
                    <line
                      key={a}
                      x1={cx}
                      y1={cy}
                      x2={x2}
                      y2={y2}
                      className="s4-hex-axis"
                    />
                  );
                })}

                {/* Filled area */}
                <polygon points={filledPoints} className="s4-hex-fill" />

                {/* Data points */}
                {dims.map((d, i) => {
                  const [dx, dy] = pt(i * 60, outerR * d.pct);
                  return <circle key={i} cx={dx} cy={dy} r="4" className="s4-hex-dot" />;
                })}

                {/* Center dot */}
                <circle cx={cx} cy={cy} r="3" className="s4-hex-center" />

                {/* Labels */}
                {dims.map((d, i) => (
                  <text
                    key={i}
                    x={labelPositions[i].x}
                    y={labelPositions[i].y}
                    textAnchor={labelPositions[i].anchor}
                    className="s4-hex-label"
                  >
                    {d.label}
                  </text>
                ))}
              </svg>
            </div>

            {/* Right — Developmental phases */}
            <div className="s4-phases">
              <h3 className="s4-section-title">Three Developmental Phases</h3>

              <div className="s4-phase-list">
                <div className="s4-phase s4-phase--1">
                  <div className="s4-phase-badge">01</div>
                  <div className="s4-phase-content">
                    <span className="s4-phase-grades">Grades 7–8</span>
                    <h4 className="s4-phase-name">Exploration</h4>
                    <p className="s4-phase-desc">
                      Students discover interests, strengths, and early identity
                      through broad exposure and guided reflection.
                    </p>
                  </div>
                </div>

                <div className="s4-phase-connector" aria-hidden="true">
                  <span className="s4-phase-connector-line" />
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 1l4 6 4-6" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="s4-phase s4-phase--2">
                  <div className="s4-phase-badge s4-phase-badge--mid">02</div>
                  <div className="s4-phase-content">
                    <span className="s4-phase-grades">Grades 9–10</span>
                    <h4 className="s4-phase-name">Skill Development</h4>
                    <p className="s4-phase-desc">
                      Students deepen capabilities across dimensions, building
                      transferable skills and personal direction.
                    </p>
                  </div>
                </div>

                <div className="s4-phase-connector" aria-hidden="true">
                  <span className="s4-phase-connector-line" />
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 1l4 6 4-6" stroke="rgba(99,102,241,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className="s4-phase s4-phase--3">
                  <div className="s4-phase-badge s4-phase-badge--active">03</div>
                  <div className="s4-phase-content">
                    <span className="s4-phase-grades">Grades 11–12</span>
                    <h4 className="s4-phase-name s4-phase-name--active">Integration</h4>
                    <p className="s4-phase-desc">
                      Students synthesize growth into a coherent identity and
                      actionable post-graduation direction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  function Slide5() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    const stages = [
      {
        num: '01',
        title: 'Diagnostic Foundation',
        items: [
          'Baseline identity & capability mapping',
          'Student development profile',
          'Initial strength & interest insights',
        ],
      },
      {
        num: '02',
        title: 'Structured Workshops',
        items: [
          'Term-based guided developmental sessions',
          'Applied projects & skill-building',
          'Cross-dimensional integration',
        ],
      },
      {
        num: '03',
        title: 'Longitudinal Tracking',
        items: [
          'Growth measurement across six dimensions',
          'Portfolio artifact creation',
          'Reflection & advisor checkpoints',
        ],
      },
      {
        num: '04',
        title: 'Decision Lab',
        items: [
          'Major alignment analysis',
          'Career pathway exploration',
          'University narrative development',
        ],
      },
    ];

    return (
      <div className="slide slide-5">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">THE WEGUIDE DEVELOPMENT SYSTEM</span>

          <h1 className="slide-headline">
            An integrated system for{' '}
            <span className="slide-gradient">identity, capability, and decision readiness.</span>
          </h1>

          <p className="slide-subheader">
            Five interconnected components that form a continuous developmental
            loop &mdash; from initial insight through informed post-graduation direction.
          </p>

          {/* Pipeline flow */}
          <div className="s5-pipeline">
            {/* Dashboard overlay wrapping all stages */}
            <div className="s5-dashboard-wrap">
              <div className="s5-dashboard-header">
                <div className="s5-dashboard-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="4" rx="1" />
                    <rect x="14" y="11" width="7" height="10" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                  </svg>
                </div>
                <span className="s5-dashboard-title">Intelligent Dashboard</span>
                <span className="s5-dashboard-desc">Student radar growth &middot; Counselor &amp; parent visibility &middot; Development continuity reports</span>
              </div>

              {/* Loop return path (SVG behind cards) */}
              <svg className="s5-loop-svg" viewBox="0 0 1060 40" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M 1020 0 C 1040 0, 1050 10, 1050 20 C 1050 30, 1040 40, 1020 40 L 40 40 C 20 40, 10 30, 10 20 C 10 10, 20 0, 40 0"
                  className="s5-loop-path"
                />
                <polygon points="34,0 40,8 28,8" className="s5-loop-arrow" />
              </svg>

              <div className="s5-stages">
                {stages.map((stage, i) => (
                  <div className="s5-stage-group" key={stage.num}>
                    <div className={`s5-card${i === stages.length - 1 ? ' s5-card--last' : ''}`}>
                      <div className="s5-card-header">
                        <span className={`s5-card-num${i === stages.length - 1 ? ' s5-card-num--active' : ''}`}>
                          {stage.num}
                        </span>
                        <h4 className={`s5-card-title${i === stages.length - 1 ? ' s5-card-title--active' : ''}`}>
                          {stage.title}
                        </h4>
                      </div>
                      <ul className="s5-card-list">
                        {stage.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {i < stages.length - 1 && (
                      <div className="s5-arrow" aria-hidden="true">
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                          <path
                            d="M0 8h16M12 2l6 6-6 6"
                            stroke="rgba(99,102,241,0.35)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Loop label */}
              <span className="s5-loop-label">Continuous Development Loop</span>
            </div>
          </div>

          <p className="slide-takeaway">
            From baseline insight to informed university decisions &mdash; structured across six years.
          </p>
        </div>
      </div>
    );
  },

  function Slide6() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    /* Top row: Grades 7→8→9 (left to right) */
    const topRow = [
      { grade: 7, title: 'Exploration Begins', phase: 'Exploration',
        items: ['Strength discovery', 'Exposure to domains', 'Foundational reflection habits'] },
      { grade: 8, title: 'Identity Awareness', phase: 'Exploration',
        items: ['Emerging interests mapped', 'Early capability indicators', 'Development portfolio initiated'] },
      { grade: 9, title: 'Skill Foundation', phase: 'Skill Development',
        items: ['Applied workshops', 'Project-based artifacts', 'Cross-domain integration'] },
    ];

    /* Bottom row: displayed 12←11←10 (path flows right-to-left) */
    const bottomRow = [
      { grade: 12, title: 'Integration', phase: 'Integration',
        items: ['Capstone reflection', 'Major clarity confirmation', 'Developmental dossier for admissions'] },
      { grade: 11, title: 'Alignment', phase: 'Integration',
        items: ['Major exploration & career mapping', 'Decision Lab begins', 'University narrative drafting'] },
      { grade: 10, title: 'Capability Development', phase: 'Skill Development',
        items: ['Measurable growth across dimensions', 'Early pathway exposure', 'Advisor-guided reflection'] },
    ];

    const intensity = { 7: 1, 8: 2, 9: 3, 10: 4, 11: 5, 12: 6 };

    const renderStop = (stop) => (
      <div className={`s6-stop s6-stop--${intensity[stop.grade]}`}>
        <div className="s6-stop-head">
          <span className={`s6-grade s6-grade--${intensity[stop.grade]}`}>{stop.grade}</span>
          <span className="s6-phase-tag">{stop.phase}</span>
        </div>
        <h4 className="s6-stop-title">{stop.title}</h4>
        <ul className="s6-stop-list">
          {stop.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    );

    return (
      <div className="slide slide-6">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">THE STUDENT JOURNEY</span>

          <h1 className="slide-headline">
            A structured journey from{' '}
            <span className="slide-gradient">exploration to decision.</span>
          </h1>

          <p className="slide-subheader">
            Six years of intentional development &mdash; each grade building
            on the last, turning uncertainty into clarity.
          </p>

          <div className="s6-journey">
            {/* Top row: Grade 7 → 8 → 9 */}
            <div className="s6-row">
              {topRow.map((stop, i) => (
                <div className="s6-stop-group" key={stop.grade}>
                  {renderStop(stop)}
                  {i < topRow.length - 1 && (
                    <div className="s6-harrow" aria-hidden="true">
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <path d="M0 8h16M12 2l6 6-6 6" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right-side curve connector */}
            <div className="s6-curve" aria-hidden="true">
              <svg className="s6-curve-svg" viewBox="0 0 60 48" fill="none">
                <path d="M30 0 C55 0, 55 48, 30 48" stroke="rgba(99,102,241,0.2)" strokeWidth="1.5" strokeDasharray="5 3" strokeLinecap="round" />
                <polygon points="30,48 26,41 34,41" fill="rgba(99,102,241,0.25)" />
              </svg>
            </div>

            {/* Bottom row: Grade 12 ← 11 ← 10 */}
            <div className="s6-row">
              {bottomRow.map((stop, i) => (
                <div className="s6-stop-group" key={stop.grade}>
                  {renderStop(stop)}
                  {i < bottomRow.length - 1 && (
                    <div className="s6-harrow" aria-hidden="true">
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                        <path d="M20 8H4M8 14L2 8l6-6" stroke="rgba(99,102,241,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="slide-takeaway">
            Students do not &ldquo;suddenly decide&rdquo; in Grade 11 &mdash;
            they build toward clarity over six years.
          </p>
        </div>
      </div>
    );
  },

  function Slide7() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className="slide slide-7">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">THE STUDIO MODEL</span>

          <h1 className="slide-headline">
            Every studio is a challenge &mdash;{' '}
            <span className="slide-gradient">not a lecture.</span>
          </h1>

          <p className="slide-subheader">
            Each WeGuide Studio is built around a real-world challenge that
            requires students to think, create, decide, and produce tangible
            evidence of growth.
          </p>

          {/* Three pillars */}
          <div className="s7-columns">
            {/* Column 1 — The Challenge */}
            <div className="s7-col">
              <div className="s7-col-header">
                <span className="s7-col-num">01</span>
                <div className="s7-col-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
              </div>
              <h3 className="s7-col-title">The Challenge</h3>
              <p className="s7-col-desc">Every studio begins with a problem to solve:</p>
              <ul className="s7-col-list">
                <li>Design a system that improves classroom energy efficiency</li>
                <li>Build a performance optimization plan</li>
                <li>Create a persuasive proposal for a social initiative</li>
                <li>Simulate a career decision under constraints</li>
              </ul>
              <span className="s7-col-signal">Active, not passive.</span>
            </div>

            {/* Column 2 — The Artifact */}
            <div className="s7-col s7-col--mid">
              <div className="s7-col-header">
                <span className="s7-col-num s7-col-num--mid">02</span>
                <div className="s7-col-icon s7-col-icon--mid">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
              </div>
              <h3 className="s7-col-title">The Artifact</h3>
              <p className="s7-col-desc">Each studio produces a tangible output:</p>
              <ul className="s7-col-list">
                <li>Project brief or prototype</li>
                <li>Decision matrix</li>
                <li>Performance map</li>
                <li>Strategy presentation</li>
                <li>Reflective analysis</li>
              </ul>
              <span className="s7-col-signal">Measurable, not abstract.</span>
            </div>

            {/* Column 3 — The Developmental Signal */}
            <div className="s7-col s7-col--active">
              <div className="s7-col-header">
                <span className="s7-col-num s7-col-num--active">03</span>
                <div className="s7-col-icon s7-col-icon--active">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>
              <h3 className="s7-col-title s7-col-title--active">The Developmental Signal</h3>
              <p className="s7-col-desc">Studios generate structured evidence of:</p>
              <ul className="s7-col-list">
                <li>Analytical reasoning</li>
                <li>Systems thinking</li>
                <li>Collaboration</li>
                <li>Decision clarity</li>
                <li>Adaptive response</li>
              </ul>
              <span className="s7-col-signal s7-col-signal--active">Assessable, not vague.</span>
            </div>
          </div>

          <p className="slide-takeaway">
            Studios transform development from abstract discussion into
            observable, documentable growth.
          </p>
        </div>
      </div>
    );
  },

  function Slide8() {
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    /* Pause video when navigating away, play when visible */
    useEffect(() => {
      const v = videoRef.current;
      if (!v) return;
      v.play().catch(() => {});
      return () => { v.pause(); };
    }, []);

    return (
      <div className="slide slide-8">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner slide-inner--split ${loaded ? 'loaded' : ''}`}>
          {/* Left — Video */}
          <div className="slide-split-left s8-video-side">
            <div className="s8-video-frame">
              <video
                ref={videoRef}
                className="s8-video"
                src={studiosVideo}
                muted
                loop
                playsInline
                controls
              />
            </div>
            <span className="s8-video-caption">
              Live studio session &mdash; student copilot interface
            </span>
          </div>

          {/* Right — Context */}
          <div className="slide-split-right s8-context">
            <span className="slide-label">STUDIO IN ACTION</span>

            <h1 className="slide-headline">
              In-person development, powered by an{' '}
              <span className="slide-gradient">intelligent copilot.</span>
            </h1>

            <p className="slide-subheader">
              Studios are conducted face-to-face. An AI-powered online copilot
              accompanies every session &mdash; capturing interaction patterns,
              evaluating developmental signals, and surfacing structured growth
              data in real time.
            </p>

            {/* Two callout cards */}
            <div className="s8-callouts">
              <div className="s8-callout">
                <div className="s8-callout-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="s8-callout-title">Held In Person</h4>
                  <p className="s8-callout-desc">
                    Facilitated group sessions with real-world challenges,
                    collaborative problem-solving, and guided reflection.
                  </p>
                </div>
              </div>

              <div className="s8-callout s8-callout--active">
                <div className="s8-callout-icon s8-callout-icon--active">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <h4 className="s8-callout-title s8-callout-title--active">Online Copilot</h4>
                  <p className="s8-callout-desc">
                    Gauges interaction quality, scores developmental criteria,
                    and extracts actionable signal &mdash; transforming every
                    session into structured, measurable data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },

  function Slide9() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className="slide slide-9">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">IMPLEMENTATION MODEL</span>

          <h1 className="slide-headline">
            Designed to Support &mdash; Not Disrupt &mdash;{' '}
            <span className="slide-gradient">School Operations.</span>
          </h1>

          <p className="slide-subheader">
            WeGuide integrates within existing structures and strengthens
            current counseling and academic systems.
          </p>

          {/* Three implementation pillars */}
          <div className="s9-pillars">
            {/* Pillar 1 — Term-Based Delivery */}
            <div className="s9-pillar">
              <div className="s9-pillar-header">
                <span className="s9-pillar-num">01</span>
                <div className="s9-pillar-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
              </div>
              <h3 className="s9-pillar-title">Term-Based Delivery</h3>
              <ul className="s9-pillar-list">
                <li>Schools select which terms to implement</li>
                <li>Workshops occur within defined blocks</li>
                <li>Scheduling determined collaboratively</li>
                <li>No permanent timetable restructuring required</li>
              </ul>
              <span className="s9-pillar-message">You stay in control.</span>
            </div>

            {/* Pillar 2 — Amplifies Counseling */}
            <div className="s9-pillar s9-pillar--mid">
              <div className="s9-pillar-header">
                <span className="s9-pillar-num s9-pillar-num--mid">02</span>
                <div className="s9-pillar-icon s9-pillar-icon--mid">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
              <h3 className="s9-pillar-title">Amplifies Counseling, Does Not Replace It</h3>
              <ul className="s9-pillar-list">
                <li>Provides longitudinal student development data</li>
                <li>Surfaces early clarity signals</li>
                <li>Strengthens Grade 11&ndash;12 decision conversations</li>
                <li>Enhances university narrative building</li>
              </ul>
              <span className="s9-pillar-message s9-pillar-message--mid">We empower your counselors.</span>
            </div>

            {/* Pillar 3 — Institutionally Governed */}
            <div className="s9-pillar s9-pillar--active">
              <div className="s9-pillar-header">
                <span className="s9-pillar-num s9-pillar-num--active">03</span>
                <div className="s9-pillar-icon s9-pillar-icon--active">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
              </div>
              <h3 className="s9-pillar-title s9-pillar-title--active">Institutionally Governed &amp; Secure</h3>
              <ul className="s9-pillar-list">
                <li>School-defined access levels</li>
                <li>Secure data handling</li>
                <li>Clear reporting protocols</li>
                <li>Transparent growth metrics</li>
              </ul>
              <span className="s9-pillar-message s9-pillar-message--active">Governance remains intact.</span>
            </div>
          </div>

          <p className="slide-takeaway">
            Structured workshops. Institutional control. Enhanced insight.
          </p>
        </div>
      </div>
    );
  },

  function Slide10() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className="slide slide-10">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">DEVELOPMENTAL INTELLIGENCE</span>

          <h1 className="slide-headline">
            From Workshops to{' '}
            <span className="slide-gradient">Developmental Intelligence.</span>
          </h1>

          <p className="slide-subheader">
            WeGuide transforms multi-year experiential learning into structured,
            reliability-adjusted insight that informs university and career decisions.
          </p>

          {/* Three intelligence tiers */}
          <div className="s10-tiers">
            {/* Tier 1 — Observable Evidence */}
            <div className="s10-tier">
              <div className="s10-tier-header">
                <span className="s10-tier-num">01</span>
                <div className="s10-tier-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
              </div>
              <h3 className="s10-tier-title">Observable Evidence</h3>
              <p className="s10-tier-desc">
                Real-world challenges produce measurable demonstrations of:
              </p>
              <div className="s10-tier-tags">
                <span className="s10-tag">Creative Expression</span>
                <span className="s10-tag">Systems Thinking</span>
                <span className="s10-tag">Social Collaboration</span>
                <span className="s10-tag">Digital &amp; AI Fluency</span>
                <span className="s10-tag">Identity Development</span>
                <span className="s10-tag">Wellbeing</span>
              </div>
              <span className="s10-tier-signal">
                Scored using structured performance anchors.
              </span>
              <span className="s10-tier-message">This is not subjective.</span>
            </div>

            {/* Tier 2 — Longitudinal Modeling */}
            <div className="s10-tier s10-tier--mid">
              <div className="s10-tier-header">
                <span className="s10-tier-num s10-tier-num--mid">02</span>
                <div className="s10-tier-icon s10-tier-icon--mid">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                </div>
              </div>
              <h3 className="s10-tier-title">Longitudinal Modeling</h3>
              <p className="s10-tier-desc">
                Evidence is reliability-weighted, stabilized against
                overinterpretation, and modeled across contexts to identify:
              </p>
              <ul className="s10-tier-list">
                <li>Growth velocity</li>
                <li>Stability patterns</li>
                <li>Identity&ndash;behavior coherence</li>
                <li>Interest&ndash;performance alignment</li>
              </ul>
              <span className="s10-tier-message s10-tier-message--mid">This is disciplined, not anecdotal.</span>
            </div>

            {/* Tier 3 — Grade 12 Synthesis */}
            <div className="s10-tier s10-tier--active">
              <div className="s10-tier-header">
                <span className="s10-tier-num s10-tier-num--active">03</span>
                <div className="s10-tier-icon s10-tier-icon--active">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>
              <h3 className="s10-tier-title s10-tier-title--active">Grade 12 Synthesis</h3>
              <p className="s10-tier-desc">Students graduate with:</p>
              <ul className="s10-tier-list">
                <li>A capability signature profile</li>
                <li>Demonstrated adaptive decision-making</li>
                <li>Identity coherence evidence</li>
                <li>Learning autonomy indicators</li>
              </ul>
              <div className="s10-tier-negatives">
                <span>No ranking.</span>
                <span>No labeling.</span>
                <span>No algorithmic career assignment.</span>
              </div>
              <span className="s10-tier-message s10-tier-message--active">Ethical. Reflective. Responsible.</span>
            </div>
          </div>

          {/* Ethical safeguards footer */}
          <div className="s10-safeguards">
            <div className="s10-safeguards-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="s10-safeguards-title">Ethical Safeguards</span>
            <div className="s10-safeguards-items">
              <span>No deterministic career labeling</span>
              <span className="s10-safeguards-sep">&middot;</span>
              <span>No peer ranking</span>
              <span className="s10-safeguards-sep">&middot;</span>
              <span>Evidence required for every interpretation</span>
              <span className="s10-safeguards-sep">&middot;</span>
              <span>Transparent, traceable metrics</span>
              <span className="s10-safeguards-sep">&middot;</span>
              <span>Institutional data governance</span>
            </div>
          </div>

          <p className="slide-takeaway">
            Career conversations shift from speculation to evidence-based interpretation.
          </p>
        </div>
      </div>
    );
  },

  function Slide11() {
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    useEffect(() => {
      const v = videoRef.current;
      if (!v) return;
      v.play().catch(() => {});
      return () => { v.pause(); };
    }, []);

    return (
      <div className="slide slide-11">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">INSTITUTIONAL DASHBOARD</span>

          <h1 className="slide-headline">
            A Dedicated Institutional Dashboard for{' '}
            <span className="slide-gradient">Leadership and Counseling.</span>
          </h1>

          {/* Full-width video */}
          <div className="s11-video-wrap">
            <div className="s11-video-frame">
              <video
                ref={videoRef}
                className="s11-video"
                src={platformVideo}
                muted
                loop
                playsInline
                controls
              />
            </div>
            <span className="s11-video-caption">
              WeGuide institutional dashboard &mdash; leadership &amp; counselor view
            </span>
          </div>
        </div>
      </div>
    );
  },

  function Slide12() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className="slide slide-12">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">PILOT PROGRAM</span>

          <h1 className="slide-headline">
            A Structured 8-Week Pilot &mdash;{' '}
            <span className="slide-gradient">No Long-Term Commitment Required.</span>
          </h1>

          <p className="slide-subheader">
            An opportunity to evaluate WeGuide within one grade level before
            entering a longitudinal partnership.
          </p>

          {/* Two-column layout */}
          <div className="s12-columns">
            {/* Left — Pilot Scope */}
            <div className="s12-col">
              <h3 className="s12-col-title">Pilot Scope</h3>

              <div className="s12-detail-grid">
                <div className="s12-detail">
                  <span className="s12-detail-label">Grade Level</span>
                  <span className="s12-detail-value">Grade 7 cohort</span>
                </div>
                <div className="s12-detail">
                  <span className="s12-detail-label">Duration</span>
                  <span className="s12-detail-value">8 weeks (one academic term)</span>
                </div>
              </div>

              <div className="s12-section">
                <span className="s12-section-label">Delivery</span>
                <ul className="s12-list">
                  <li>5 studios per term</li>
                  <li>3 hours per studio</li>
                  <li>Delivered live on campus</li>
                  <li>Scheduled during the week or Saturdays (school-selected)</li>
                </ul>
              </div>

              <span className="s12-col-message">You control timing.</span>
            </div>

            {/* Right — What the School Receives */}
            <div className="s12-col s12-col--active">
              <h3 className="s12-col-title s12-col-title--active">What the School Receives</h3>

              <div className="s12-section">
                <span className="s12-section-label">Student Experience</span>
                <ul className="s12-list">
                  <li>5 challenge-based studios</li>
                  <li>Tangible artifact production</li>
                  <li>Structured reflection</li>
                  <li>Observable developmental evidence</li>
                </ul>
              </div>

              <div className="s12-section">
                <span className="s12-section-label">Institutional Access</span>
                <ul className="s12-list">
                  <li>Full access to the WeGuide platform</li>
                  <li>Student-level developmental dashboards</li>
                  <li>Cohort-level analytics</li>
                  <li>End-of-term institutional report</li>
                </ul>
              </div>

              <span className="s12-col-message s12-col-message--active">You see the system in action.</span>
            </div>
          </div>

          {/* Evaluation footer */}
          <div className="s12-eval">
            <div className="s12-eval-header">
              <div className="s12-eval-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="s12-eval-title">Evaluation &amp; Next Step</span>
              <span className="s12-eval-desc">At the end of the 8-week pilot:</span>
            </div>
            <div className="s12-eval-items">
              <span>Leadership review meeting</span>
              <span className="s12-eval-sep">&middot;</span>
              <span>Developmental analytics presentation</span>
              <span className="s12-eval-sep">&middot;</span>
              <span>Counselor feedback discussion</span>
              <span className="s12-eval-sep">&middot;</span>
              <span>Decision on longitudinal implementation</span>
            </div>
          </div>

          <p className="slide-takeaway">
            Experience the system. Review the evidence. Decide confidently.
          </p>
        </div>
      </div>
    );
  },

  function Slide13() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    return (
      <div className="slide slide-13">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">LONG-TERM PARTNERSHIP</span>

          <h1 className="slide-headline">
            A Partnership Model &mdash;{' '}
            <span className="slide-gradient">Not a Program Purchase.</span>
          </h1>

          {/* Three assurance columns */}
          <div className="s13-assurances">
            {/* 1 — Implementation Support */}
            <div className="s13-card">
              <div className="s13-card-header">
                <span className="s13-card-num">01</span>
                <div className="s13-card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
              </div>
              <h3 className="s13-card-title">Dedicated Implementation Support</h3>
              <ul className="s13-card-list">
                <li>Scheduling coordination</li>
                <li>Facilitator alignment</li>
                <li>Structured onboarding</li>
              </ul>
            </div>

            {/* 2 — Reporting & Review */}
            <div className="s13-card s13-card--mid">
              <div className="s13-card-header">
                <span className="s13-card-num s13-card-num--mid">02</span>
                <div className="s13-card-icon s13-card-icon--mid">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
              </div>
              <h3 className="s13-card-title">Ongoing Reporting &amp; Review</h3>
              <ul className="s13-card-list">
                <li>Term reports</li>
                <li>Counselor alignment sessions</li>
                <li>Leadership check-ins</li>
              </ul>
            </div>

            {/* 3 — Continuous Refinement */}
            <div className="s13-card s13-card--active">
              <div className="s13-card-header">
                <span className="s13-card-num s13-card-num--active">03</span>
                <div className="s13-card-icon s13-card-icon--active">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
              </div>
              <h3 className="s13-card-title s13-card-title--active">Continuous Refinement</h3>
              <ul className="s13-card-list">
                <li>Workshop calibration</li>
                <li>Feedback integration</li>
                <li>Longitudinal development planning</li>
              </ul>
            </div>
          </div>

          <p className="slide-takeaway">
            WeGuide works alongside your institution &mdash; not outside it.
          </p>
        </div>
      </div>
    );
  },

  function Slide14() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setLoaded(true), 80);
      return () => clearTimeout(t);
    }, []);

    const steps = [
      {
        num: '01',
        title: 'Identify Grade 7 pilot cohort',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        ),
      },
      {
        num: '02',
        title: 'Confirm preferred term and schedule',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        ),
      },
      {
        num: '03',
        title: 'Define pilot calendar',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
          </svg>
        ),
      },
      {
        num: '04',
        title: 'Launch 8-week evaluation term',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        ),
      },
    ];

    return (
      <div className="slide slide-14">
        <div className="slide-bg" />
        <div className="slide-glow slide-glow--1" />
        <div className="slide-glow slide-glow--2" />
        <div className="slide-dots" />

        <div className={`slide-inner s14-inner ${loaded ? 'loaded' : ''}`}>
          <span className="slide-label">PROPOSED NEXT STEP</span>

          <h1 className="slide-headline s14-headline">
            <span className="slide-gradient">Proposed Next Step</span>
          </h1>

          {/* Four steps */}
          <div className="s14-steps">
            {steps.map((step, i) => (
              <div className="s14-step-group" key={step.num}>
                <div className={`s14-step${i === steps.length - 1 ? ' s14-step--final' : ''}`}>
                  <div className="s14-step-header">
                    <span className={`s14-step-num${i === steps.length - 1 ? ' s14-step-num--final' : ''}`}>
                      {step.num}
                    </span>
                    <div className={`s14-step-icon${i === steps.length - 1 ? ' s14-step-icon--final' : ''}`}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className={`s14-step-title${i === steps.length - 1 ? ' s14-step-title--final' : ''}`}>
                    {step.title}
                  </h3>
                </div>

                {i < steps.length - 1 && (
                  <div className="s14-connector" aria-hidden="true">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path
                        d="M0 8h16M12 2l6 6-6 6"
                        stroke="rgba(99,102,241,0.3)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="s14-closing">
            This is thoughtful. This is structured. This is safe.
          </p>
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
        <div
          className="pres-progress-fill"
          style={{ width: `${progressPct}%` }}
        />
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
