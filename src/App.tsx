import { useState, useEffect } from 'react';
import { Play, Mic2, Mail, Home, Disc, Star, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

  // Reset scroll position when switching tabs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const tracks = [
    { id: '1', title: 'Persian Conversion', duration: '3:22' },
    { id: '2', title: 'Freak Magnet', duration: '3:05' },
    { id: '3', title: 'Spiritually Just', duration: '4:11' },
    { id: '4', title: 'People For Real', duration: '3:50' },
    { id: '5', title: 'Old School Lovin', duration: '4:25' },
    { id: '6', title: 'Second Chance', duration: '3:35' },
    { id: '7', title: 'My Loves 3D', duration: '3:45' },
    { id: '8', title: 'Women Unite (We Deserve Better)', duration: '4:21' },
    { id: '9', title: 'The Abyss', duration: '4:06' },
    { id: '10', title: 'Love Me For What I Am', duration: '3:56' },
    { id: '11', title: 'Freak Magnet (Remix)', duration: '3:40' },
    { id: '12', title: 'Bonus Track!', duration: '3:15' },
  ];

  const milestones = [
    { year: 'Present', title: 'The Iron Horse Residency', desc: 'For over 15 years, Yasmine has been the cornerstone of Spokane Valley nightlife, hosting legendary, packed-house events and karaoke at The Iron Horse Bar & Grill every Wednesday, Thursday, and Saturday night.' },
    { year: '2014', title: 'Valleyfest Emcee', desc: 'Hosted mainstage karaoke and events at the renowned Valleyfest community celebration.' },
    { year: '2011', title: 'Knitting Factory & "Freak Magnet"', desc: 'Dropped the definitive R&B/Soul album featuring hits like "Persian Conversion", and performed live comedy at "Nugestock II" at the Knitting Factory.' },
    { year: '2010', title: 'Bing Crosby Theater', desc: 'Showcased her hilarious Persian comic persona at the historic Bing Crosby Theater, reaching the finals of "Spokane\'s Got Talent".' },
    { year: '2007', title: 'Volcano\'s Party Island', desc: 'Worked as a resident DJ and karaoke host, elevating the energy at Volcano\'s Party Island in Spokane.' },
    { year: '2000s', title: 'The Merq', desc: 'Known as the ultimate "karaoke maven," she hosted high-energy nights at The Merq, cementing her early nightlife status.' },
    { year: '1995-1996', title: 'Arrival & "Walk For Success"', desc: 'Moved to Spokane and immediately impacted the community by participating in the "Walk For Success"—a grassroots SCOPE initiative to promote neighborhood unity and stand against drugs and violence in the Edgecliff area.' }
  ];

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'music', icon: Disc, label: 'Music' },
    { id: 'journey', icon: Star, label: 'Journey' },
    { id: 'book', icon: Calendar, label: 'Booking' }
  ];

  return (
    <div className="app-wrapper">
      {/* Dynamic Background */}
      <div 
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at 50% -20%, rgba(247, 37, 133, 0.15) 0%, rgba(212, 175, 55, 0.05) 40%, rgba(7, 11, 25, 1) 80%)',
          zIndex: -1
        }}
      />

      {/* Top Desktop Navigation */}
      <nav className="desktop-nav glass-panel" style={{ position: 'fixed', top: '24px', left: '50%', transform: 'translateX(-50%)', zIndex: 100, padding: '8px 24px', display: 'flex', gap: '32px', borderRadius: '99px' }}>
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'transparent', border: 'none', color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px',
                display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', cursor: 'pointer', transition: 'all 0.3s ease',
                borderBottom: isActive ? '2px solid var(--primary)' : '2px solid transparent'
              }}
            >
              <Icon size={18} />
              <span className="nav-label">{tab.label}</span>
            </button>
          )
        })}
      </nav>

      {/* Main Content Area */}
      <main style={{ paddingBottom: '100px', paddingTop: '100px' }}>
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.section key="home" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', padding: '40px 0', position: 'relative' }}>
              
              {/* Ethereal Ambient Background */}
              <div style={{
                position: 'absolute',
                top: '-100px',
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'url(/hero-yasmine-clean.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(20px) opacity(0.3) saturate(1.2)',
                zIndex: -1,
                pointerEvents: 'none'
              }} />

              <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%', position: 'relative', zIndex: 1 }}>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: '260px',
                    height: '260px',
                    borderRadius: '50%',
                    backgroundImage: 'url(/hero-yasmine-clean.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center 10%',
                    margin: '0 auto 40px auto',
                    border: '3px solid rgba(212, 175, 55, 0.5)',
                    boxShadow: '0 0 50px rgba(212, 175, 55, 0.2), inset 0 0 40px rgba(0,0,0,0.5)',
                    position: 'relative'
                  }}
                />
                
                <h2 style={{ fontSize: '1.25rem', color: 'var(--primary)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '16px', textShadow: '0 0 20px rgba(212, 175, 55, 0.3)' }}>
                  The Essence of Soul
                </h2>
                <h1 style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', fontWeight: 800, margin: '0 0 24px 0', lineHeight: 1.05 }}>
                  YASMINE<br/><span className="text-gradient">CORTIER</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px auto', lineHeight: 1.6 }}>
                  Singer • DJ • Comedienne. Bringing magnetic presence, electric R&B, and premium nightlife energy to every stage.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <button onClick={() => setActiveTab('music')} className="btn-primary" style={{ border: 'none' }}>
                    <span>Listen to Freak Magnet</span>
                    <Play size={20} />
                  </button>
                  <button onClick={() => setActiveTab('booking')} className="btn-outline">
                    <span>Book Now</span>
                  </button>
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === 'music' && (
            <motion.section key="music" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="section-padding">
              <div className="container">
                <h2 style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>The <span className="text-gradient">Music</span></h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '64px', textAlign: 'center' }}>Experience the 2011 defining R&B/Soul album, Freak Magnet.</p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                  <div className="glass-panel" style={{ minHeight: '400px', position: 'relative', overflow: 'hidden', padding: 0 }}>
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/videoseries?list=OLAK5uy_nD1ecUAlosXPVW70nTrhTDPmalVQn2Sl8&index=${activeTrackIndex + 1}&autoplay=1`} 
                      title="Yasmine Cortier - Freak Magnet Full Album" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
                    ></iframe>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {tracks.map((track, index) => (
                      <div 
                        key={track.id} 
                        className="glass-panel glow-hover" 
                        onClick={() => {
                          setActiveTrackIndex(index);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        style={{ padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', transition: 'all 0.3s ease', background: activeTrackIndex === index ? 'rgba(212, 175, 55, 0.1)' : 'rgba(255,255,255,0.02)', border: activeTrackIndex === index ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.05)' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <span style={{ color: activeTrackIndex === index ? 'var(--primary)' : 'var(--text-muted)', fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: activeTrackIndex === index ? 700 : 400 }}>{index < 9 ? `0${index + 1}` : index + 1}</span>
                          <h4 style={{ fontSize: '1.2rem', fontWeight: activeTrackIndex === index ? 700 : 500, color: activeTrackIndex === index ? 'var(--text-light)' : 'var(--text-muted)' }}>{track.title}</h4>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <span style={{ color: activeTrackIndex === index ? 'var(--primary)' : 'var(--text-muted)' }}>{track.duration}</span>
                          <button 
                            style={{ background: 'transparent', border: 'none', color: activeTrackIndex === index ? 'var(--primary)' : 'var(--secondary)', cursor: 'pointer' }}
                            title="Play Track"
                          >
                            <Play size={24} fill={activeTrackIndex === index ? 'currentColor' : 'none'} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === 'journey' && (
            <motion.section key="journey" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="section-padding">
              <div className="container">
                <h2 style={{ fontSize: '3rem', marginBottom: '16px', textAlign: 'center' }}>The <span className="text-gradient">Journey</span></h2>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 64px auto', fontSize: '1.2rem', lineHeight: 1.8 }}>
                  For over 30 years, Yasmine Cortier has been the heartbeat of the Spokane entertainment scene. From laying down the early roots of community solidarity in the mid-90s, to dominating local nightlife, the stage is her home. She doesn't just perform—she creates an unbreakable, emotional connection with her audience, proving that true artistry is about uniting a community through laughter, rhythm, and soul.
                </p>
                
                <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, transparent, var(--primary), var(--secondary), transparent)', transform: 'translateX(-50%)' }} />
                  
                  {milestones.map((item, index) => (
                    <div 
                      key={item.year}
                      style={{ 
                        display: 'flex', 
                        justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                        marginBottom: '48px',
                        position: 'relative'
                      }}
                    >
                      <div style={{ width: '45%' }}>
                        <div className="glass-panel" style={{ padding: '32px', textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                          <span style={{ color: 'var(--secondary)', fontWeight: 700, letterSpacing: '2px' }}>{item.year}</span>
                          <h3 style={{ fontSize: '1.5rem', margin: '8px 0 12px 0' }}>{item.title}</h3>
                          <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                        </div>
                      </div>
                      <div style={{
                        position: 'absolute', left: '50%', top: '32px', transform: 'translate(-50%, -50%)',
                        width: '16px', height: '16px', background: 'var(--bg-dark)', border: '4px solid var(--secondary)',
                        borderRadius: '50%', boxShadow: '0 0 20px var(--secondary)', zIndex: 2
                      }} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === 'book' && (
            <motion.section key="book" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="section-padding">
              <div className="container" style={{ maxWidth: '800px', marginTop: '40px' }}>
                <div className="glass-panel" style={{ padding: '64px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, var(--primary), var(--secondary))' }} />
                  
                  <Mic2 size={48} color="var(--secondary)" style={{ marginBottom: '24px' }} />
                  <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Book the <span className="text-gradient">Experience</span></h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.1rem' }}>
                    Bring the magnetic energy of Yasmine Cortier to your next event. For DJ sets, vocal performances, and hosting.
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
                    <a href="mailto:PersianComic@gmail.com?subject=Booking%20Inquiry%20-%20Yasmine%20Cortier" className="btn-primary" style={{ padding: '20px 48px', fontSize: '1.2rem' }}>
                      <span>Email PersianComic@gmail.com</span>
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '64px', padding: '40px 0', background: 'var(--bg-dark)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '24px', textAlign: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '0 0 8px 0', color: 'var(--text-main)' }}>Yasmine Cortier</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '8px' }}>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="https://www.instagram.com/persiancomic/" target="_blank" rel="noopener noreferrer" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', color: 'var(--text-muted)' }} className="glow-hover">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://www.facebook.com/Persiancomic" target="_blank" rel="noopener noreferrer" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', color: 'var(--text-muted)' }} className="glow-hover">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.youtube.com/playlist?list=OLAK5uy_nD1ecUAlosXPVW70nTrhTDPmalVQn2Sl8" target="_blank" rel="noopener noreferrer" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', color: 'var(--text-muted)' }} className="glow-hover">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <a href="mailto:PersianComic@gmail.com?subject=Booking%20Inquiry%20-%20Yasmine%20Cortier" style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', color: 'var(--text-muted)' }} className="glow-hover">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="mobile-nav glass-panel" style={{ position: 'fixed', bottom: '24px', left: '24px', right: '24px', zIndex: 100, display: 'none', justifyContent: 'space-between', padding: '16px 32px', borderRadius: '99px', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}>
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: 'transparent', border: 'none', color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', cursor: 'pointer', transition: 'all 0.3s ease',
              }}
            >
              <Icon size={24} style={{ filter: isActive ? 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.5))' : 'none' }} />
              <span style={{ fontSize: '0.7rem', fontWeight: isActive ? 700 : 500, fontFamily: 'var(--font-heading)' }}>{tab.label}</span>
            </button>
          )
        })}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .btn-primary { width: 100%; }
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
          main { padding-top: 40px !important; padding-bottom: 120px !important; }
        }
      `}</style>
    </div>
  );
}

export default App;
