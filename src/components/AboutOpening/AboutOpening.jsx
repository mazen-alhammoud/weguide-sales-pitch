import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AboutOpening.css';

const ORBITS = [
  {
    id: 'a', dur: 38,
    keywords: ['Identity', 'Skills', 'Mindset', 'Agency'],
  },
  {
    id: 'b', dur: 52, reverse: true,
    keywords: ['Workshops', 'Evidence', 'Portfolio', 'Metrics'],
  },
  {
    id: 'c', dur: 68,
    keywords: ['Creative', 'Cognitive', 'Wellbeing', 'Digital'],
  },
];

export default function AboutOpening() {
  const heroRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [fadeOut, setFadeOut] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const { height } = heroRef.current.getBoundingClientRect();
      const progress = Math.min(window.scrollY / (height * 0.6), 1);
      setFadeOut(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-opening" ref={heroRef}>
      {/* Background layers */}
      <div className="about-opening-bg" />
      <div className="about-opening-glow about-opening-glow--1" />
      <div className="about-opening-glow about-opening-glow--2" />
      <div className="about-opening-dots" />

      {/* Orbit system */}
      <div className="orbit-wrap" style={{ opacity: 1 - fadeOut }}>
        <div className={`orbit-layer${loaded ? ' loaded' : ''}`} aria-hidden="true">
          <div className="orbit-track orbit-track--a" />
          <div className="orbit-track orbit-track--b" />
          <div className="orbit-track orbit-track--c" />

          {ORBITS.map((orbit) =>
            orbit.keywords.map((kw, i) => (
              <span
                key={kw}
                className={`orbit-chip orbit-chip--${orbit.id}${orbit.reverse ? ' orbit-chip--rev' : ''}`}
                style={{ animationDelay: `${-i * (orbit.dur / 4)}s` }}
              >
                <span className="orbit-chip-dot" />
                {kw}
              </span>
            ))
          )}
        </div>
      </div>

      {/* Content */}
      <div
        className="container about-opening-wrap"
        style={{ opacity: 1 - fadeOut, transform: `translateY(${fadeOut * 50}px)` }}
      >
        <div className={`about-opening-content ${loaded ? 'loaded' : ''}`}>
          <span className="about-opening-label">ABOUT WEGUIDE</span>
          <h1 className="about-opening-title">
            Building Direction<br />
            for the <span className="about-opening-gradient">Next Generation</span>
          </h1>
          <p className="about-opening-conviction">
            Students should not have to guess their future.
          </p>
          <div className="about-opening-ctas">
            <NavLink to="/presentation" className="about-btn-primary">
              Start Presentation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>

      <div className={`about-opening-scroll-hint ${loaded ? 'loaded' : ''}`}>
        <div className="about-opening-scroll-line" />
      </div>
    </section>
  );
}
