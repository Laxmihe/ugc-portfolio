import React, { useEffect, useRef, useState } from 'react';
import { Mail, Play, Award, TrendingUp, BookOpen } from 'lucide-react';

// Helper function to extract YouTube video ID from any YouTube URL
function getYouTubeID(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// Animated Counter Component
function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = target;
          const duration = 2000;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={counterRef} className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function UGCPortfolio() {
  const videos = [
    {
      title: 'Need Cash Now? 7 Same Day Loan Alternatives (2026 Guide)',
      description: 'High-converting short-form financial education video covering urgent borrowing alternatives.',
      link: 'https://youtube.com/shorts/6vh37GYSt_0',
    },
    {
      title: 'Best Loan Apps Without Income Proof in 2026 (Get Approved Fast)',
      description: 'Authority-driven fintech explainer for users seeking approval-friendly emergency loan solutions.',
      link: 'https://youtube.com/shorts/QEPRC97g-lA',
    },
    {
      title: 'Claude Cowork: Your Next Step - Get Started This Week [Complete Guide]',
      description: 'Trust-building AI productivity walkthrough demonstrating software onboarding.',
      link: 'https://youtube.com/shorts/izxnfX514K8',
    },
  ];

  const pillars = [
    {
      title: 'Emergency Borrowing Blueprint',
      description: 'Complete strategic guide to emergency borrowing and safe loan alternatives.',
      link: 'https://confidencebuildings.com/emergency-borrowing-blueprint-2026-complete-guide/',
    },
    {
      title: "The Complete Borrower's Truth Guide",
      description: 'Deep-dive consumer education resource exposing predatory lending.',
      link: 'https://confidencebuildings.com/the-complete-borrowers-truth-guide/',
    },
    {
      title: 'Claude Cowork: The Complete Guide for Non-Techies',
      description: 'Long-form educational pillar content simplifying Claude Cowork.',
      link: 'https://confidencebuildings.com/claude-cowork-the-complete-guide-for-non-techies/',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Laxmi Hegde
          </h1>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-blue-300 hover:text-blue-100 transition">About</a>
            <a href="#portfolio" className="text-blue-300 hover:text-blue-100 transition">Portfolio</a>
            <a href="#pillars" className="text-blue-300 hover:text-blue-100 transition">Articles</a>
            <a href="#tools" className="text-blue-300 hover:text-blue-100 transition">Tools</a>
            <a href="#contact" className="text-blue-300 hover:text-blue-100 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src="/images/Laxmi_Hegde.webp" 
              alt="Laxmi Hegde" 
              className="w-44 h-44 rounded-full mx-auto border-4 border-blue-400 shadow-2xl object-cover"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
            Financial Educator & Premium UGC Creator
          </h1>

          <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Authentic finance-focused user generated content, educational YouTube Shorts,
            and conversion-first fintech storytelling.
          </p>
        </div>
      </section>

      {/* ANIMATED COUNTERS - SOCIAL PROOF */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl border border-blue-400/30">
            <AnimatedCounter target={500} suffix="K+" />
            <p className="text-blue-200 text-sm mt-2">YouTube Views</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-xl border border-cyan-400/30">
            <AnimatedCounter target={100} suffix="K+" />
            <p className="text-cyan-200 text-sm mt-2">Blog Readers</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl border border-blue-400/30">
            <AnimatedCounter target={50} suffix="+" />
            <p className="text-blue-200 text-sm mt-2">Videos Created</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-xl border border-cyan-400/30">
            <AnimatedCounter target={100} suffix="%" />
            <p className="text-cyan-200 text-sm mt-2">Authentic Content</p>
          </div>
        </div>
      </section>

      {/* WHY HIRE ME - TRUST STRIP */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-950/30 to-cyan-950/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
            Why Hire Me?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-white/5 transition">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">MBA in Finance</h3>
              <p className="text-blue-200 text-sm">10+ years of financial expertise and consumer education</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:bg-white/5 transition">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-cyan-300 mb-2">Data-Driven Content</h3>
              <p className="text-blue-200 text-sm">Research-backed videos that actually help viewers</p>
            </div>
            
            <div className="text-center p-6 rounded-xl hover:bg-white/5 transition">
              <div className="text-5xl mb-4">🎥</div>
              <h3 className="text-xl font-bold text-blue-300 mb-2">Professional Production</h3>
              <p className="text-blue-200 text-sm">1080p quality, clear audio, engaging storytelling</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-blue-100 text-lg leading-8 mb-8">
          I am Laxmi Hegde, an MBA in Finance with over 10 years of expertise in financial literacy,
          consumer education, emergency borrowing solutions, and trust-driven digital storytelling.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <a href="https://confidencebuildings.com" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-slate-900/50 border border-blue-400/20 rounded-xl overflow-hidden hover:border-blue-300/50 transition">
              <img 
                src="/images/my website.png" 
                alt="Confidence Buildings" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-blue-300 mb-2">My Website</h3>
                <p className="text-blue-200 text-sm">confidencebuildings.com</p>
              </div>
            </div>
          </a>

          <a href="https://www.tiktok.com/@laxminagaraj867" target="_blank" rel="noopener noreferrer" className="group">
            <div className="bg-slate-900/50 border border-cyan-400/20 rounded-xl overflow-hidden hover:border-cyan-300/50 transition">
              <img 
                src="/images/tiktok profile.png" 
                alt="TikTok Profile" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-cyan-300 mb-2">TikTok</h3>
                <p className="text-cyan-200 text-sm">@laxminagaraj867</p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* VIDEOS WITH REAL YOUTUBE THUMBNAILS */}
      <section id="portfolio" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
          Featured Videos
        </h2>

        <div className="space-y-8">
          {videos.map((video, index) => {
            const videoId = getYouTubeID(video.link);
            return (
              <div key={index} className="bg-slate-900/50 border border-blue-400/20 rounded-xl overflow-hidden hover:border-blue-300/50 transition">
                <a href={video.link} target="_blank" rel="noreferrer" className="block">
                  <div className="relative">
                    <img 
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt={video.title}
                      className="w-full aspect-video object-cover"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition">
                      <Play className="w-16 h-16 text-white opacity-80 hover:opacity-100 transition" />
                    </div>
                  </div>
                </a>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-300 mb-2">{video.title}</h3>
                  <p className="text-blue-200 mb-4">{video.description}</p>
                  <a href={video.link} target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-100 font-semibold inline-flex items-center gap-2">
                    <Play className="w-4 h-4" /> Watch Video
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PILLAR PAGES */}
      <section id="pillars" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
          Featured Pillar Pages
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <a key={index} href={pillar.link} target="_blank" rel="noreferrer">
              <div className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-8 h-full hover:border-cyan-300/50 transition">
                <BookOpen className="text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-cyan-300 mb-3">{pillar.title}</h3>
                <p className="text-blue-100 text-sm">{pillar.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FINANCE CALCULATOR TOOL */}
      <section id="tools" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
          Smart Finance Calculator Suite
        </h2>
        
        <a href="https://v0-deploy-project-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="block group">
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-400/30 rounded-xl p-8 hover:border-blue-300/50 transition hover:scale-[1.02] transform duration-300">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-300 mb-2">Interactive Financial Planning Tool</h3>
                <p className="text-blue-200 text-lg">Loan calculator • Investment growth • Budget planner • Retirement planning</p>
                <p className="text-cyan-300 text-sm mt-3 flex items-center gap-2">
                  Click to try it → 
                  <span className="inline-block transition-transform group-hover:translate-x-1">🧮</span>
                </p>
              </div>
              <div className="text-7xl bg-blue-500/20 rounded-full p-4">
                🧮
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-400/20">
              <p className="text-blue-300 text-sm">✅ Built by me • ✅ Real-time calculations • ✅ Free for readers</p>
            </div>
          </div>
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
          Let's Collaborate
        </h2>

        <div className="bg-slate-900/50 border border-blue-400/30 rounded-xl p-10 space-y-4">
          <a href="mailto:laxmihegdeugc@proton.me" className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition">
            <Mail className="text-blue-400 w-6 h-6" />
            <div>
              <p className="font-semibold text-blue-300">Email</p>
              <p className="text-blue-200">laxmihegdeugc@proton.me</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/laxmihegde" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition">
            <span className="text-cyan-400 text-xl">🔗</span>
            <div>
              <p className="font-semibold text-cyan-300">LinkedIn</p>
              <p className="text-cyan-200">linkedin.com/in/laxmihegde</p>
            </div>
          </a>

          <a href="https://www.tiktok.com/@laxminagaraj867" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-blue-500/10 rounded-lg hover:bg-blue-500/20 transition">
            <span className="text-blue-400 text-xl">🎵</span>
            <div>
              <p className="font-semibold text-blue-300">TikTok</p>
              <p className="text-blue-200">@laxminagaraj867</p>
            </div>
          </a>

          <a href="https://confidencebuildings.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition">
            <BookOpen className="text-cyan-400 w-6 h-6" />
            <div>
              <p className="font-semibold text-cyan-300">Website</p>
              <p className="text-cyan-200">confidencebuildings.com</p>
            </div>
          </a>
        </div>

        <p className="text-blue-200 text-sm text-center mt-8 border-t border-blue-400/20 pt-8">
          <strong>Rate:</strong> $300-500 per UGC video | <strong>Specialization:</strong> Fintech & Emergency Fund Apps
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-400/20 py-8 px-6 mt-12">
        <div className="max-w-4xl mx-auto text-center text-blue-300 text-sm">
          <p>© 2026 Laxmi Hegde | Financial Educator & UGC Creator</p>
          <p className="mt-2 text-blue-400">confidencebuildings.com</p>
        </div>
      </footer>
    </div>
  );
}
